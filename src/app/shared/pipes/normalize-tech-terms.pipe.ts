import { Pipe } from '@angular/core';

@Pipe({
  name: 'normalizeTechTerms'
})

export class NormalizeTechTermsPipe {
  transform(value: string): string {
    return value === value.toUpperCase() ? value : value.toLowerCase();
  }
} 