import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayRepoComponent } from './displayrepo.component';
import { DisplayKeywordComponent } from './displaykeyword.component';




const routes: Routes ={
    {path: 'findrepo', component:DisplayRepoComponent},
    {path: 'findkeyword', component:DisplayKeywordComponent}
}