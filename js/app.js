let btn = document.getElementsByClassName("button")[0]
let form = document.getElementsByTagName("form")[0]
const todos = JSON.parse(localStorage.getItem("todos")) || [];
let waper=document.querySelector(".waper")
renderInUI()
form.addEventListener("submit", (e) => {
  e.preventDefault();
    const todo = {
        title:e.target.name.value,
        id:generateUIID(),
        isfinesht:false,
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos));
    renderInUI(todos)
    form.reset();
  });
  function renderInUI() {
    waper.innerHTML="";

    todos.forEach(todo => {
      let div = document.createElement("div")
      div.setAttribute("delet-id", todo.id)
        div.innerHTML = "";
        div.innerHTML = `
        <div class="card">
            <div class="p">
                <h2>${todo.title}</h2>
            </div>
            <div class="btn">
                <span class="ok">
                    <i class="fa-regular fa-square-check"></i>
                </span>
                <span class="delete">
                    <i class="fa-regular fa-trash-can"></i>
                </span>
            </div>
        </div>`
        waper.appendChild(div)
    })
  }
  waper.addEventListener("click", (e) => {
    if (e.target.classlist.contains("delete")){
      const id = e.target.parntElement.parntElement.getAttribute("delete")
      todos = todos.filter((item) => item.id !=id );
      localStorage.setItem("todos",json.stringify(todos))
      renderInUI()
    }
  })
function generateUIID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

