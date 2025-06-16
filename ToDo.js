


var input = document.getElementById("input")
var list = document.getElementById("list")


function add() {
    var a = document.createElement("li")
    a.innerHTML = input.value +  "<button onclick='deleteitem(event)' class='newbtn'>Delete</button"
    list.append(a)


}

function deleteitem(event) {
    event.target.parentElement.remove()
}