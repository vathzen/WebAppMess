import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-verify-students',
  templateUrl: './verify-students.page.html',
  styleUrls: ['./verify-students.page.scss'],
})
export class VerifyStudentsPage implements OnInit {

  constructor(private restService: RestService) { }

  public data=[{regnum:120004213,code:'QTHSNCAY'},{regnum:120004214,code:'QJMXIHZI'},{regnum:120004215,code:'UZMDOXM'}];
  //public data = [];

  ngOnInit() {
    /*  this.restService.getCodes().subscribe(
          (response) => {
              this.data = response;
              console.log(this.data);
          },
          err => {
              console.log(err)
          }
      )*/
  }

}
