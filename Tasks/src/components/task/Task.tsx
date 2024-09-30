import { Box, Button, Card, Heading, Text } from "@radix-ui/themes";
import { Menu } from "lucide-react";

interface ITask {
    id: number;
    title: string;
    description: string;
    completed: boolean;
}


export const Task = ({ task }: { task: ITask }) => {

    return (
        <Card className="flex h-[150px] justify-between items-center" >
            <Box className="w-3/4 pb-3 text-justify">
                <Heading className="my-2">{task.title}</Heading>
                <Box className="overflow-y-auto max-h-[100px] pr-2">
                    <Text className="ml-2">{task.description}</Text>
                </Box>
            </Box>
            <Button className="m-3 cursor-pointer" variant="ghost"><Menu className="w-12 h-12" /></Button>
        </ Card>
    )

}