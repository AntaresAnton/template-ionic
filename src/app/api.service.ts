import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
 
})
export class ApiService {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  
 httpOptions = {
  headers : new HttpHeaders({
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  }) 
 }
  
  constructor(private http: HttpClient) { }

  getPosts(id:number){
    return this.http.get(this.apiUrl+'/posts/'+id);
  }

  getAllPosts(){
    return this.http.get(this.apiUrl+'/posts/');
  }

  insertPost(post:string){
     return this.http.post(this.apiUrl+'/posteos/', post, this.httpOptions);
  }
}
