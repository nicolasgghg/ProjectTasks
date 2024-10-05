import { Box, Button, Card, Heading, Text, Tooltip } from "@radix-ui/themes";
import { Check, Edit, Menu, Trash, X } from "lucide-react";
import { useContext, useState } from "react";
import { ThemeContext } from "../../shared/context/main";
import { DialogTask } from "../dialogTask/DialogTask";



interface IPTask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}



export const Task = ({ task }: { task: IPTask }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(prev => !prev)
    }

    const themeContext = useContext(ThemeContext)

    return (
        <Card className="m-4 flex h-[150px] justify-between items-center" >
            <Box className="w-3/4 pb-3 text-justify">
                <Heading className="my-2">{task.title}</Heading>
                <Box className="overflow-y-auto max-h-[100px] pr-2">
                    <Text className="ml-2">{task.description}</Text>
                </Box>
            </Box>

            <div className="relative">
                <Tooltip content="More Options">
                    <Button className="m-3 cursor-pointer" variant="ghost" color={menuOpen ? "red" : undefined} onClick={handleMenuToggle}>
                        {menuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
                    </Button>
                </Tooltip>
                {menuOpen && (
                    <div 
                        className={
                            themeContext.theme === "dark" ?
                            "absolute -right-3 -top-1/2 bg-white shadow-lg rounded-lg flex items-center justify-between p-2"
                            : "absolute -right-3 -top-1/2 bg-black shadow-lg rounded-lg flex items-center justify-between p-2"
                        }    
                    >
                        <DialogTask titleTask="Edit Task" description={task.title}>
                            <Button className="w-16 mx-1/4" variant="ghost" color="blue">
                                <Edit className="mr-2" />
                            </Button>
                        </DialogTask>
                        {
                            !task.completed && (
                                <Button className="w-16 mx-1/4" variant="ghost" onClick={()=>{}}>
                                    <Check className="mr-2" />
                                </Button>    
                            )
                        }
                        <Button className="w-16 mx-1/4" variant="ghost" color="red" onClick={()=>{}}>
                            <Trash className="mr-2" />
                        </Button>

                    </div>
                )}
            </div>
        </ Card>
    )

}