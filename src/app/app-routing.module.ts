import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { IndexComponent } from './components/principal/index/index.component';
import { CombinarIndexComponent } from './components/combinarPdf/combinar-index/combinar-index.component';
import { DividirIndexComponent } from './components/dividirPdf/dividir-index/dividir-index.component';

const routes: Routes = [{path: 'index', component:IndexComponent},
{path: 'combinar', component:CombinarIndexComponent},
{path: 'dividir', component:DividirIndexComponent},
{path: '', redirectTo: '/index', pathMatch:'full'}, 
{path: '**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
