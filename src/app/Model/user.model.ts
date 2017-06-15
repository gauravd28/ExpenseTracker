export class User{
    private id : string
    private name : string
    private isAdmin : boolean
    constructor(i:string,n:string,s:boolean){
        this.id = i;
        this.name = n;
        this.isAdmin = s;
    }

    public getIsAdmin(){
        return this.isAdmin;
    }
    
    public getName(){
        return this.name;
    }

    public getId(){
        return this.id;
    }

}