import { ModeToggle } from "@/components/ToggleMode"
// import Link from "next/link"
// import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
// import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
// import { Button } from "@/components/ui/button"
// import { MenuIcon, MountainIcon } from "lucide-react"

const Principal = () => {
    return (
        <>
            {/* <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
                <Link href="#" className="mr-6 flex items-center" prefetch={false}>
                    <MountainIcon className="h-6 w-6" />
                    <span className="sr-only">Acme Inc</span>
                </Link>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuLink asChild>
                            <Link
                                href="/"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Home
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                About
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Services
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                href="#"
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                prefetch={false}
                            >
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="ml-auto lg:hidden">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        <Link href="#" className="flex items-center" prefetch={false}>
                            <MountainIcon className="h-6 w-6" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <div className="grid gap-2 py-6">
                            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                Home
                            </Link>
                            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                About
                            </Link>
                            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                Services
                            </Link>
                            <Link href="#" className="flex w-full items-center py-2 text-lg font-semibold" prefetch={false}>
                                Contact
                            </Link>
                        </div>
                    </SheetContent>
                </Sheet>
                <div className="ml-auto">
                    <Button>Get Started</Button>
                </div>
            </header> */}
            <header className="">
                <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                    <a className="block text-blue-600" href="#">
                        <span className="sr-only">Home</span>
                    </a>

                    <div className="flex flex-1 items-center justify-end md:justify-between">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="" href="#"> About </a>
                                </li>

                                <li>
                                    <a className="" href="#"> Careers </a>
                                </li>

                                <li>
                                    <a className="" href="#"> History </a>
                                </li>

                                <li>
                                    <a className="" href="#"> Services </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <ModeToggle />
                            <div className="flex gap-4">
                                <a className="block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium  transition hover:bg-blue-700" href="#">
                                    Login</a>

                                <a className="block rounded-md bg-gray-300 px-5 py-2.5 text-sm font-medium text-blue-600 transition hover:text-blue-600/75" href="#">
                                    Register
                                </a>
                            </div>

                            <button onClick={() => {
                                const menu = document.getElementById('mobile-menu');
                                menu.classList.toggle('hidden');
                            }}
                                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                                <span className="sr-only">Toggle menu</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div id="mobile-menu" className="hidden md:hidden absolute top-16 right-0 bg-white w-48 shadow-lg py-2 z-10">
                        <ul className="flex flex-col gap-2 items-center text-sm">
                            <li>
                                <a className="block py-2 px-4 text-gray-800 hover:bg-gray-100" href="#">About</a>
                            </li>
                            <li>
                                <a className="block py-2 px-4 text-gray-800 hover:bg-gray-100" href="#">Careers</a>
                            </li>
                            <li>
                                <a className="block py-2 px-4 text-gray-800 hover:bg-gray-100" href="#">History</a>
                            </li>
                            <li>
                                <a className="block py-2 px-4 text-gray-800 hover:bg-gray-100" href="#">Services</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header >


            <section id="mobile-menu" className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('src/assets/login1.jpg')" }}>
                <div className="absolute inset-0 bg-gray-900/75"></div>

                <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                            Welcome to
                            <strong className="block font-extrabold text-blue-500"> Tidy Day. </strong>
                        </h1>
                        <p className="mt-4 max-w-lg text-white sm:text-xl/relaxed">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                            numquam ea!
                        </p>
                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <a href="#" className="block w-full rounded bg-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring sm:w-auto">
                                Get Started
                            </a>
                            <a href="#" className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-500 shadow hover:text-blue-700 focus:outline-none focus:ring sm:w-auto">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className="max-w-screen-xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16">
                        <div className="max-w-lg mx-auto lg:mx-0 ltr:lg:text-left rtl:lg:text-right">
                            <h2 className="text-3xl font-bold sm:text-4xl">Find your career path</h2>

                            <p className="mt-4 text-gray-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero aliquid sint distinctio
                                iure ipsum cupiditate? Quis, odit assumenda? Deleniti quasi inventore, libero reiciendis
                                minima aliquid tempora. Obcaecati, autem.
                            </p>

                            <a
                                href="#"
                                className="mt-8 inline-block bg-blue-600 text-sm font-medium rounded px-12 py-3 text-sm"
                            >
                                Get Started Today
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                            <a
                                className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                        <path
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                        ></path>
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        ></path>
                                    </svg>
                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">

                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">

                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">

                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">

                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>

                            <a
                                className="block rounded-xl border border-blue-600 p-4 shadow-sm focus:outline-none focus:ring"
                                href="#"
                            >
                                <span className="inline-block rounded-lg bg-gray-50 p-3">

                                </span>

                                <h2 className="mt-2 font-bold">Accountant</h2>

                                <p className="hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600">
                                    Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </a>
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
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit
                                </h2>

                                <p className="hidden text-white/90 sm:mt-4 sm:block">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam
                                    sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet
                                    volutpat quisque ut interdum tincidunt duis.
                                </p>

                                <div className="mt-4 md:mt-8">
                                    <a href="#" className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400">
                                        Get Started Today
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                            <img
                                alt=""
                                src="src\assets\login3.jpg"
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />

                            <img
                                alt=""
                                src="src\assets\register3.jpg"
                                className="h-40 w-full object-cover sm:h-56 md:h-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="">
                <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold sm:text-4xl">Trusted by eCommerce Businesses</h2>

                        <p className="mt-4 text-gray-400 sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
                            provident impedit esse recusandae facere libero harum sequi.
                        </p>
                    </div>

                    <div className="mt-8 sm:mt-12">
                        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium">Total Sales</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
                            </div>

                            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium ">Official Addons</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
                            </div>

                            <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
                                <dt className="order-last text-lg font-medium ">Total Addons</dt>

                                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
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
                                <p className="flex justify-center text-blue-600 sm:justify-start dark:text-blue-500 text-lg font-medium">Tidy Day</p>
                            </div>

                            <p
                                className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left dark:text-gray-400">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
                                cum itaque neque.
                            </p>

                            <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-blue-700 transition hover:text-blue-700/75 dark:text-blue-500 dark:hover:text-blue-500/75"
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-blue-700 transition hover:text-blue-700/75 dark:text-blue-500 dark:hover:text-blue-500/75"
                                    >
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="text-blue-700 transition hover:text-blue-700/75 dark:text-blue-500 dark:hover:text-blue-500/75"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                            />
                                        </svg>
                                    </a>
                                </li>

                            </ul>
                        </div>

                        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">About Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Company History</a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Meet the Team </a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Employee Handbook</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">Our Services</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Web Development</a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Web Design</a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Marketing</a>
                                    </li>

                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">Helpful Links</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            FAQs</a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Support</a>
                                    </li>

                                    <li>
                                        <a className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75" href="#">
                                            Live Chat</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-center sm:text-left">
                                <p className="text-lg font-medium text-gray-900 dark:text-white">Contact Us</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li>
                                        <a
                                            className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end"
                                            href="#">

                                            <span className="flex-1 text-gray-700 dark:text-gray-300"> john@doe.com </span>
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
                                            213 Lane, London, United Kingdom
                                        </address>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 border-t border-gray-100 pt-6 dark:border-gray-800">
                        <div className="text-center sm:flex sm:justify-between sm:text-left">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                <span className="block sm:inline">All rights reserved.</span>

                                <a
                                    className="inline-block underline"
                                    href="#"
                                >
                                    Terms & Conditions
                                </a>

                                <span>&middot;</span>

                                <a
                                    className="inline-block underline"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                            </p>

                            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0 dark:text-gray-400">
                                &copy; 2022 Company Name
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Principal
