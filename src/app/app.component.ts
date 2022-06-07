import { Component } from '@angular/core';
import { SpinnerService } from './core/services/spinner/spinner.service';
import { ToasterService } from './core/services/toaster/toaster.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kashierProducts';
  message:string =''
  constructor(
    public spinnerService: SpinnerService,
    public toasterServices :ToasterService
    ) {
      this.toasterServices.message$.subscribe(res=>{
      console.log("🚀 ~ res", res)
      this.message =res
        
      })
    }

  

}
