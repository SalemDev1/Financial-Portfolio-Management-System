// Importing the assets array from asset.js/module 
import { assets } from './asset.js';

// Function in order to calculate the total value of the portfolio
export function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

// Function to calculate the portfolios allocation
export function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue * 100).toFixed(2) + '%'
    }));
}