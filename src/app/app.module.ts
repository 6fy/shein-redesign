import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './assets/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { CategoryShopComponent } from './components/category-shop/category-shop.component';
import { FooterComponent } from './assets/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    SocialMediaComponent,
    CategoryShopComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
