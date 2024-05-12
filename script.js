// Define an array of account objects with bank information
let accounts = [
  { bank: "Dev Bank", number: "1234567890", name: "Samuel Akande", balance: 5000, pin: "1234" },
  { bank: "Bank B", number: "2345678901", name: "Bola Akande", balance: 7000, pin: "2345" },
  { bank: "Bank C", number: "3456789012", name: "Opemipo Tioluwanimi", balance: 8000, pin: "3456" }
];

// Pre-defined sender's bank card info
let senderInfo = {
  bank: "Dev Bank",
  number: "1234567890",
  name: "Samuel Akande",
  pin: "1234"
};

// Function to prompt user to select an option
function selectOption() {
  let options = [
    "1. Withdraw Cash",
    "2. Deposit Cash",
    "3. Transfer Funds",
    "4. Check Balance"
  ];

  let choice = parseInt(prompt("Select an option:\n" + options.join("\n")));

  switch (choice) {
    case 1:
      withdrawCash();
      break;
    case 2:
      depositCash();
      break;
    case 3:
      transferMoney();
      break;
    case 4:
      checkBalance();
      break;
    default:
      alert("Invalid choice. Please select a valid option.");
  }
}

// Function to prompt user to select a bank from available options
function selectBank() {
  let bankOptions = accounts.map(account => account.bank);
  let bankIndex = parseInt(prompt("Select recipient's bank:\n" + bankOptions.map((bank, index) => (index + 1) + ". " + bank).join("\n")));

  // Validate user input
  if (isNaN(bankIndex) || bankIndex < 1 || bankIndex > bankOptions.length) {
    alert("Invalid input. Please select a valid bank.");
    return null;
  }

  return bankOptions[bankIndex - 1];
}

// Function to withdraw cash
function withdrawCash() {
  // Your implementation for withdrawing cash
}

// Function to deposit cash
function depositCash() {
  // Your implementation for depositing cash
}

// Function to transfer money
function transferMoney() {
  // For sender's bank, use the pre-defined senderInfo
  let fromAccountBank = senderInfo.bank;
  let fromAccountNumber = senderInfo.number;

  // Step 1: Select the transfer option
  let toAccountBank = selectBank();
  if (!toAccountBank) return;

  // Step 2: Enter recipient's details
  let toAccountNumber = prompt("Enter the account number you want to transfer to:");
  let amount = parseFloat(prompt("Enter the amount you want to transfer:"));

  // Find the sender's account in the array
  let fromAccount = accounts.find(account => account.bank === fromAccountBank && account.number === fromAccountNumber);

  // Find the recipient's account in the array
  let toAccount = accounts.find(account => account.bank === toAccountBank && account.number === toAccountNumber);

  // Check if the recipient's account was found
  if (!toAccount) {
    alert("The recipient's account was not found.");
    return;
  }

  // Step 3: Verify transaction details
  let confirmMessage = `Are you sure you want to transfer ${amount} from ${fromAccount.name} (${fromAccount.number}) to ${toAccount.name} (${toAccount.number})?`;
  if (!confirm(confirmMessage)) {
    alert("Transfer canceled.");
    return;
  }

  // Perform the transfer
  if (fromAccount.balance < amount) {
    alert("You don't have enough balance in your account.");
    return;
  }

  // Confirm the transfer
  fromAccount.balance -= amount;
  toAccount.balance += amount;

  // Display the updated balance for the sender
  alert("Transfer successful!\n\nYour updated account balance: " + fromAccount.balance.toFixed(2));
}

// Function to check balance
function checkBalance() {
  // Your implementation for checking balance
}
