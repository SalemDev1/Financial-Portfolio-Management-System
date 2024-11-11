// Imports the assets and getAssetById from asset.js
import { assets, getAssetById } from './asset.js';

export class Transaction {
    constructor(assetId, type, quantity) {
        this.assetId = assetId;
        this.type = type;
        this.quantity = quantity;

        const asset = getAssetById(assetId);
        if (!asset) throw new Error(`The Asset with ID ${assetId} cannot be not found, please check again and if all else fails buy more stock. To THE MOON!`);

        if (type === 'sell' && asset.quantity < quantity) {
            throw new Error(`Insufficient quantity for sale of ${asset.name}. Looks like everyone’s holding on tight (to da moon!) Maybe wait for someone to blink and sell.`);

        }

        this.updateAsset(asset);
    }

    updateAsset(asset) {
        if (this.type === 'buy') {
            asset.quantity += this.quantity;
        } else if (this.type === 'sell') {
            asset.quantity -= this.quantity;
        }
    }
}   