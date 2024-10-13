import { TabsTask } from "./components/tabsTask/TabsTask";
import { NavBar } from "./components/navBar/navBar";
import { useContext, useEffect } from "react";
import { UserContext } from "./shared/context/main";



export const App = () => {
  
  const userContext = useContext(UserContext)

  const { user } = userContext

  useEffect(()=>{
    document.title=`Task ${user ? `- ${user.name}` : ""}`
  })


  return (
    <div className="text-center">
      <NavBar />
      <TabsTask />
    </ div>
  )
}
