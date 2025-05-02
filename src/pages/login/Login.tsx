import { Button } from "@radix-ui/themes";
import { useEffect, useRef } from "react";
import {
  TemplateForms,
  IInputes,
} from "../../shared/components/templateForms/TemplateForms";
import { useNavigate, Link } from "react-router-dom";
import { useUser } from "../../context/userContext/UserContext";
import { UserRound } from "lucide-react";

export const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.title = "Tasks - Login";
  }, []);

  const inputs: IInputes[] = [
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

  const handleLogin = async () => {
    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";
    const ok = await login(email, password);
    if (ok) navigate("/");
    else alert("E-mail ou senha inválidos.");
  };

  return (
    <TemplateForms iconTitlePage={UserRound} title="Login" inputs={inputs}>
      <Link to="/register">
        <Button variant="soft">Register</Button>
      </Link>
      <Button variant="soft" onClick={handleLogin}>
        Login
      </Button>
    </TemplateForms>
  );
};
