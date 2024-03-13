function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}
BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdraw = function(amount) {
    if (this.balance >= amount && amount > 0) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
        console.log("Insufficient balance or invalid withdrawal amount.");
    }
};

BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
};

BankAccount.prototype.isActive = function() {
    return this.active;
};
function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (let account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
};
const account1 = new BankAccount(1, "John Doe", "Savings", 1000);
const account2 = new BankAccount(2, "Jane Smith", "Checking", 2000);
const account3 = new BankAccount(3, "Alice Johnson", "Savings", 5000);
account1.deposit(500);
account2.withdraw(300);
account3.deposit(1000);
account1.checkBalance();
account2.checkBalance();
account3.checkBalance();
console.log("Account 1 active:", account1.isActive());
console.log("Account 2 active:", account2.isActive());
console.log("Account 3 active:", account3.isActive());
const allAccounts = [account1, account2, account3];
console.log("Total balance of all active accounts:", getTotalBalance(allAccounts));
