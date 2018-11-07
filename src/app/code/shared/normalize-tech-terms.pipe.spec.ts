import { NormalizeTechTermsPipe } from './normalize-tech-terms.pipe';

describe('NormalizeTechTermsPipe', () => {
  let pipe;
  
  beforeEach(() => {
    pipe = new NormalizeTechTermsPipe();
  });

  it('should leave uppercase acronyms as acronym', () => {
    expect(pipe.transform('AWS')).toEqual('AWS');
  });
  
  it('should change mixed case to lowercase', () => {
    expect(pipe.transform('JavaScript')).toEqual('javascript');
  });

});
