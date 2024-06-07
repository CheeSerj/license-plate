import {Component, Input} from '@angular/core';

@Component({
  selector: 'lib-license-plate',
  templateUrl: './license-plate.html',
  styleUrls: ['./license-plate.scss'],
})
export class LicensePlateComponent {
  private _licensePlate: string = '';

  @Input()
  public set licensePlate(value: string) {
    const pattern = /^[А-Я]{1}\d{3}[А-Я]{2}\d{2,3}$/;
    if (pattern.test(value.toUpperCase())) {
      this._licensePlate = value.toUpperCase();
    } else {
      console.error('Гос.номер введен с ошибкой. Формат ввода: "А123АА45"');
    }
  }

  public get licensePlate(): string {
    return this._licensePlate;
  }
}
