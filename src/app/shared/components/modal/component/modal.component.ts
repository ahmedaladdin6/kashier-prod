import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IModal } from '../interface/modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  
  @Input() options: IModal
  @Output() discard = new EventEmitter()
  @Output() action = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  close() {
    this.discard.emit(true)
  }

  save() {
    this.action.emit(this.options.actionName)
  }
}
