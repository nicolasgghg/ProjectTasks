import { TabsTask } from "./components/tabsTask/TabsTask";
import { NavBar } from "./components/navBar/NavBar";
import { useEffect } from "react";



export const App = () => {
  
  useEffect(()=>{
    document.title="Tasks"
  })


  return (
    <div className="text-center">
      <NavBar />
      <TabsTask />
    </ div>
  )
}
