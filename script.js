// Define an array of account objects
let accounts = [
  { number: 123456, name: "Samuel Akande", password: "password1" },
  { number: 234567, name: "Bola Akande", password: "password2" },
  { number: 345678, name: "Opemipo Tioluwanimi", password: "password3" }
];

function transferMoney() {
  // Get the account information from the user
  let fromAccountNumber = prompt("Enter the number of the account you want to transfer from:");
  let toAccountNumber = prompt("Enter the number of the account you want to transfer to:");
  let amount = prompt("Enter the amount you want to transfer:");

  // Find the accounts in the array
  let fromAccount = accounts.find(account => account.number === parseInt(fromAccountNumber));
  let toAccount = accounts.find(account => account.number === parseInt(toAccountNumber));

  // Check if the accounts were found
  if (!fromAccount || !toAccount) {
    alert("One or both of the accounts were not found.");
    return;
  }

  // Get the sender's password from the user
  let fromAccountPassword = prompt("Enter the password for " + fromAccount.name + ":");

  // Check if the password is correct
  if (fromAccountPassword !== fromAccount.password) {
    alert("The password is incorrect.");
    return;
  }

  // Confirm the transfer with the user
  if (confirm("Are you sure you want to transfer " + amount + " from " + fromAccount.name + "'s account (" + fromAccountNumber + ") to " + toAccount.name + "'s account (" + toAccountNumber + ")?")) {
    // Perform the transfer
    alert("Transfer successful!");
  } else {
    // Cancel the transfer
    alert("Transfer cancelled.");
  }
}

