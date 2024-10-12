import { Button } from "@radix-ui/themes"
import { IInputes, TemplateForms } from "../../shared/components/templateForms/TemplateForms"
import { useRef } from "react";
import { UserRoundCog } from "lucide-react";


export const UserConfigurations = () => {

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    const inputs: IInputes[] = [
        {
            inputTitle: "New Name",
            placeholder: "Name",
            ref: nameRef
        },
        {
            inputTitle: "New Email",
            placeholder: "XXXXXXX@gmail.com",
            type: "email",
            ref: emailRef
        },
        {
            inputTitle: "New  Password",
            placeholder: "**********",
            type: "password",
            ref: passwordRef
        },
        {
            inputTitle: "Confirm New Password",
            placeholder: "**********",
            type: "password",
            ref: confirmPasswordRef
        }
    ]

    return (
        <TemplateForms
            inputs={inputs}
            title="User Configurations"
            iconTitlePage={UserRoundCog}
        >

        <Button variant="soft" onClick={() => { }}>Update Profile</Button>
        
        </TemplateForms>
    )
}