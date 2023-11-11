import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LibrosModule } from './libros/libros.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:clave123@localhost:27017/biblioteca'),
    LibrosModule,
    UsuariosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
