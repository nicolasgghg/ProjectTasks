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
  titleDialog?: string;
  descriptionDialog?: string;
  titleTask?: string;
  descriptionTask?: string;
  idTask: number;
  titleButtonDialog: string;
  onSubmit: (task: { title: string; description: string; id: number }) => void;
}

export const DialogTask = ({
  children,
  titleDialog,
  descriptionDialog,
  titleTask,
  titleButtonDialog,
  idTask,
  descriptionTask,
  onSubmit,
}: IPTask) => {
  const [title, setTitle] = useState(titleTask ?? "");
  const [description, setDescription] = useState(descriptionTask ?? "");

  const handleSubmit = () => {
    if (title.trim()) {
      if (typeof title != "string" || typeof description != "string") {
        return alert("Title or Description is not undefined");
      }
      const id = idTask;
      onSubmit({ title, description, id });
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
          {titleTask ?? descriptionDialog}
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
