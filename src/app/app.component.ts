import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-app';
  userSelection = true;

  onNavigate(event: boolean){

    this.userSelection = event;
  }
}
