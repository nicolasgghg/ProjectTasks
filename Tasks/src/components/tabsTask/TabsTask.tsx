import { Separator, Tabs } from "@radix-ui/themes";
import { Task } from "../task/Task";
import tasks from "../../assets/tasks.json";


export const TabsTask = () => {

  const todoTasks = tasks.filter(task => !task.completed)
  const finishedTasks = tasks.filter(task => task.completed)


  return (
    <Tabs.Root className="" defaultValue="account">
      <Tabs.List>
        <Tabs.Trigger value="ToDo" >To Do</Tabs.Trigger>
        <Separator orientation="vertical" size="2" />
        <Tabs.Trigger value="Finished">Finished</Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content className="p-3 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" value="ToDo">
        {
          todoTasks.map(task=>(
            <Task key={task.id} task={task}/>
          ))
        }
      </Tabs.Content>

      <Tabs.Content className="p-3 grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" value="Finished">
        {
          finishedTasks.map(task=>(
            <Task key={task.id} task={task}/>
          ))
        }
      </Tabs.Content>

    </Tabs.Root>
  );
}


