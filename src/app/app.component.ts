import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router : Router) { }
  title = 'elecwinapp';
  nav(){
   this.router.navigate(['/list']);
  }
}
