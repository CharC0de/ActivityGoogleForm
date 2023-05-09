
const insert = () => {
    let type = document.querySelector("#type").value
    let label = document.querySelector("#label").value
    let placeholder = document.querySelector("#placeholder").value
    switch(type){
        case 'text': appendText(label, placeholder) 
                    break
        case 'radio': appendRadio(label, placeholder)
                    break
        case 'button': appendButton(label, placeholder)


    }
}
let id = 0
let val=0;
const appendText = (label = "No label", placeholder = "No placeholder") => {
    val=0
    let wrap= document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('img')
    del.setAttribute('onclick','document.getElementById("'+id+'").remove()')
    del.setAttribute('src',' 1906924.png')
    del.setAttribute('width',' 16px')
    del.setAttribute('height',' 16px')
    let el = document.createElement('input')
    el.setAttribute('class', 'mx-1 mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type', 'text')
    let lbl = document.createElement('label')
    lbl.textContent = label
    lbl.setAttribute('class', 'mx-1 mt-1')
    
    wrap.append(lbl)
    wrap.append(el)
    wrap.append(del)
    document.querySelector("#elements").append(wrap)
    id++
}



const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    let desc= document.createElement('p')
    let wrap= document.createElement('div')
    let wrap1= document.createElement('div')
    let wrap2= document.createElement('div')
    let wrap3= document.createElement('div')
    let del = document.createElement('img')
    let el = document.createElement('input')
    let lbl = document.createElement('label')
if (val==0){
    desc.textContent = placeholder
    wrap.setAttribute('id','r'+id)
    wrap.setAttribute('class','d-flex flex-column')
    wrap1.setAttribute('class','d-flex flex-row-reverse')
    wrap2.setAttribute('class','d-flex')
   
    wrap3.setAttribute('class','d-flex')
    
    del.setAttribute('onclick','document.getElementById("r'+id+'").remove(); val=0;')
    del.setAttribute('src',' 1906924.png')
    del.setAttribute('width',' 16px')
    del.setAttribute('height',' 16px')
    el.setAttribute('class', 'mx-1 mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type', 'radio')
    el.setAttribute('name', id)
    
    lbl.textContent = label
    lbl.setAttribute('class', 'mx-1 mt-1')
    wrap1.append(del)
    wrap.append(wrap1)
    wrap2.append(desc)
    wrap.append(wrap2)
    wrap3.append(el)
    wrap3.append(lbl)
    wrap.append(wrap3)
   
   
    document.querySelector("#elements").append(wrap)
    id++
    val++
}
else if(val>0){
    console.log(id)
    console.log(id-1)

    wrap3.setAttribute('class','d-flex')
    

    el.setAttribute('class', 'mx-1 mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type', 'radio')
    el.setAttribute('name', id-1)
    lbl.textContent = label
    lbl.setAttribute('class', 'mx-1 mt-1')
    wrap3.append(el)
    wrap3.append(lbl)
    document.querySelector('#elements #r'+(id-1)).append(wrap3)
    val++
}

    
  
}

const appendButton = (label = "No label", placeholder = "No placeholder") => {
    val=0
    let wrap= document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('img')
    del.setAttribute('onclick','document.getElementById("'+id+'").remove()')
    del.setAttribute('src',' 1906924.png')
    del.setAttribute('width',' 16px')
    del.setAttribute('height',' 16px')
    let el = document.createElement('button')
    el.setAttribute('class', 'mx-1 mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type', 'text')
    el.textContent = label

    wrap.append(el)
    wrap.append(del)
    document.querySelector("#elements").append(wrap)
    id++
}
