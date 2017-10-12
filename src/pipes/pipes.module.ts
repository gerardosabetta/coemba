import { NgModule } from '@angular/core';
import { RoomPipe } from './room/room';
import { RoomIdToStringPipe } from './room-id-to-string/room-id-to-string';
import { WandererPipe } from './wanderer/wanderer';
import { FilterPipe } from './filter/filter';
@NgModule({
	declarations: [RoomPipe,
    RoomIdToStringPipe,
    WandererPipe,
    FilterPipe],
	imports: [],
	exports: [RoomPipe,
    RoomIdToStringPipe,
    WandererPipe,
    FilterPipe]
})
export class PipesModule {}
