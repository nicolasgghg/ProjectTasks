import { Button } from "@radix-ui/themes"
import { useEffect, useRef } from "react"
import { IInputes, TemplateForms } from "../../shared/components/templateForms/TemplateForms"
import { UserPlus } from "lucide-react";

export const Register = () => {


    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);


    useEffect(() => {
        document.title = "Tasks - Register"
    }, [])



    const inputs: IInputes[] = [
        {
            inputTitle: "Name *",
            placeholder: "Name",
            ref: nameRef
        },
        {
            inputTitle: "Email *",
            placeholder: "XXXXXXX@gmail.com",
            type: "email",
            ref: emailRef
        },
        {
            inputTitle: "Password *",
            placeholder: "**********",
            type: "password",
            ref: passwordRef
        },
        {
            inputTitle: "Confirm Password *",
            placeholder: "**********",
            type: "password",
            ref: confirmPasswordRef
        }

    ]


    return (
        <TemplateForms
            iconTitlePage={UserPlus}
            title="Register"
            inputs={inputs}
        >
            <Button variant="soft" onClick={() => { }}>Register</Button>
        </TemplateForms >
    )
}