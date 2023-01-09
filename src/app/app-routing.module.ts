import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/contactos/contactos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path:'inicio', component:InicioComponent, data:{breadcrumb:'inicio'}},
  {path:'contacto', component:ContactosComponent, data:{breadcrumb: 'contacto'} },
  {path:'nosotros',component:NosotrosComponent, data:{breadcrumb: 'nosotros'}},
  {path:'**', redirectTo:'/inicio', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
