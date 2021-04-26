import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dropdown",
  template: `
    <ejs-dropdownlist id="ddlelement" [dataSource]="data"></ejs-dropdownlist>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class DropdownComponent {
  public data: string[] = ["Snooker", "Tennis", "Cricket", "Football", "Rugby"];
}
