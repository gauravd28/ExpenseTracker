export class Expense{

    private expDetails : string;
    private expAmount : string;
    private expDate : string;

    constructor(details:string,amount:string,datetime:string){
        this.expDate = datetime;
        this.expAmount = amount;
        this.expDetails = details;

    }
}