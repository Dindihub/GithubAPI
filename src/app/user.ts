export class User {
    constructor(public name:string, public location:string, 
        public repos:number, public followers:number, public following:number, public avatar_url:string, public created:Date ){}  
}
