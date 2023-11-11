import { Test, TestingModule } from '@nestjs/testing';
import { LibrosController } from './libros.controller';
import { LibrosService } from './libros.service';

describe('LibrosController', () => {
  let controller: LibrosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LibrosController],
      providers: [LibrosService],
    }).compile();

    controller = module.get<LibrosController>(LibrosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
