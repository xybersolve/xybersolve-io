import { PhotographyModule } from './photography.module';

describe('PhotographyModuleModule', () => {
  let photographyModuleModule: PhotographyModule;

  beforeEach(() => {
    photographyModuleModule = new PhotographyModule();
  });

  it('should create an instance', () => {
    expect(photographyModuleModule).toBeTruthy();
  });
});
