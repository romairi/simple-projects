import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { SandwichService } from '../sandwich.service';
import { OrderServerFormat } from '../../types/OrderServerFormat';
import { ConvertOrderLocalToServerFormatPipe } from '../convert-order-local-to-server-format.pipe';


export interface OurFormValue {
  "mainItem": string,
  "extrasTomatoes": boolean,
  "extrasLettuce": boolean,
  "extrasOlives": boolean,
  "extrasPesto": boolean,
  "extrasCucumbers": boolean,
  "email": string,
  "phone": string,
  "fullName": string,
  "address": string,
}

@Component({
  selector: 'app-sandwich-order-form',
  templateUrl: './sandwich-order-form.component.html',
  styleUrls: ['./sandwich-order-form.component.css']
})
export class SandwichOrderFormComponent implements OnInit {
  sandwichForm: FormGroup = new FormGroup({});
  mainItemOptionsArray = ['Chicken Breast', 'Pastrame', 'Cheese'];
  extrasOptionsArr = ['Tomatoes', 'Olives', 'Lettuce', 'Pesto', 'Cucumbers'];
  //extrasOptionsConntrolsArr = new FormArray<FormControl>([]);
  //extrasOptionsConntrolsArr2 = new FormArray<FormControl>([]);
  myStr = "htttps://wwww"
  convertOrderLocalToServerFormatPipe = new ConvertOrderLocalToServerFormatPipe();



  constructor(private sandwichService: SandwichService) { }

  ngOnInit(): void {
    this.sandwichForm = new FormGroup({
      mainItem: new FormControl('', [Validators.required]),

      // extras: new FormArray([]),


      extrasTomatoes: new FormControl(false),
      extrasLettuce: new FormControl(false),
      extrasOlives: new FormControl(false),
      extrasPesto: new FormControl(false),
      extrasCucumbers: new FormControl(false),

      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^05\d{1}-\d{7}$/)]), // regex 05X-XXXXXXX
      fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(3)]),

    });

    // this.extrasOptionsConntrolsArr = this.sandwichForm.get('extras') as FormArray;
    // for (const curr of this.extrasOptionsArr) {
    //   this.extrasOptionsConntrolsArr.push(new FormControl(false, [Validators.required]));
    // }




    // this.sandwichForm.setValue({
    //   mainItem: "Pastrame",
    //   extrasTomatoes: false,
    //   extrasLettuce: true,
    //   extrasOlives: false,
    //   extrasPesto: true,
    //   extrasCucumbers: true,
    //   email: 'jd@gmail',
    //   phone: '052-3456789',
    //   fullName: 'john doe',
    //   address: 'haprachim 8 ,tel aviv'
    // });
  }

  //=========================================

  convertFormDataToOrderServerFormat(
    formValue: OurFormValue
  ): OrderServerFormat {
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



  // convertFormDataToOrderServerFormat(ourFormValue: OurFormValue): OrderServerFormat {

  //   const {
  //     extrasTomatoes: tomatoes,
  //     extrasLettuce: lettuce,
  //     extrasOlives: olives,
  //     extrasPesto: pesto,
  //     extrasCucumbers: cucumbers } = ourFormValue;

  //   const theChoseExtrasObj = {
  //     tomatoes,
  //     lettuce,
  //     olives,
  //     pesto,
  //     cucumbers
  //   }


  //   let theChoseExtrasArr = [];

  //   for (const [key, val] of Object.entries(theChoseExtrasObj)) {
  //     if (val === true) {
  //       theChoseExtrasArr.push(key);
  //     }
  //   }

  //   return {
  //     mainItem: ourFormValue.mainItem,
  //     extras: theChoseExtrasArr,
  //     customer: {
  //       name: ourFormValue.fullName,
  //       email: ourFormValue.email,
  //       phone: ourFormValue.phone,
  //       address: ourFormValue.address
  //     }
  //   }
  // }

  //=========================================
  onSubmit() {
    console.log(this.sandwichForm.value);
    // this.sandwichService.submitOrder(this.convertFormDataToOrderServerFormat(this.sandwichForm.value));

    // using our pipe
    this.sandwichService.submitOrder(this.convertOrderLocalToServerFormatPipe.transform(this.sandwichForm.value));
  }
  //=========================================

}
