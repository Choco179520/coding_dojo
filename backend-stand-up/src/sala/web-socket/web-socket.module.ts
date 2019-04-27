import { Module } from "@nestjs/common";
import { SalaModule } from "../sala.module";
import { SalaGateway } from "./sala-gateway/sala-gateway";


@Module({
    imports:[SalaModule],    
    providers:[SalaGateway]
})

export class WebSocketModule{
    
}
