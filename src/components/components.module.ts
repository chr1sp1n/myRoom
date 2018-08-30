import { NgModule } from '@angular/core';
import { MrSerialComponent } from './mr-serial/mr-serial';
import { MrRgbyComponent } from './mr-rgby/mr-rgby';

@NgModule({
	declarations: [MrSerialComponent,
    MrRgbyComponent],
	imports: [],
	exports: [MrSerialComponent,
    MrRgbyComponent]
})
export class ComponentsModule {}
