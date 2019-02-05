import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  ngOnInit(){
interface ApiResponse{
  public_repos:number;
  public_gists:number;
  followers:number;
following:number;
create_at:Date
}
// this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json (Links to an external site.)Links to an external site.").subscribe(data=>{
//   this.get= new repos(data.quote,data.author)
// })
// }
//   constructor(private http:HttpClient) {
// // this.get =new repos()
// //    }

//   ngOnInit() {
//   }

}}
//////////////////
// import { Component, OnInit } from '@angular/core';
// import { ProfService } from '../services/prof.service';
// import { create } from 'domain';

// @Component({
//   selector: 'app-form',
//   templateUrl: './form.component.html',
//   styleUrls: ['./form.component.css']
// })
// export class ProfileFormComponent implements OnInit {

//   submitSearch(name) {
//     this.profileService.getProfileInfo(name.target.value);
//     this.repoService.getRepoInfo(name.target.value);
//   }
//    constructor(private profileService: ProfService, private repoService: ProfService) { }
//   ngOnInit() {
//   }
//  }

