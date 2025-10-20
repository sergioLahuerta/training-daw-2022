window.onload = () => {
    console.log('start');

    //Listar todos los divs
    const divs = document.getElementsByTagName('div');
    console.log(`divs ${divs.length}`);

    for (const node of divs) {
        console.log(node);
    }

    //Listar todos los elementos con style = buttons;
    const elementosClaseButtons = document.getElementsByClassName("buttons");
    console.log(`Elementos con clase Buttons: ${elementosClaseButtons.length}`)

    for (const node of elementosClaseButtons) {
        console.log(node)
    }

    //Listar 1 div con class buttons;
    console.log('1 div con clase buttons');
    const divClaseButtons = document.querySelector('div.buttons');
    console.log(divClaseButtons);

    //Listar todos los divs con class buttons;
    // const ss = document.querySelectorAll("div.buttons");
    // console.log(`Elementos con clase Buttons: ${divClaseButtons.length}`)
}