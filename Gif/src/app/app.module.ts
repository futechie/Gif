import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { RegisterComponent } from '../app/Components/register/register.component';
import { LoginComponent } from '../app/Components/login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ContentComponent } from './Components/content/content.component';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { JsoneditorComponent } from './Components/jsoneditor/jsoneditor.component';
import { NgJsonEditorModule } from 'ang-jsoneditor';
import { MyInterceptor } from './Utils/apiInceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    JsoneditorComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule, NgJsonEditorModule
    ],
  exports:
  [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [HttpModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true
    } ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
