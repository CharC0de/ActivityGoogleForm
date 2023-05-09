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
const appendText = (label = "No label", placeholder = "No placeholder") => {
    let wrap= document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('button')
    del.setAttribute('onclick','document.getElementById("'+id+'").remove()')
    del.textContent="delete"
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
let val=0;
const appendRadio = (label = "No label", placeholder = "No placeholder") => {
    
        

            let wrap= document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('button')
    del.setAttribute('onclick','document.getElementById("'+id+'").remove()')
    del.textContent="delete"
    var el = document.createElement('input')
    el.setAttribute('class', 'mx-1 mt-1')
    el.setAttribute('placeholder', placeholder)
    el.setAttribute('type', 'radio')
    var lbl = document.createElement('label')
    lbl.textContent = label
    lbl.setAttribute('class', 'mx-1 mt-1')
    
    wrap.append(el)
    wrap.append(lbl)
    wrap.append(del)
    document.querySelector("#elements").append(wrap)
    id++
  
}

const appendButton = (label = "No label", placeholder = "No placeholder") => {
    let wrap= document.createElement('div')
    wrap.setAttribute('id',id)
    let del = document.createElement('button')
    del.setAttribute('onclick','document.getElementById("'+id+'").remove()')
    del.textContent="delete"
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
