document.getElementById('load-balances').addEventListener('click', async () => {
    const response = await fetch('http://localhost:26658/balances'); // URL API anda
    const balances = await response.json();

    const balanceList = document.getElementById('balance-list');
    balanceList.innerHTML = ''; // Kosongkan sebelum mengisi

    for (const [address, balance] of Object.entries(balances)) {
        const balanceItem = document.createElement('div');
        balanceItem.textContent = `${address}: ${balance} DEVCOIN`;
        balanceList.appendChild(balanceItem);
    }
});
