import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BannerComponent } from './components/banner/banner.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { VisionComponent } from "./components/vision/vision";
import { PromiseComponent } from './components/promise/promise.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HistoryComponent } from './components/history/history.component';
import { ProvidersComponent } from './components/providers/providers.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    VisionComponent,
    PromiseComponent,
    FooterComponent,
    ExperienceComponent,
    HistoryComponent,
    ProvidersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
