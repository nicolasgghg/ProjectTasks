import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"
import { ReactNode } from "react"

interface IPTask {
    children: ReactNode
    titleTask: string
}

const inputs = [
    { "title":"Title Task", "placeholder": "Title of task" },
    { "title":"Description", "placeholder": "Description of task" }
]



export const CreateTask = ({ children, titleTask }: IPTask) => {
    return <Dialog.Root>
        <Dialog.Trigger>
            {children}
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
            <Dialog.Title>{titleTask}</Dialog.Title>

            <Flex direction="column" gap="3">
                {
                    inputs.map(e =>{
                        return <label key={e.title}>
                        <Text as="div" size="2" mb="1" weight="bold">
                            {e.title}
                        </Text>
                        <TextField.Root
                            placeholder={e.placeholder}
                        />
                        </label>
                    })
                }
            </Flex>

            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button>Create</Button>
                </Dialog.Close>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
}