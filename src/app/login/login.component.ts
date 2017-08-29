import {Component, OnInit, NgModule} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

// import {RouterModule} from '@angular/router';
// import {CommonModule} from "@angular/common";
// import {LoginComponent} from './login.component'





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formModel: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formModel = this.fb.group({
      username: [(''), Validators.required],
      password: [(''), Validators.required]
    });
  }
  ngOnInit() {
  }
  onSubmit() {
    /* 验证通过,进行下一步处理 */
    if (this.formModel.valid) {
      console.log(this.formModel.value);
    }
  }

}
//
// @NgModule({
//   imports:[
//     CommonModule,
//     RouterModule.forChild([
//       {path:'',component:LoginComponent}
//     ])
//   ],
//   declarations:[LoginComponent]
// })

