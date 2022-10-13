import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


source: any="assets/Selected.png";
source1: any="assets/Selected.png";
isVisible: boolean=false;
isVisible1: boolean=false;
isVisible2: boolean=false;
isDarkTheme:boolean=false;

functionInTypeScript(image: any) {
  var subString = image.src.slice(image.src.indexOf("as")); 
  this.source=subString;
}
functionInTypeScript1(image: any) {
  var subString = image.src.slice(image.src.indexOf("as")); 
  this.source1=subString;
}

selectIcon() {
throw new Error('Method not implemented.');
}
toggleDropdown() {
  this.isVisible=!this.isVisible;
}
toggleDropdown1() {
  this.isVisible1=!this.isVisible1;
}
toggleSettings() {
  this.isVisible2=!this.isVisible2;
  }

closeDropdown(){
  this.isVisible=false;
  this.isVisible1=false;
  this.isVisible2=false;
}

toggleTheme() {
    this.isDarkTheme=!this.isDarkTheme;
  }


  ngOnInit(): void {
   
  
  }

}
