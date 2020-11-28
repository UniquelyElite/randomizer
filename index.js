
function insert() {
    console.log('lol')
    let input = document.getElementById('itemInput').value;
    if (input != ''){
        let items = `<p class='item'>${input}</p>`;
        document.getElementById('items').innerHTML += items;
        document.getElementById('itemInput').value = '';
    }
}
addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.key == 'Enter'){
        insert();
    }
})