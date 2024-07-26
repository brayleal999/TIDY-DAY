import Navbar from "../Navbar/Navbar";

const Subscription = () => {
    return (
        <>
            <Navbar />
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <h1 className="text-3xl font-extrabold sm:text-5xl  pb-14 text-center text-blue-600">¡CHOOSE YOUR BEST VERSION!</h1>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8 ">
                    <div className="divide-y divide-gray-200 rounded-2xl border border-blue-600 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium">
                                FREE VERSION
                                <span className="sr-only">Plan</span>
                            </h2>
                            <h1 className="mt-2">basic functions but the ones you need to be able to use the application.</h1>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold sm:text-4xl"> 0$ </strong>
                                <span className="text-sm font-medium">/month</span>
                            </p>

                            <a className="mt-4 block rounded border px-12 py-3 text-center 
                            text-sm font-medium hover:bg-transparen focus:outline-none 
                            focus:ring sm:mt-6" href="#">Get Started</a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span> basic functions </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                    <span> choose avatar </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span> change theme </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span> best support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span> custom avatar </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span> premium options </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border border-blue-600 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium">
                                PRO VERSION
                                <span className="sr-only">Plan</span>
                            </h2>
                            <p className="mt-2">a better version with better features that will improve your experience.</p>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold sm:text-4xl"> 30$ </strong>
                                <span className="text-sm font-medium">/month</span>
                            </p>
                            <a className="mt-4 block rounded border px-12 py-3 text-center 
                            text-sm font-medium  hover:bg-transparent focus:outline-none 
                            focus:ring sm:mt-6"href="#">Get Started</a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium sm:text-xl">What's included:</p>
                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> basic functions </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> choose avatar </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span > change theme </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> best support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span> custom avatar </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-red-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>

                                    <span> premium options </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-200 rounded-2xl border border-blue-600 shadow-sm">
                        <div className="p-6 sm:px-8">
                            <h2 className="text-lg font-medium">
                                PREMIUM VERSION
                                <span className="sr-only">Plan</span>
                            </h2>
                            <p className="mt-2 ">the best version you can have with better experience options in intuitive and attractive to you.</p>
                            <p className="mt-2 sm:mt-4">
                                <strong className="text-3xl font-bold sm:text-4xl"> 60$ </strong>
                                <span className="text-sm font-medium">/month</span>
                            </p>
                            <a className="mt-4 block rounded border px-12 py-3 text-center 
                            text-sm font-medium hover:bg-transparent focus:outline-none 
                            focus:ring sm:mt-6" href="#">Get Started</a>
                        </div>

                        <div className="p-6 sm:px-8">
                            <p className="text-lg font-medium sm:text-xl">What's included:</p>

                            <ul className="mt-2 space-y-2 sm:mt-4">
                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> basic functions </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> choose avatar </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> change theme </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span > best support </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> custom avatar </span>
                                </li>

                                <li className="flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="size-5 text-blue-700">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>

                                    <span> premium options </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscription;
