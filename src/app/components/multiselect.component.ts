import { Component } from "@angular/core";

@Component({
  selector: "app-multiselect",
  template: `
    <ejs-multiselect width="440" [dataSource]="data"></ejs-multiselect>
  `,
  styles: []
})
export class MultiselectComponent {
  data: string[] = [
    "Badminton",
    "Basketball",
    "Cricket",
    "Football",
    "Golf",
    "Gymnastics",
    "Hockey",
    "Rugby",
    "Snooker",
    "Tennis"
  ];
}
