import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <header className="flex items-center justify-start p-12 gap-8 absolute top-0 w-full h-32 bg-chart-2">
      <Avatar className="size-32 -mb-28">
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <nav>
        <ul className="flex">
          <li><a href="#">Perfil</a></li>
          <li><a href="#">Ver cardápio</a></li>
        </ul>
      </nav>
    </header>
  )
}