import { DataService, Member } from './../../shared/services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showList = true;

  members: Member[] = [];

  // inject the service into component
  constructor(private dataService: DataService) {
    console.log('about comp created');

    this.members = dataService.members;
  }

  empty() {
    this.dataService.empty();
  }
  ngOnInit() {
    this.dataService.members$.subscribe(members => {
      console.log("Header member subscription")
      this.members = members;
    })
  }

}
