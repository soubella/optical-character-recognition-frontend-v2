import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { InputsSectionComponent } from '../sections/inputs-section/inputs-section.component';
import { HomeComponent } from './home.component';

import { SectionsModule } from '../sections/sections.module';
import { from } from 'rxjs';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule
        
    ],
    declarations: [ HomeComponent,InputsSectionComponent ],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
