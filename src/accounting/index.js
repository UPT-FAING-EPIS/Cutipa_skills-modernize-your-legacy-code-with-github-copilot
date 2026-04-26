function credit(balance, amount) {
  return balance + amount;
}

function debit(balance, amount) {
  return balance - amount;
}

module.exports = { credit, debit };
