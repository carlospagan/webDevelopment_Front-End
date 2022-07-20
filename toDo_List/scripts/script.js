// <functions>

async function apiCreateTask(description, complete){
    const newTask = {description, complete}
    const url = 'http://[::1]:3000/tasks'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTask)
    }
    const response = await fetch(url, options);
    return await response.json()
}

// apiCreateTask("Tarefa de teste", false)

async function apiGetTasks(){
    const url = 'http://[::1]:3000/tasks'
    const response = await fetch(url)
    return await response.json()
}

// apiGetTaks()

async function apiUpdateTaks(id, task){
    const url = `http://[::1]:3000/tasks/${id}`

    fetch(url,{
        method: 'PUT',
        headers:{
        'Content-Type':'application/json'
        },
        body: JSON.stringify(task)
    })
}

// apiUpdateTaks(45, {
//     description: "ir ao mercado",
//     complete: true
// })

async function apiDeleteTaks(id){
    const url = `http://[::1]:3000/tasks/${id}`
    fetch(url,{
        method: 'DELETE',
        headers:{
        'Content-Type':'application/json'
        },
    })
}

// apiDeleteTaks(55)

// </functions>

const addTaskButton = document.querySelector(".btn-adicionar")
const taskToAdd = document.querySelector(".barra-pesquisa")

addTaskButton.onclick = async () => { 
    console.log("Task Adicionada")
    apiCreateTask(taskToAdd.value, false)

    getTasks = await apiGetTasks()

    console.log(getTasks)

    getTasks.forEach(task =>{
        const elemento = document.createElement("div")
        elemento.classList.add("checkbox")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"

        const taskDescription = document.createElement("label")
        taskDescription.innerHTML = task.description

    })
    
}