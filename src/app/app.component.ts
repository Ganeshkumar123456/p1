import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'p1';
  constructor(private router: Router, private formBuilder: FormBuilder,
    private http: HttpClient) { }
    aboutDetails = this.formBuilder.group({
      to_email: new FormControl('', Validators.required),
      _subject: new FormControl(),
      _textarea: new FormControl(),
    })
sendemail()
{
const popnotifications = {
to_email: this.aboutDetails.value.to_email,
_subject: this.aboutDetails.value._subject,
_textarea: this.aboutDetails.value._textarea,
};
if(this.aboutDetails.invalid){
  alert("Invalid/Missing Credentials");
  this.aboutDetails.markAllAsTouched();
 
}
else
{
  this.http
  
  .post('http://localhost:3000/postsendemail',popnotifications)

  .subscribe((res: any) => {
    console.log("hai",res);
    alert("send successfully");
    this.clearform();
})
}
}
clearform()
{
  this.aboutDetails.reset();
}
}