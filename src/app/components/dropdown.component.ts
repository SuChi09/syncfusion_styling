import { Component, Input } from "@angular/core";

@Component({
  selector: "app-dropdown",
  template: `
    <ejs-dropdownlist id="ddlelement" [dataSource]="data"></ejs-dropdownlist>
  `,
  styles: []
})
export class DropdownComponent {
  public data: string[] = ["Snooker", "Tennis", "Cricket", "Football", "Rugby"];
}
