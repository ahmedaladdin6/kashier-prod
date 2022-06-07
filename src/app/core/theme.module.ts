import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './providers/spinner/spinner.component';
import { ToasterComponent } from './providers/toaster/toaster.component';

const components =[SpinnerComponent,ToasterComponent]

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    ...components
  ]
})
export class ThemeModule { }
