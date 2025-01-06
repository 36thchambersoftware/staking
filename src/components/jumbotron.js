export default function Jumbotron() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        PREEB
                    </span>{' '}
                    CyBears
                </h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                    
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a
                        href="https://pool.pm/2873902b027727676630f3c9c63830183049b7e09998bd7b90114e13"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                    >
                        pool.pm
                    </a>
                    <a
                        href="https://x.com/PREEB_Pool"
                        class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                        X/Twitter
                    </a>
                </div>
            </div>
        </section>
    );
}
