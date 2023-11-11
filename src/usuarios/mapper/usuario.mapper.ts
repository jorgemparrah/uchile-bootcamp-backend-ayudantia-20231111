import { ObjectId } from "mongodb";
import { CreateUsuarioDto } from "../dto/create-usuario.dto";
import { UsuarioDto } from "../dto/usuario.dto";
import { Usuario } from "../schemas/usuario.schema";

export class UsuarioMapper {

  static toDto(schema: Usuario): UsuarioDto {
    const dto : UsuarioDto = new UsuarioDto();
    dto.id = schema["_id"].toString();
    dto.rut = schema.rut;
    dto.nombre = schema.nombre;
    dto.correo = schema.correo;
    if (schema.libros.length > 0) {
      if (schema.libros[0] instanceof ObjectId) {
        dto.idLibros = schema.libros.map((libro) => {
          return libro.toString();
        });
      } else {
        dto.libros = schema.libros;
      }
    }
    return dto;
  }

  static toDtoList(schemas: Usuario[]): UsuarioDto[] {
    return schemas.map((schema) => {
      return UsuarioMapper.toDto(schema);
    })
  }

  static toSchema(dto: CreateUsuarioDto): Usuario {
    const schema : Usuario = new Usuario();
    schema.rut = dto.rut;
    schema.nombre = dto.nombre;
    schema.correo = dto.correo;
    schema.libros = [];
    return schema;
  }

}
