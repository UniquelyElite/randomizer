function insert() {
    let input = document.getElementById('itemInput').value;
    if (input != ''){
        document.getElementById('items').innerHTML += `<p class='item'>${input}</p>`;
        document.getElementById('itemInput').value = '';
        if (window.innerHeight < document.getElementById('userInput').offsetHeight) {
            document.getElementsByTagName('body')[0].style.height = '100%'
        }
    }
}
addEventListener('keydown', (event) => {
    console.log(event.key)
    if (event.key == 'Enter'){
        insert();
    }
})