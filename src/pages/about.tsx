export default function About() {
    return (
        <div className="p-5   antialiased ">
            <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                    Always Building
                </span>{' '}
                | Here to stay
            </h1>
            <div className="p-4">
                <p>
                    PREEB is a Cardano stake pool. By delegating to small stake
                    pool operators (SPO) you are supporting decentralization.
                    Choose a small SPO to guarantee a better crypto future.
                </p>
            </div>

            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                        />
                    </svg>
                    <span>
                        Operating for{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            2.5 years - since epoch 342
                        </span>{' '}
                        as a Single Pool Operator (SPO)
                    </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                        />
                    </svg>
                    <span>
                        Over{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            160+ people choose PREEB
                        </span>{' '}
                        as their stake pool
                    </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                        />
                    </svg>
                    <span>
                        More than{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            100 blocks
                        </span>{' '}
                        minted
                    </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                        />
                    </svg>
                    <span>
                        Secured over{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            36,000 ADA
                        </span>{' '}
                        in rewards
                    </span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                    <svg
                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 12"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5.917 5.724 10.5 15 1.5"
                        />
                    </svg>
                    <span>
                        Team size:{' '}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            1 developer
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    );
}
