import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login.component';
import {ButtonModule} from 'primeng/button';


@NgModule({
    declarations: [LoginComponent],
    imports: [ 
        CommonModule,
        ButtonModule
    ],
    exports: [LoginComponent],
    providers: [],
})
export class LoginModule {}