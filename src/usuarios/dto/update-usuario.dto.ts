import { ApiProperty } from '@nestjs/swagger';

export class UpdateUsuarioDto {

  @ApiProperty({ example: '12345678-9' })
  rut: string;

  @ApiProperty({ example: 'Jorge Parra' })
  nombre: string;

  @ApiProperty({ example: 'jorge.parra@gmail.com' })
  correo: string;

}
