import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LikeComponent } from './components/like/like.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { DataService } from './services/data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LikeComponent, HighlightDirective, PowerPipe, FilterPipe, SortPipe],
  exports: [
    //ensure other mod can use component, directive ,pipes
    LikeComponent, HighlightDirective, PowerPipe, FilterPipe, SortPipe //if not , other modules can't access
  ],
  //services will go under providers
  providers: [
    DataService //singleton instance
  ]
})


export class SharedModule { }