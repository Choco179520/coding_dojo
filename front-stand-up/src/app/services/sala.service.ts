import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable()
export class SalaService {

    constructor(
        private readonly _httpClient: HttpClient
    ){}

    findAll(){
        const buscarUsuario = this._httpClient.get(environment.url+environment.port+'/sala')
        console.log('estos son los usuario', buscarUsuario)
        return buscarUsuario
    }

    create(datosUsuario){
        const creacionUsuario = this._httpClient.post(environment.url+environment.port+'/sala', datosUsuario)
        console.log('se creo', creacionUsuario)
        return creacionUsuario
    }
}