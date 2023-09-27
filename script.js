// DOM: Traversing, Manipulation & Parent -Child relations

// Commonly 3 types: Element Node, Text Node, Comment Node, (Script node)

// console.log(document);
// DOM : Document Object Model

// document.body.style.backgroundColor = 'blue'
// document.body.style.color = 'white'



// let object1 = {
//     name: "Object",
//     language: "Javascript"
// }

// console.log(object1.name);


const divOne = document.getElementById('div-one');
const myH2Tag = document.createElement('h2')
myH2Tag.innerText = 'Hello I got created in JS.'
myH2Tag.style.color = 'red'


const imageTag = document.createElement('img')
imageTag.src = 'https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
imageTag.alt = 'Image from Pexels'
// imageTag.style.width = '150px'
// imageTag.style.height = '150px'
// imageTag.style.borderRadius = '50%'
// imageTag.style.objectFit = 'cover'
// imageTag.classList.add('image-rounded') // 1st way
imageTag.className = 'image-rounded'

// divOne.appendChild(myH2Tag)
// divOne.appendChild(imageTag)

const paragraph = document.createElement('p');
paragraph.textContent = 'Hii, This paragraph got created from JS.'

divOne.append(imageTag, myH2Tag, paragraph)

// console.log(divOne);

console.log(divOne.childNodes); // Nodelist
console.log(divOne.children);

console.log(document.body.childNodes);
console.log(document.body.children);

console.log(document.body.children.length); // length
console.log(divOne.children.length); // length of total elements
console.log(divOne.children.item(1))

// DOM manipulation
divOne.children.item(1).style.color = 'blue'
divOne.children.item(1).style.fontSize = '48px'

// console.log(divOne.children.item(1).parentElement);

const tempTag = document.querySelector('.image-rounded');
// console.log(tempTag.parentElement.parentElement.parentElement);

console.log(tempTag.previousElementSibling);
console.log(tempTag.previousSibling);


// const h1Tag = document.querySelector('#h1Tag');
const h1Tag = document.querySelector('h1[id="h1Tag"]')
console.log(h1Tag.previousElementSibling); // actual node
console.log(h1Tag.previousSibling); // text, actual, comment


console.log(h1Tag.nextElementSibling); // actual node
console.log(h1Tag.nextSibling.nextSibling); // text, actual, comment

divOne.style.border = '1px solid blue';
divOne.style.padding = '1rem'


const divTwo = document.getElementById('div-two');
divTwo.style.border = '1px solid red'
divTwo.style.padding = '1rem'

const newPara = paragraph.cloneNode(true);
// divTwo.insertAdjacentElement('afterbegin', newPara)
// divTwo.insertAdjacentElement('beforebegin', newPara)
// divTwo.insertAdjacentElement('afterend', newPara)
divTwo.insertAdjacentElement('beforeend', newPara)

// beforeend
// divTwo.appendChild()