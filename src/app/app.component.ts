import { SearchService } from './search.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
            <h1>GitHub</h1>
            <public-repos> </public-repos>
  `,
  providers: [SearchService]
})
export class AppComponent {
  title = 'app';
}



