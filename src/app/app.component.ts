import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
            <h1>GitHub</h1>
            
            
            <nav class="navbar navbar-default">
              
                
                <ul class="nav navbar-nav">
                  <li class="active"><a routerLink="/findrepo">Find Repo</a></li>
                  <li><a routerLink="/findkeyword">Find Keyword</a></li>
                  <router-outlet></router-outlet>
                </ul>
              
          </nav>           
  `,
  providers: [SearchService]
})
export class AppComponent {
  title = 'app';
}



