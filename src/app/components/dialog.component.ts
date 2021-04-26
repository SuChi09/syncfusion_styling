import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

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
      header="Dialog"
      [visible]="false"
      content="This is a Dialog with button and primary button"
      [target]="targetElement"
      width="250px"
      [buttons]="buttons"
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
export class DialogComponent implements OnInit {
  @ViewChild("ejDialog") ejDialog: DialogComponent;
  @ViewChild("container", { read: ElementRef }) container: ElementRef;
  targetElement: HTMLElement;

  ngOnInit() {
    this.initilaizeTarget();
  }

  initilaizeTarget: any = () => {
    this.targetElement = this.container.nativeElement.parentElement;
  };

  hideDialog: any = () => {
    this.ejDialog.hide();
  };

  buttons: Object = [
    {
      click: this.hideDialog.bind(this),
      buttonModel: {
        content: "OK",
        isPrimary: true
      }
    },
    {
      click: this.hideDialog.bind(this),
      buttonModel: {
        content: "Cancel"
      }
    }
  ];

  onOpenDialog = function(event: any): void {
    this.ejDialog.show();
  };
}
