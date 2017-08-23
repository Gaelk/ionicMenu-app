import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
/*import { Http } from '@angular/http';
import 'rxjs/add/operator/map';*/

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  private filter;
  private allowedFilters = ["all", "done", "not done"]

  constructor(public storage: Storage) {
     //récuperation de la configuration
    storage.get("config.filter").then((data) => {
     this.filter = data || "all"});
 
  }

  getFilter() {
    return new Promise((resolve, reject) => {
      //récuperation de la configuration enregistrée sur le periphérique
      this.storage.get("config.filter").then((data) => {
        this.filter = data || "all";
        resolve(data);
      });

    });
    // return this.filter;
  }


  getAllowedFilters() {
    return this.allowedFilters;
  }

  setFilter(filter) {
    this.filter = filter;
    this.storage.set("config.filter", filter);
  }

}
