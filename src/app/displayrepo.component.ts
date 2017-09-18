import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';




@Component({
    selector: 'public-repos',
    
    template: `
            
            <h2>Public Repositories</h2>
               <h3>{{errorMsg}}</h3>
                
               <nav class="navbar navbar-toggleable-md navbar-light bg-faded bg-inverse" id="#navigation">
               <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
             </button>
             <a class="navbar-brand" href="#">Navbar</a>
           
             <div class="collapse navbar-collapse" id="navbarSupportedContent">
               <ul class="navbar-nav mr-auto">
                 <li class="nav-item active">
                   <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link" href="#">Link</a>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link disabled" href="#">Disabled</a>
                 </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                 <input class="form-control mr-sm-2" type="text" placeholder="Search">
                 <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               </form>
             </div>
             </nav>


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