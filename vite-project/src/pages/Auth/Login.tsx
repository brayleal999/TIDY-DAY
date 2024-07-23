import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom";
import { ModeToggle } from "@/components/ToggleMode";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface LogInProps {
}

const Login = (props: LogInProps) => {
    const form = useForm({
        //resolver:zod
        defaultValues: {
            Email: "",
            Password: "",
        },
    });

    const onSubmit = (data: any) => {
        console.log("create project data", data);
    };

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

            <section className="flex justify-center items-center min-h-screen">
                <div className="grid md:grid-cols-2 w-full max-w-screen-xl mx-auto">
                    <Form {...form}>
                        <div className="flex items-center justify-center md:pr-8 md:pl-8">
                            <form action="#" className="max-w-md w-full" onSubmit={form.handleSubmit(onSubmit)}>

                                <div className="mb-4">
                                    <Card className="p-4">
                                        <CardHeader>
                                            <CardTitle className="text-2xl font-bold mb-2">Sign In</CardTitle>
                                            <CardDescription>Enter your email and password to access your account.</CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-4">
                                            <div className="space-y-2">
                                                <FormField control={form.control} name="Email" render={({ field }) => (<FormItem>
                                                    <label className="font-bold">Email</label>
                                                    <FormControl>
                                                        <Input {...field} placeholder="Email..." type="email" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>)} />
                                            </div>

                                            <div className="space-y-2">
                                                <FormField control={form.control} name="Password" render={({ field }) => (<FormItem>
                                                    <label className="font-bold">Password</label>
                                                    <FormControl>
                                                        <Input {...field} placeholder="Password..." type="password" />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>)} />
                                            </div>
                                        </CardContent>

                                        <div className="col-span-6 flex flex-col items-center justify-center">
                                            <Button type="submit" className="shrink-0 rounded-md border px-12 py-4 text-sm font-medium text-white mb-4">
                                                Sign In
                                            </Button>
                                            <div>
                                                <span className="mt-4 text-center">Don't have an Account?</span>
                                                <Button className="text-blue-500 hover:text-blue-700 underline" variant="ghost" asChild>
                                                    <Link to={"/signup"} >Sign Up</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </form>
                        </div>
                    </Form>
                    <div className="hidden md:block relative md:pr-8">
                        <img src="/src/assets/login2.jpg" alt="Image" className="h-full w-full object-cover" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
