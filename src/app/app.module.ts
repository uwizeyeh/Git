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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    // FormModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
