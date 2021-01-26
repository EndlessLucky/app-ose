import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { UiModule } from '../ui/ui.module';
import { OseButtonVisibilyPasswordModule } from '@ose/commons/components';
import { ReactiveFormsModule } from '@angular/forms';

import { CardModule } from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';

const COMPONENTS = [
  SignInFormComponent
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  exports: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    UiModule,
    OseButtonVisibilyPasswordModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule
  ]
})
export class ComponentsModule { }
