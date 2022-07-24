class Bank{

    constructor (balance){
        this.balance=balance;
    }
    
    deposite(amount)
    {
        this.balance=this.balance+amount;
        console.log("Balance:",this.balance);
    }

    withdraw(amount)
    {
        if(this.balance<amount)
        {
            console.log("Your Don't have money");
            return 0;
        }
        
        this.balance=this.balance-amount;
        console.log("Balance:",this.balance);
        return 1;
    }
    checkbalance()
    {
       console.log("Your Current Balance:",this.balance)
    }

}
const viraj=new Bank(1000);


