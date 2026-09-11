import Dexie, { type Table } from 'dexie';
import type { Annotation, Book, Preferences, User } from './types';
class BookflowDB extends Dexie {
  books!: Table<Book, string>; users!: Table<User, string>; preferences!: Table<Preferences, string>; annotations!: Table<Annotation, string>;
  constructor() {
    super('bookflow');
    this.version(1).stores({ books:'id,userId,lastReadAt,createdAt,title', users:'id,&email', preferences:'userId' });
    this.version(2).stores({ books:'id,userId,lastReadAt,createdAt,title', users:'id,&email', preferences:'userId', annotations:'id,bookId,page,createdAt' });
  }
  
}
export const db = new BookflowDB();
