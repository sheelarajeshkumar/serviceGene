import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  private URL = 'https://theguildlabs.com/trendset/API/';
  private LOGINURL = 'https://theguildlabs.com/trendset/API/getUserType.php';
  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username);
    console.log(this.password);
    this.http.get(this.LOGINURL + '?contact=' + this.username + '&password=' + this.password)
      .subscribe(result => {
        console.log(result);
      } );
  }


}
