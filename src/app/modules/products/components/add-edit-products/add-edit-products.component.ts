import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IModal } from 'src/app/shared/components/modal/interface/modal.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-edit-products',
  templateUrl: './add-edit-products.component.html',
  styleUrls: ['./add-edit-products.component.scss']
})
export class AddEditProductsComponent implements OnInit {

  productForm = new FormGroup({
    name: new FormControl('', Validators['required']),
    type: new FormControl('', Validators['required']),
    category: new FormControl('', Validators['required']),
    isSub: new FormControl(''),
    ref_id: new FormControl(''),
    password: new FormControl('', Validators['required']),
    fees_egp: new FormControl('', Validators['required']),
    fess_prec: new FormControl('', Validators['required']),

  })


  modalOptions: IModal
  showPassword: boolean = false;

  constructor(
    private productService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {

  }

  get getID() {

    return this.route.snapshot.params.id
  }

  ngOnInit(): void {
    if (this.getID)
      this.getProduct(this.getID)

  }

  togglePassword() {
    this.showPassword = !this.showPassword
  }

  getProduct(id) {
    this.productService.getProduct(id).subscribe(res => {
      this.productForm.patchValue(res)
    })
  }

  addProduct(payload) {
    this.productService.addProduct(payload).subscribe(res => {
      this.router.navigateByUrl('')
    })
  }

  editProduct(id, payload) {
    this.productService.editProduct(id, payload).subscribe(res => {
      if (res) 
        this.router.navigateByUrl('')
    })
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe(res => {
      this.router.navigateByUrl('')
    })
  }

  action_delete() {

    this.modalType(
      `Delete "Product ${this.getID}" ?`,
      "Are you sure you want to delete product? Once deleted, you won't be able to access it again.",
      'Delete',
      '#C40000'
    )
  }

  cancel() {
    if (this.getID)
      this.getProduct(this.getID)
    else
      this.productForm.reset()
  }

  discard(event) {
    if (event)
      this.modalOptions.showModal = false
  }

  modalType(header = 'Save Changes?', message = 'Are you sure you want to save changes made?', action = 'Save', color = '#00BCB4') {
    this.modalOptions = {
      showModal: true,
      header: header,
      message: message,
      actionName: action,
      color: color,
      showDiscardButton: true,
    }
  }


  onSubmit() {
    if (this.getID)
      this.modalType('Update Changes', 'Are you sure you want to update changes made?', 'Update')

    else
      this.modalType()
  }

  action(e) {

    switch (e) {
      case 'Update': {
        this.editProduct(this.getID, this.productForm.value);
        break;
      }
      case 'Delete': {
        this.deleteProduct(this.getID)
        break;
      }
      default: {
        this.addProduct(this.productForm.value)
        break;
      }
    }

  }
}
