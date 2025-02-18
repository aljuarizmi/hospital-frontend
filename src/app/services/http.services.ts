import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
//import { MedicoI } from "../modules/medico/components/medico.interface";
@Injectable({
    providedIn:'root'
})
export class HttpService{
    constructor(private httpCliente:HttpClient){
    }
    LeerTodo(cantidad:number,pagina:number,textoBusqueda:string){
        let parametros=new HttpParams();
        parametros=parametros.append('cantidad',cantidad);
        parametros=parametros.append('pagina',pagina);
        parametros=parametros.append('textoBusqueda',textoBusqueda);
        return this.httpCliente.get('http://localhost:50821/api/medico',{params:parametros})
    }
    eliminar(ids:number[]){
        const option={
            headers:new HttpHeaders({
                'Content-Type':'application/json'
            }),
            body:ids
        };
        console.log(option.headers);
        return this.httpCliente.delete('http://localhost:50821/api/medico',option)
    }
    //crear(cedula:string,nombre:string,apellidoPaterno:string,apellidoMaterno:string,esEspecialista:boolean,habilitado:boolean){
    crear(medico:any){
        return this.httpCliente.post('http://localhost:50821/api/medico',medico);
    }
    listarUno(id:number){
        let parametros=new HttpParams();
        parametros=parametros.append('id',id);
        return this.httpCliente.get('http://localhost:50821/api/medico',{params:parametros})
    }
    actualizar(medico:any){
        return this.httpCliente.put('http://localhost:50821/api/medico',medico);
    }
}