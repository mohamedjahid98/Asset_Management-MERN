import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StockView = () => {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/assets/assetsdata")
      .then(result => setAssets(result.data))
      .catch(err => console.log(err))
  }, []);

  const getStockData = () => {
    const groupedAssets = {};

    assets.forEach(asset => {
      const { asset_type, purchase_cost, model } = asset;

      if (!groupedAssets[asset_type]) {
        groupedAssets[asset_type] = { quantity: 0, value: 0, branches: [] };
      }

      groupedAssets[asset_type].quantity += 1;
      groupedAssets[asset_type].value += purchase_cost;
      groupedAssets[asset_type].branches.push(model);
    });

    return Object.keys(groupedAssets).map(assetType => ({
      assetType,
      totalQuantity: groupedAssets[assetType].quantity,
      totalValue: groupedAssets[assetType].value,
      branches: [...new Set(groupedAssets[assetType].branches)]
    }));
  };

  const stockData = getStockData();

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  const grandTotal = stockData.reduce((total, data) => total + data.totalValue, 0);

  return (
    <div>
      <main className='main-container'>
        <h1 style={{ textAlign: 'center' }}>Stock View </h1>
        <div className="card-box-emp">
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Asset Type</th>
                <th>Branch-wise</th>
                <th>Total Quantity</th>
                <th>Total Value</th>
              </tr>
            </thead>
            <tbody>
              {stockData.map((data, index) => (
                <tr key={index}>
                  <td>{data.assetType}</td>
                  <td>{data.branches.join(', ')}</td>
                  <td>{data.totalQuantity}</td>
                  <td>{formatCurrency ( data.totalValue)}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="3" style={{ textAlign: 'right' }}><b>Grand Total:</b></td>
                <td><b>{formatCurrency(grandTotal)}</b></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </main>
    </div>
  );
}

export default StockView;
