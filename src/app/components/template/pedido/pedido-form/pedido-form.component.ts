import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  nome: string = '';
  numero: string = '';
  rua: string = '';
  bairro: string = '';
  complemento: string = '';
  troco: string = '';

  constructor(private pedidoService: PedidoService) { }

  ngOnInit(): void {
  }

  concluirPedido(): void {
    let texto = `*Nombre:* ${this.nome};\n*Barrio:* ${this.bairro};\n*Domicilio:* ${this.rua};\n*Teléfono:* ${this.numero};\n*Referencia:* ${this.complemento};\n*Abona con:* ${this.troco}\n\n`;
    let textoURI = encodeURIComponent(texto);

    window.open(`https://api.whatsapp.com/send?phone=3513098684&text=${textoURI}${this.pedidoService.pedidoURI}`);
    
  }
}
