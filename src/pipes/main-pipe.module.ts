import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { TruncatePipe } from "./truncate/truncate";


@NgModule({
  declarations:[TruncatePipe],
  imports:[CommonModule],
  exports:[TruncatePipe]
})

export class MainPipe{}
