import { Test, TestingModule } from '@nestjs/testing';
import { ResidoCoreController } from './resido-core.controller';
import { ResidoCoreService } from './resido-core.service';

describe('ResidoCoreController', () => {
  let residoCoreController: ResidoCoreController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ResidoCoreController],
      providers: [ResidoCoreService],
    }).compile();

    residoCoreController = app.get<ResidoCoreController>(ResidoCoreController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(residoCoreController.getHello()).toBe('Hello World!');
    });
  });
});
