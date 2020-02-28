import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  setValue( key : any,value : any){
    localStorage.store(key,value);
  }

  getValue(key: any){
   return localStorage.getItem(key);
  }

}
