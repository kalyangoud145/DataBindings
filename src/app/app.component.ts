import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  // Logo file path
  imgUrl = '../assets/BL_logo_square_jpg.jpg'
  // Webpage url
  url = "https://www.bridgelabz.com/"
  // For implementing one way binding
  ngOnInit(): void {
    this.title = "Hello from the bridgelabz!";
  }
  // Function opens the webpage in new tab
  onClick($event) {
    console.log($event);
    window.open(this.url, "_blank");
  }
}
