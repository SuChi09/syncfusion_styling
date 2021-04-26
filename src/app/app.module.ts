import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { DropdownComponent } from "./dropdown.component";
import { DatePickerComponent } from "./datepicker.component";

import { DropDownListModule } from "@syncfusion/ej2-angular-dropdowns";

const routes: Routes = [
  { path: "dropdown", component: DropdownComponent },
  { path: "datepicker", component: DatePickerComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    DropDownListModule
  ],
  declarations: [AppComponent, DropdownComponent, DatePickerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
