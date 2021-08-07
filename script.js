// localStorage.setItem("name", "Zhaiyl")

// alert(localStorage.getItem("name"))

// let names = ["Misha", "Pisha", "Sisha"]
// localStorage.setItem("name", JSON.stringify(names))
// alert( localStorage.getItem("name"))

// let array = JSON.parse(localStorage.getItem("name"))
// console.log(array)


const textInput= document.querySelector(".text-input")
const addBtn = document.querySelector(".add-btn")
const list = document.querySelector(".list")
const del = document.querySelector(".del-btn")


function view(){
    let todos = JSON.parse(localStorage.getItem("todos")) || []
    // let todos = [{title: "Купить машину", isDone: false}, {title: "Купить дом", isDone: false}]
    let allList = ""
    todos.forEach((todo) =>{
        allList = allList + `<li>${todo.title}</li>`
    })
    list.innerHTML = allList

    document.querySelectorAll(".del-btn").forEach((btn, idx) => {
        btn.addEventListener('click', ()=>{
            let todos = JSON.parse(localStorage.getItem("todos")) || []
            todos = todos.filter((el, indexLi) => indexLi !== idx)
            localStorage.setItem("todos", JSON.stringify(todos))
            view()
        })
    })
}

view()

addBtn.addEventListener("click", ()=>{
    if(textInput.value.trim()){
        let todos = JSON.parse(localStorage.getItem("todos")) || []
        todos =[...todos, {title: textInput.value, isDone: false}]
        localStorage.setItem("todos", JSON.stringify(todos))
        textInput.value = ""
        view()
    }
})

del.addEventListener("click", ()=>{
    localStorage.clear()
    view()
})
