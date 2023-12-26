import { Pipe, PipeTransform } from '@angular/core';
import { OurFormValue } from './sandwich-order-form/sandwich-order-form.component';
import { OrderServerFormat } from 'src/types/OrderServerFormat';

@Pipe({
  name: 'convertOrderLocalToServerFormat'
})
export class ConvertOrderLocalToServerFormatPipe implements PipeTransform {

  transform(formValue: OurFormValue, ...args: unknown[]): OrderServerFormat {
    const extras: any = {
      tomatoes: formValue.extrasTomatoes,
      olives: formValue.extrasOlives,
      lettuce: formValue.extrasLettuce,
      pesto: formValue.extrasPesto,
      cucumbers: formValue.extrasCucumbers,
    };

    const filteredExtras = Object.keys(extras).filter((key) => extras[key]);

    return {
      mainItem: formValue.mainItem,

      extras: filteredExtras,
      customer: {
        name: formValue.fullName,
        email: formValue.email,
        phone: formValue.phone,
        address: formValue.address,
      },
    };
  }

}
