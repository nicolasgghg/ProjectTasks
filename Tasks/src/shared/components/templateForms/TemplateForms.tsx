import { Card, Heading, IconButton, Text, TextField } from "@radix-ui/themes"
import { Home, LucideProps } from "lucide-react"
import { ReactNode } from "react"
import { Link } from "react-router-dom"

export interface IInputes {
    inputTitle: string
    placeholder: string
    type?: "email" | "password" | undefined
    ref: React.Ref<HTMLInputElement>
}

interface IPTemplateForms {
    iconTitlePage?: React.FC<LucideProps>;
    title: string;
    inputs: IInputes[];
    children: ReactNode;
}


export const TemplateForms = ({ iconTitlePage: Icon, title, inputs, children }: IPTemplateForms) => {


    return (
        <div className="min-h-screen w-full flex items-center justify-center">
            <Card className="w-4/5 lg:w-[600px] min-w-[376px]">

                <div className="flex items-center justify-between p-8">
                    <Heading className="flex items-center">
                        {Icon && <Icon className="mr-2" />}
                        {title}
                    </Heading>

                    <Link to="/">
                        <IconButton variant="ghost">
                            <Home></Home>
                        </IconButton>
                    </Link>
                </div>

                <div className="my-4 p-6 flex flex-col gap-8">
                    {inputs.map((value, index) => (
                        <label key={index}>
                            <Text>
                                {value.inputTitle}
                            </Text>
                            <TextField.Root
                                placeholder={`${value.placeholder}`}
                                type={value.type || "text"}
                                ref={value.ref}
                            />
                        </label>
                    ))}
                </div>

                <div className="flex justify-between px-6">
                    {children}
                </div>
            </Card>
        </div>
    )

}