import { Test, TestingModule } from '@nestjs/testing';
import { AuthCenterController } from './auth-center.controller';
import { AuthCenterService } from './auth-center.service';

describe('AuthCenterController', () => {
  let authCenterController: AuthCenterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AuthCenterController],
      providers: [AuthCenterService],
    }).compile();

    authCenterController = app.get<AuthCenterController>(AuthCenterController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(authCenterController.getHello()).toBe('Hello World!');
    });
  });
});
