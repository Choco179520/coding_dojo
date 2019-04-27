import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaComponent } from './components/sala.component';
import { ButtonModule } from 'primeng/button';
import { SalaFormularioComponent } from 'src/app/formularios/sala-formulario/sala-formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        SalaComponent,
        SalaFormularioComponent
    ],
    imports: [ 
        CommonModule,
        ButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [SalaComponent],
    providers: [],
})
export class SalaModule {}