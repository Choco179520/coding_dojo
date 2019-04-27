import {
    WebSocketGateway,
    SubscribeMessage,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { SalaService } from 'src/sala/sala.service';
import { UsuarioService } from 'src/usuario/usuario.service';
//const io = require('socket.io-client');

@WebSocketGateway(3002, { namespace: '/cliente' })

export class SalaGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {


    constructor(
        private readonly _salaService: SalaService,
        private readonly _usuarioService: UsuarioService
        ) { }
    afterInit(server: any) {
        console.log('Init cliente');
    }

    handleConnection(cliente: any, ...args: any[]) {
        console.log('cliente -> conexion de aperadora', cliente.id, args);
    }

    handleDisconnect(cliente: any) {
        console.log('disconnect', cliente.id);
    }

    @SubscribeMessage('listarclientes')
    listarclientes(cliente, data): Observable<any[]> {
        const todosLosclientes = this._salaService.findAll()
        return from(todosLosclientes)
    }

    @SubscribeMessage('crearcliente')
    crearcliente(cliente, datoscliente) {
        console.log(datoscliente)
        const clienteACrear = this._salaService.create(datoscliente)        
        return from(clienteACrear)
    }


}
