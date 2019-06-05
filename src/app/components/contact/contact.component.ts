import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  //step1:
  constructor() { }
  //step2 : Take HTML View,load into browser
  toHighlight = false;

  //step 3 : ngOnInit,view Initialize
  ngOnInit() {
    //nativeElement is real DOM object
    this.nameElement.nativeElement.focus();
    this.nameElement.nativeElement.value = "PASSVALUE";
  }



  address: any;

  //<input name="name" #nameElement />
  @ViewChild("nameElement")
  nameElement: ElementRef; //Wrapper on top of DOM

  divClicked() {
    console.log('divlclick')
  }

  btnClicked(e: Event) {
    console.log('btnclick', e)
    //stop event bubble going to parent
    e.stopPropagation();
  }

}
