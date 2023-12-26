import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CardComponent } from './card/card.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SandwichOrderFormComponent } from './sandwich-order-form/sandwich-order-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormArrayDemoComponent } from './form-array-demo/form-array-demo.component';
import { FormStatusDemoComponent } from './form-status-demo/form-status-demo.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { PrefixPipe } from './prefix.pipe';
import { ConvertOrderLocalToServerFormatPipe } from './convert-order-local-to-server-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    CardComponent,
    SignUpComponent,
    SandwichOrderFormComponent,
    FormArrayDemoComponent,
    FormStatusDemoComponent,
    PipesDemoComponent,
    PrefixPipe,
    ConvertOrderLocalToServerFormatPipe
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
