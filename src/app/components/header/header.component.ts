import { Component, OnInit } from '@angular/core';
import { DataService, Member } from './../../shared/services/data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  memberlegth = 0;
  constructor(private dataService: DataService) {
    console.log('about comp created');
    this.memberlegth = dataService.members.length;
  }

  empty() {
    this.dataService.empty();
    //this.memberlegth = this.dataService.members.length;
  }

  ngOnInit() {
    //subscription for member change
    this.dataService.members$.subscribe(members => {
      console.log("Header member subscription")
      this.memberlegth = members.length;
    })
  }

}
