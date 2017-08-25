import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the RendomUserListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rendom-user-list',
  templateUrl: 'rendom-user-list.html',
})
export class RendomUserListPage {
  public users = [];
  private url = "https://randomuser.me/api/"

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get(this.url + "?results=10").subscribe((response) => {
      console.log(response.json()); //sereal
      this.users = response.json().results;

    },
      (err) => {
        console.log(err)
      });

  }

  loadMorUsers(event) {

    this.http.get(this.url + "?results=100").subscribe((response) => {
      console.log(response.json()); //sereal
      //this.users=response.json().results;
      this.users = this.users.concat(response.json().results); //scroller infini
      event.complete();
    },
      (err) => {
        console.log(err)
      });


  }

  doRefresh(refresher) {
    this.http.get(this.url + "?results=100").subscribe((response) => {
      console.log(response.json()); //sereal
      //this.users=response.json().results;
      this.users = response.json().results.concat(this.users); //scroller infini
      refresher.complete();
    },
      (err) => {
        console.log(err)
      });


  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad RendomUserListPage');
  }

}
