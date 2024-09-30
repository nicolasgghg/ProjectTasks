import { Button, Card, Flex, IconButton, Section } from "@radix-ui/themes";
import { User } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../shared/context/main";
import { useContext } from "react";




export const NavBar = () => {

  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <Section size="1" className="flex justify-around items-center">
      <Link className="max-w-32 w-1/4" to="/">
        <img src="/logo.svg" className="w-full" />
      </Link>

      <Card>
        <Flex gap="6" align="center" p="2">
          <Button className="cursor-pointer" size="3" variant="ghost"> Create a Task </Button>
          <IconButton className="cursor-pointer" size="3" variant="ghost"> <User /> </IconButton>
          <Button className="cursor-pointer" size="3" variant="ghost" onClick={handleToggleTheme}> 
            {theme === 'dark' ? 'Light' : 'Dark'}  
          </Button>
        </Flex>
      </Card>
    </ Section>
  );
}
