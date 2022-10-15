export class Post {
    user_id!: number;
    id!: number;
    title!:string;
    body!:string; 
}

export class User {
    user_id!: number;
    name!: string;
    email!:string;
    gender!:string; 
    status!:string; 
}

export class CommentDetails {
    user_id!: number;
    name!: string;
    email!:string;
    title!:string;
    body!:string; 
}
