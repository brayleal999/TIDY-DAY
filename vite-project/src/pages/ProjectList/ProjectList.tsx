import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ChevronLeftIcon, MagnifyingGlassIcon, MixerHorizontalIcon, PlusIcon } from "@radix-ui/react-icons"
import { useState } from "react"
import ProjectCard from "../project/ProjectCard"
import Navbar from "../Navbar/Navbar"
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from "@/components/ui/dialog"
import CreateProjectForm from "../project/CreateProjectForm"
import { ChevronRightIcon } from "lucide-react"

export const tags = [
    "all",
    "react",
    "nextjs",
    "spring boot",
    "mysql",
    "mongodb",
    "angular",
    "python",
    "flask",
    "django",
];
const ProjectList = () => {
    const [keyword, setKeyword] = useState("");
    const handleFilterChange = (section: any, value: any) => {
        console.log("value", value, section);
    };
    const handleSearchChange = (e: any) => {
        setKeyword(e.target.value)

    }

    const [currentDate, setCurrentDate] = useState(new Date())
    const handlePrevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }
    const handleNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }
    const handlePrevYear = () => {
        setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1))
    }
    const handleNextYear = () => {
        setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1))
    }
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
    return (
        <>
            <Navbar />
            <div className="relative px-2 lg:px-20 lg:flex gap-6 justify-center py-5">
                <section className="filterSection lg:mr-4">
                    <Card className="p-5 sticky top-10">
                        <div className="flex justify-between lg:w-[20rem]">
                            <p className="text-xl tracking-wider">filters</p>
                            <Button variant="ghost" size="icon">
                                <MixerHorizontalIcon />
                            </Button>
                        </div>
                        <CardContent className="mt-5">
                            <ScrollArea className="space-y-7 h-[70vh]">
                                <div>
                                    <h1 className="pb-3 text-gray-400 border-b">Category</h1>
                                    <div className="pt-5">
                                        <RadioGroup className="space-y-3 pt-5" defaultValue="all" onValueChange={(value) => handleFilterChange("Category", value)}>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="all" id="r1" />
                                                <Label htmlFor="r1">all</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="fullstack" id="r2" />
                                                <Label htmlFor="r2">fullstack</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="frontend" id="r3" />
                                                <Label htmlFor="r3">frontend</Label>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <RadioGroupItem value="backend" id="r4" />
                                                <Label htmlFor="r4">backend</Label>
                                            </div>
                                        </RadioGroup>
                                    </div>
                                </div>

                                <div className="pt-9">
                                    <h1 className="pb-3 text-gray-400 border-b">Tag</h1>
                                    <div className="pt-5">
                                        <RadioGroup className="space-y-3 pt-5" defaultValue="all" onValueChange={(value) => handleFilterChange("Tag", value)}>
                                            {tags.map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <RadioGroupItem value={item} id={`r1-${item}`} />
                                                    <Label htmlFor={`r1-${item}`}>{item}</Label>
                                                </div>))}
                                        </RadioGroup>
                                    </div>
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </section>
                <section className="projectListSection lg:w-[48rem]">
                    <div className="flex gap-2 items-center pb-5 justify-between">

                        <div className="relative p-0 w-full">
                            <Input onChange={handleSearchChange} placeholder="search project" className="40% px-9" />
                            <Dialog>
                                <DialogTrigger>
                                    <Button variant="ghost" className="absolute top-0 right-0 border-1">
                                        <PlusIcon className="w-4 h-4" />
                                        <span>Add</span>
                                    </Button>
                                </DialogTrigger>

                                <DialogContent>
                                    <DialogHeader>Create New Project</DialogHeader>
                                    <CreateProjectForm />
                                </DialogContent>
                            </Dialog>
                            <MagnifyingGlassIcon className="absolute top-3 left-4" />
                        </div>
                    </div>
                    <div className="space-y-5 min-h-[60vh]">

                        {
                            keyword ? [1, 1, 1].map((item) => <ProjectCard key={item} />) :
                                [1, 1, 1, 1, 1].map((item) => <ProjectCard key={item} />)
                        }

                    </div>
                </section>

                <div className="bg-background rounded-lg border p-5 lg:ml-4 lg:w-[30rem] h-[42vh]">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" onClick={handlePrevYear} className="text-muted-foreground hover:bg-muted">
                            <ChevronLeftIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost"
                            size="icon"
                            onClick={handlePrevMonth}
                            className="text-muted-foreground hover:bg-muted">
                            <ChevronLeftIcon className="w-4 h-4" />
                        </Button>
                        <div className="text-lg font-medium">
                            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
                        </div>
                        <Button variant="ghost"
                            size="icon"
                            onClick={handleNextMonth}
                            className="text-muted-foreground hover:bg-muted">
                            <ChevronRightIcon className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleNextYear} className="text-muted-foreground hover:bg-muted">
                            <ChevronRightIcon className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-7 gap-2">
                    {daysOfWeek.map((day, index) => (
                        <div key={index} className="flex items-center justify-center h-10 font-medium text-muted-foreground">
                            {day}
                        </div>
                    ))}
                    {Array.from({ length: firstDayOfMonth }, (_, i) => i).map((_, index) => (
                        <div key={index} className="h-10" />
                    ))}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day, index) => (
                        <div key={index}
                            className={`flex items-center justify-center h-10 rounded-md transition-colors hover:bg-muted ${currentDate.getDate() === day && currentDate.getMonth() === new Date().getMonth()
                                    ? "bg-primary text-primary-foreground"
                                    : ""
                                }`}>
                            {day}
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    )
}

export default ProjectList;