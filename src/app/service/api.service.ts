import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  //method to call api
  getProduct(){
    return this.http.get<any>("https://fakestoreapi.com/products/")
    //getting and returning the reponse from api to the server.
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
