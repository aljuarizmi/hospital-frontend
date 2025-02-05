import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
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
  constructor(private fb:FormBuilder){}
ngOnInit(): void {
  //console.log(this.data)
  this.initForm();
}
cancelar(){
  this.dialogRef.close();
}
guardar(){

}
initForm(){
this.formGroup=this.fb.group({
  cedula: [{value:null,disabled:false},[Validators.required]],
  nombre: [{value:null,disabled:false},[Validators.required]],
  apellidoPaterno: [{value:null,disabled:false},[Validators.required]],
  apellidoMaterno: [{value:null,disabled:false}],
  esEspecialista: [{value:false,disabled:false},[Validators.required]],
  habilitado: [{value:true,disabled:false},[Validators.required]]
})
}
}
