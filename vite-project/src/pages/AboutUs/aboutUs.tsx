import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/pages/Navbar/Navbar"
const AboutUs = () => {
	return (

		<>
		<Navbar/>
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
									<AvatarFallback><img src="src\assets\bl.jpg" alt="ms" /></AvatarFallback>
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

