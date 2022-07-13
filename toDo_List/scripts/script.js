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

async function apiGetTaks(){
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

apiDeleteTaks(55)




