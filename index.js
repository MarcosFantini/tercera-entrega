import { miFormulario } from "./formulario.js";
import { productos } from "./productos.js";
import { listaUl } from "./tarjetas.js";


const productoJson = JSON.stringify(productos)

let contenedor = document.createElement("div")

document.body.appendChild(contenedor)


  const cart = []
  
  const cartContainer = document.getElementById('cart-items')
  const cartTotal = document.getElementById('cart-total')
  
  const productsContainer = document.getElementById('products-container')
  
  
  function displayProducts() {
    productsContainer.innerHTML = ''
  
    for (const product of productos) {
      const divCard = document.createElement('div')
      divCard.classList.add('card', 'col-4')
      divCard.innerHTML = `
        <div class='card-body'>
            <img src='${product.imgUrl}' class='card-img-top'>
            <h3>nombre: ${product.nombre}</h3>
            <p>precio: ${product.precio}</p>
            <p>stock: ${product.stock}</p>
            <div class='card-footer'>
                <button class='btn btn-outline-dark w-100 addToCartBtn' data-id="${product.id}">Add to Cart</button>
            </div>
        </div>
      `;
      productsContainer.appendChild(divCard)
    }
    console.log(productoJson)
    

    const addToCartButtons = document.querySelectorAll('.addToCartBtn')
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', handleAddToCart)
    })
  }
  
  
  function handleAddToCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'))
    const product = productos.find((p) => p.id === productId)
  
    if (product.stock > 0) {
      cart.push(product)
      product.stock--
  
      
      displayCart()
      displayProducts()
    }
  }
  
  
  function handleRemoveFromCart(event) {
    const productId = parseInt(event.target.getAttribute('data-id'))
    const product = productos.find((p) => p.id === productId)
  
    const productIndex = cart.indexOf(product)
    if (productIndex !== -1) {
      cart.splice(productIndex, 1)
      product.stock++
  
      
      displayCart()
      displayProducts()
    }
  }
  
  // Function to display the cart and its total
  function displayCart() {
    cartContainer.innerHTML = ''
    let total = 0
  
    for (const product of cart) {
      total += product.precio
      const li = document.createElement('li')
      li.innerHTML = `
        ${product.nombre} - $${product.precio}
        <button class='removeFromCartBtn' data-id="${product.id}">Remove</button>
      `;
      cartContainer.appendChild(li)
    }
  
    cartTotal.textContent = total
    
    
    const removeFromCartButtons = document.querySelectorAll('.removeFromCartBtn')
    removeFromCartButtons.forEach((button) => {
      button.addEventListener('click', handleRemoveFromCart)
    })
  }
  
  
  displayProducts()
  displayCart()




const button = document.querySelector("#buttonSubmit")
buttonSubmit.addEventListener('click', ()=>{


    swal.fire({
        text: 'pronto nos pondremos en contacto.',
        icon: 'success',
        
        confirmButtonText:'cerrar',
        
        

    })


})


function processPayment() {
  return new Promise((resolve, reject) => {
      
      setTimeout(() => {
          const success = Math.random() < 0.8; // 80% de probabilidad de éxito
          if (success) {
              resolve('Pago exitoso');
          } else {
              reject('Error en el pago');
          }
      }, 2000);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  const payButton = document.getElementById('payButton')
  payButton.addEventListener('click', () => {
      payButton.disabled = true

      processPayment()
          .then(response => {
              alert(response)
              
          })
          .catch(error => {
              alert(error)
              
          })
          .finally(() => {
              payButton.disabled = false
          })
  })
})




