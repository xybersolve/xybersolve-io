import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'normalizeTechTerms'
})

export class NormalizeTechTermsPipe implements PipeTransform {
  transform(value: string): string {
    return value === value.toUpperCase() ? value : value.toLowerCase();
  }
}
