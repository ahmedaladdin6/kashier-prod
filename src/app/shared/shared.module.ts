import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/component/modal.component';


const components =[ModalComponent]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports:[...components]
})
export class SharedModule { }
