let heart = document.querySelector(".heart");
let images = document.querySelectorAll("img")
let colors = document.querySelectorAll(".color span")
let colorBeige = document.querySelectorAll(".color span")[0]
let colorBlack = document.querySelectorAll(".color span")[1]
let colorblue = document.querySelectorAll(".color span")[2]

heart.onclick = function () {
    heart.classList.toggle("fa-solid")
    heart.style.color = "red"
}

colors.forEach((e) => {
    e.addEventListener("click", () =>  {
        colors.forEach(ele => {
            ele.classList.remove("active")
        })
    e.classList.add("active")

    })
})

colorBeige.onclick = function () {
    images[1].classList.add("active")
    images[2].classList.remove("active")
    images[3].classList.remove("active")
}
colorBlack.onclick = function () {
    images[2].classList.add("active")
    images[3].classList.remove("active")
    images[1].classList.remove("active")
}
colorblue.onclick = function () {
    images[3].classList.add("active")
    images[2].classList.remove("active")
    images[1].classList.remove("active")
}
