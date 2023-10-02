class BankAccount {
  constructor() {
    this.balance = 0;
  }

  // Method to deposit money into the account
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited $${amount}. New balance: $${this.balance}`;
    } else {
      return "Deposit amount must be positive.";
    }
  }

  // Method to withdraw money from the account
  withdraw(amount) {
    if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount;
        return `Withdrawn $${amount}. New balance: $${this.balance}`;
      } else {
        return "Insufficient funds.";
      }
    } else {
      return "Withdrawal amount must be positive.";
    }
  }

  // Method to check the account balance
  checkBalance() {
    return `Account balance: $${this.balance}`;
  }
}

// Example usage:
const account = new BankAccount();

console.log(account.deposit(100)); // Deposited $100. New balance: $100
console.log(account.withdraw(50)); // Withdrawn $50. New balance: $50
console.log(account.checkBalance()); // Account balance: $50
console.log(account.withdraw(-10)); // Withdrawal amount must be positive.
console.log(account.deposit(-20)); // Deposit amount must be positive.
console.log(account.withdraw(100)); // Insufficient funds.
