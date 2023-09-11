import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombinarIndexComponent } from './components/combinarPdf/combinar-index/combinar-index.component';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/principal/index/index.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OffcanvasComponent } from './components/offcanvas/offcanvas.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtnInicioComponent } from './components/botones/btn-inicio/btn-inicio.component';
import { DividirIndexComponent } from './components/dividirPdf/dividir-index/dividir-index.component';
import { HerramientasComponent } from './components/botones/herramientas/herramientas.component';

@NgModule({
  declarations: [
    AppComponent,
    CombinarIndexComponent,
    ErrorComponent,
    IndexComponent,
    NavbarComponent,
    FooterComponent,
    OffcanvasComponent,
    BtnInicioComponent,
    DividirIndexComponent,
    HerramientasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
