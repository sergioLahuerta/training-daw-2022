window.onload = () => {
    console.log('start');

    //Listar todos los divs
    const divs = document.getElementsByTagName('div');
    console.log('divs', divs);

    //Listar todos los elementos con style = buttons;
    const elementosClaseButtons = document.getElementsByClassName("buttons");
    console.log('Elementos con clase Buttons: ', elementosClaseButtons)

    //Listar 1 div con class buttons;
    const divClaseButtons = document.querySelector('div.buttons');
    console.log('1 div con clase buttons', divClaseButtons);

    //Listar todos los divs con class buttons;
    const tosLosDivs = document.querySelectorAll("div.buttons");
    console.log('Todos divs con .buttons: ', tosLosDivs)}