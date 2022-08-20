import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../pedido/pedido.service';
import { Bebida } from './bebida.model';
import { Pizza } from './pizza.model';
import { ProdutosService } from './produtos.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  pizzasArray: Pizza[] = [];
  bebidasArray: any[] = [];
  comidaArray: any[] = [];
  arrayBebida: any[] = [];

  constructor(private produtosService: ProdutosService, private pedidoService: PedidoService) { }

  ngOnInit(): void {
    this.getPizzas();
    this.getComida();
    this.getBebidaFb();
  }

  getPizzas() {
    this.produtosService.getProdutos().subscribe(data => {
      this.pizzasArray = data.pizzas;
      this.bebidasArray = data.bebidas;
    });
  }

  getComida(){
    this.produtosService.getComida().subscribe((res: any) => {
      res.forEach((comida: any) => this.comidaArray.push(comida.payload.doc.data()));
      console.log(this.comidaArray[0])
    })
  }

  addComidaPedido(id:number){
    this.comidaArray.forEach((value)=>{
      if(value.id === id){
        this.pedidoService.getPedidoValues(value.name, value.price);
        this.pedidoService.openSnackBar('Item adicionado');
      }
    })
  }

  getBebidaFb(){
    this.produtosService.getBebida().subscribe((res: any) => {
      res.forEach((bebida: any) => this.arrayBebida.push(bebida.payload.doc.data()));
      console.log(this.arrayBebida);
    })
  }

  addPizzaPedido(id: number) {
    this.pizzasArray.forEach((value)=> {
      if(value.id === id){
        this.pedidoService.getPedidoValues(value.name, value.price);
        this.pedidoService.openSnackBar('Item adicionado');
      }
    });
  }

  addBebidaPedido(id: number) {
    this.arrayBebida.forEach((value)=> {
      if(value.id === id){
        this.pedidoService.getPedidoValues(`${value.name} ${value.volume}`, value.price);
        this.pedidoService.openSnackBar('Bebida adicionada');
      }
    });
  }
}

