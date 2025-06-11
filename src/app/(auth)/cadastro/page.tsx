import { GalleryVerticalEnd } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GoogleIcon from '../../../public/svg/google-icon-logo.svg';
import { signup } from "./actions";

export default function SignUpPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            Acme Inc.
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <form className={cn("flex flex-col gap-6")}>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Crie sua conta</h1>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Nome</Label>
                  <Input name="name" id="name" type="text" placeholder="Joana da Silva" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" id="email" type="email" placeholder="joana@example.com" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="phone">Telefone</Label>
                  <Input name="phone" id="phone" type="tel" placeholder="(xx)xxxx-xxxx" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password">Senha</Label> 
                  <Input name="password" id="password" type="password" required />
                </div>
                <Button type="submit" formAction={signup} className="w-full">
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
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="/placeholder.svg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}

