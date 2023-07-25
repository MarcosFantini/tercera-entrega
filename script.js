

const productos = [
    {
    id: 1,
    nombre: 'raza ',
    precio: 2000,
    stock: 200,
    imgUrl: 'https://carrefourar.vtexassets.com/arquivos/ids/256066/7797453000369_02.jpg?v=637986095784470000'
    },
    {
    id: 2,
    nombre: 'dogchow',
    precio: 2500,
    stock: 150,
    imgUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/961/189/products/d_980799-mla44841976246_022021-o-ae3c279660f56b74ca16433040480683-640-0.jpg' 
    },
    {
        id: 3,
        nombre: 'pedigree',
        precio: 2500,
        stock: 150,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGXhq2QtS5hpbwbR3xLCRYoqhLvFbVLxTHCA&usqp=CAU' 
    },
    {
        id: 4,
        nombre: 'rosco',
        precio: 2500,
        stock: 150,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnc78THC1tCEJTFJPbj5gQxSoGoRMBDeBIXQ&usqp=CAU' 
    },
]
const productoJson = JSON.stringify(productos)

let contenedor = document.createElement("div")

document.body.appendChild(contenedor)

for(const product of productos){
    const divCard = document.createElement('div')
    divCard.classList.add('card', 'col-4')
    divCard.innerHTML = `
        <div class='card-body'>
            <img src='${product.imgUrl}' class='card-img-top' >
            <h3>nombre: ${product.nombre}</h3>
            <p>precio: ${product.precio}</p>
            <p>stock: ${product.stock}</p>
            <div class= 'card-footer'>
                <button class='btn btn-outline-dark w-100' id= 'compra'> compra</button>
            </div>
        </div>
    `
contenedor.appendChild(divCard)
}
console.log(productoJson)






let miFormulario = document.getElementById('formulario')

miFormulario.onsubmit = (evt) => {
    evt.preventDefault()
    let form = evt.target

    const nombre = form.querySelector('input[name="name"]').value
    const email = form.querySelector('input[name="email"]').value
    const edad = form.querySelector('input[name="age"]').value

    console.log(nombre)
    console.log(email)
    console.log(edad)
}


