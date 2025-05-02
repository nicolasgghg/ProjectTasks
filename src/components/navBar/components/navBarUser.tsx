import { IconButton } from "@radix-ui/themes";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { useUser } from "../../../context/userContext/UserContext";
import { PopoverUser } from "./popoverUser";

export const NavBarUser = () => {
  const { isLoggedIn, logout } = useUser();

  return (
    <>
      {isLoggedIn ? (
        <PopoverUser logout={logout} />
      ) : (
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
      )}
    </>
  );
};
