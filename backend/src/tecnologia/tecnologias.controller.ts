import { Controller, Get } from '@nestjs/common';
import {Tecnologia} from "@core"
import { TecnologiasProvider } from './tecnologias.prisma';

@Controller('tecnologias')
export class TecnologiasController {
  constructor(private readonly prisma: TecnologiasProvider) {}


  @Get()
  async obterTodas(): Promise<Tecnologia[]> {
    return this.prisma.obterTodas();
  }

  @Get("destaques")
  async obterDestaques(): Promise<Tecnologia[]> {
    return this.prisma.obterDestaques();
  }
}
