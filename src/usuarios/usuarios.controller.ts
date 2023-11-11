import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuarioDto } from './dto/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  async create(@Body() createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDto> {
    const resultado : UsuarioDto = await this.usuariosService.create(createUsuarioDto);
    return resultado;
  }

  @Get()
  async findAll(): Promise<UsuarioDto[]> {
    const resultado : UsuarioDto[] = await this.usuariosService.findAll();
    return resultado;
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UsuarioDto> {
    const resultado : UsuarioDto = await this.usuariosService.findOne(id);
    return resultado;
  }

  @Patch(':id/retirar-libro/:libroId')
  async retirarLibro(@Param('id') id: string, @Param('libroId') libroId: string): Promise<UsuarioDto> {
    const resultado : UsuarioDto = await this.usuariosService.retirarLibro(id, libroId);
    return resultado;
  }

  @Patch(':id/devolver-libro/:libroId')
  async devolverLibro(@Param('id') id: string, @Param('libroId') libroId: string): Promise<UsuarioDto> {
    const resultado : UsuarioDto = await this.usuariosService.devolverLibro(id, libroId);
    return resultado;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }
}
