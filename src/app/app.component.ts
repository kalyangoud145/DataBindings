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
  // For implementing one way binding
  ngOnInit(): void {
    this.title = "Hello from the bridgelabz!";
  }
}
