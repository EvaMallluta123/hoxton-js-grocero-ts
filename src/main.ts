import './style.css'
type State= {item:item[]}
type item={
    id: number;
    name: string;
    price: number;
    incart: number;
    img: string;
}
let state:State= {
  item:[
  {id:1,
    name:"beetroot", 
    price:0.35,
    incart: 9,
    img: "./icons/001-beetroot.svg"
    },
  {id:2,
    name:"carrot", 
    price:0.35,
    incart: 5,
    img:"./icons/002-carrot.svg"
  },
  {id:3,
    name:"apple", 
    price:0.35,
    incart: 76,
    img:"./icons/003-apple.svg"
  },
  {id:4,
    name:"apricot", 
    price:0.35,
    incart: 100,
    img:"./icons/004-apricot.svg"
  },
  {id:5,
    name:"avocado", 
    price:0.35,
    incart: 22,
    img:"./icons/005-avocado.svg"
  },
  {id:6,
    name:"bananas", 
    price:0.35,
    incart: 1,
    img:"./icons/006-bananas.svg"
  },
  {id:7,
    name:"bell-pepper", 
    price:0.35,
    incart: 2,
    img:"./icons/007-bell-pepper.svg"
  },
  {id:8,
    name:"berry", 
    price:0.35,
    incart: 9,
    img:"./icons/008-berry.svg"
  },
  {id:9,
    name:"blueberry", 
    price:0.35,
    incart: 0,
    img:"./icons/009-blueberry.svg"
  },
  {id:10,
    name:"eggplant ", 
    price:0.35,
    incart: 7,
    img:"./icons/010-eggplant.svg"
  }
]
}
function addimageStoreItrem(item:any){
  let id=String(item.id).padStart(3,"0")
  return `./icons/${id}-${item.name}.svg`
}
function renderStoreItem(){
let ulEl = document.querySelector(".item-list.store--item-list")
let itemLiEl= document.createElement("li")
let itemUlDiv= document.createElement("div")
itemUlDiv.className="store--item-icon"
for(let item of state.item){
let itemUlImg= document.createElement("img")
let itemUlButton= document.createElement("button")
  itemUlImg.src=addimageStoreItrem(item)
itemUlImg.alt=item.name
itemUlButton.textContent="Add to cart"
itemUlButton.addEventListener('click', function () {
  incrise(item)
})
itemUlDiv.append(itemUlImg,itemUlButton)

}
document.body.append(itemUlDiv)
itemLiEl.append(itemUlDiv)
ulEl.append(itemLiEl)

}
//get the item that are in thje cart
function getItemcart(){
  return state.item.filter(item=> item.incart>0)
}
let card= getItemcart()
function renderCartItem(){
  // document.body.textContent=``
  for( let item of card){
let ulEl = document.querySelector(".item-list.cart--item-list")

let itemLiEl= document.createElement("li")
let itemImg= document.createElement("img")
itemImg.src="cart--item-icon"
itemImg.className=""
itemImg.alt=""
let itemp= document.createElement("p")
itemp.textContent=item.name
let itemButton= document.createElement("button")
itemButton.className="remove-btn"
itemButton.textContent="-"
itemButton.addEventListener('click', function (item) {
  discrise(item)
})
let itemSpan= document.createElement("span")
itemSpan.className="quantity-text"
itemSpan.textContent=String(item.incart)
let itemButton1= document.createElement("button")
itemButton1.className="add-btn"
itemButton1.textContent="+"
itemButton1.addEventListener('click', function (item) {
  incrise(item)
  })
itemLiEl.append(itemImg, itemp, itemButton, itemSpan, itemButton1)

ulEl.append(itemLiEl)
  // }

}
}
function incrise(item){
  item.incard++
  render()
}
function discrise(item){
  item.incard--
  render()
}
function render(){
  // document.body.textContent=""
  renderStoreItem()
  renderCartItem()
  


}

 render()
