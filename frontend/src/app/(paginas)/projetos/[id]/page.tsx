import Readme from "@/components/projetos/Readme";
import Cabecalho from "@/components/shared/Cabecalho";
import CarrosselImagens from "@/components/shared/CarrosselImagens";
import Container from "@/components/shared/Container";
import ConteudoMD from "@/components/shared/ConteudoMD";
import Tecnologias from "@/components/tecnologia/Tecnologias";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { obterReadme } from "@/functions/github";
import { obterProjeto, obterProjetos } from "@/functions/projetos";

export default async function PaginaProjeto(props: {params: Promise<{id: number}>}) {

  const {id} = await props.params;
  const projeto = await obterProjetos(id);
  
  if(!projeto) return null;
  
  const readme = await obterReadme(projeto.todos[id].repositorio);
  console.log("readme", readme);

  return (
    <div className="bg-black h-screen">
      <Cabecalho />
      <Container className="py-7 flex flex-col gap-10">
        <h1 className="text-white text-3xl font-bold">{projeto.todos[id].nome}</h1>
        <div className="flex flex-col items-center">
        <CarrosselImagens imagens={projeto.todos[id].imagens.slice(1)} />
        </div>
        <Tecnologias lista={projeto.todos[id].tecnologias} />
        <Readme markdown={readme} />
      </Container>
    </div>
  );
}