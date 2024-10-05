import { Button } from "@radix-ui/themes"
import { useEffect } from "react"
import { IInputes, TemplateLoginRegister } from "../../shared/components/templateLoginRegister/TemplateLoginRegister"
import { Link } from "react-router-dom"

export const Login = () => {
    useEffect(() => {
        document.title = "Tasks - Login"
    }, [])

    const inputs: IInputes[] = [
        {
            inputTitle: "Email",
            placeholder: "XXXXXXX@gmail.com",
            type: "email"
        },
        {
            inputTitle: "Password",
            placeholder: "**********",
            type: "password"
        }
    ]


    return (
        <TemplateLoginRegister
            title="LOGIN"
            inputs={inputs}
        >
            <Link to="/Register">
                <Button variant="soft">
                    Register
                </Button>
            </Link>
            <Button variant="soft" onClick={() => { }}>Login</Button>
        </TemplateLoginRegister >
    )
}