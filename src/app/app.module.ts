import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeadingComponent } from './heading/heading.component';
import { Heading1Component } from './heading1/heading1.component';
import { Heading2Component } from './heading2/heading2.component';
import { Heading3Component } from './heading3/heading3.component';
import { NewAppComponent } from './new-app/new-app.component';
import { SomethingComponent } from './something/something.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    Heading1Component,
    Heading2Component,
    Heading3Component,
    NewAppComponent,
    SomethingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
