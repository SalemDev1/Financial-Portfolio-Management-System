//  Task 1- Create the Asset Module

// This array lists different financial assets like stocks and bonds.
// Each asset has an ID, name, type, price, and quantity.
export const assets = [
    { id: 1, name: 'Take-Two Interactive Software, Inc', type: 'stock', price: 177.90, quantity: 50 },
    { id: 2, name: 'Sony Group Corporation', type: 'stock', price: 19.91, quantity: 40 },
    { id: 3, name: 'Corporate Bond', type: 'bond', price: 250, quantity: 20 },
    { id: 4, name: 'International Government Bond', type: 'bond', price: 200, quantity: 30 }
];

// Function in order to get asset by corresponding ID
export function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}