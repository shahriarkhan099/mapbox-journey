import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapboxComponent } from './mapbox0/mapbox.component';

const routes: Routes = [
  { path: 'mapbox', component: MapboxComponent },

  //Default open to step 0
  { path: 'step0', pathMatch: 'full', component: MapboxComponent },
  { path: '', redirectTo: 'step0', pathMatch: 'full' },
  { path: '**', redirectTo: 'step0', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
