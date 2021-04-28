import { Component } from "@angular/core";
import { DialogUtility } from "@syncfusion/ej2-popups";

@Component({
  selector: "app-combobox",
  template: `
    <button
      class="e-control e-btn"
      id="targetButton"
      (click)="onOpenDialog($event)"
    >
      Open Confirm Dialog
    </button>
  `,
  styles: []
})
export class ConfirmDialogComponent {
  onOpenDialog = function(event: any): void {
    DialogUtility.confirm("This is a Confirmation Dialog!");
  };
}
