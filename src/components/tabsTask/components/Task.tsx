import { Box, Button, Card, Heading, Text, Tooltip } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { TaskMenu } from "./TaskMenu";
import { useState } from "react";



export interface IPTask {
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



    return (
        <Card className="m-4 flex h-[150px] justify-between items-center" >
            <Box className="w-3/4 pb-3 text-justify">
                <Heading className="my-2">{task.title}</Heading>
                <Box className="overflow-y-auto max-h-[100px] pr-2">
                    <Text className="ml-2">{task.description}</Text>
                </Box>
            </Box>

            <Box className="relative">
                <Tooltip content="More Options">
                    <Button className="m-3 cursor-pointer" variant="ghost" color={menuOpen ? "red" : undefined} onClick={handleMenuToggle}>
                        {menuOpen ? <X className="w-12 h-12" /> : <Menu className="w-12 h-12" />}
                    </Button>
                </Tooltip>

                <TaskMenu menuOpen={menuOpen} task={task} />

            </Box>
        </ Card>
    )

}