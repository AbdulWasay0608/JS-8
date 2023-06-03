var inpVal = document.getElementById('inp')
var list = document.getElementById('list')

function delRow(btn){
    btn.parentNode.remove()
}


function editRow(btn) {
    btn.parentNode.firsrChild.nodeValue = prompt()
}



function addTask() {
    var li = document.createElement("li") 
    var liVal = document.createTextNode(inpVal.value)
    li.appendChild(liVal)



var del = document.createElement("button")
var delText = document.createTextNode("Delete")
del.appendChild(delText)
del.setAttribute( "class", "btn" )
del.setAttribute( "onclick", "delRow(this)" )
li.appendChild(del)


var edit = document.createElement("button")
var editText = document.createTextNode("Edit")
edit.appendChild(editText)
edit.setAttribute( "class", "btn" )
edit.setAttribute( "onclick", "editRow(this)" )
li.appendChild(edit)


list.appendChild(li)

inpVal.value = ""


}