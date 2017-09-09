import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { AdvertComponent } from './advert/advert';
import { AdvertsListComponent } from './adverts-list/adverts-list';
import { CommentsListComponent } from './comments-list/comments-list';
import { CommentComponent } from './comment/comment';

@NgModule({
	declarations: [AdvertComponent,
    AdvertsListComponent,
    CommentsListComponent,
    CommentComponent],
	imports: [IonicModule],
	exports: [AdvertComponent,
    AdvertsListComponent,
    CommentsListComponent,
    CommentComponent]
})
export class ComponentsModule {}
