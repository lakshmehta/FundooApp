import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup;


  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.registerForm =this.formBuilder.group({
      firstname: ['', Validators.required, Validators.minLength(3),Validators.maxLength(10), Validators.pattern('^[A-Z]+[a-zA-Z]{2,}$')],
      lastName: ['',Validators.required, Validators.minLength(3),Validators.maxLength(10),Validators.pattern('^[A-Z]+[a-zA-Z]{2,}$')],
      email: ['',[Validators.required, Validators.email, Validators.email, Validators.pattern('^([a-z]+[0-9a-z-!$%+&_.]*){3,15}@[a-z0-9]{1,8}[.]*([a-z]{2,4})*.[a-z]{2,4}$')]],
      password: ['',[Validators.required,Validators.minLength(8),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
      confirmpassword: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  get f() { return this.registerForm.controls; }
  Submit() {
    if (this.registerForm.valid){
      console.log(this.registerForm.value);

      let reqObj = {
        firstName : this.registerForm.value.firstname,
        lastName : this.registerForm.value.lastName,
        email : this.registerForm.value.email,
        password : this.registerForm.value.password,
        service : "advance"
      }
      console.log(reqObj);
      this.userService.registerService(reqObj).subscribe((res) =>{
        console.log(res);
      },(error) => {
        console.log(error);
      })
    }

  }
}
