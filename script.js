let button = document.getElementById("send");
let textInput = document.getElementById("textInput");
let list = document.getElementById("list");

button.addEventListener("click", () => {
	if (checkLength())
		addItem(textInput.value);
})


function checkLength() {
	if (textInput.value.length > 0)
	 	return true
	else
		return false
}

function addItem(item) {
	let row = list.insertRow(-1);
	let newItem = row.insertCell(0);
	let deleteCell = row.insertCell(1);
	let trashIcon = document.createElement("i");
	trashIcon.setAttribute("class","fas fa-trash");
	deleteCell.setAttribute("class","hide");
	deleteCell.appendChild(trashIcon);
	let shoppingItemNode = document.createTextNode(item);
	newItem.appendChild(shoppingItemNode);
	newItem.addEventListener("click", () => {
		newItem.classList.toggle("done");
		deleteCell.classList.toggle("hide");
	})
	deleteCell.addEventListener("click", () => {
		removeItem(row);
	})
	textInput.value = "";
}

function removeItem(item) {
	let index = item.rowIndex;
	list.deleteRow(index);
} 