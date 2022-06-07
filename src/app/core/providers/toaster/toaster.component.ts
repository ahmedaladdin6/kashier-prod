import { Component, Input, OnInit } from '@angular/core';
import { ToasterService } from 'src/app/core/services/toaster/toaster.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {

  @Input() message:string ='';

  constructor(private toasterServices:ToasterService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.toasterServices.closeMessage();
    }, 5000);
  }

  close(){
    this.toasterServices.closeMessage()
  }
}
