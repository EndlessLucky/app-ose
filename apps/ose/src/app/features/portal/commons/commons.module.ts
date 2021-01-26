import { NgModule } from '@angular/core';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module';
import { OseSessionModule } from '@ose/commons/services';
import { OseTokenInterceptorModule } from '@ose/commons/interceptors';
import { OseWorkshopsHttpModule, OseParticipantHttpModule } from '@ose/commons/http';

@NgModule({
    exports: [
        UiModule,
        ComponentsModule,

        OseWorkshopsHttpModule,
        OseParticipantHttpModule,
        OseSessionModule,
        OseTokenInterceptorModule
    ]
})
export class PortalCommonsModule {}
