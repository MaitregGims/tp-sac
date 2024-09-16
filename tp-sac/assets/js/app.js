let show = document.querySelector('#show-bag')
let bagResest = document.querySelector('#reset-bag')
let addForm = document.querySelector('#add')
let removeForm = document.querySelector('#delete')
let bagCapacity = document.querySelector('#capacity');
let select = document.querySelector('#articles-select')
let articles = document.querySelectorAll('option');


function Bag () {
    this.bagContent = [];
    this.bagLimit = 10;

    this.resetBag = () => {
        /*
        bug tjr pas patch

                let selectLen = select.length
        console.log(selectLen)
        for (let y = 0; y < selectLen; y++) {
            console.log(articles)
            
            if (select.options[y].value != "") {
                console.log(options[y]);
                console.log(y);
                articles[y].remove();
                console.log(this.bagContent)
            } 
        }
        articles = document.querySelectorAll('option');
        */
        this.bagContent = []
        alert("votre sac a été vidée.")
        bagCapacity.textContent = "capacity :" + this.bagContent.length + "/ 10"
    }

    this.addItem = (item) => {
        if (this.bagContent.length >= 10) {
            alert('sac plein 10 article deja present')
            return null
        }
        this.bagContent.unshift(item)
        bagCapacity.textContent = "capacity :" + this.bagContent.length + "/ 10"
    }

    this.deleteOneItem = (item) => {
        let deletedArr = this.bagContent.filter((items) => items !== item)
        this.bagContent = deletedArr
        alert('objet supprimer')
        bagCapacity.textContent = "capacity :" + this.bagContent.length + "/ 10"
    } 

    this.showItem = () => {
        alert(this.bagContent)
    }
}

let bag = new Bag();

show.addEventListener('click', () => {
    bag.showItem();
})

bagResest.addEventListener('click', () => {
    articles = document.querySelectorAll('option');
    bag.resetBag();
})

addForm.addEventListener('submit', (y) => {
    y.preventDefault();
    let article = document.querySelector('.article').value
    let option = document.createElement('option');
    articles = document.querySelectorAll('option');
    if (article == null || (typeof article === "string" && article.trim().length === 0)) {
        alert('veullez entrer une valeur')
        return null
    } else {
        for (let i = 0; i < bag.bagContent.length; i++) {
            if (article == bag.bagContent[i]) {
                alert('vous ne pouvez pas ajouter deux fois le meme item')
                return null
            }
        }
        select.appendChild(option)
        option.value = article;
        option.textContent = article;
        console.log(article)
        bag.addItem(article);
        articles = document.querySelectorAll('option');
    }
})

removeForm.addEventListener('submit', (y) => {
    y.preventDefault();
    let article = document.querySelector('#articles-select').value
    console.log(articles)
    if (article == null || (typeof article === "string" && article.trim().length === 0)) {
        alert('veullez choisir un article a supprimer.')
        return null
    } else {
        for (let i = 0; i < select.length; i++) {
            console.log(articles[i])
            if (select.options[i].value == article) {
                select.remove(i);
                articles = document.querySelectorAll('option');
            } 
        }
        bag.deleteOneItem(article);
    }
})