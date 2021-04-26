import { Component } from "@angular/core";

@Component({
  selector: "app-combobox",
  template: `
    <ejs-combobox width="240" [dataSource]="data"></ejs-combobox>
  `,
  styles: []
})
export class ComboboxComponent {
  data: string[] = ["Cricket", "Football", "Rugby", "Snooker", "Tennis"];
}
