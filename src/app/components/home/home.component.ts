

import { Component, OnInit } from '@angular/core';
import { DataService, Member } from '../../shared/services/data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  counter = 100;
  price_pipe = 100.65;
  today_pipe = new Date();
  title_pipe = 'Home';

  members$: Observable<Member[]>;
  constructor(private dataService: DataService) {

    this.members$ = this.dataService.members$;
  }

  ngOnInit() {
  }
  increment() {
    this.counter++;
  }
  decrement() {
    this.counter--;
  }
}
