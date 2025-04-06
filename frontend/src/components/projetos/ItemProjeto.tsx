import { Projeto } from "@core";
import Link from "next/link";
import Image from "next/image";

export interface ItemProjetosProps {
  projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetosProps) {
  return (
    <Link href={`/projetos/${props.projeto.id}`}>
      <div 
      className="relative rounded-2xl overflow-hidden border border-zinc-800 min-w-64 min-h-64">{props.projeto.nome}
        <Image 
          src={props.projeto.imagens[0]}
          alt={props.projeto.nome}
          fill
          objectFit="object-cover"
        />
      </div>
    </Link>
)
}