import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user/user.service';


@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService: UserService ) {
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email, Validators.email, Validators.pattern('^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$')]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
    });
  }

  submit(){
    if(this.form.valid){
      console.log(this.form.value);



      let reqObj={
        email:this.form.value.email
      }
      this.userService.forgotService(reqObj).subscribe((res) => {
        console.log(res);
      }, (error) => {
        console.log(error);
      })
    }
  }

  ngOnInit(): void {
  }

}
