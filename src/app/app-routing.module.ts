import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EngineComponent } from './engine/engine.component';

const routes: Routes = [
  { path: 'scene', component: EngineComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }