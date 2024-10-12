import { useContext } from "react";
import { ThemeContext } from "../../../shared/context/main";
import { DialogTask } from "../../../shared/components/dialogTask/DialogTask";
import { Button } from "@radix-ui/themes";
import { Check, Edit, Trash } from "lucide-react";
import { IPTask } from "./Task";

interface IPTaskMenu {
    menuOpen: boolean;
    task: IPTask
}


export const TaskMenu = ({ menuOpen, task }: IPTaskMenu) => {

    const themeContext = useContext(ThemeContext)

    return (
        <>
            {menuOpen && (
                <div
                    className={
                        themeContext.theme === "dark" ?
                            "absolute -right-3 -top-1/2 bg-white shadow-lg rounded-lg flex items-center justify-between p-2"
                            : "absolute -right-3 -top-1/2 bg-black shadow-lg rounded-lg flex items-center justify-between p-2"
                    }
                >
                    <DialogTask
                        titleDialog="Edit Task"
                        titleTask={task.title}
                        titleButtonDialog="Change"
                    >
                        <Button className="w-16 mx-1/4" variant="ghost" color="blue">
                            <Edit className="mr-2" />
                        </Button>
                    </DialogTask>
                    {
                        !task.completed && (
                            <Button className="w-16 mx-1/4" variant="ghost" onClick={() => { }}>
                                <Check className="mr-2" />
                            </Button>
                        )
                    }
                    <Button className="w-16 mx-1/4" variant="ghost" color="red" onClick={() => { }}>
                        <Trash className="mr-2" />
                    </Button>

                </div>
            )}
        </>
    )
}