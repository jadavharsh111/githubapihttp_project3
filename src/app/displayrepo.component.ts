import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'public-repos',
    
    template: `
            
            <h2>Public Repositories</h2>
               <h3>{{errorMsg}}</h3>
               <nav class="navbar navbar-light bg-faded justify-content-between">
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" #searchBox>
                    <input class="btn btn-outline-success my-2 my-sm-0" type="button" value="search repos" (click)="searchUsers(searchBox.value)">
                </form>
               </nav>
               
               <div class="row card-group">
                        <div class="col-4"  *ngFor="let repo of repos">
                            <div class="card" >
                                <div class="card-block">
                                <img src="{{repo.owner.avatar_url}}" class="img-circle" alt="Cinque Terre" width="50" height="50">
                                    <h3 class="card-title">{{repo.name}}</h3>
                                    <p class="card-text">{{repo.owner.login}}</p>
                                    <a href="#" class="btn btn-primary">Save this repo</a>
                                </div><br>
                            </div>
                        </div>
             </div>
                              
        `
})



export class DisplayRepoComponent{
    repos = [];
   
    errorMsg: string;



    constructor(private _searchService: SearchService){}

    searchUsers(term:string){
        this._searchService.searchUsers(term)
            .subscribe( resReposData => this.repos = resReposData,
            resReposError => this.errorMsg = resReposError);
    }


    
    
}