import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'public-repos',
    template: `
               <h2>Public Repositories</h2>
               <h3>{{errorMsg}}</h3>
               <ul *ngFor="let repo of repos">
                    <li>{{repo.name}}</li>
               </ul>

               
    `
})



export class DisplayRepoComponent implements OnInit{
    repos = [];
    errorMsg: string;



    constructor(private _searchService: SearchService){}

    ngOnInit(){
        this._searchService.searchUsers()
            .subscribe( resReposData => this.repos = resReposData,
            resReposError => this.errorMsg = resReposError);
    }
}