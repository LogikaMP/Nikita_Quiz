// функція тасування Фішера-Йетса -для перемішування відповідей
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // випадковий індекс
    [array[i], array[j]] = [array[j], array[i]];  // обмін місцями
  }
  return array;
}
//

// твій код


// масив запитань
import {questions} from "./data.js"
//
let q_index = 0 // індекс поточного запитання
let score = 0 // кількість правильних відповідей
let btn_ans = document.querySelectorAll(".ans") // кнопки відповідей
let qw_text = document.querySelector(".qw") // текст запитання
let txt_res = document.querySelector(".res_text")
let txt = ""
let col_cor = "rgba(71, 255, 34, 1)"
let col_wr = "rgba(255, 0, 0, 1)"
let col = ""
let answers = []
let can_click = true
// функція відображення запитання

let qw = ""
function showQuestion(){
    // отримуємо поточне запитання
     qw = questions[q_index]
    // відображаємо текст запитання
        qw_text.innerHTML = qw.qw

    // тасуємо відповіді
    let ans = shuffle(qw.ans)
        ans = shuffle(ans)
    // тасуємо копію масиву відповідей

   // відображаємо відповіді на кнопках відповідей
   for (let i = 0; i < btn_ans.length; i++){
    btn_ans[i].innerHTML = ans[i]
    // Скидати inline-стилі (щоб відновився градієнт з CSS)
        btn_ans[i].style.background = "";
   }

    
}
//відображаємо перше запитання
showQuestion()

// обробники кліків по кнопках відповідей
for (let i = 0; i < btn_ans.length; i++) {
  btn_ans[i].addEventListener("click", function () {
    if (!can_click) return;
    can_click = false;

    let ans = btn_ans[i].innerHTML;
    answers.push(ans);

    if (ans == qw.correct) {
      col = col_cor;
      txt = "Так тримати 👍";
      score++;
    } else {
      col = col_wr;
      txt = "Спробуй ще 🤗";
    }

    
    txt_res.innerHTML = txt;
    txt_res.style.opacity = "0";
    btn_ans[i].style.background = " #ffffff"
    // 2️⃣ анімація кольору кнопки
    anime({
      targets: btn_ans[i],
      backgroundColor: col,
      duration: 500,
       direction: "alternate" // рухає вгору і назад вниз
    }).finished.then(function(){
        // 1️⃣ анімація тексту результату (зверху вниз)
          anime({
      targets: txt_res,
      opacity: [0, 1],
      backgroundColor: col,
      scale:[0,3],
      duration: 1000,
       direction: "alternate" // рухає вгору і назад вниз
    }).finished.then(function(){
              txt_res.style.opacity = "0"

              q_index++;
              if (q_index == questions.length) {
                answers = answers.join("/")
                document.cookie = `answers==${answers};max-age==86400`;
                document.cookie = `score==${score};max-age==86400`;
                document.cookie = `total==${questions.length};max-age==86400`;
                window.location.replace("result.html");
              } else {
                showQuestion();
                can_click = true;
              }
            })
        })
        })
    }
