import React, { useState } from "react";
import { Button, TextField, Flex, Dialog } from "@radix-ui/themes";

interface IForm {
  onClose: () => void;
}
const LoginForm = ({ onClose }: IForm) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction='column' gap='3' align='center'>
        <TextField.Root style={{ width: '100%' }} placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
        <TextField.Root style={{ width: '100%' }} placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button variant="solid" size='2' type="submit" style={{ width: '100px' }}>Login</Button>
      </Flex>
    </form>
  );
};

const RegisterForm = ({ onClose }: IForm) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Registering with:", { email, password });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction='column' gap='3' align='center'>
        <TextField.Root style={{ width: '100%' }} size="1" placeholder="Enter your email..." value={email} onChange={(e) => setEmail(e.target.value)} required />
        <TextField.Root style={{ width: '100%' }} size="1" placeholder="Enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} required />
        <Button variant="solid" size='2' type="submit" style={{ width: '100px' }}>Register</Button>
      </Flex>
    </form>
  );
};

export const AuthModal = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <Flex gap='2'>
      <Dialog.Root open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <Dialog.Trigger>
          <Button variant="outline" onClick={() => setIsLoginOpen(true)}>Login</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Flex justify='end'>
            <Dialog.Close>
              <Button variant="soft" color="gray">Close</Button>
            </Dialog.Close>
          </Flex>
          <Flex pb='3' direction='column' align='start'>
            <Dialog.Title>Login</Dialog.Title>
            <Dialog.Description>
              Please enter your email and password to log in.
            </Dialog.Description>
          </Flex>
          <LoginForm onClose={() => setIsLoginOpen(false)} />
        </Dialog.Content>
      </Dialog.Root>

      <Dialog.Root open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
        <Dialog.Trigger >
          <Button variant="solid" onClick={() => setIsRegisterOpen(true)}>Register</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Flex justify='end'>
            <Dialog.Close>
              <Button variant="soft" color="gray">Close</Button>
            </Dialog.Close>
          </Flex>
          <Flex pb='3' direction='column' align='start'>
            <Dialog.Title>Register</Dialog.Title>
            <Dialog.Description>
              Please enter your email and password to create an account.
            </Dialog.Description>
          </Flex>
          <RegisterForm onClose={() => setIsRegisterOpen(false)} />
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );
};

export default AuthModal;
