import { Button, Dialog, Flex, Text, TextArea, TextField } from "@radix-ui/themes"
import { ReactNode } from "react"

interface IPTask {
    children: ReactNode
    titleDialog: string
    titleTask?: string
    titleButtonDialog: string
}

export const DialogTask = ({ children, titleDialog, titleTask, titleButtonDialog }: IPTask) => {
    return <Dialog.Root>
        <Dialog.Trigger>
            {children}
        </Dialog.Trigger>

        <Dialog.Content maxWidth="450px">
            <Dialog.Title>{titleDialog}</Dialog.Title>

            <Dialog.Description size="2" mb="4">
                {titleTask}
            </Dialog.Description>

            <Flex direction="column" gap="3">
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Title Task
                    </Text>
                    <TextField.Root
                        placeholder="Title of task"
                    />
                </label>
                <label>
                    <Text as="div" size="2" mb="1" weight="bold">
                        Description Task
                    </Text>
                    <TextArea
                        placeholder="Description of task"
                    />
                </label>
            </Flex>

            <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                    <Button variant="soft" color="gray">
                        Cancel
                    </Button>
                </Dialog.Close>
                <Dialog.Close>
                    <Button>{titleButtonDialog}</Button>
                </Dialog.Close>
            </Flex>
        </Dialog.Content>
    </Dialog.Root>
}