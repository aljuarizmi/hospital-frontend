import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,MatIconModule,MatToolbarModule,MatButtonModule,RouterOutlet,HttpClientModule
  ],
  exports:[MatIconModule,MatToolbarModule,MatButtonModule,HttpClientModule]
})
export class GlobalModule { }
