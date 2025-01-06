import '../styles/globals.css';
import '@meshsdk/react/styles.css';
import type { AppProps } from 'next/app';
import { MeshProvider } from '@meshsdk/react';
import Layout from '../components/layout';
import { createContext, useState, useContext } from 'react';

const GlobalStateContext = createContext(null);

export const GlobalStateProvider = ({ children }) => {
    const [state, setState] = useState({
        /* initial state */
    });

    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

export const useGlobalState = () => useContext(GlobalStateContext);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MeshProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </MeshProvider>
    );
}

export default MyApp;
