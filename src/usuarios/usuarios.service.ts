import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario } from './schemas/usuario.schema';
import { UsuarioDto } from './dto/usuario.dto';
import { ObjectId } from 'mongodb';
import { UsuarioMapper } from './mapper/usuario.mapper';

@Injectable()
export class UsuariosService {

  constructor(
    @InjectModel(Usuario.name)
    private usuarioModel: Model<Usuario>
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioDto> {
    const usuarioPorCrear : Usuario = UsuarioMapper.toSchema(createUsuarioDto);
    const resultado : Usuario = await this.usuarioModel.create(usuarioPorCrear);
    const usuarioCreado : UsuarioDto = UsuarioMapper.toDto(resultado);
    return usuarioCreado;
  }

  async findAll(): Promise<UsuarioDto[]> {
    const usuarios : Usuario[] = await this.usuarioModel.find().populate('libros');
    const dtos : UsuarioDto[] = UsuarioMapper.toDtoList(usuarios);
    return dtos;
  }

  async findOne(id: string): Promise<UsuarioDto> {
    const objectId : ObjectId = new ObjectId(id);
    const usuario : Usuario = await this.usuarioModel.findOne({ _id: objectId });
    return UsuarioMapper.toDto(usuario);
  }

  async retirarLibro(id: string, libroId: string): Promise<UsuarioDto> {
    const objectId : ObjectId = new ObjectId(id);
    const usuario : Usuario = await this.usuarioModel.findOne({ _id: objectId });
    const librosActuales = usuario.libros as ObjectId[];
    librosActuales.push(new ObjectId(libroId));

    // FLUJO CON UPDATE ONE
    await this.usuarioModel.updateOne({ _id: objectId }, { libros: librosActuales });

    // FLUJO CON REPLACE ONE
    // usuario.libros = librosActuales;
    // await this.usuarioModel.replaceOne({ _id: objectId }, usuario);

    const usuarioActualizado : Usuario = await this.usuarioModel.findOne({ _id: objectId });
    return UsuarioMapper.toDto(usuarioActualizado);
  }

  async devolverLibro(id: string, libroId: string): Promise<UsuarioDto> {
    const objectId : ObjectId = new ObjectId(id);
    const usuario : Usuario = await this.usuarioModel.findOne({ _id: objectId });
    const librosAnteriores = usuario.libros as ObjectId[];
    const librosActuales = librosAnteriores.filter((libro) => {
      return libro.toString() !== libroId;
    });
    // FLUJO CON UPDATE ONE
    await this.usuarioModel.updateOne({ _id: objectId }, { libros: librosActuales });

    // FLUJO CON REPLACE ONE
    // usuario.libros = librosActuales;
    // await this.usuarioModel.replaceOne({ _id: objectId }, usuario);

    const usuarioActualizado : Usuario = await this.usuarioModel.findOne({ _id: objectId });
    return UsuarioMapper.toDto(usuarioActualizado);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
