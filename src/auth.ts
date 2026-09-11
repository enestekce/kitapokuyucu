import { db } from './db';
import type { User } from './types';
const SESSION = 'bookflow.session';
const bytes = (value: Uint8Array) => btoa(String.fromCharCode(...value));
const derive = async (password:string, salt:string) => bytes(new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${salt}:${password}`))));
export async function register(email:string, password:string) {
  const normalized = email.trim().toLowerCase(); if (!/^\S+@\S+\.\S+$/.test(normalized)) throw new Error('Geçerli bir e-posta adresi girin.'); if (password.length < 8) throw new Error('Şifreniz en az 8 karakter olmalı.');
  if (await db.users.where('email').equals(normalized).first()) throw new Error('Bu e-posta zaten kayıtlı.');
  const salt = crypto.randomUUID(); const user:User = { id:crypto.randomUUID(), email:normalized, salt, hash:await derive(password,salt), createdAt:Date.now() }; await db.users.add(user); localStorage.setItem(SESSION,user.id); return user;
}
export async function login(email:string,password:string) { const user=await db.users.where('email').equals(email.trim().toLowerCase()).first(); if(!user || user.hash!==await derive(password,user.salt)) throw new Error('E-posta veya şifre hatalı.'); localStorage.setItem(SESSION,user.id); return user; }
export async function currentUser(){ const id=localStorage.getItem(SESSION); return id ? await db.users.get(id) : undefined; }
export function logout(){ localStorage.removeItem(SESSION); }
