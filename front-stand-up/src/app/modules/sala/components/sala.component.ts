import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalaInterface } from 'src/app/interfaces/sala.interface';

@Component({
  selector: 'app-sala',
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {

  formularioSala: SalaInterface = undefined

  constructor(
    private readonly _router: Router
  ) { }

  ngOnInit() {
  }

  crearSala(){
    console.log('se creo la sala') 
  }

  salaFormulario(evento) {
    if (evento.nombre && evento.tiempoPorRespuesta) {
      this.formularioSala = evento
    } else {
      this.formularioSala = undefined
    }

  }

}
