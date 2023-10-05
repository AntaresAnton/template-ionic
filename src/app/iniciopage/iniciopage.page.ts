import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { StorageService } from '../storageservice.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-iniciopage',
  templateUrl: './iniciopage.page.html',
  styleUrls: ['./iniciopage.page.scss']
})
export class IniciopagePage implements OnInit {

  myid: string = "";
  data = null;

   user = {
    username: "",
    password: ""
   }

   noticia = {
     title: "",
     userId: 1,
     body: ""
   }

   post = {

   }


  constructor(private storage: StorageService, 
    private activeroute: ActivatedRoute, private router: Router,
    private api: ApiService) {
    const navigation = this.router.getCurrentNavigation();

    this.activeroute.paramMap.subscribe(params => {

      if (navigation && navigation.extras && navigation.extras.state) {
         this.user.username = navigation.extras.state["user"]["user_email"];
         this.user.password = navigation.extras.state["user"]["user_password"];
         this.myid = JSON.stringify(navigation.extras.state);
         console.log(this.myid);
         console.log("(inicio) user: "+this.user.username);
         console.log("(inicio) pass: "+this.user.password);

         this.storage.get('user')?.then((result) => {
          console.log('My result', result);
        });

         //const name =  this.storage.get('usuario');
         console.log('storage value: '+name);
      }else {
        this.myid = 'No se pudo obtener el estado como cadena';
      }
      
  });
   }

  tituloBienvenida(){
    return "Bienvenido "+this.user.username+", Pass: "+this.user.password;
  }

  llamarApiGet(){
     this.api.getPosts(1).subscribe((res) => {
        console.log(res);
     }, (error)=>{
       console.log(error);
     });
  }

  llamarAllApiGet(){
    this.api.getAllPosts().subscribe((res) => {
       console.log(res);
    }, (error)=>{
      console.log(error);
    });
 }

 crearNoticia(){
  console.log(this.noticia);
  this.api.insertPost(JSON.stringify(this.noticia)).subscribe((res) => {
    console.log(res);
 }, (error)=>{
   console.log(error);
 });
 }

  ngOnInit() {
  }

}
