import { DisplayRepoComponent } from './displayrepo.component';
import { DisplayKeywordComponent } from './displaykeyword.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,DisplayRepoComponent,DisplayKeywordComponent
  ],
  imports: [
    BrowserModule,HttpModule,RouterModule.forRoot([
      {path: 'findrepo', component:DisplayRepoComponent},
      {path: 'findkeyword', component:DisplayKeywordComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
