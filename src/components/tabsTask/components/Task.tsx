import { Box, Button, Card, Heading, Text, Tooltip } from "@radix-ui/themes";
import { Menu, X } from "lucide-react";
import { TaskMenu } from "./TaskMenu";
import { useCallback, useState } from "react";

export interface IPTask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}

export const Task = ({ task }: { task: IPTask }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = useCallback(() => {
        setMenuOpen(prev => !prev);
    }, [])

    return (
        <div className="relative group overflow-hidden">
            <div className={`absolute inset-0 w-full h-full bg-gradient-to-r from-[#253e8e] to-[#04c6ae] blur-3xl opacity-0 ${menuOpen ? "opacity-100 animate-spin" : "group-hover:opacity-100 group-hover:animate-spin"}`}></div>
            <Card className="m-4 flex h-[150px] justify-between items-center relative bg-black z-10">
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
            </Card>
        </div>
    )
}