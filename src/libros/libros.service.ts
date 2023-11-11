import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { Libro } from './schemas/libro.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class LibrosService {

  constructor(
    @InjectModel(Libro.name)
    private libroModel: Model<Libro>
  ) {}

  create(createLibroDto: CreateLibroDto) {
    return 'This action adds a new libro';
  }

  findAll() {
    return `This action returns all libros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
