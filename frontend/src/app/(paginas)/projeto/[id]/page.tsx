import Cabecalho from "@/components/shared/Cabecalho";
import CarrosselImagens from "@/components/shared/CarrosselImagens";
import Container from "@/components/shared/Container";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { obterProjeto, obterProjetos } from "@/functions/projetos";

export default async function PaginaProjeto(props: {params: Promise<{id: number}>}) {

  const {id} = await props.params;
  const projeto = await obterProjetos(id);

  return projeto ? (
    <div className="bg-black h-screen">
      <Cabecalho />
      <Container className="py-7 flex flex-col gap-10">
        <h1 className="text-white text-3xl font-bold">{projeto.todos[id].nome}</h1>
        <div className="flex flex-col items-center">
        <CarrosselImagens imagens={projeto.todos[id].imagens.slice(1)} />
        </div>
      </Container>
    </div>
  ) : null;
}