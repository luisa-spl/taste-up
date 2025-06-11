import { InputError } from '@/components/commons/inputError';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import GoogleIcon from '../../../../public/svg/google-icon-logo.svg';
import { login } from './actions';

const schema = z.object({
    email: z.string().email('Digite um e-mail válido.'),
    password: z.string().min(8, 'A senha deve conter no mínimo 8 dígitos'),
  });
 
type LogInDataFields = z.infer<typeof schema>;

export function LoginForm() {
  const { handleSubmit, register, formState: { errors } } = useForm<LogInDataFields>({
    resolver: zodResolver(schema),
  });
  
  return (
    <form className={cn("flex flex-col gap-6")} onSubmit={handleSubmit(login)}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Acesse sua conta</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Coloque seu e-mail abaixo para fazer login
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
          {errors.email?.message && <InputError message={errors.email.message} />}
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </a>
          </div>
          <Input id="password" type="password" {...register("password")} />
          {errors.password?.message && <InputError message={errors.password.message} />}
        </div>
        <Button type="submit" className="w-full">
          Login
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
        Não tem uma conta?{" "}
        <a href="/cadastro" className="underline underline-offset-4">
          Cadastre-se
        </a>
      </div>
    </form>
  )
}