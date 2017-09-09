import { Component, Input } from '@angular/core';

/**
 * Generated class for the CommentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'comment',
  templateUrl: 'comment.html'
})
export class CommentComponent {
  @Input() comment: Comment

  text: string;

  constructor() {
    console.log('Hello CommentComponent Component');
    this.text = 'Hello World';
  }

}
