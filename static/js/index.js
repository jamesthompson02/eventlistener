const h1Tag = document.getElementById('h1');
const h2Tag = document.getElementById('h2');


// This relates to the h1Tag color changing


h1Tag.addEventListener('click', () => {
    h1Tag.style.backgroundColor = "white";
    h1Tag.style.color = "black";
})

h1Tag.addEventListener('mouseleave', () => {
    h1Tag.style.backgroundColor = 'rgb(65, 65, 65)';
    h1Tag.style.color = 'aliceblue';
})

h2Tag.addEventListener('mouseenter', () => {
    h2Tag.innerText = "Hello World";
})

h2Tag.addEventListener('mouseleave', () => {
    h2Tag.innerText = "Hover Over Me";
})




window.addEventListener('keydown', (e) => {
    if (e.key === "a") {
        const para = document.createElement('p');
        para.innerText = "a";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "b") {
        const para = document.createElement('p');
        para.innerText = "b";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "c") {
        const para = document.createElement('p');
        para.innerText = "c";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "d") {
        const para = document.createElement('p');
        para.innerText = "d";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "e") {
        const para = document.createElement('p');
        para.innerText = "e";
        document.querySelector('.section').appendChild(para);

    }

    if (e.key === "f") {
        const para = document.createElement('p');
        para.innerText = "f";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "g") {
        const para = document.createElement('p');
        para.innerText = "g";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "h") {
        const para = document.createElement('p');
        para.innerText = "h";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "i") {
        const para = document.createElement('p');
        para.innerText = "i";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "j") {
        const para = document.createElement('p');
        para.innerText = "j";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "k") {
        const para = document.createElement('p');
        para.innerText = "k";
        document.querySelector('.section').appendChild(para);

    }

    if (e.key === "l") {
        const para = document.createElement('p');
        para.innerText = "l";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "m") {
        const para = document.createElement('p');
        para.innerText = "m";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "n") {
        const para = document.createElement('p');
        para.innerText = "n";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "o") {
        const para = document.createElement('p');
        para.innerText = "o";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "p") {
        const para = document.createElement('p');
        para.innerText = "p";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "q") {
        const para = document.createElement('p');
        para.innerText = "q";
        document.querySelector('.section').appendChild(para);

    }

    if (e.key === "r") {
        const para = document.createElement('p');
        para.innerText = "r";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "s") {
        const para = document.createElement('p');
        para.innerText = "s";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "t") {
        const para = document.createElement('p');
        para.innerText = "t";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "u") {
        const para = document.createElement('p');
        para.innerText = "u";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "v") {
        const para = document.createElement('p');
        para.innerText = "v";
        document.querySelector('.section').appendChild(para);

    }
    if (e.key === "w") {
        const para = document.createElement('p');
        para.innerText = "w";
        document.querySelector('.section').appendChild(para);

    }

    if (e.key === "x") {
        const para = document.createElement('p');
        para.innerText = "x";
        document.querySelector('.section').appendChild(para);

    }

    if (e.key === "y") {
        const para = document.createElement('p');
        para.innerText = "y";
        document.querySelector('.section').appendChild(para);

    }

    if (e.key === "z") {
        const para = document.createElement('p');
        para.innerText = "z";
        document.querySelector('.section').appendChild(para);

    }

    

})


// This relates to the arrays

const navBarLinks = [...document.querySelectorAll('.array')];
const paragraphs = [...document.querySelectorAll('.para')];

navBarLinks.forEach(each => {
    each.addEventListener('click', (e) => {
        e.preventDefault();
        let indexPosition = navBarLinks.indexOf(each);
        let paragraphTarget = paragraphs[indexPosition];
        paragraphTarget.classList.toggle('fifty');


    })

})

// const navBar1 = document.getElementById('navbar-1');
// const navBar2 = document.getElementById('navbar-2');
// const navBar3 = document.getElementById('navbar-3');

// const para1 = document.getElementById('para-1');
// const para2 = document.getElementById('para-2');
// const para3 = document.getElementById('para-3');

// let para1ClickCounter = 0;
// let para2ClickCounter = 0;
// let para3ClickCounter = 0;

// function changePara1() {
//     para1ClickCounter += 1;
//     if (para1ClickCounter % 2 !== 0) {
//         para1.classList.add('fifty');
//         return false;
//     } else {
//         para1.classList.remove('fifty');
//         return false;
//     }

// }

// function changePara2() {
//     para2ClickCounter += 1;
//     if (para2ClickCounter % 2 !== 0) {
//         para2.classList.add('fifty');
//     } else {
//         para2.classList.remove('fifty');
//     }

// }

// function changePara3() {
//     para3ClickCounter += 1;
//     if (para3ClickCounter % 2 !== 0) {
//         para3.classList.add('fifty');
//     } else {
//         para3.classList.remove('fifty');
//     }

// }


// navBar1.addEventListener('click', (e) => {
//     e.preventDefault();
//     changePara1();
    
// })

// navBar2.addEventListener('click', (e) => {
//     e.preventDefault();
//     changePara2();
    
// })

// navBar3.addEventListener('click', (e) => {
//     e.preventDefault();
//     changePara3();
    
// })

