import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-students',
  templateUrl: './verify-students.page.html',
  styleUrls: ['./verify-students.page.scss'],
})
export class VerifyStudentsPage implements OnInit {

  constructor() { }

  public data=[{regnum:120004213,code:1234},{regnum:120004214,code:1254},{regnum:120004215,code:5495}];

  ngOnInit() {
    console.log('called')
  }

  refresh(){
    this.ngOnInit();
  }

}
