import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from 'src/student';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public mystudent:Student=new Student();
  Result:any;
 constructor(private http:HttpClient){} 

onsubmit()
{console.log(this.mystudent);
    let res=this.http.post(
      "http://localhost:7803/stu/add",this.mystudent,
      {responseType:'text' as 'json'}
    );
    res.subscribe(
      data=>{
         this.Result=data;
         this.mystudent=new Student();
      }
    );
}
}
