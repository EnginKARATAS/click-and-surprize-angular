import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  
  pageTitle : string = "welcome to joke page";
  color: string = "red";

  showJoke1: boolean = false;
  showJoke2: boolean = false;

  constructor() {
   }
 
  toggleJoke1(): void{
    this.showJoke1 = !this.showJoke1;
  }
  toggleJoke2(): void{
    this.showJoke2 = !this.showJoke2;
  }
  ngOnInit(): void {
  }

}
