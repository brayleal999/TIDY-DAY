import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { PersonIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import { ModeToggle } from "@/components/ToggleMode"



const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className="border-b py-4 px-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <p onClick={() => navigate("/")} className="cursor-pointer">Project Managment</p>

                <Button onClick={() => navigate("/upgrade_plan")} variant="ghost">Upgrade</Button>
            </div>

            <div className="flex gap-3 items-center">
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Button variant="outline" size="icon" className="rounded-full border-2 border-gray-500">
                            <PersonIcon />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <p>Tidy Day</p>

            </div>
        </div>
    )
}

export default Navbar;