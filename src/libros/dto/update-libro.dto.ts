import { PartialType } from '@nestjs/swagger';
import { CreateLibroDto } from './create-libro.dto';

export class UpdateLibroDto extends PartialType(CreateLibroDto) {}
