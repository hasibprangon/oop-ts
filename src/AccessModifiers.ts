{
    //  Access modifiers
    class BankAccount {
        public readonly id: number;
        public name: string;
        private _balance: number;

        constructor(id: number, name: string, _balance: number) {
            this.id = id;
            this.name = name; 
            this._balance = _balance
        }

        add_balance(amount: number) {
            this._balance = this._balance + amount;
            console.log(this._balance);
            return this._balance
        }
    };

    const personAccount = new BankAccount(11, 'Hasib', 20);
    personAccount.add_balance(100)


    // 
}