import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './modules/dropdown/dropdown.component';
import { SleepComponent } from './modules/sleep/sleep.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './modules/loader/loader.component';

@NgModule({
    declarations: [
        AppComponent,
        DropdownComponent,
        SleepComponent,
        LoaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule, 
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
