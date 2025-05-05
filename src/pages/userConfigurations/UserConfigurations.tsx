import { Button } from "@radix-ui/themes";
import {
  IInputes,
  TemplateForms,
} from "../../shared/components/templateForms/TemplateForms";
import { useEffect, useRef } from "react";
import { UserRoundCog } from "lucide-react";
import { useUser } from "../../context/main";
import { useNavigate } from "react-router-dom";
import { IUpdateUser } from "../../types/user";

export const UserConfigurations = () => {
  const { updateUser, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Tasks - UserConfigurations";
    if (!user) {
      navigate("/login");
    }
  }, []);

  const handleUpdateUser = () => {
    if (!user) return;

    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const confirmPassword = confirmPasswordRef.current?.value || "";

    if (password && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const rawPayload: IUpdateUser = { name, email, password };

    const filteredPayload = Object.fromEntries(
      Object.entries(rawPayload).filter(([_, value]) => value !== "")
    ) as IUpdateUser;

    updateUser(filteredPayload);
    navigate("/");
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const inputs: IInputes[] = [
    {
      inputTitle: "New Name",
      placeholder: "Name",
      ref: nameRef,
    },
    {
      inputTitle: "New Email",
      placeholder: "XXXXXXX@gmail.com",
      type: "email",
      ref: emailRef,
    },
    {
      inputTitle: "New  Password",
      placeholder: "**********",
      type: "password",
      ref: passwordRef,
    },
    {
      inputTitle: "Confirm New Password",
      placeholder: "**********",
      type: "password",
      ref: confirmPasswordRef,
    },
  ];

  return (
    <TemplateForms
      inputs={inputs}
      title="User Configurations"
      iconTitlePage={UserRoundCog}
    >
      <Button variant="soft" onClick={handleUpdateUser}>
        Update Profile
      </Button>
    </TemplateForms>
  );
};
