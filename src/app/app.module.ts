import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { DropdownComponent } from "./components/dropdown.component";
import { DatePickerComponent } from "./components/datepicker.component";
import { MultiselectComponent } from "./components/multiselect.component";
import { TextBoxComponent } from "./components/text-box.component";
import { GridComponent } from "./components/grid.component";
import { ToastComponent } from "./components/toast.component";
import { ChartComponent } from "./components/chart.component";
import { CheckboxComponent } from "./components/checkbox.component";
import { ComboboxComponent } from "./components/combobox.component";
import { DialogComponent } from "./components/dialog.component";
import { TreeGridComponent } from "./components/tree-grid.component";
import { SwitchComponent } from "./components/switch.component";
import { RadioButtonComponent } from "./components/radio-button.component";
import { NumericTextBoxComponent } from "./components/numeric-text-box.component";
import { ListViewComponent } from "./components/list-view.component";

import {
  ComboBoxModule,
  DropDownListModule
} from "@syncfusion/ej2-angular-dropdowns";
import { ChartModule } from "@syncfusion/ej2-angular-charts";
import { CheckBoxModule } from "@syncfusion/ej2-angular-buttons";
import { DatePickerModule } from "@syncfusion/ej2-angular-calendars";
import { DialogModule } from "@syncfusion/ej2-angular-popups";

const routes: Routes = [
  { path: "chart", component: ChartComponent },
  { path: "checkbox", component: CheckboxComponent },
  { path: "combobox", component: ComboboxComponent },
  { path: "datepicker", component: DatePickerComponent },
  { path: "dialog", component: DialogComponent },
  { path: "dropdown", component: DropdownComponent },
  { path: "grid", component: GridComponent },
  { path: "listview", component: ListViewComponent },
  { path: "multiselect", component: MultiselectComponent },
  { path: "numerictextbox", component: NumericTextBoxComponent },
  { path: "radiobutton", component: RadioButtonComponent },
  { path: "switch", component: SwitchComponent },
  { path: "textbox", component: TextBoxComponent },
  { path: "toast", component: ToastComponent },
  { path: "treegrid", component: TreeGridComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DropDownListModule,
    ChartModule,
    CheckBoxModule,
    ComboBoxModule,
    DatePickerModule,
    DialogModule
  ],
  declarations: [
    AppComponent,
    GridComponent,
    ChartComponent,
    CheckboxComponent,
    ComboboxComponent,
    DatePickerComponent,
    DialogComponent,
    DropdownComponent,
    GridComponent,
    ListViewComponent,
    MultiselectComponent,
    NumericTextBoxComponent,
    RadioButtonComponent,
    SwitchComponent,
    TextBoxComponent,
    ToastComponent,
    TreeGridComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
