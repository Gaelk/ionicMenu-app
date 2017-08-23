import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController } from 'ionic-angular';
import { TodoFormpagePage } from "../todo-formpage/todo-formpage";
import{Storage} from '@ionic/storage';
import { ConfigProvider } from "../../providers/config/config";

/**
 * Generated class for the TodoListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-todo-list',
  templateUrl: 'todo-list.html',
})
export class TodoListPage {
  public todos = [
    { title: "sortir le chat", done: false },
    { title: "Trianguler les pyramides", done: false },
    { title: "surélever les écuries d'augiais", done: false },
    { title: "payer la dette greque", done: false }
  ];

  public filter;
  

  constructor(public navCtrl: NavController, private toastCtrl:ToastController, public navParams: NavParams,
               public events: Events,public storage:Storage, public config:ConfigProvider) {

  //Definition de filter en fonction du provider
  config.getFilter().then((data)=>{
    this.filter=data;
  })
//  this.filter=config.getFilter

//recuperation de la liste des todos
    storage.get("todos").then((data)=>{
      if(data){
        data=JSON.parse(data);
        this.todos=data;
      }
    });
    //mise a jour d'une tache
    events.subscribe("task.update",(data)=>{
      data=JSON.parse(data);
      this.todos[data.index]=data.task;

    });
    //creation d'une nouvelle tache
    events.subscribe("task.create",(data)=>{
      data=JSON.parse(data);
      this.todos.push(data.task) 
      this.persitTask();   //
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoListPage');
  }

  goToForm(data, pos){
    if (! data){
      data={title:null,
      done:false
      }
    }
    let params={
      index:pos,
      task:data
    }

    
    this.navCtrl.push(TodoFormpagePage, params)
  }

  delete(pos){
    let toast=this.toastCtrl.create({
      message: this.todos[pos].title+" a été supprimé",
      duration:1500,
      position: "middle"
    });

    this.todos.splice(pos,1);
    toast.present(); 
    
  }

  filterTodo(){
    let filtered=[];
    switch(this.filter){
      case "all":
        filtered=this.todos;
        break;
      case "done":
        filtered=this.todos.filter((item)=>{return item.done});
        break;
      case "not done":
      filtered=this.todos.filter((item)=>{return !item.done});
      break;  
  
    } 
    return filtered;
  }

  persitTask(){
    this.storage.set("todos",JSON.stringify(this.todos))
  }

}
