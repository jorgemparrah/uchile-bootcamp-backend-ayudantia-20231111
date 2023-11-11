import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: "libro" })
export class Libro {

  @Prop({ name: "titulo" })
  titulo: string;

  @Prop({ name: "editorial", type: Object, raw: {
    nombre: { type: String },
    telefono: { type: String },
    correo: { type: String }
  }})
  editorial: Record<string, string>;

  @Prop({ name: "autores", raw: {
    nombre: { type: String },
    apellido: { type: String }
  }})
  autores: Record<string, string>[];

  @Prop({ name: "cantidad" })
  cantidad: number;

}

export const LibroSchema = SchemaFactory.createForClass(Libro);
