import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-iniciopage',
  templateUrl: './iniciopage.page.html',
  styleUrls: ['./iniciopage.page.scss'],
})
export class IniciopagePage implements OnInit {

  myid: string = "";
  data = null;

   user = {
    username: "",
    password: ""
   }

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();

    this.activeroute.paramMap.subscribe(params => {

      if (navigation && navigation.extras && navigation.extras.state) {
         this.user.username = navigation.extras.state["user"]["user_email"];
         this.user.password = navigation.extras.state["user"]["user_password"];
         this.myid = JSON.stringify(navigation.extras.state);
         console.log(this.myid);
         console.log("(inicio) user: "+this.user.username);
         console.log("(inicio) pass: "+this.user.password);
      }else {
        this.myid = 'No se pudo obtener el estado como cadena';
      }
      
  });
   }

  tituloBienvenida(){
    return "Bienvenido "+this.user.username+", Pass: "+this.user.password;
  }

  ngOnInit() {
  }

}
