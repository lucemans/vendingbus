import { config } from 'dotenv';
import { BigNumber, Contract, providers } from 'ethers';

import { log } from './logger';

type address = string;

config();
const contract_address = process.env.CONTRACT;

const init = async function () {
    const provider = new providers.JsonRpcProvider(
        'https://polygon-rpc.com/',
        137
    );
    const memProvider = new providers.WebSocketProvider(
        'wss://ws-matic-mainnet.chainstacklabs.com'
    );

    const contract = new Contract(
        contract_address,
        ['event Complete(address,uint256)'],
        provider
    );

    console.log('Listening for transactions...');

    contract.on('Complete', (c: address, d: BigNumber) => {
        log.complete(
            'Received transaction from ' + c,
            'Selected Item: ' + d.toHexString()
        );
    });

    memProvider.on('pending', async (tx) => {
        const txInfo = await memProvider.getTransaction(tx);

        if (!txInfo) return;

        if (txInfo.to === contract_address) {
            log.debug(txInfo);
        }
    });
};

init();
