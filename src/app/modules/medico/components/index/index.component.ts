import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.services';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-index',
  imports: [MatToolbar,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,FormsModule,MatTooltipModule,ToastrModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  displayedColumns: string[] = ['cedula', 'nombre', 'esEspecialista', 'acciones'];
  dataSource = new MatTableDataSource<any>([]);
  cantidadTotal=0;
  cantidadPorPagina=10;
  numeroDePagina=0;
  opcionesDePaginado:number[]=[1,5,10,25,100];
  textoBusqueda='';
constructor(private httpService:HttpService){

}
  ngOnInit(): void {
    //this.LeerTodo(10,0,'');
    this.LeerTodo();
  }
  //let miservicio=new HttpService();
  //LeerTodo(cantidad:number,pagina:number,textoBusqueda:string){
    LeerTodo(){
      //alert('Hola');
    this.httpService.LeerTodo(this.cantidadPorPagina,this.numeroDePagina,this.textoBusqueda).subscribe((respuesta:any)=>{
      //console.log(respuesta);
      this.dataSource.data=respuesta.datos.elemento;
      this.cantidadTotal=respuesta.datos.cantidadTotal;
    });
  }
  cambiarPagina(event:any){
    this.cantidadPorPagina=event.pageSize;
    this.numeroDePagina=event.pageIndex;
    this.LeerTodo();
  }
  eliminar(medicoId:number){
    //console.log(medicoId);
    let confirmacion=confirm('¿Esta seguro que desea eliminar el registro?');
    if(confirmacion){
      let ids=[medicoId];
      this.httpService.eliminar(ids).subscribe((respuesta:any)=>{
        //console.log(respuesta);
        this.LeerTodo();
      });
    }
  }
}
