import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'public-repos',
    
    template: `

            <h2>Public Repositories</h2>
               <h3>{{errorMsg}}</h3>
                
               
               <input type="search" name="search" #searchBox />
               <input type="button" value="Submit" (click)="searchUsers(searchBox.value)"/>
               
               
               
               <div class="card text-center" *ngFor="let repo of repos"  >
                        <div class="card-header">
                            {{repo.owner.login}}
                        </div>
                        <div class="card-block">
                            <h4 class="card-title">{{repo.name}}</h4>
                            <p class="card-text">{{repo.full_name}}</p>
                            <a href="#" class="btn btn-primary">Save</a>
                        </div>
                        <div class="card-footer text-muted">
                            {{repo.created_at}}
                        </div><br>
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