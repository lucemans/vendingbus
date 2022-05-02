import { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { QR } from './QR';

export const GlobalStyle = createGlobalStyle`
    html, body {
        width: 100%;
        height: auto;
        min-height: 100vh;
        margin: 0;
        padding: 0;
        background: #111;
        font-family: sans-serif;
    }
    :root {
        font-size: 16px;
    }
    * {
        box-sizing: border-box;
    }
`;

const Wrapper = styled.div`
    padding: 1rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const App: FC = () => {
    return (
        <Wrapper>
            <GlobalStyle />
            <QR
                address="0x0cE42d8C836f9238EF930DF959d9A9e45E2ED1B5"
                amount={BigInt('1000000000000000000')}
                product_id={BigInt(1)}
                chainId={'137'}
            />
        </Wrapper>
    );
};
