import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular";
import { AdvertComponent } from './advert/advert';
import { AdvertsListComponent } from './adverts-list/adverts-list';

@NgModule({
	declarations: [AdvertComponent,
    AdvertsListComponent],
	imports: [IonicModule],
	exports: [AdvertComponent,
    AdvertsListComponent]
})
export class ComponentsModule {}
