import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Member {
  name: string;
  image: string;
  role?: string; // ? optional
}

//to inject any service
@Injectable({
  providedIn: 'root'
})
export class DataService {

  members: Member[] = [
    {
      name: 'Member 1',
      image: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
      role: 'CEO'
    },
    {
      name: 'Member 2',
      image: 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
      role: 'CTO'
    }
  ];
  //Observable $ is convension
  members$: BehaviorSubject<Member[]> = new BehaviorSubject(this.members);

  constructor() {
    console.log('data service created!!!')
  }

  empty() {
    //option1 - keep existing array , remove elements inside
    //this.members.splice(0, this.members.length);
    //option2//assign new aray
    this.members = [];
    //publich the new value/members
    this.members$.next(this.members);
  }
}