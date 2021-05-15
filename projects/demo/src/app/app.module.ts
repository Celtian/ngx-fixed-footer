import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxFixedFooterModule } from 'projects/ngx-fixed-footer/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxFixedFooterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
