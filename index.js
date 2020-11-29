let items = [];
let itemNumber = 0;
function insert() {
    let input = document.getElementById('itemInput').value;
    if (input != ''){
        let p = document.createElement('p');
        p.setAttribute("id", itemNumber);
        p.classList.add('item')
        let t = document.createTextNode(input)
        p.appendChild(t)
        document.getElementById('items').appendChild(p)
        items.push(input)
        document.getElementById('itemInput').value = '';
        if (window.innerHeight < document.getElementById('userInput').offsetHeight) {
            document.getElementsByTagName('body')[0].style.height = '100%';
        }
        document.getElementById(itemNumber).addEventListener('click', (event) => {
            items.splice(items.indexOf(input));
            remove(event.target.id)
        })
        itemNumber++;
    }
}
function random() {
    let number = Math.floor(Math.random() * items.length);
    document.getElementById('output').innerText = `'${items[number]}' was chosen, press ENTER to return and SPACE to choose again.`;
    document.getElementById('outputHold').style.display = 'inline';
}
function remove(id) {
    let item = document.getElementById(id);
    if (item.parentNode) {
        item.parentNode.removeChild(item);
    }
}
addEventListener('keydown', (event) => {
    if (event.key == 'Enter'){
        insert();
    }
})