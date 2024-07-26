import { ModeToggle } from "@/components/ToggleMode"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const Principal = () => {
    return (
        <>
            <header>
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block text-blue-600" href="#">
                        <span className="sr-only">Home</span>
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>

                                <li>
                                    <Link to="/aboutUs">About Us</Link>
                                </li>

                                <li>
                                    <Link to="/support">Help & Support</Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <ModeToggle />
                            <div className="flex gap-4">
                                <Link to="/login" className="block rounded-md text-gray-100 bg-blue-600 px-5 py-2.5 text-sm font-medium  
                                    transition hover:bg-blue-700">Login</Link>

                                <Link to="/signup" className="block rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium
                                    text-blue-600 transition hover:text-blue-600/75">Register</Link>

                            </div>

                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline" size="icon" className="block rounded bg-gray-100 p-2.5 text-gray-600 md:hidden">
                                        <span className="sr-only">Toggle menu</span>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="3">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                        </svg>
                                        <span className="sr-only">Toggle navigation menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right">
                                    <div className="grid gap-2 py-6">
                                        <div className="flex items-center gap-2">
                                            <img src="/src/assets/react.svg" alt="" />
                                            <span className="text-xl font-semibold">TidyDay</span>
                                        </div>
                                        <nav aria-label="Global" className="h-8 w-8">
                                            <ul className="space-y-2">
                                                <li>
                                                    <Button variant="ghost"><Link to="/">Home</Link></Button>
                                                </li>

                                                <li>
                                                    <Button variant="ghost"><Link to="/aboutUs">About Us</Link></Button>
                                                </li>

                                                <li>
                                                    <Button variant="ghost"><Link to="/support">Help & Support</Link></Button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </header >

            <section id="mobile-menu" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/login1.jpg')" }}>
                <div className="absolute inset-0 bg-gray-900/75"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Welcome to
                            <strong className="block font-extrabold text-blue-500"> TidyDay. </strong>
                        </h1>
                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            At TidyDay we are dedicated to simplify your life, both personal and professional,
                            through effective tools and tips to organize, structure and plan your day to day.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link to={"/login"} className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring sm:w-auto">Get Started</Link>

                            <Link to={"/aboutUs"} className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-500 shadow hover:text-blue-700 focus:outline-none focus:ring sm:w-auto">Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="max-w-lg mx-auto lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

                            <p className="mt-4">
                                Our mission is to help you achieve your goals and optimize your time in a practical and simple way.
                                In TidyDay you will find:
                            </p>

                            <Link to={"/login"} className="mt-8 inline-block bg-blue-600 text-gray-100 font-medium rounded px-12 py-3 text-sm">Get Started Today</Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <div className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg  p-3">
                                    <svg className="h-10 w-10"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M17 2H7c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM7 16.999V5h10l.002 11.999H7z"></path></svg>
                                </span>

                                <h2 className="mt-2 font-bold">Personalized Organization:</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                    Tools adaptable to your individual needs.
                                </p>
                            </div>

                            <div className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg  p-3">
                                    <svg className="h-10 w-10"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M20 1.999H4c-1.103 0-2 .897-2 2v18l4-4h14c1.103 0 2-.897 2-2v-12c0-1.103-.897-2-2-2zm-6 11H7v-2h7v2zm3-4H7v-2h10v2z"></path></svg>
                                </span>

                                <h2 className="mt-2 font-bold">Continuous Improvement: </h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                    Proven tips and techniques to maximize your productivity.
                                </p>
                            </div>

                            <div className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg p-3">
                                    <svg className="h-10 w-10"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 19V5h16l.002 14H4z"></path><path d="M6 7h12v2H6zm0 4h12v2H6zm0 4h6v2H6z"></path></svg>
                                </span>

                                <h2 className="mt-2 font-bold">Efficient Planning:</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                    Methods for successfully planning your projects and activities.
                                </p>
                            </div>

                            <div className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg p-3">
                                    <svg className="h-10 w-10"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm4.799-2.013H8v-1.799l4.977-4.97 1.799 1.799-4.977 4.97zm5.824-5.817-1.799-1.799L15.196 11l1.799 1.799-1.372 1.371zM5 7h14v2H5V7z"></path></svg>
                                </span>

                                <h2 className="mt-2 font-bold">Clear Structure: </h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                    Guidelines for maintaining an organized and stress-free environment.
                                </p>
                            </div>

                            <div className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg p-3">
                                    <svg className="h-10 w-10"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path></svg>
                                </span>

                                <h2 className="mt-2 font-bold">Effective Tracking:</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                    Tools to evaluate your progress and adjust your planning.
                                </p>
                            </div>

                            <div className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring">
                                <span className="inline-block rounded-lg p-3">
                                    <svg className="h-10 w-10"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
                                </span>

                                <h2 className="mt-2 font-bold">Versatile Resources:</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm">
                                    From customizable checklists to downloadable templates.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
                            <div className="mx-auto max-w-xl text-center">
                                <h2 className="text-2xl font-bold text-white md:text-3xl">
                                    Get started today and take the first step towards a more organized and productive
                                    life with TidyDay!
                                </h2>

                                <p className="hidden text-white/90 sm:mt-4 sm:block">
                                    Our platform is designed to be easy to use and intuitive, ensuring you can start
                                    transforming your routine from day one. Discover how you can simplify your life with TidyDay.
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <Link to={"/login"} className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">Get Started Today</Link>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <img alt=""
                                src="src\assets\login3.jpg"
                                className="h-40 w-full object-cover sm:h-56 md:h-full" />

                            <img alt=""
                                src="src\assets\register3.jpg"
                                className="h-40 w-full object-cover sm:h-56 md:h-full" />
                        </div>
                    </div>
                </div>
            </section>

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

            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">TidyDay's confidence for new users:</h2>

                        <p className="sm:mt-4">
                            At TidyDay, we understand that trust is critical for our new users. We are committed to
                            providing you with a safe and reliable platform where you can explore and improve your
                            organization and planning skills. With clear resources, practical tips and an intuitive
                            interface, we're here to support you every step of the way on your journey to a more orderly
                            and productive life. Discover how Tidy Day can help you achieve your personal and professional
                            goals with confidence and peace of mind.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg border border-blue-600 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium">Active Users</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">10M</dd>
                            </div>

                            <div className="flex flex-col rounded-lg border border-blue-600 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium ">User Satisfaction</dt>
                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">4.7</dd>
                            </div>

                            <div className="flex flex-col rounded-lg border border-blue-600 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium ">Data Security</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">10/10</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </section>

            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div>
                            <div className="flex justify-center text-blue-600 sm:justify-start dark:text-blue-500">
                                <img src="#" alt="" />
                                <p className="flex justify-center text-blue-600 sm:justify-start dark:text-blue-500 text-lg font-medium">TidyDay</p>
                            </div>

                            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">
                                “Discover how TidyDay can simplify your life by giving you reliable tools to get
                                better organized, plan effectively and achieve your goals with peace of mind.”
                            </p>

                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                <li>
                                    <a href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-blue-700 transition hover:text-blue-700/75 dark:text-blue-500 dark:hover:text-blue-500/75">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-blue-700 transition hover:text-blue-700/75 dark:text-blue-500 dark:hover:text-blue-500/75">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd" />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-blue-700 transition hover:text-blue-700/75 dark:text-blue-500 dark:hover:text-blue-500/75">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">Information</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <Link to={"/aboutUs"} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">About</Link>
                                    </li>

                                    <li>
                                        <Link to={"/aboutUs"} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">About Us</Link>
                                    </li>

                                    <li>
                                        <Link to={"/aboutUs"} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Help & Support</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">Questions</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <Link to={"/aboutUs"} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Mission</Link>
                                    </li>

                                    <li>
                                        <Link to={"/aboutUs"} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Vision</Link>
                                    </li>

                                    <li>
                                        <Link to={"/aboutUs"} className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75">Goals</Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">Creators</p>

                                <ul className="mt-8 space-y-3 text-sm">
                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Johan Camilo</a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Brayam Leal</a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Kevin Fuentes</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Sebastian Jaimes</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">Contact Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#">
                                            <span className="flex-1 text-gray-700 dark:text-gray-300"> TidyDay2024@gmail.com </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#">
                                            <span className="flex-1 text-gray-700 dark:text-gray-300">0123456789</span>
                                        </a>
                                    </li>

                                    <li
                                        className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                        <address className="-mt-0.5 flex-1 not-italic text-gray-700 dark:text-gray-300">
                                            Norte de Santander, Colombia
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                <span className="block sm:inline">All rights reserved. </span>

                                <a className="inline-block underline"
                                    href="#">Terms & Conditions</a>

                                <span> &middot; </span>

                                <a className="inline-block underline"
                                    href="#">Privacy Policy</a>
                            </p>

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
                                &copy; 2024 Company TidayDay
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Principal