import { ApiProperty } from "@nestjs/swagger";
import { LibroDto } from "src/libros/dto/libro.dto";

export class UsuarioDto {

  @ApiProperty({ example: '12345678-9' })
  id: string;

  @ApiProperty({ example: '12345678-9' })
  rut: string;

  @ApiProperty({ example: 'Jorge Parra' })
  nombre: string;

  @ApiProperty({ example: 'jorge.parra@gmail.com' })
  correo: string;

  @ApiProperty()
  idLibros: string[];

  @ApiProperty()
  libros: LibroDto[];

}
