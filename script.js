let avengers = [
    ['Iron man', 'Super rich'],
    ['Hulk', 'Green things'],
    ['Captain America', 'Shield'],
    ['Hawk eye','Panah']
];

let result = avengers.filter(hero=>hero[0].includes('a'))
let body = document.getElementsByTagName('body')[0]

result.forEach(element=>{
    element.forEach(column=>{
        let createP = document.createElement('p')
        createP.innerHTML=column
        console.log(body)
        console.log(document.getElementsByTagName('body'))
        document.getElementsByTagName('body')[0].appendChild(createP)
        console.log(column)
    })
})


console.log(result)

// document.getElementsByTagName('body')[0].appendChild(result);