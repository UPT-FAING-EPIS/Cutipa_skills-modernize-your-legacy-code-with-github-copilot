# COBOL App Test Plan

This test plan describes the current business logic and implementation of the COBOL student account application. It is intended for validation with business stakeholders and future conversion into node.js unit and integration tests.

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status (Pass/Fail) | Comments |
|-------------|------------------------|----------------|------------|-----------------|---------------|--------------------|----------|
| TC-01 | View account balance | Application is running; initial balance is `1000.00` | 1. Start the app.
2. Select option `1` for View Balance. | The app reads the balance from `DataProgram` and displays `1000.00`. |  |  | Verify current balance retrieval logic. |
| TC-02 | Credit account with a valid amount | Application is running; current balance is `1000.00` | 1. Start the app.
2. Select option `2` for Credit Account.
3. Enter `250.00` as credit amount. | The app reads the current balance, adds `250.00`, writes the new balance `1250.00`, and displays the updated balance. |  |  | Validates credit workflow and balance persistence. |
| TC-03 | Debit account with sufficient funds | Application is running; current balance is `1000.00` | 1. Start the app.
2. Select option `3` for Debit Account.
3. Enter `500.00` as debit amount. | The app reads the current balance, verifies sufficient funds, subtracts `500.00`, writes the new balance `500.00`, and displays the updated balance. |  |  | Validates debit workflow with sufficient funds. |
| TC-04 | Debit account with insufficient funds | Application is running; current balance is `1000.00` | 1. Start the app.
2. Select option `3` for Debit Account.
3. Enter `1500.00` as debit amount. | The app reads the current balance, detects insufficient funds, does not update the balance, and displays `Insufficient funds for this debit.`. |  |  | Verifies overdraft protection / insufficient funds rule. |
| TC-05 | Invalid menu selection handling | Application is running | 1. Start the app.
2. Enter `9` or any invalid option. | The app displays `Invalid choice, please select 1-4.` and re-displays the menu without crashing. |  |  | Checks user input validation for menu selection. |
| TC-06 | Exit application | Application is running | 1. Start the app.
2. Select option `4` for Exit. | The app exits cleanly and displays `Exiting the program. Goodbye!`. |  |  | Confirms proper program termination. |
| TC-07 | Data storage separation | Application is running | 1. Start the app.
2. Perform a credit or debit transaction.
3. Verify `DataProgram` stores the updated balance separately from `Operations`. | The balance is read from and written to `DataProgram` using `READ` and `WRITE` operations, demonstrating separation of business logic and storage. |  |  | Tests the program structure and call flow between modules. |
