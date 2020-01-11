import {Component} from '@angular/core';

@Component({
    selector: 'app-post4',
    template: `
    <div class="post4">
    <h2>Post title4</h2>
    <p>lorem    </p>
    </div>
    `,
    styles: [`
        .post4 {
            padding: .5rem;
            border: 2px solid  black;
        }

        h2{
          font-size: rem4;
        }
    `]
})

export class Post4Component {}