import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material 2 
import { MdCoreModule } from '@angular2-material/core'
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdRadioModule } from '@angular2-material/radio';
import { MdCheckboxModule } from '@angular2-material/checkbox'
import { MdTooltipModule } from '@angular2-material/tooltip';
import { MdSliderModule } from '@angular2-material/slider';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,
    MdCheckboxModule, MdTooltipModule, MdSliderModule,

    // MdButtonToggleModule.forRoot(),
    // MdDialogModule.forRoot(),
    // MdIconModule.forRoot(),
    // MdMenuModule.forRoot(),
    MdRadioModule.forRoot(),
    MdTooltipModule.forRoot(),
    // OverlayModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
