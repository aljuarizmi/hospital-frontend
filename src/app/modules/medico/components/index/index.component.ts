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
//import {ToastrModule} from 'ngx-toastr';
//import {ToastrService} from 'ngx-toastr';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-index',
  imports: [MatToolbar,MatButtonModule,MatIconModule,MatFormFieldModule,MatInputModule,MatTableModule,MatPaginatorModule,FormsModule,MatTooltipModule],
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
  //readonly dialog = inject(MatDialog);
constructor(
  private httpService:HttpService,
  private dialog:MatDialog//,
  //private toastr:ToastrService
){
//private toastr:ToastrService
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
      //console.log(respuesta.datos);
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
        //this.toastr.success('Elemento eliminado satisfactoriamente','Confirmación');
        this.LeerTodo();
      });
    }
  }
  crearMedico(){
    const dialogRef = this.dialog.open(FormComponent,{
      disableClose:true,
      autoFocus:true,
      closeOnNavigation:false,
      position:{top:'30px'},
      width:'700px',
      data:{
        tipo:'N',
        medicoId:0
      }
    });//codigo que abre la ventana modal
    dialogRef.afterClosed().subscribe(result => {
      //console.log('Dialog result: ${result}');
      this.LeerTodo();
    });
  }
  editarMedico(medicoId:number){
    const dialogRef = this.dialog.open(FormComponent,{
      disableClose:true,
      autoFocus:true,
      closeOnNavigation:false,
      position:{top:'30px'},
      width:'700px',
      data:{
        tipo:'E',
        medicoId:medicoId
      }
    });//codigo que abre la ventana modal
    dialogRef.afterClosed().subscribe(result => {
      //console.log('Dialog result: ${result}');
      this.LeerTodo();
    });
  }
}
