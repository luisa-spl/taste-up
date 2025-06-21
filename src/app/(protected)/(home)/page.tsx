import { Button } from "@/components/ui/button";

export default function Home() {
  const hasItems: boolean = false;

  return (
    <>
      {hasItems ? (
        <></>
      ) : (
        <div className="flex flex-col justify-center items-center gap-4 p-4 min-h-full w-full">
          <p>Você ainda não adicionou nenhum item ao seu cardápio.</p>
          <Button>Adicionar item</Button>
        </div>
      )}
    </>
  );
}
