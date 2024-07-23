
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ModeToggle } from "@/components/ToggleMode"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export const Support = () => {

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
      <div className="w-full max-w-5xl mx-auto py-12 md:py-24">
        <div className="px-4 md:px-6">
          <div className="space-y-4 mb-12">
            <h1 className="text-3xl font-bold">Tidy Day - Support and Help</h1>
            <p className="text-muted-foreground">
              At Tidy Day, we are committed to providing excellent support and assistance to our customers. Our team of experts is here to help you resolve any questions or issues you may have with our project management services.
            </p>
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-lg font-medium">
                  How can I set up my Tidy Day account?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">To set up your Tidy Day account, follow these steps:</p>
                  <ol className="list-decimal list-inside mt-2">
                    <li>Log in to your account on our website.</li>
                    <li>In the navigation menu, click on "Account Settings".</li>
                    <li>Complete your profile information, including your name, email, and password.</li>
                    <li>Set your notification preferences and additional settings.</li>
                    <li>Save the changes and your account will be ready.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-lg font-medium">
                  How can I create a new project in Tidy Day?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">To create a new project in Tidy Day, follow these steps:</p>
                  <ol className="list-decimal list-inside mt-2">
                    <li>Log in to your account on our website.</li>
                    <li>In the navigation menu, click on "Create New Project".</li>
                    <li>
                      Complete the project information, including the name, description, and start date.
                    </li>
                    <li>Add tasks, assign team members, and set deadlines.</li>
                    <li>Save the project and start working on it.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-lg font-medium">
                  How can I share a project with my team?
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    To share a project with your team in Tidy Day, follow these steps:
                  </p>
                  <ol className="list-decimal list-inside mt-2">
                    <li>Log in to your account on our website.</li>
                    <li>Navigate to the project you want to share and click on "Share".</li>
                    <li>Add the email addresses of the team members you want to invite to the project.</li>
                    <li>
                      Select the permissions you want to grant each team member (view, edit, manage).
                    </li>
                    <li>Send the invitations and your team members will be able to access and collaborate on the project.</li>
                  </ol>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="space-y-8 mt-12">
            <h2 className="text-2xl font-bold">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions or need additional assistance, please do not hesitate to contact our support team. We will be happy to help you.
            </p>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Write your message" />
              </div>
              <Button type="submit" className="ml-auto">
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>

    </>

  )
}



