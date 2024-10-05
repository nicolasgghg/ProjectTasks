import { Button } from "@radix-ui/themes"
import { useEffect } from "react"
import { IInputes, TemplateLoginRegister } from "../../shared/components/templateLoginRegister/TemplateLoginRegister"

export const Register = () => {
    useEffect(() => {
        document.title = "Tasks - Register"
    }, [])

    const inputs: IInputes[] = [
        {
            inputTitle: "Name",
            placeholder: "Name"
        },
        {
            inputTitle: "Email",
            placeholder: "XXXXXXX@gmail.com",
            type: "email"
        },
        {
            inputTitle: "Password",
            placeholder: "**********",
            type: "password"
        },
        {
            inputTitle: "Confirm Password",
            placeholder: "**********",
            type: "password"
        }
        
    ]


    return (
        <TemplateLoginRegister
            title="Register"
            inputs={inputs}
        >
            <Button variant="soft" onClick={() => { }}>Register</Button>
        </TemplateLoginRegister >
    )
}