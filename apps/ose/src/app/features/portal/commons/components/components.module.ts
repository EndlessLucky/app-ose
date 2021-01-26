import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { WorkshopItemComponent } from './workshop-item/workshop-item.component';
import { OseDefaultImgPipeModule, OseDatePipeModule } from '@ose/commons/pipe';

@NgModule({
    declarations: [WorkshopItemComponent],
    exports: [WorkshopItemComponent],
    imports: [
        CommonModule,
        UiModule,
        OseDefaultImgPipeModule,
        OseDatePipeModule
    ],
})
export class ComponentsModule {}
