import { Module } from '@nestjs/common';
import { TecnologiasController } from './tecnologias.controller';
import { TecnologiasProvider } from './tecnologias.prisma';
import { DbModule } from 'src/db/db.module';

@Module({
  controllers: [TecnologiasController],
  providers: [TecnologiasProvider],
  imports: [DbModule]
})
export class TecnologiaModule {}
