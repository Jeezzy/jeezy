import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from './modules/button/button.module';
import { MaterialsModule } from '../materials.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialsModule,
    ButtonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    MaterialsModule,
    ButtonModule,
    // SafeUrlPipe,
  ],

  declarations: [
    // SafeUrlPipe
  ]
})
export class SharedModule { }
