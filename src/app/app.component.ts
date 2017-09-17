import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
            <h1>GitHub</h1>
            <a routerLink="/findrepo">Find Repo</a>
            <a routerLink="/findkeyword">Find Keyword</a>
            <router-outlet></router-outlet>
  `,
  providers: [SearchService]
})
export class AppComponent {
  title = 'app';
}



