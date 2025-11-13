
// твій код
//знайти кнопку старту
let btn_start = document.querySelector(".btn-start")
let img = document.querySelector(".book")
btn_start.addEventListener("click", function(){
    img.style.display = "flex"
    //анімація по кліку по кнопці- по завершенню анімації перенаправити на сторінку тестування
    anime ({
        targets:img,
        translateY:"-200px",
        duration:5000
    })
    anime({
        targets: btn_start,
        scale: [2,1,2,1,2,1],
        color:["#b04ba", "#8369b6"],
        duration:5000,
        
    }).finished.then(function(){
        window.location.replace("test.html")
    })
})
//


