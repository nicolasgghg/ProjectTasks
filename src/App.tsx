import { useEffect } from "react";
import { NavBar } from "./components/navBar/NavBar";
import { TabsTask } from "./components/tabsTask/TabsTask";
import { useUser } from "./context/userContext/UserContext";
import { useTasks } from "./hooks/useTask";

export const App = () => {
  const { user } = useUser();
  const { tasks, addTask } = useTasks();

  useEffect(() => {
    document.title = user ? `Tasks – ${user.name}` : "Tasks";
  }, [user]);

  return (
    <div className="text-center min-h-screen">
      <NavBar addTask={addTask} />
      <TabsTask tasks={tasks} />
    </div>
  );
};
