/* eslint-disable no-unused-vars */
import {BsFillBasket2Fill} from "react-icons/bs"
import {BsFillCartFill} from 'react-icons/bs'
import {BsFillCartPlusFill} from 'react-icons/bs'
import {BsFillCartCheckFill} from 'react-icons/bs'
import'./App.css'
import Image01 from './assets/image01.png'
import Image02 from './assets/image02.png'
import Image03 from './assets/image03.png'
import Image04 from './assets/image04.png'
import Image05 from './assets/image05.png'
import Image06 from './assets/image06.png'
import Image07 from './assets/image07.png'
import Image08 from './assets/image08.png'
import Image09 from './assets/image09.png'
import Image10 from './assets/image10.png'
import { React, useState } from "react";

import "./App.css"

let carrinho = []
let preço_carrinho = []
let valor_final = 0
let imagens_carrinho = []
function App() {
const [cond,setCond]=useState(0)

function construir(){
  let item_loja = document.createElement("div")
  let item_img = document.createElement("img")
  let item_titulo = document.createElement("h1")
  let preço = document.createElement("p")

  item_loja.setAttribute("class","item-loja")
  item_img.setAttribute("class","item-img")
  item_titulo.setAttribute("class","item-titulo")
  preço.setAttribute("class","preço")

document.body.appendChild(item_loja)
item_loja.appendChild(item_img)
item_loja.appendChild(item_titulo)
item_loja.appendChild(preço)



setTimeout(()=>{
item_loja.setAttribute("class","item-loja-desativo")
let base_carrinho = document.querySelector(".base-carrinho")
base_carrinho.appendChild(item_loja)
item_loja.setAttribute("class","item-loja-ativo")
},1000)

    let svg = document.querySelectorAll("svg")
svg[1].addEventListener("mouseout",()=>{
  
})
setCond(cond+1)
switch(cond){
  case 0:
    svg[1].style = "display:none"
    item_img.setAttribute("src",imagens_carrinho[0])
    item_titulo.textContent = carrinho[0]
    preço.textContent ="R$ "+ preço_carrinho[0]
    console.log(carrinho[0])
    console.log(imagens_carrinho)
break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    svg[1].style = "display:block"
    item_img.setAttribute("src",imagens_carrinho[0])
  item_titulo.textContent = carrinho[0]
  preço.textContent ="R$ "+ preço_carrinho[0]
  console.log(carrinho[0])
  console.log(imagens_carrinho)
    break;
    case 10:
setCond(cond-9)

break;
 default:
  

}
}

function icone1(){
 carrinho.unshift("Manteiga Qually Cremosa")
 preço_carrinho.unshift(5.00)
valor_final += 5.00
 console.log(carrinho)
 console.log(preço_carrinho)

imagens_carrinho.unshift(Image01)
construir()
}
function icone2(){
  carrinho.unshift("Açucar Cristal 5kg")
  preço_carrinho.unshift(18.00)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 18.00
  imagens_carrinho.unshift(Image02)
  construir()
 }
 function icone3(){
  carrinho.unshift("Toddynho Chocolate")
  preço_carrinho.unshift(3.00)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 3.00
  imagens_carrinho.unshift(Image03)
  construir()
 }
 function icone4(){
  carrinho.unshift("Leite itambé - Caixa")
  preço_carrinho.unshift(8.75)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 8.75
  imagens_carrinho.unshift(Image04)
  construir()
 }
 function icone5(){
  carrinho.unshift("Macarrão Parafuso GALO")
  preço_carrinho.unshift(8.85)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 8.85
  imagens_carrinho.unshift(Image05)
  construir()
 }
 function icone6(){
  carrinho.unshift("Arroz tio João 5kg")
  preço_carrinho.unshift(24.00)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 24.00
  imagens_carrinho.unshift(Image06)
  construir()
 }
 function icone7(){
  carrinho.unshift("Feijão Comum Giassi 1kgs")
  preço_carrinho.unshift(10.65)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 10.65
  imagens_carrinho.unshift(Image07)
  construir()
 }
 function icone8(){
  carrinho.unshift("Ovo Cartela 30unidades")
  preço_carrinho.unshift(22.00)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 22.00
  imagens_carrinho.unshift(Image08)
  construir()
 }
 function icone9(){
  carrinho.unshift("Óleo Soya - óleo de soja")
  preço_carrinho.unshift(12.00)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 12.00
  imagens_carrinho.unshift(Image09)
  construir()
 }
 function icone10(){
  carrinho.unshift("Carne Fraldinha 1kg")
  preço_carrinho.unshift(35.00)
  console.log(carrinho)
  console.log(preço_carrinho)
  valor_final += 35.00
  imagens_carrinho.unshift(Image10)
  construir()
 }

 function mostrarConta(){
let base_carrinho = document.querySelector(".base-carrinho")
let valor_total = document.querySelector(".valor-total")

let valor_total_carrinho = document.querySelector(".valor-total-carrinho")
valor_total_carrinho.textContent ="Valor total do CARRINHO: R$"+ valor_final+ " reais"
valor_total.textContent ="Valor total:"+ valor_final+ " reais"
base_carrinho.setAttribute("class","base-carrinho-ativo")

console.log(valor_final)
setTimeout(()=>{
  base_carrinho.setAttribute("class","base-carrinho")

},3000)
 }

  return (
    <>
    <section className="cabeçalho">
<div className="topo">
<BsFillBasket2Fill size={50} style={{margin:10}} color="white"/>
<h1>Mercado</h1>
</div>
<BsFillCartFill size={30} style={{margin:5,display:"none"}}
onClick={mostrarConta}/>
<div className="base-carrinho">
  <div className="valor-total"></div>
</div>
    </section>
  
    <section className="esp-produto">

      <div className="base-produto">
  <div className="produto">
   <img src={Image01} alt="" />
    <div className="base-info">
      <h2>Manteiga Qually Cremosa</h2>
      <p>R$5,00</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone1}/>
  
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image02} alt="" />
    <div className="base-info">
      <h2>Açucar Cristal 5kg</h2>
      <p>R$18,00</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone2}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image03} alt="" />
    <div className="base-info">
      <h2>Toddynho Chocolate </h2>
      <p>R$3,00</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone3}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image04} alt="" />
    <div className="base-info">
      <h2>Leite itambé - Caixa</h2>
      <p>R$8,75</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone4}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image05} alt="" />
    <div className="base-info">
      <h2>Macarrão Parafuso GALO</h2>
      <p>R$8.85</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone5}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image06} alt="" />
    <div className="base-info">
      <h2>Arroz tio João 5kg</h2>
      <p>R$24,00</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone6}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image07} alt="" />
    <div className="base-info">
      <h2>Feijão Comum Giassi 1kg </h2>
      <p>R$10,65</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone7}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image08} alt="" />
    <div className="base-info">
      <h2>Ovo Cartela 30unidades</h2>
      <p>R$22,00</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone8}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image09} alt="" />
    <div className="base-info">
      <h2>Óleo Soya - óleo de soja</h2>
      <p>R$12,00</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone9}/>
    </div>
  </div>
</div>
<div className="base-produto">
  <div className="produto">
   <img src={Image10} alt="" />
    <div className="base-info">
      <h2>Carne Fraldinha 1kg</h2>
      <p>R$35,00</p>
      <BsFillCartPlusFill size={20} style={{margin:10,cursor:"pointer"}}
      onClick={icone10}/>
    </div>
  </div>
</div>

    </section>
<div className="total-de-carrinho" >
  <h2 className="valor-total-carrinho"></h2>
</div>
    </>
 
  );
}

export default App;