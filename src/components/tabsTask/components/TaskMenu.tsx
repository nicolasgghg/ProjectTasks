import { useCallback, useContext } from "react";
import { ThemeContext, useTask } from "../../../context/main";
import { DialogTask } from "../../../shared/components/dialogTask/DialogTask";
import { Button } from "@radix-ui/themes";
import { Check, Edit, Trash } from "lucide-react";
import { ITask } from "../../../types/task";

interface IPTaskMenu {
  menuOpen: boolean;
  task: ITask;
}

export const TaskMenu = ({ menuOpen, task }: IPTaskMenu) => {
  const { updateTask } = useTask();

  const handleUpdateTask = useCallback(
    (payload: { title?: string; description?: string; id: number }) => {
      if (payload.id == undefined) {
        return alert("Contact Support");
      }else{
          updateTask(payload);
      }
    },
    []
  );

  const themeContext = useContext(ThemeContext);

  return (
    <>
      {menuOpen && (
        <div
          className={
            themeContext.theme === "dark"
              ? "absolute -right-3 -top-1/2 bg-white shadow-lg rounded-lg flex items-center justify-between p-2"
              : "absolute -right-3 -top-1/2 bg-black shadow-lg rounded-lg flex items-center justify-between p-2"
          }
        >
          <DialogTask
            titleDialog="Edit Task"
            titleTask={task.title}
            descriptionTask={task.description}
            titleButtonDialog="Change"
            idTask={task.id}
            onSubmit={handleUpdateTask}
          >
            <Button className="w-16 mx-1/4" variant="ghost" color="blue">
              <Edit className="mr-2" />
            </Button>
          </DialogTask>
          {!task.completed && (
            <Button className="w-16 mx-1/4" variant="ghost" onClick={() => {}}>
              <Check className="mr-2" />
            </Button>
          )}
          <Button
            className="w-16 mx-1/4"
            variant="ghost"
            color="red"
            onClick={() => {}}
          >
            <Trash className="mr-2" />
          </Button>
        </div>
      )}
    </>
  );
};
