const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
    let x = Math.floor(Math.random() * 10);
    result.innerText = x.toString();
})
