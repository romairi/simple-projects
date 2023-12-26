import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix'
})
export class PrefixPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value && (typeof value === 'string')) {

      if (args.length > 1) {
        return args[0] + " " + value + " " + args[1];
      }

      if (args.length > 0) {
        return args[0] + " " + value;
      }

      return "My " + value;
    }

    return (null);
  }

}
