import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserLanguageDetector } from '../locale/browser-language-detector';
import { importAngularLocale } from '../locale/dynamic-language.loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetsModule } from './modules/bets/bets.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { HeaderModule } from './modules/header/header.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { LoginModule } from './modules/login/login.module';
import { MockModule } from './modules/mock/mock.module';
import { SidenavModule } from './modules/navigation/sidenav.module';
import { TilesModule } from './modules/tiles/tiles.module';
import { WsConnectionModule } from './modules/ws-connection/ws-connection.module';

importAngularLocale();
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FeedbackModule,
    HeaderModule,
    LoginModule,
    MockModule,
    HomepageModule,
    SidenavModule,
    TilesModule,
    BetsModule,
    HttpClientModule,
    WsConnectionModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: LOCALE_ID, useValue: BrowserLanguageDetector.getLocaleId() },
  ],
})
export class AppModule {}
