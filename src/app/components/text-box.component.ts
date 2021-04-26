import { Component } from "@angular/core";

@Component({
  selector: "app-text-box",
  template: `
    <input
      class="e-input"
      type="text"
      style="width: 240px"
      placeholder="Enter Name"
    />
  `,
  styles: []
})
export class TextBoxComponent {}
