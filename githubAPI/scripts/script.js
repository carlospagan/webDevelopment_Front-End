const findButton = document.querySelector(".btn-adicionar")
const nick = document.querySelector(".barra-pesquisa")

findButton.onclick = () => { 
    findRepositories(nick.value)
}

function findRepositories(nick) {
    fetch(`https://api.github.com/users/${nick}/repos`
    ,{
        headers: {
        'Authorization': 'token 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'
        }
    }
    )
    .then((response) => response.json())
    .then((repositories) => {
        const list = document.querySelector(".repositoriesList")
        repositories.map((repository) => {
            const item = document.createElement('li')
            item.innerHTML = " "
            item.setAttribute('id', repository.name)
            item.innerHTML = repository.name
            list.appendChild(item)
        })
    })

}