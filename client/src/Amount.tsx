import { FC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    font-size: 2rem;
`;

export const Amount: FC<{ amount: bigint }> = ({ amount }) => {
    return (
        <Wrapper>
            <>
                {(
                    Number.parseFloat(
                        BigInt(
                            amount / BigInt(10_000_000_000_000_000)
                        ).toString()
                    ) / 100
                ).toFixed(2)}{' '}
                MATIC
            </>
        </Wrapper>
    );
};
