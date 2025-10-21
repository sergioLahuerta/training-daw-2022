window.onload = function(e) {
    console.log('documento cargado')

    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'

    const cogerTosLosh2 = document.getElementsByTagName('h2')
    for (let index = 1; index < 2; index++) {
        const segundoH2 = cogerTosLosh2[index]
        segundoH2.innerHTML = 'Test Cambiao'
    }

    //Seleccionar el elemento con id == username
    const elementIdUsername = document.getElementById('username')
    console.log(elementIdUsername)

    //Cambiar el color de todos los .first que estén dentro de un artículo
    const tosLosFirst = document.querySelectorAll('article .first')
    tosLosFirst.forEach( element => {
            element.style.color = 'blue'
        }
    );

    //Seleccionar todos lo elementos li con class == item
    const tosLosli = document.querySelectorAll('li.item')
    console.log(tosLosli)

    //Seleccionar todos lo buttons dentro de class == buttons
    const tosLosButtons = document.querySelectorAll('.buttons button')
    console.log("Todos los botones: ", tosLosButtons)

    //Cambiar el color de fondo del primer párrafo
    const cogerTosLosP = document.getElementsByTagName('p')
    for (let index = 0; index < 1; index++) {
        const cambiarP1 = cogerTosLosP[index]
        cambiarP1.style.backgroundColor = '#ebd36c'
    }

    //Cambiar el color de los elementos buttons dentro de class == buttons
    //Seleccionar todos lo buttons dentro de class == buttons
    const tosLosButtons2 = document.querySelectorAll('.buttons button')
    console.log('Todos los Botones 2', tosLosButtons2)
    tosLosButtons2.forEach(element => {
        element.style.color = 'red'
    });

}