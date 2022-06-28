import './style.css'

/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/
// - A user can view a selection of items in the store
// - From the store, a user can add an item to their cart
// - From the cart, a user can view and adjust the number of items in their cart
// - If an item's quantity equals zero it is removed from the cart
// - A user can view the current total in their cart


// - Create a state object
// - Create action functions that update state
// - Create render functions  that read from state and update the visuals


let state= {
  count:0,
  item:[
  {id:1,
    name:"beetroot", 
    price:0.35,
    incart: 2,
    img: "./icons/001-beetroot.svg"
    },
  {id:2,
    name:"carrot", 
    price:0.35,
    incart: 2,
    img:"./icons/002-carrot.svg"
  },
  {id:3,
    name:"apple", 
    price:0.35,
    incart: 2,
    img:"./icons/003-apple.svg"
  },
  {id:4,
    name:"apricot", 
    price:0.35,
    incart: 2,
    img:"./icons/004-apricot.svg"
  },
  {id:5,
    name:"avocado", 
    price:0.35,
    incart: 2,
    img:"./icons/005-avocado.svg"
  },
  {id:6,
    name:"bananas", 
    price:0.35,
    incart: 2,
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
    incart: 2,
    img:"./icons/008-berry.svg"
  },
  {id:9,
    name:"blueberry", 
    price:0.35,
    incart: 2,
    img:"./icons/009-blueberry.svg"
  },
  {id:10,
    name:"eggplant ", 
    price:0.35,
    incart: 2,
    img:"./icons/010-eggplant.svg"
  }
]
}

function renderStoreItem(){
let ulEl = document.querySelector(".item-list.store--item-list")
let itemLiEl= document.createElement("li")
let itemUlDiv= document.createElement("div")
itemUlDiv.className="store--item-icon"
for(let item of state.item){
let itemUlImg= document.createElement("img")
let itemUlButton= document.createElement("button")
  itemUlImg.src=item.img
itemUlImg.alt=item.name
itemUlButton.textContent="Add to cart"
itemUlDiv.append(itemUlImg,itemUlButton)

}
document.body.append(itemUlDiv)
itemLiEl.append(itemUlDiv)
ulEl.append(itemLiEl)

}
function renderCartItem(){
let ulEl = document.querySelector(".item-list.cart--item-list")

let itemLiEl= document.createElement("li")
let itemImg= document.createElement("img")
itemImg.src="cart--item-icon"
itemImg.className=""
itemImg.alt=""
let itemp= document.createElement("p")
itemp.textContent="beetroot"
let itemButton= document.createElement("button")
itemButton.className="remove-btn"
itemButton.textContent="-"
itemButton.addEventListener('click', function () {
  // update state
  state.count--
  // rerender
  render()
})
let itemSpan= document.createElement("span")
itemSpan.className="quantity-text"
itemSpan.textContent=state.count
let itemButton1= document.createElement("button")
itemButton1.className="add-btn"
itemButton1.textContent="+"
itemButton1.addEventListener('click', function () {
    // update state
    state.count++
    // rerender
    render()
  })
itemLiEl.append(itemImg, itemp, itemButton, itemSpan, itemButton1)

ulEl.append(itemLiEl)

}
function render(){
  // document.body.textContent=""
  renderStoreItem()
  renderCartItem()
  


}

 render()
