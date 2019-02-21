import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  environ = environment;
  constructor(private route: Router) 
  { 
    this.environ.boolLoginVisible=true;
  }
}
