import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
name: string;
items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }
  update(key){
    // const alert = this.alertCtrl.create({
    //   title: 'Error 555',
    //   subTitle: 'Please enter city name to search weather',
    //   buttons: [{
        
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //   },
    //   {
    //     text: 'Update',
    //     handler: name => {
    //       var database = firebase.database();
    //  database.ref('/shopList/' +this.items[key] ).set({name:name.name});
    // this.retrieveData();
    //     }
    //   }
    // ]
    // });
    // alert.present();
    
      var database = firebase.database();
     database.ref('/shopList/' + key).set({name:this.name});
    this.retrieveData();
    this.navCtrl.push("HomePage");
  }
  retrieveData(){
    this.items = [];
    firebase.database().ref('/shopList/').on("value", (snapshot) => {
        snapshot.forEach((snap => {

          this.items.push({ key : snap.key, name : snap.val().name});
          return false;
        }));
    });
  }

}
