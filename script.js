// script.js

let accountBalance = 1000;

// Get HTML elements
const balanceDisplay = document.getElementById('balance');
const depositInput = document.getElementById('deposit-amount');
const depositButton = document.getElementById('deposit-button');
const withdrawalInput = document.getElementById('withdrawal-amount');
const withdrawalButton = document.getElementById('withdrawal-button');

// Update balance display
function updateBalanceDisplay() {
    balanceDisplay.textContent = `₹${accountBalance}`; // Use ₹ for Indian Rupee symbol
}

// Deposit money
depositButton.addEventListener('click', () => {
    const depositAmount = parseFloat(depositInput.value);
    if (depositAmount > 0) {
        accountBalance += depositAmount;
        updateBalanceDisplay();
        depositInput.value = '';
    }
});

// Withdraw money
withdrawalButton.addEventListener('click', () => {
    const withdrawalAmount = parseFloat(withdrawalInput.value);
    if (withdrawalAmount > 0 && withdrawalAmount <= accountBalance) {
        accountBalance -= withdrawalAmount;
        updateBalanceDisplay();
        withdrawalInput.value = '';
    } else if (withdrawalAmount > accountBalance) {
        alert('Insufficient funds!');
    }
});

// Initialize balance display
updateBalanceDisplay();
