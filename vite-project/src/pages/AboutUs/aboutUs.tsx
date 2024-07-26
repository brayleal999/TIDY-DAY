import { ModeToggle } from "@/components/ToggleMode";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

const AboutUs = () => {
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
			<section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6">
					<div className="grid gap-10 lg:grid-cols-2 xl:gap-20">
						<div className="space-y-4">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">About Us</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Tidy Day: Project Management Experts
							</h2>
							<p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
								Tidy Day is a company dedicated to comprehensive project management. Our goal is to help our
								clients achieve their goals efficiently and effectively, providing tailor-made solutions that adapt
								to their specific needs.
							</p>
							<div className="grid gap-4">
								<div>
									<h3 className="text-lg font-semibold">Mission</h3>
									<p className="text-muted-foreground">
										To be our clients' trusted partner, offering innovative and high-quality project management
										solutions that enable them to achieve their goals.
									</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold">Vision</h3>
									<p className="text-muted-foreground">
										To become leaders in the project management industry, recognized for our
										excellence, innovation, and commitment to customer satisfaction.
									</p>
								</div>
								<div>
									<h3 className="text-lg font-semibold">Values</h3>
									<p className="text-muted-foreground">
										Integrity, Excellence, Innovation, Collaboration, and Customer Orientation.
									</p>
								</div>
							</div>
						</div>
						<div className="space-y-4">
							<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Team</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								Expert Leaders in Project Management
							</h2>
							<div className="grid gap-6">
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback><img src="src\assets\NG4OXH2E65FZLDFCYTHPSGJT5Q.avif" alt="" /></AvatarFallback>
									</Avatar>
									<div>
										<p className="text-lg font-medium">Johan Ruiz</p>
										<p className="text-muted-foreground">Backend</p>
									</div>

								</div>
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback><img src="src\assets\halo.webp" alt="" /></AvatarFallback>
									</Avatar>
									<div>
										<p className="text-lg font-medium">Kevin Fuentes</p>
										<p className="text-muted-foreground">Backend</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback><img src="src\assets\bl.jpg" alt="" /></AvatarFallback>
									</Avatar>
									<div>
										<p className="text-lg font-medium">Brayam Leal</p>
										<p className="text-muted-foreground">Frontend</p>
									</div>
								</div>
								<div className="flex items-center gap-4">
									<Avatar>
										<AvatarImage src="/placeholder-user.jpg" />
										<AvatarFallback><img src="src\assets\TonyMontana.webp" alt="" /></AvatarFallback>
									</Avatar>
									<div>
										<p className="text-lg font-medium">Sebastian Jaimes</p>
										<p className="text-muted-foreground">Frontend</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="mt-12 space-y-4">
						<div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Testimonials</div>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
							What Our Clients Say
						</h2>
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							<Card>
								<CardContent className="py-4">
									<blockquote className="text-lg font-semibold leading-snug">
										"The Tidy Day team has been instrumental in the success of our project. Their professional approach and
										attention to detail have been invaluable."
									</blockquote>
									<div>
										<p className="font-medium">Sarah Johnson</p>
										<p className="text-muted-foreground">Project Manager, ABC Corp</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="py-4">
									<blockquote className="text-lg font-semibold leading-snug">
										"Working with Tidy Day has been an exceptional experience. Their team of project management experts has guided us through each stage of the process with efficiency and professionalism."
									</blockquote>
									<div>
										<p className="font-medium">David Lee</p>
										<p className="text-muted-foreground">Project Director, XYZ Inc</p>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="py-4">
									<blockquote className="text-lg font-semibold leading-snug">
										"Tidy Day has exceeded our expectations in every project we've worked on together. Their innovative approach and commitment to excellence are truly exceptional."
									</blockquote>
									<div>
										<p className="font-medium">Emily Chen</p>
										<p className="text-muted-foreground">Project Manager, LMN Corp</p>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</>


	)
}


export default AboutUs;

