import { Separator, Tabs } from "@radix-ui/themes";
import { Task } from "./components/Task";
import { useTask, useUser } from "../../context/main";

export const TabsTask = () => {
  const { tasks } = useTask();
  const user = useUser().user;

  if (!user) {
    return (
      <p className="text-center text-red-500 font-semibold mt-4">
        You need to be logged in to view your tasks.
      </p>
    );
  }

  if (!tasks || tasks.length === 0) {
    return (
      <p className="text-center text-red-500 font-semibold mt-4">
        Create a Task.
      </p>
    );
  }

  const todoTasks = tasks.filter((task) => !task.completed);
  const finishedTasks = tasks.filter((task) => task.completed);

  return (
    <Tabs.Root className="" defaultValue="ToDo">
      <Tabs.List>
        <Tabs.Trigger value="ToDo">To Do</Tabs.Trigger>
        <Separator orientation="vertical" size="2" />
        <Tabs.Trigger value="Finished">Finished</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content
        className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        value="ToDo"
      >
        {todoTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Tabs.Content>

      <Tabs.Content
        className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
        value="Finished"
      >
        {finishedTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </Tabs.Content>
    </Tabs.Root>
  );
};
