import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class HttpService{
    constructor(private httpCliente:HttpClient){

    }
    /*LeerTodo(cantidad:number,pagina:number,textoBusqueda:string){
        let parametros=new HttpParams();
        parametros=parametros.append('cantidad',cantidad);
        parametros=parametros.append('pagina',pagina);
        parametros=parametros.append('cantidad',textoBusqueda);
        return this.httpCliente.get('http://localhost:50821/api/medico',{params:parametros})
    }*/
}