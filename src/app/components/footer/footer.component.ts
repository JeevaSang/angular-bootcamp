import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  //Input for property binding[]


  @Input()
  company: string;
  @Input()
  year: number;

  @Input()
  address: object;

  //Output child to parent communication
  //Always through custom event only
  //(eventBinding) ==> (contactEvent) ="expr"
  @Output()
  contactEvent: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  contactClicked() {
    //TODO trigger custom event
    //in parent component this.address can be accesses as $event
    this.contactEvent.emit(this.address)
  }

}
