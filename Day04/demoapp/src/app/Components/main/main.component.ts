import { Productlist } from './../../DataStore/Models/productlist';
import { Component } from '@angular/core';
import { User } from '../../DataStore/Models/user';
import { CommonModule } from '@angular/common';
import { Category } from '../../DataStore/Models/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  // UserValue : User ;
  prodlist : Productlist[];
  catlist : Category[];
  totalPrice : number =0;
  selectCategory: number = 0;
  constructor(){
    // this.UserValue = new User("yousif Mohamed" , 26 , "Male" , "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque placeat exercitationem maiores qui iure adipisci enim rerum saepe fuga laudantium.",['react' , "angular" , ".Net" , "php" ,"python"] ) ;
    this.prodlist =[
      {id: 1, name:'football', quantity:10, price:10,catId:1, imgUrl:'https://fakeimg.pl/300/'},
      {id: 2, name:'tenis', quantity:5, price:5,catId:1, imgUrl:'https://fakeimg.pl/300/'},
      {id: 3, name:'camp', quantity:3, price:300,catId:2, imgUrl:'https://fakeimg.pl/300/'}
    ]

    this.catlist=[
      { id: 1, name:'sport'},
      { id: 2, name:'camp'}
    ]
  }
  
  TotalPrice(price: number, quantity:string){
    let qty: number= parseInt(quantity);
    let result = price * qty;
    this.totalPrice = result + this.totalPrice;
  }

  ChangeCat(){
    this.selectCategory = 1;
  }

}
