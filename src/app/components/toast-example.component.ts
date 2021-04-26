import { Component, ViewChild } from "@angular/core";
import { ToastComponent } from "@syncfusion/ej2-angular-notifications";

@Component({
  selector: "app-toast",
  template: `
    <ejs-toast #element (created)="onCreate($event)">
      <ng-template #title>
        <div>Sample Toast Title</div>
      </ng-template>
      <ng-template #content>
        <div>Sample Toast Content</div>
      </ng-template>
    </ejs-toast>
  `,
  styles: []
})
export class ToastExampleComponent {
  @ViewChild("element") element: ToastComponent;

  onCreate() {
    this.element.show();
  }
}
