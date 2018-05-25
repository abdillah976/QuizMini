import { NgModule } from '@angular/core';
import { HeartComponent } from './heart/heart';
import { JokerComponent } from './joker/joker';
@NgModule({
	declarations: [HeartComponent,
    JokerComponent],
	imports: [],
	exports: [HeartComponent,
    JokerComponent]
})
export class ComponentsModule {}
