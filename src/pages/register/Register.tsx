import { Button } from "@radix-ui/themes";
import { useEffect, useRef } from "react";
import {
  TemplateForms,
  IInputes,
} from "../../shared/components/templateForms/TemplateForms";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../../api/services/userService";
import { UserRoundPlus } from "lucide-react";

export const Register = () => {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Tasks - Register";
  }, []);

  const inputs: IInputes[] = [
    {
      inputTitle: "Name",
      placeholder: "Your name",
      ref: nameRef
    },
    {
      inputTitle: "Email",
      placeholder: "seu@exemplo.com",
      type: "email",
      ref: emailRef,
    },
    {
      inputTitle: "Password",
      placeholder: "••••••••",
      type: "password",
      ref: passwordRef,
    },
  ];

  const handleRegister = async () => {
    const name = nameRef.current?.value || "";
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    try {
      await registerUser(name, email, password);
      alert("Cadastro realizado! Faça login.");
      navigate("/login");
    } catch (err: any) {
      alert("Erro ao cadastrar: " + err.message);
    }
  };

  return (
    <TemplateForms
      iconTitlePage={UserRoundPlus}
      title="Register"
      inputs={inputs}
    >
      <Link to="/login">
        <Button variant="soft">Back to Login</Button>
      </Link>
      <Button variant="soft" onClick={handleRegister}>
        Register
      </Button>
    </TemplateForms>
  );
};
