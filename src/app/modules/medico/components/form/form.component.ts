import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HttpService } from '../../../../services/http.services';
import { CdkCell } from '@angular/cdk/table';
@Component({
  selector: 'app-form',
  imports: [MatDialogModule,MatButtonModule,MatRadioModule,MatFormFieldModule,MatInputModule,MatIconModule,MatSlideToggleModule,ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit{
  data = inject(MAT_DIALOG_DATA);
  readonly dialogRef = inject(MatDialogRef<FormComponent>);
  formGroup!:FormGroup;
  tipo:string='';
  medicoId:number=0;
  /*cedula='';
  nombre='';
  apellidoPaterno='';
  apellidoMaterno='';
  esEspecialista=false;
  habilitado=false;*/
  constructor(private fb:FormBuilder,private httpService:HttpService){}
ngOnInit(): void {
  //console.log(this.data.medicoId)
  this.initForm();
}
cancelar(){
  this.dialogRef.close();
}
guardar(){
  //console.log(this.formGroup.get('habilitado')?.value)
  //console.log(this.formGroup.get('cedula')?.value);
  console.log(this.tipo);
  if(this.tipo=='N'){
    this.httpService.crear({
      cedula:this.formGroup.get('cedula')?.value,
      nombre:this.formGroup.get('nombre')?.value,
      apellidoPaterno:this.formGroup.get('apellidoPaterno')?.value,
      apellidoMaterno:this.formGroup.get('apellidoMaterno')?.value,
      esEspecialista:this.formGroup.get('esEspecialista')?.value,
      habilitado:this.formGroup.get('habilitado')?.value
    }).subscribe((respuesta:any)=>{
      console.log('Mensaje: ');
      console.log(respuesta);
        this.dialogRef.close();
      });
  }
  if(this.tipo=='E'){
    this.httpService.actualizar({
      id:this.medicoId,
      cedula:this.formGroup.get('cedula')?.value,
      nombre:this.formGroup.get('nombre')?.value,
      apellidoPaterno:this.formGroup.get('apellidoPaterno')?.value,
      apellidoMaterno:this.formGroup.get('apellidoMaterno')?.value,
      esEspecialista:this.formGroup.get('esEspecialista')?.value,
      habilitado:this.formGroup.get('habilitado')?.value
    }).subscribe((respuesta:any)=>{
        this.dialogRef.close();
      });
  }
  
  
}
initForm(){
  this.medicoId=this.data.medicoId;
  this.tipo=this.data.tipo;
this.formGroup=this.fb.group({
  cedula: [{value:null,disabled:false},[Validators.required]],
  nombre: [{value:null,disabled:false},[Validators.required]],
  apellidoPaterno: [{value:null,disabled:false},[Validators.required]],
  apellidoMaterno: [{value:null,disabled:false}],
  esEspecialista: [{value:false,disabled:false},[Validators.required]],
  habilitado: [{value:true,disabled:false},[Validators.required]]
})
  if(this.tipo=='E'){
    //Consultamos el servicio de consulta de un medico por su ID
    this.httpService.listarUno(this.medicoId).subscribe((respuesta:any)=>{
      //console.log(respuesta.datos);
      this.formGroup.setValue({
        cedula:respuesta.datos.cedula,
        nombre:respuesta.datos.nombre,
        apellidoPaterno:respuesta.datos.apellidoPaterno,
        apellidoMaterno:respuesta.datos.apellidoMaterno,
        esEspecialista:respuesta.datos.esEspecialista,
        habilitado:respuesta.datos.habilitado,
      });
    })
  }
}
}
