// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class FormComponent implements OnInit {
//   ngOnInit(){
// interface ApiResponse{
//   public_repos:number;
//   public_gists:number;
//   followers:number;
// following:number;
// create_at:Date
// }
// this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json (Links to an external site.)Links to an external site.").subscribe(data=>{
//   this.get= new repos(data.quote,data.author)
// })
// }
//   constructor(private http:HttpClient) {
// // this.get =new repos()
// //    }

//   ngOnInit() {
//   }

// }}
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

  username= new User("");
  repos=new Repo(0,0,0,0,new Date());
  constructor(private http:HttpClient) { 
    this.repos=new Repo(0,0,0,0,new Date());
    }
  Check(){
    interface ApiResponse{
      public_repos:number;
      public_gists:number;
      followers:number;
      following:number;
      create_at:Date
    }
    this.http.get<ApiResponse>("https://api.github.com/users/"+this.username+"?access_token=" +environment.api_key)
    .subscribe((data:any)=>{
      
      // console.log(data);
      this.repos.public_repos= data.public_repos;
      this.repos. public_gists=data. public_gists;
      this.repos.followers=data.followers;
      this.repos.following=data.following;
      this.repos.create_at=data.create_at
    });
  }
  // console.log(this.username)


  ngOnInit() {
  }

}