import { useState } from "react";
import {
  Button,
  Dialog,
  Flex,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { ReactNode } from "react";

interface IPTask {
  children: ReactNode;
  titleDialog: string;
  titleTask?: string;
  titleButtonDialog: string;
  onSubmit: (task: { title: string; description: string }) => void;
}

export const DialogTask = ({
  children,
  titleDialog,
  titleTask,
  titleButtonDialog,
  onSubmit,
}: IPTask) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (title.trim()) {
      onSubmit({ title, description });
      setTitle("");
      setDescription("");
    } else {
      alert("Title is required");
    }
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger>{children}</Dialog.Trigger>

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <Text as="div" size="2" mb="1" weight="bold">
              Description Task
            </Text>
            <TextArea
              placeholder="Description of task"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
            <Button onClick={handleSubmit}>{titleButtonDialog}</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};
