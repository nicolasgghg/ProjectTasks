import { Button } from "@radix-ui/themes"
import { useContext, useEffect, useRef } from "react"
import { IInputes, TemplateForms } from "../../shared/components/templateForms/TemplateForms"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../shared/context/main"
import { UserRound } from "lucide-react"

export const Login = () => {

    const userContext = useContext(UserContext);
    const navigate = useNavigate();


    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.title = "Tasks - Login"
    }, [])

    const inputs: IInputes[] = [
        {
            inputTitle: "Email",
            placeholder: "XXXXXXX@gmail.com",
            type: "email",
            ref: emailRef
        },
        {
            inputTitle: "Password",
            placeholder: "**********",
            type: "password",
            ref: passwordRef
        }
    ]

    const handleLogin = () => {
        const email = emailRef.current?.value
        const password = passwordRef.current?.value

        if (userContext) {
            const isLoginSuccessful = userContext.login(email || "", password || "");
            if (isLoginSuccessful) {navigate("/")}
        }
    };


    return (
        <TemplateForms
            iconTitlePage={UserRound}
            title="Login"
            inputs={inputs}
        >
            <Link to="/Register">
                <Button variant="soft">
                    Register
                </Button>
            </Link>
            <Button variant="soft" onClick={handleLogin}>Login</Button>
        </TemplateForms >
    )
}