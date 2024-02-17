import { Routes } from '@angular/router';
import { MainComponent } from './Components/main/main.component';
import { CategoryComponent } from './Components/category/category.component';

export const routes: Routes = [
    {path:"" , component:MainComponent},
    {path:"categories" , component:CategoryComponent}

];
