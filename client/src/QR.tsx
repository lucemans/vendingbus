import { FC } from 'react';
import QRCode from 'react-qr-code';
import styled from 'styled-components';

import { Amount } from './Amount';

const Wrapper = styled.div`
    padding: 1rem;
    background: white;
    border-radius: 0.5rem;
    width: fit-content;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    > div {
        width: fit-content;
        max-width: 200px;
        word-wrap: break-word;
    }
`;

export const QR: FC<{
    address: string;
    amount: bigint;
    product_id: bigint;
    chainId: string;
}> = ({ address, amount, chainId, product_id }) => {
    const value = `ethereum:${address}@${chainId}/?value=${
        amount + product_id
    }`;

    return (
        <Wrapper>
            <Amount amount={amount} />

            <QRCode value={value} />
        </Wrapper>
    );
};
