import Readme from "@/components/projetos/Readme";
import Cabecalho from "@/components/shared/Cabecalho";
import CarrosselImagens from "@/components/shared/CarrosselImagens";
import Container from "@/components/shared/Container";
import Tecnologias from "@/components/tecnologia/Tecnologias";
import { obterReadme } from "@/functions/github";
import {  obterProjetos } from "@/functions/projetos";

export default async function PaginaProjeto(props: {params: Promise<{id: number}>}) {

  const {id} = await props.params;
  const projeto = await obterProjetos(id);
  if(!projeto) return null;
  
  const readme = await obterReadme(projeto.todos[id-1].repositorio);

  return (
    <div className="bg-black h-screen">
      <Cabecalho />
      <Container className="py-7 flex flex-col gap-10">
        <h1 className="text-white text-3xl font-bold">{projeto.todos[id-1].nome}</h1>
        <div className="flex flex-col items-center">
        <CarrosselImagens imagens={projeto.todos[id-1].imagens.slice(1)} />
        </div>
        <Tecnologias lista={projeto.todos[id-1].tecnologias} />
        <Readme markdown={readme} />
      </Container>
    </div>
  );
}