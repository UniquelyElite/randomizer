let itemIDs = [];
let items = [];
let itemNumber = 0;
function insert() {
    let input = document.getElementById('itemInput').value;
    if (input != ''){
        let p = document.createElement('p');
        p.setAttribute("id", itemNumber);
        p.classList.add('item');
        for (x in itemIDs) {
            if (x == itemIDs.length - 1) {
                console.log(x)
                document.getElementById(itemIDs[x]).innerText += ',';
            }
        }
        let t = document.createTextNode(`${input}`)
        p.appendChild(t)
        document.getElementById('items').appendChild(p)
        itemIDs.push(itemNumber.toString())
        items.push(input)
        document.getElementById('itemInput').value = '';
        if (window.innerHeight < document.getElementById('userInput').offsetHeight) {
            document.getElementsByTagName('body')[0].style.height = '100%';
        }
        document.getElementById(itemNumber).addEventListener('click', (event) => {
            itemIDs.splice(itemIDs.indexOf(event.target.id), 1);
            console.log(itemIDs)
            items.splice(items.indexOf(event.target.outertext));
            remove(event.target.id)
        })
        itemNumber++;
    }
}
function random() {
    let number = Math.floor(Math.random() * items.length);
    if (items[number] != null) {
        document.getElementById('output').innerText = `'${items[number]}' was chosen.`;
        document.getElementById('outputHold').style.display = 'flex';
    } else {
        alert('You can\'t randomize nothing! Please insert a list item.');
    }
}
function remove(id) {
    let item = document.getElementById(id);
    if (item.parentNode) {
        item.parentNode.removeChild(item);
    }
}
document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter'){
        insert();
    } else if ((event.key == 'r' || event.key == 'R') && event.target.id != 'itemInput') {
        random();
    } else if (event.key == 'e' || event.key == 'E')
        document.getElementById('outputHold').style.display = 'none';
})