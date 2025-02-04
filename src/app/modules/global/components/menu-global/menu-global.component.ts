import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterModule, RouterOutlet, ROUTES } from '@angular/router';
@Component({
  selector: 'app-menu-global',
  imports: [MatIconModule,MatToolbarModule,MatButtonModule,RouterOutlet,RouterModule],
  templateUrl: './menu-global.component.html',
  styleUrl: './menu-global.component.css'
})
export class MenuGlobalComponent {

}
