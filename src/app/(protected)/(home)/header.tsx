import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Header() {
  return (
    <header className="flex items-end justify-start p-12 pl-20 pb-4 gap-8 w-full h-48 bg-[url(/img/sushi-bg.jpg)] bg-cover bg-center">
      <Avatar className="size-42 -mb-24 border-4 border-background">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <nav className="flex flex-col gap-3 text-3xl font-semibold">
        <h2>Vip Sushi</h2>
        <ul className="flex gap-4">
          <Badge asChild variant="secondary">
            <li><a href="#" className="text-sm">Perfil</a></li>
          </Badge>
          <Badge asChild variant="secondary">
            <li><a href="#" className="text-sm">Cardápio</a></li>
          </Badge>
        </ul>
      </nav>
    </header>
  )
}