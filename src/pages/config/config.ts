import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfigProvider } from "../../providers/config/config";
import{Storage} from '@ionic/storage';

/**
 * Generated class for the ConfigPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-config',
  templateUrl: 'config.html',
})
export class ConfigPage {
  public chosenFilter;
  public allowedFilters=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private config:ConfigProvider, public storage:Storage) {
this.chosenFilter=config.getFilter();
this.allowedFilters=config.getAllowedFilters();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigPage');
  }


  persitTask(){
    this.storage.set("allowedFilters",JSON.stringify(this.allowedFilters))
  }

}
