export type Book = { id:string; userId:string; title:string; fileName:string; pageCount:number; cover?:Blob; file:Blob; lastPage:number; createdAt:number; updatedAt:number; lastReadAt?:number };
export type User = { id:string; email:string; salt:string; hash:string; createdAt:number };
export type Preferences = { userId:string; theme:'light'|'dark'|'system'; animation:'realistic'|'fast'|'off'; layout:'auto'|'single'|'spread' };
export type InkPoint = { x:number; y:number };
export type Annotation = { id:string; bookId:string; page:number; kind:'highlight'|'underline'; color:string; size?:number; points:InkPoint[]; createdAt:number };
