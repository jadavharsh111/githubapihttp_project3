import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'public-keyword',
    
    template: `

            <h2>Public Repositories Keyword</h2>
               <h3>{{errorMsg}}</h3>
            
               
               
                <nav class="navbar navbar-light bg-faded justify-content-between">
                    <form class="form-inline">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" #searchBoxKey>
                        <input class="btn btn-outline-success my-2 my-sm-0" type="button" value="search by keyword" (click)="searchKeyword(searchBoxKey.value)">
                    </form>
                </nav>

               <div class="row card-group">
               <div class="col-4"  *ngFor="let repo of reposkey">
                   <div class="card" >
                       <div class="card-block">
                       <img src="{{repo.owner.avatar_url}}" class="img-circle" alt="Cinque Terre" width="50" height="50">
                           <h3 class="card-title">{{repo.name}}</h3>
                           
                           <span class="badge badge-success">{{repo.owner.login}}</span>
                           <a href="#" class="btn btn-primary">Save this repo</a>
                       </div><br>
                   </div>
               </div>
    </div>
                
               


               
    `
})



export class DisplayKeywordComponent{
    
    reposkey : Array<Object> = [];
    errorMsg: string;



    constructor(private _searchService: SearchService){}

   

    searchKeyword(termkey:string){
        this._searchService.searchKeyword(termkey)
            .subscribe( resReposData => this.reposkey = resReposData.items,
            resReposError => this.errorMsg = resReposError);
    }
    
    
}