import { Controller, Get, Param } from '@nestjs/common';
import { Projeto } from '../../../core/src/projeto';
import { ProjetoPrisma } from './projeto.prisma';

@Controller('projeto')
export class ProjetoController {
	constructor(private readonly prisma: ProjetoPrisma) {}

	@Get()
	async obterProjetos(): Promise<Projeto[]> {
		return this.prisma.obterTodosProjetos();
	}

	@Get(':id')
	async obterPorId(@Param('id') id: string): Promise<Projeto | null> {
		return this.prisma.obterPorId(Number(id));
	}
}
