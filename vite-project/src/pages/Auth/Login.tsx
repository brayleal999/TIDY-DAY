import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"


interface LogInProps {
    onSignUp: () => void
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
                                            <Button className="text-blue-500 hover:text-blue-700 underline" variant="ghost" onClick={() => props.onSignUp()}>
                                                Sign Up
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

    )
}

export default Login;
