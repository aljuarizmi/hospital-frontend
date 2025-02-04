import { Routes } from '@angular/router';
import { MenuGlobalComponent } from './modules/global/components/menu-global/menu-global.component';

export const routes: Routes = [
    {path:'',component:MenuGlobalComponent,loadChildren:()=>import('./rutas.module').then(m=>m.RutasModule)}
];
