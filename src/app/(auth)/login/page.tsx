'use client'

import { GalleryVerticalEnd } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Image from "next/image";
import GoogleIcon from '../../../../public/svg/google-icon-logo.svg';
import { login } from "./actions";

export default function LoginPage() {
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
              <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Acesse sua conta</h1>
                <p className="text-muted-foreground text-sm text-balance">
                  Coloque seu e-mail abaixo para fazer login
                </p>
              </div>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" id="email" type="email" placeholder="m@example.com" required />
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
                  <Input name="password" id="password" type="password" required />
                </div>
                <Button type="submit" formAction={login} className="w-full">
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
