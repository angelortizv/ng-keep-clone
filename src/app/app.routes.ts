import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "archive", component: MainComponent },
    { path: "trash", component: MainComponent },
    /*{ path: "label/:name", component: MainComponent },*/
    { path: '**', redirectTo: '' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
