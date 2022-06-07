import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ThemeModule } from './core/theme.module';
import { TokenInterceptor } from './core/interceptors/token.interceptors';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ThemeModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
