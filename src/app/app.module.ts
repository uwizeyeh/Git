// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { ProfService } from './services/prof.service';

// import { AppComponent } from './app.component';
// import { FormComponent } from './form/form.component';
// import { ProfileComponent } from './profile/profile.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ProfileComponent,
//     FormComponent,
//     ProfileComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule
//   ],
//   providers: [ProfService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formComponent} from './form/form.component';
import { StrikethroughDirective } from './strikethrough.directive';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    formComponent,
    StrikethroughDirective,
    DateCountPipe
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
