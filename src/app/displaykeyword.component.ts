import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'public-keyword',
    
    template: `

            <h2>Public Repositories Keyword</h2>
               <h3>{{errorMsg}}</h3>
                
               
               <input type="search" name="search" #searchBoxKey />
               <input type="button" value="Submit" (click)="searchKeyword(searchBoxKey.value)"/>
               

                <div class="card text-center"  *ngFor="let repokey of reposkey">
                    <div class="card-header">
                        
                    </div>
                    <div class="card-block">
                        <h4 class="card-title">{{repokey.name}}</h4>
                        <p class="card-text"></p>
                        <a href="#" class="btn btn-primary">Save</a>
                    </div>
                    <div class="card-footer text-muted">
                        
                    </div><br>
                </div>
                
               


               
    `
})



export class DisplayKeywordComponent{
    
    reposkey = [];
    errorMsg: string;



    constructor(private _searchService: SearchService){}

   

    searchKeyword(termkey:string){
        this._searchService.searchKeyword(termkey)
            .subscribe( resReposData => this.reposkey = resReposData,
            resReposError => this.errorMsg = resReposError);
    }
    
    
}