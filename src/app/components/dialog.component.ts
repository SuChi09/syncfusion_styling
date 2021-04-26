import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: "app-dialog",
  template: `
    <button
      class="e-control e-btn"
      style="position: absolute;"
      id="targetButton"
      (click)="onOpenDialog($event)"
    >
      Open Dialog
    </button>
    <div #container class="root-container"></div>
    <ejs-dialog
      id="dialog"
      #ejDialog
      [visible]="false"
      content="This is a Dialog with content"
      [target]="targetElement"
      width="250px"
    >
    </ejs-dialog>
  `,
  styles: [
    `
      html,
      body,
      #dialog-container {
        display: block;
        height: 100%;
        margin: 0;
        overflow: hidden;
        width: 100%;
      }
    `
  ]
})
export class DialogComponent {
  @ViewChild("ejDialog") ejDialog: DialogComponent;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;

  targetElement: HTMLElement;

  ngOnInit() {
    this.initilaizeTarget();
  }

  initilaizeTarget: any = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  };

  onOpenDialog = function(event: any): void {
    this.ejDialog.show();
  };
}
