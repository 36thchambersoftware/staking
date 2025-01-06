import { useState } from 'react';
import { useWallet } from '@meshsdk/react';
import { CardanoWallet } from '@meshsdk/react';
import {
    ForgeScript,
    Transaction,
    // DEFAULT_REDEEMER_BUDGET,
    // resolvePlutusScriptAddress,
    // mTxOutRef,
} from '@meshsdk/core';

// import { useGlobalState } from '@/pages/_app';
// import * as core from '@meshsdk/core-csl';

export default function CallToAction() {
    const { connected, wallet } = useWallet();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [tx, setTx] = useState();
    const ONE_ADA_IN_LOVELACE = 1000000;
    const PREEB =
        'addr1qy2hmljzhhlfnp3f93kypxe9s6zrk48u0eussgrt8pqyev7nrcqyctls0tfffny9cq7lfl0mmwnhrk2gk850dj4ad40sjru9fh';

    async function mintNFT() {
        setLoading(true);
        // use browser wallet to get address
        const usedAddress = await wallet.getUsedAddresses();
        const address = usedAddress[0];

        // create forgingScript
        const forgingScript = ForgeScript.withOneSignature(address);
        const assetMetadata = {
            name: 'PREEB Token',
            image: 'ipfs://QmRzicpReutwCkM6aotuKjErFCUD213DpwPq6ByuzMJaua',
            mediaType: 'image/jpg',
            description: 'This NFT was minted by Mesh (https://meshjs.dev/).',
        };

        const asset = {
            assetName: 'PreebToken',
            assetQuantity: '1',
            metadata: assetMetadata,
            label: '721',
            recipient: address,
        };

        const tx = new Transaction({ initiator: wallet })
            .sendLovelace(PREEB, ONE_ADA_IN_LOVELACE * 45)
            .mintAsset(forgingScript, asset);

        try {
            const unsignedTx = await tx.build();
            const signedTx = await wallet.signTx(unsignedTx);
            const txHash = await wallet.submitTx(signedTx);
            setTx(txHash);
        } catch (err) {
            setError(err);
        }

        setLoading(false);
    }

    async function delegate() {
        const addresses = await wallet.getRewardAddresses();
        const rewardAddress = addresses[0];

        const tx = new Transaction({ initiator: wallet }).delegateStake(
            rewardAddress,
            'pool19peeq2czwunkwe3s70yuvwpsrqcyndlqnxvt67usz98px57z7fk'
        );

        try {
            const unsignedTx = await tx.build();
            const signedTx = await wallet.signTx(unsignedTx);
            const txHash = await wallet.submitTx(signedTx);
            setTx(txHash);
        } catch (err) {
            setError(err);
        }
    }

    return (
        <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
                Currently Minting
            </h5>
            <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
                Mint your Cybear today!
            </p>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
                <CardanoWallet />
            </div>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                {connected && (
                    <>
                        <button
                            type="button"
                            onClick={() => mintNFT()}
                            disabled={loading}
                            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Mint
                        </button>

                        <button
                            type="button"
                            onClick={() => delegate()}
                            disabled={loading}
                            className="py-3 px-5 sm:ms-4 font-medium text-gray-900 focus:outline-none text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
                        >
                            Delegate
                        </button>
                    </>
                )}
            </div>
            {tx && (
                <div
                    id="toast-success"
                    class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                >
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                        </svg>
                        <span class="sr-only">Check icon</span>
                    </div>
                    <div class="ms-3 text-sm font-normal">
                        Transaction successful! {tx}
                    </div>
                    <button
                        type="button"
                        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-warning"
                        aria-label="Close"
                        onClick={() => setTx(null)}
                    >
                        <span class="sr-only">Close</span>
                        <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
            )}
            {error && (
                <div
                    id="toast-danger"
                    class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                    role="alert"
                >
                    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                        <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                        </svg>
                        <span class="sr-only">Error icon</span>
                    </div>
                    <div class="ms-3 text-sm font-normal">
                        Unsuccessful! {error.code} {error.info}
                    </div>
                    <button
                        type="button"
                        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        data-dismiss-target="#toast-warning"
                        aria-label="Close"
                        onClick={() => setError(null)}
                    >
                        <span class="sr-only">Close</span>
                        <svg
                            class="w-3 h-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                            />
                        </svg>
                    </button>
                </div>
            )}
        </div>
    );
}
