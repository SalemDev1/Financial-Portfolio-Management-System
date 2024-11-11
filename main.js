// Import functions and classes from other modules
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

// Display the total portfolio value and allocation
console.log('Total Portfolio Value:', calculatePortfolioValue());

const allocations = getPortfolioAllocation();
console.log('Portfolio Allocations:', allocations);

// Create a few transaction instances (hopefully we triple our returns)
try {
    const buyTransaction = new Transaction(1, 'buy', 20);
    const sellTransaction = new Transaction(2, 'sell', 15);
    console.log('Transactions processed successfully, thank you for trading with us!');
    console.log('Updated Portfolio Value to:', calculatePortfolioValue(), 'Looking good, maybe you can go buy that car that your wife always advised against');
    } catch (error) {
        console.error(error.message);
    }