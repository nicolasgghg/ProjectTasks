import { Button, Card, Flex, Section } from "@radix-ui/themes";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeContext, useTask, useUser } from "../../context/main.ts";
import { useContext } from "react";
import { DialogTask } from "../../shared/components/dialogTask/DialogTask.tsx";
import { NavBarUser } from "./components/navBarUser.tsx";

export const NavBar = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);
  const userId = useUser().user?.id;
  const { addTask } = useTask();

  const handleCreateTask = (task: { title: string; description: string }) => {
    if (userId == undefined) {
      alert("you need to login");
    } else {
      addTask({ ...task, userId });
    }
  };

  return (
    <Section size="1" className="flex justify-around items-center">
      <Link className="max-w-32 w-1/4" to="/">
        <svg
          className="w-full"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 800"
          opacity="1"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="nnneon-grad"
            >
              <stop
                stop-color="hsl(0, 0%, 0%)"
                stop-opacity="1"
                offset="0%"
              ></stop>
              <stop
                stop-color="hsl(352, 100%, 26%)"
                stop-opacity="1"
                offset="100%"
              ></stop>
            </linearGradient>
            <filter
              id="nnneon-filter"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              {" "}
              <feGaussianBlur
                stdDeviation="44 21"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
            <filter
              id="nnneon-filter2"
              x="-100%"
              y="-100%"
              width="400%"
              height="400%"
              filterUnits="objectBoundingBox"
              primitiveUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feGaussianBlur
                stdDeviation="12 18"
                x="0%"
                y="0%"
                width="100%"
                height="100%"
                in="SourceGraphic"
                edgeMode="none"
                result="blur"
              ></feGaussianBlur>
            </filter>
          </defs>
          <g stroke-width="23" stroke="url(#nnneon-grad)" fill="none">
            <path
              d="M373.9808146660275 24.73267228337511C390.0815054349671 15.438608381201249 409.91855560018917 15.438608381201249 426.0192463691287 24.735274204960263L711.9808362640094 189.83500454780375C728.0815270329489 199.12906844997758 738.00005211556 216.30955667675642 738.00005211556 234.9002864026894V565.0997470883763C738.00005211556 583.6904768143091 728.0815270329489 600.8709650410881 711.9808362640094 610.1676308648471L426.0192463691287 775.2673612076904C409.91855560018917 784.5614251098643 390.0815054349671 784.5614251098643 373.9808146660275 775.2647592861053L88.01922477114675 610.165028943262C71.91853400220731 600.8709650410881 62.00000891959621 583.6904768143091 62.00000891959621 565.0997470883763V234.9002864026894C62.00000891959621 216.30955667675642 71.91853400220731 199.12906844997758 88.01922477114675 189.83240262621865L373.9808146660275 24.73267228337511Z "
              filter="url(#nnneon-filter)"
            ></path>
            <path
              d="M392.9808146660275 24.73267228337511C409.0815054349671 15.438608381201249 428.91855560018917 15.438608381201249 445.0192463691287 24.735274204960263L730.9808362640094 189.83500454780375C747.0815270329489 199.12906844997758 757.00005211556 216.30955667675642 757.00005211556 234.9002864026894V565.0997470883763C757.00005211556 583.6904768143091 747.0815270329489 600.8709650410881 730.9808362640094 610.1676308648471L445.0192463691287 775.2673612076904C428.91855560018917 784.5614251098643 409.0815054349671 784.5614251098643 392.9808146660275 775.2647592861053L107.01922477114675 610.165028943262C90.91853400220731 600.8709650410881 81.00000891959621 583.6904768143091 81.00000891959621 565.0997470883763V234.9002864026894C81.00000891959621 216.30955667675642 90.91853400220731 199.12906844997758 107.01922477114675 189.83240262621865L392.9808146660275 24.73267228337511Z "
              filter="url(#nnneon-filter2)"
              opacity="0.28"
            ></path>
            <path
              d="M354.9808146660275 24.73267228337511C371.0815054349671 15.438608381201249 390.91855560018917 15.438608381201249 407.0192463691287 24.735274204960263L692.9808362640094 189.83500454780375C709.0815270329489 199.12906844997758 719.00005211556 216.30955667675642 719.00005211556 234.9002864026894V565.0997470883763C719.00005211556 583.6904768143091 709.0815270329489 600.8709650410881 692.9808362640094 610.1676308648471L407.0192463691287 775.2673612076904C390.91855560018917 784.5614251098643 371.0815054349671 784.5614251098643 354.9808146660275 775.2647592861053L69.01922477114675 610.165028943262C52.91853400220731 600.8709650410881 43.00000891959621 583.6904768143091 43.00000891959621 565.0997470883763V234.9002864026894C43.00000891959621 216.30955667675642 52.91853400220731 199.12906844997758 69.01922477114675 189.83240262621865L354.9808146660275 24.73267228337511Z "
              filter="url(#nnneon-filter2)"
              opacity="0.28"
            ></path>
            <path d="M373.9808146660275 24.73267228337511C390.0815054349671 15.438608381201249 409.91855560018917 15.438608381201249 426.0192463691287 24.735274204960263L711.9808362640094 189.83500454780375C728.0815270329489 199.12906844997758 738.00005211556 216.30955667675642 738.00005211556 234.9002864026894V565.0997470883763C738.00005211556 583.6904768143091 728.0815270329489 600.8709650410881 711.9808362640094 610.1676308648471L426.0192463691287 775.2673612076904C409.91855560018917 784.5614251098643 390.0815054349671 784.5614251098643 373.9808146660275 775.2647592861053L88.01922477114675 610.165028943262C71.91853400220731 600.8709650410881 62.00000891959621 583.6904768143091 62.00000891959621 565.0997470883763V234.9002864026894C62.00000891959621 216.30955667675642 71.91853400220731 199.12906844997758 88.01922477114675 189.83240262621865L373.9808146660275 24.73267228337511Z "></path>
          </g>
        </svg>
      </Link>

      <Card>
        <Flex gap="6" align="center" p="2">
          <DialogTask
            titleDialog="Create Task"
            titleButtonDialog="Save"
            descriptionDialog="Fill in the task details below"
            idTask={0}
            onSubmit={handleCreateTask}
          >
            <Button variant="solid">New Task</Button>
          </DialogTask>

          <NavBarUser />

          <Button
            className="cursor-pointer"
            size="3"
            variant="ghost"
            onClick={handleToggleTheme}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </Button>
        </Flex>
      </Card>
    </Section>
  );
};
