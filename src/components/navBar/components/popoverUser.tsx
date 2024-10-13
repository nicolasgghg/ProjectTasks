import { IconButton, Popover } from "@radix-ui/themes"
import { CircleUser, UserRoundCog, UserRoundX } from "lucide-react"
import { Link } from "react-router-dom"

interface ILogout {
    logout : ()=>void
}

export const PopoverUser = ({logout}:ILogout) => { 
 
    return (
            <Popover.Root>

                <Popover.Trigger>

                    <IconButton
                        className="cursor-pointer"
                        size="3"
                        variant="ghost"
                        aria-label="Button for open menu User"
                        aria-haspopup="true"
                    >
                        <CircleUser />
                    </IconButton>
                    
                </Popover.Trigger>

                <Popover.Content align="center" className="flex gap-8">

                    <IconButton
                        className="cursor-pointer"
                        size="3"
                        variant="ghost"
                        aria-label="Button logout"
                        onClick={logout}
                    >
                        <UserRoundX />
                    </IconButton>

                    <Link to="UserConfigurations">
                        <IconButton
                            className="cursor-pointer"
                            size="3"
                            variant="ghost"
                            aria-label="Button for page user configurations"
                        >
                            <UserRoundCog />
                        </IconButton>
                    </Link>

                </Popover.Content>

            </Popover.Root>
    )
}