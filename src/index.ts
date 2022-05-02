import { config } from 'dotenv';
import { BigNumber, Contract, providers } from 'ethers';

import { log } from './logger';

type address = string;

config();
const contract_address = process.env.CONTRACT;

const init = async function () {
    const customWsProvider = new providers.JsonRpcProvider(
        'https://polygon-rpc.com/',
        137
    );

    const contract = new Contract(
        contract_address,
        ['event Complete(address,uint256)'],
        customWsProvider
    );

    console.log('Listening for transactions...');

    contract.on('Complete', (c: address, d: BigNumber) => {
        log.complete(
            'Received transaction from ' + c,
            'Selected Item: ' + d.toHexString()
        );
    });
};

init();
