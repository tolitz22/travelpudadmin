import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from  'src/app/@core/services/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router: Router) { }
  status:any;
  updatedStatus:any;
  isConfirm:boolean = false;
  
  ngOnInit(): void {
    window.localStorage.removeItem("isLoggedIn");
    if (this.loginService.isLogged()) {      
      this.router.navigateByUrl('/pages');
    }  
  }

  login = (email:string, password:string, event:any) => {
    event.preventDefault();
    this.loginService.login(email,password).subscribe((data)=>{
     if(data.resultValue.user){
      //  alert('success')
       this.loginService.setToken('true');
       this.router.navigateByUrl('/pages');
     }else{
       alert('Incorrect email or password')
     } 
    console.log(data);
	},(err:any)=>{
			alert('cant connect to the server');
	});

	
}

}
