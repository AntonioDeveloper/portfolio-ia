import Link from "next/link";
import Container from "./Container";
import { Laugh } from 'lucide-react';
import Menu from "./Menu";

export default function Cabecalho() {
  return (
    <header className="flex items-center h-16 w-full">
      <Container className="flex-1 flex justify-between items-center">
        <div className="flex gap-10 items-center">
          <Link href="/" className="hidden sm:block">
            <Laugh />
          </Link>
          <Menu />
        </div>
        <div className="hidden sm:flex items-center">
        <Link href="https://www.linkedin.com/in/antoniojr-dev/" target="_blank" className="bg-slate-950 rounded-full px-7 py-1 text-white text-sm font-bold">Perfil</Link>
        </div>
      </Container>
    </header>
  )
}