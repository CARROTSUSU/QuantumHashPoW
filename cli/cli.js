const axios = require('axios');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function loadBalances() {
    axios.get('http://localhost:26658/balances') // URL API anda
        .then(response => {
            const balances = response.data;
            console.log('Balances:');
            for (const [address, balance] of Object.entries(balances)) {
                console.log(`${address}: ${balance} DEVCOIN`);
            }
            rl.close();
        })
        .catch(error => {
            console.error('Error fetching balances:', error);
            rl.close();
        });
}

rl.question('Enter command: ', (command) => {
    if (command === 'load balances') {
        loadBalances();
    } else {
        console.log('Unknown command');
        rl.close();
    }
});
