import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalaInterface } from 'src/app/interfaces/sala.interface';

@Component({
  selector: 'app-sala-formulario',
  templateUrl: './sala-formulario.component.html',
  styleUrls: ['./sala-formulario.component.css']
})
export class SalaFormularioComponent implements OnInit {

  formularioSala: FormGroup;

  @Input() sala: SalaInterface;

  @Output() datosSalaACrear: EventEmitter<SalaInterface | boolean> = new EventEmitter()

  constructor(
    private readonly _formBuider: FormBuilder
  ) {
    console.log('que llega', this.sala)
  }

  ngOnInit() {
    this.escucharFormulario()
  }

  estructuraFormularioSala() {
    this.formularioSala = this._formBuider.group({
      nombre: ['', [Validators.required]],
      tiempoPorRespuesta: ['', [Validators.required]],
    })
  }

  escucharFormulario() {
    this.formularioSala.valueChanges.subscribe(res => {
      console.log('resp', res)
    }) 
    if (!this.formularioSala.valid) {
      this.formularioSala.valueChanges
      .subscribe(res => {
        if (this.formularioSala.valid) {
          this.datosSalaACrear.emit(res)
          console.log('reps', res)
        } else {
          this.datosSalaACrear.emit(false)
          console.log('reps', res)        }
      })
    }
  }


}
