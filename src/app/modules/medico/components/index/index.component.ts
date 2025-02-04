import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http.services';

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
/*constructor(private httpService:HttpService){

}*/
  ngOnInit(): void {
    //this.LeerTodo(10,0,'');
  }
  /*LeerTodo(cantidad:number,pagina:number,textoBusqueda:string){
    this.httpService.LeerTodo(10,0,'').subscribe((respuesta:any)=>{
      console.log(respuesta);
    });
  }*/
}
