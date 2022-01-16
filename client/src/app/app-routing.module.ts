import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './components/property-list/property-list.component';
import { AddPropertyComponent } from './components/add-property/add-property.component';

const routes: Routes = [
  { path: '', redirectTo: 'property', pathMatch: 'full' },
  { path: 'property', component: PropertyListComponent },
  { path: 'add', component: AddPropertyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
