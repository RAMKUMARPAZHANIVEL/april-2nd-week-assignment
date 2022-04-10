let newh1 = document.getElementById('header')
console.log(newh1)
let newp = document.getElementById('char')
console.log(newp)
const newh2 = document.getElementsByClassName('subheader')
console.log(newh2)
const firstnewh2 = document.querySelector('.subheader')
console.log(firstnewh2)

//const creation = document.createElement('p')
//creation.innerText='this is child of ptag'

//newp.appendChild(creation)

const names =['captain america','captain marvel','black panther','thor']
//console.log(names[1])
const styleforname =['one','two','three','four']

 for( let i=0; i < names.length; i++){
    const creation = document.createElement('p')
    creation.innerText=names[i]
    
    creation.classList.add('subheader',styleforname[i])
   const final =document.querySelector('p')
   
   final.appendChild(creation)
 }



