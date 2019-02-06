
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Repo} from '../repo';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class formComponent implements OnInit {

  username= new User("")
  repos=new Repo(0,0,0,0,new Date(),"")
  constructor(private http:HttpClient) { 
    this.repos=new Repo(0,0,0,0,new Date(),"")
    }
    check(){
    interface ApiResponse{
      public_repos:number
      public_gists:number
      followers:number
      following:number
      create_at:Date
      html_url:string
    }
    this.http.get<ApiResponse>("https://api.github.com/users/"+this.username.username+"?access_token=8f4495f34926ef3292ff966ddb3f25514e28b8ea")
    .subscribe((data:any)=>{
      
      // console.log(data);
      this.repos.public_repos= data.public_repos;
      this.repos. public_gists=data. public_gists;
      this.repos.followers=data.followers;
      this.repos.following=data.following;
      this.repos.create_at=data.create_at;
      this.repos.html_url=data.html_url
    });
  }
  // console.log(this.username)


  ngOnInit() {
  }

}