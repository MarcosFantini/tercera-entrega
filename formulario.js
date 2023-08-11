export let miFormulario = document.getElementById('formulario')

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