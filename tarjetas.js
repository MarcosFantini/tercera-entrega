export const listaUl = document.querySelector('#listado')

fetch('/assets/data/data.json') 
.then( respuesta => respuesta.json())
.then(data => {
    
    data.forEach(post => {
        const li = document.createElement('li')
        li.innerHTML=`
            <h4>tarjeta: ${post.tarjeta}</h4>
            <p>banco: ${post.banco}</p>
            <p>cuotas: ${post.cuotas}</p>
            
        `
        listaUl.append(li)  
    })

})
.catch(err => console.log(err))