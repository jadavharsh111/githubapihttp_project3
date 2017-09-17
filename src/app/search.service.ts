import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class SearchService{
    private _url: string = "https://api.github.com/users/";
    private _urlkey: string = "https://api.github.com/search/repositories?";

    constructor(private http: Http){}

    searchUsers(term: string){

        var apiLink = this._url + (term) + '/repos';

        return this.http.get(apiLink)
                    .map((response:Response) => response.json())
                    .catch(this.errorHandler);
    }


    searchKeyword(term: string){
    
        var apiLinkkey = this._url + (term) + '/repos';
        
                return this.http.get(apiLinkkey)
                            .map((response:Response) => response.json())
                            .catch(this.errorHandler);
            }

    

    errorHandler(error: Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}