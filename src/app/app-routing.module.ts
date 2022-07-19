import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageRenderComponent } from './components/page-renderer/page.renderer.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '404', component: ErrorComponent },
  { path: '**', component: PageRenderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
