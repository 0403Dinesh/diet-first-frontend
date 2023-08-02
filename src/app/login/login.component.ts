import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userName:string="";
  password:string="";
  apiRes: Object | undefined;
  constructor(private router:Router,private http:HttpClient){}
  loginSubmit(){
    console.log("button clicked");

    console.log(this.userName);
    console.log(this.password);
    let res=this.http.get("http://localhost:8080/checkUser?userName="+this.userName+"&password="+this.password);
      res.subscribe(
        data=>this.apiRes=data
      );
    this.router.navigate(["/Home"]);
  }
}
