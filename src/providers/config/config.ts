import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private filter="all";
  private allowedFilters=["all","done", "not done"]
  constructor() {
    
  }
  getFilter(){
    return this.filter;
  }
  getAllowedFilters(){
    return this.allowedFilters;
  }

  setFilter(filter){
    this.filter=filter;
  }

}
