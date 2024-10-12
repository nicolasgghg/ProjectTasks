import { IconButton } from "@radix-ui/themes"
import { User } from "lucide-react"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../../shared/context/main"
import { PopoverUser } from "./popoverUser"



export const NavBarUser = ()=>{

    const userContext = useContext(UserContext)

    const { isLoggedIn, logout } = userContext 

    return(
        <>
            {
                isLoggedIn ?
                    (
                        <PopoverUser logout={logout} />
                    ) 
                    : (
                        <Link to="Login">
                            <IconButton 
                                className="cursor-pointer" 
                                size="3" 
                                variant="ghost" 
                                aria-label="Button for page login"
                            > 
                                <User /> 
                            </IconButton>
                        </Link>
                    )
                
            }

        </>
    )
}