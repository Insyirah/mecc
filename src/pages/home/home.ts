import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  avatars : any[];
  ava:any[];
constructor(public navCtrl : NavController) {

this.avatars = [
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
  {category:'1',img:"assets/dino.jpg"},
];


}

test(){
  alert("hoi")
}

}
