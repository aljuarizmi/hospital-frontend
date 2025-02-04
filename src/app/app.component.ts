import { Component } from '@angular/core';
import { Route, Router, RouterOutlet, Routes } from '@angular/router';
import { MenuGlobalComponent } from './modules/global/components/menu-global/menu-global.component';
import { GlobalModule } from './modules/global/global.module';
/*const routes:Routes=[
  {path:'',component:MenuGlobalComponent,loadChildren:()=>import('./rutas.module').then(m=>m.RutasModule)}
]*/
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,GlobalModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hospital-frontend';
}
