import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ToggleMode";

interface SignupProps {
}

const Signup = (props: SignupProps) => {
    const form = useForm({
        //resolver:zod
        defaultValues: {
            FullName: "",
            Email: "",
            Password: "",
            PasswordConfirmation: "",
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
                    <div className="hidden md:block relative md:pl-8">
                        <img src="/src/assets/register4.jpg" alt="Image" className="h-full w-full object-cover" />
                    </div>
                    <Form {...form}>
                        <form action="#" className="flex items-center justify-center md:pl-8 md:pr-8" onSubmit={form.handleSubmit(onSubmit)}>
                            <div className="max-w-md w-full">
                                <Card className="mb-4">
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold mb-2">Sign Up</CardTitle>
                                        <CardDescription>Enter your data to create an account.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <FormField control={form.control}
                                                name="FullName"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <label className="font-bold">Full Name</label>
                                                        <FormControl>
                                                            <Input {...field}
                                                                className="block text-sm font-medium w-full"
                                                                placeholder="Full Name..." />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                        </div>
                                        <div className="space-y-2">
                                            <FormField control={form.control}
                                                name="Email"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <label className="font-bold">Email</label>
                                                        <FormControl>
                                                            <Input {...field}
                                                                className="block text-sm font-medium w-full"
                                                                placeholder="Email..."
                                                                type="email" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                        </div>

                                        <div className="space-y-2">
                                            <FormField control={form.control}
                                                name="Password"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <label className="font-bold">Password</label>
                                                        <FormControl>
                                                            <Input {...field}
                                                                className="block text-sm font-medium w-full"
                                                                placeholder="Password..."
                                                                type="password" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                        </div>

                                        <div className="space-y-2">
                                            <FormField control={form.control}
                                                name="PasswordConfirmation"
                                                render={({ field }) => (
                                                    <FormItem>
                                                        <label className="font-bold">Password Confirmation</label>
                                                        <FormControl>
                                                            <Input {...field}
                                                                className="block text-sm font-medium w-full"
                                                                placeholder="Password Confirmation..."
                                                                type="password" />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )} />
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <Checkbox id="terms" />
                                            <Label htmlFor="terms" className="text-sm font-medium leading-none">
                                                I accept the terms and conditions
                                            </Label>
                                        </div>
                                        <div className="col-span-6 flex flex-col items-center justify-center">
                                            <Button type="submit" className="shrink-0 rounded-md border px-12 py-4 text-sm font-medium text-white mb-4">
                                                Sign Up
                                            </Button>
                                            <div>
                                                <span className="mt-4 text-center">Already have an Account?</span>
                                                <Button className="text-blue-500 hover:text-blue-700 underline" variant="ghost" asChild>
                                                    <Link to={"/login"} >Sign In</Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </form>
                    </Form>
                </div>
            </section>
        </>
    )
}

export default Signup;
