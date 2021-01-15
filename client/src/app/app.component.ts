import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';
  datingApp = 'The Dating APP';
  

  constructor( private accountService: AccountService) {}

  ngOnInit() {
   
    this.setCurrentUser();
  }

  setCurrentUser(){
    const user1: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user1);
  }


}
