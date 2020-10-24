import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CommonModule } from '@angular/common';

const material = [MatButtonModule,
                            MatButtonToggleModule,
                            MatIconModule,
                            MatBadgeModule,
                            MatToolbarModule,
                            MatSidenavModule,
                            MatProgressSpinnerModule,
                            MatMenuModule,
                            MatCardModule,
                            MatFormFieldModule,
                            MatInputModule
                            ];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
