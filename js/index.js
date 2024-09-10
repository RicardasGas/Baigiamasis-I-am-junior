// let posts = [
//     {
//         icon: 'kastuvas',
//         title: 'Construction',
//         text: 'Designing and Building The Most Beautiful Custom Homes.'
//     },
//     {
//         icon: 'salmas',
//         title: 'Project Development',
//         text: 'Designing and Building The Most Beautiful Custom Homes.'
//     }
// ]

// for (let i = 0; i < posts.length; i++) {
//     console.log(posts[i])
// }
// CTRL + /
// let mainHeadingTag = document.getElementById('main-heading')
// mainHeadingTag.innerHTML = '<p>Mano naujas teksas</p>'
// mainHeadingTag.style.color = 'red'
// // background-color: blue
// mainHeadingTag.style.backgroundColor = 'blue'
// console.log(mainHeadingTag)

// infoMessageParagraphTag.innerText = 'Naujas paragrafas'


// infoMessage.appendChild(newParagraph)
// infoMessage.removeChild(newParagraph)
let spausta = 0;

let readMoreBtn = document.getElementById('read-more-button')

readMoreBtn.addEventListener('click', function(event) {
    console.log(event)
    event.preventDefault();
    let infoMessage = document.querySelector('.info__message')
    let infoMessageParagraphTag = document.querySelector('.info__message p')
    let newParagraph = document.createElement('p')
    if (spausta == 0)
    {
        newParagraph.innerText = 'Pradžios data: Rugsėjo 11 d. (grupė pilna), Rugsėjo 16 d., Rugsėjo 18 d. (grupė pilna), Rugsėjo 24 d. (grupė pilna) Trukmė: 94 akademinės val., 5 arba 10 sav. - 20 užsiėmimų.';
        spausta = 1;
    }       
    else
    {
        newParagraph.innerText = 'Inovatyvus kursas yra specialiai suplanuotas pradedantiesiems, norintiems išmokti svetainių kūrimo nuo pagrindų bei mokėti jas efektyviai talpinti (hostinti) internete.';
        spausta = 0;
    }
    

    newParagraph.style.fontSize = '18px';
    infoMessage.replaceChild(newParagraph, infoMessageParagraphTag)
    button.style.visibility = 'hidden';
})
