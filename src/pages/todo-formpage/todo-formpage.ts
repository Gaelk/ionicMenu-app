import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import{Camera, CameraOptions} from '@ionic-native/camera';
/**
 * Generated class for the TodoFormpagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-formpage',
  templateUrl: 'todo-formpage.html',
})
export class TodoFormpagePage {
  public task;
  public index: Number=-1;
  private cameraOptions: CameraOptions={
    quality:75,
    targetHeight:500,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG
  }
  public imageData:String;


  constructor(public navCtrl: NavController, public navParams: NavParams, private events:Events, private camera: Camera) {
    this.task=this.navParams.get("task");
    this.index=this.navParams.get("index");

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoForpageaPage');
    
  }

  saveTask(){
    let params={
      task: this.task,
      index: this.index
    }

    if(this.index>=0){
      this.events.publish("task.update", JSON.stringify(params));
    }else{
      this.events.publish("task.create", JSON.stringify(params));
    }

    this.navCtrl.pop();
  }

  takePicture(){
    this.camera.getPicture(this.cameraOptions).then(
      (pictureData)=>{
        this.task.imageData=pictureData;})
  }




}
