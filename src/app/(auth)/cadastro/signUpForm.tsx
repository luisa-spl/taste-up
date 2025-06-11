import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from 'zod';
import GoogleIcon from '../../../../public/svg/google-icon-logo.svg';
import { signup } from "./actions";

const schema = z.object({
    name: z.string(),
    email: z.string().email('Digite um e-mail válido.'),
    phone: z.string().min(10, 'O telefone deve ter no mínimo 10 caracteres').max(11),
    password: z.string().min(8, 'A senha deve conter no mínimo 8 dígitos'),
  });
 
type signUpDataFields = z.infer<typeof schema>;

export function SignUpForm(){
  const { handleSubmit, register, formState: { errors } } = useForm<signUpDataFields>({
    resolver: zodResolver(schema),
  });

  return (
    <form className={cn("flex flex-col gap-6")} onSubmit={handleSubmit(signup)}>
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl font-bold">Crie sua conta</h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="name">Nome</Label>
          <Input id="name" type="text" placeholder="Joana da Silva" {...register("name")} />
          {errors.name && <span className="red">{errors.name.message}</span>}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="joana@example.com" {...register("email")} />
          {errors.email && <span className={cn("text-destructive text-xs font-semibold")}>{errors.email.message}</span>}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="phone">Telefone</Label>
          <Input id="phone" type="tel" placeholder="(xx)xxxx-xxxx" {...register("phone")}/>
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>
        <div className="grid gap-3">
          <Label htmlFor="password">Senha</Label> 
          <Input id="password" type="password" {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Ou continue com
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <Image
            src={GoogleIcon}
            width={18}
            height={18}
            alt="Google logo"
          />
          Login com Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Já possui uma conta?{" "}
        <a href="/login" className="underline underline-offset-4">
          Login
        </a>
      </div>
    </form>
  )
}