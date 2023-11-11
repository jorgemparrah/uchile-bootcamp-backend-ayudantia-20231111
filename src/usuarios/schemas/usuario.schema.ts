import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ObjectId } from "mongodb";
import { Libro } from "src/libros/schemas/libro.schema";

@Schema({ collection: "usuario" })
export class Usuario {

  @Prop({ name: "rut" })
  rut: string;

  @Prop({ name: "nombre" })
  nombre: string;

  @Prop({ name: "correo" })
  correo: string;

  @Prop({ name: "libros", type: [ObjectId], ref: "Libro" })
  libros: Libro[] | ObjectId[];

}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
