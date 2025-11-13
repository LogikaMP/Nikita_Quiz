// зчитуємо куки
// кількість правильних відповідей
// загальна кількість запитань

// розбиваємо куки на масив елементів
// перебираємо елементи
// розбиваємо елемент на ключ і значення
// якщо ключ - score, записуємо значення в змінну score
// якщо ключ - total, записуємо значення в змінну total
let score = document.querySelector(".score")
let total = document.querySelector(".total")
let cookie = document.cookie.split(";")
let answers = []
let stats = document.querySelector(".stats")
let res = ""
for (let i = 0; i<cookie.length; i++){
    

    let[name,value] = cookie [i].split('==')
    if(name.trim() == 'score'){
        score.innerHTML = value
    }
    if(name.trim() == 'total'){
        total.innerHTML = value
    }
    if (name.trim() == 'answers'){
        answers = value.split("/")
    } 
}
 import { questions } from "./data.js"
 let cols =[]
// підключаємось до події завантаження сторінки для анімації результату
window.onload = function(){
   
    for (let i = 0; i< questions.length; i++){
        cols = []
      for(let g=0;g<5;g++){

        if (questions[i].ans[g]==questions[i].correct){
            cols.push("rgba(0, 255, 0, 0.88)")
        }else{
            cols.push("linear-gradient(135deg, #ffffff, #e0e7ff)")
        }
         if (questions[i].ans[g]==answers[i].trim() && questions[i].correct!= answers[i].trim() ){
            cols[g]="rgba(228, 10, 10, 0.93)"
        }
           }
            if (answers[i]==questions[i].correct){
            res="✅"
        }else{
            res = "❌"
        }
        stats.innerHTML+=`<div class = "card-qw"> <div class=" qw">${res} ${questions[i].qw}</div>
      <div class="answers">
        <div class="ans" style="background:${cols[0]}">${questions[i].ans[0]}</div>
        <div class="ans" style="background:${cols[1]}">${questions[i].ans[1]}</div>
        <div class="ans" style="background:${cols[2]}">${questions[i].ans[2]}</div>
        <div class="ans" style="background:${cols[3]}">${questions[i].ans[3]}</div>
      </div>`
    }
    // відображаємо результат у відповідні елементи
    

    // анімація результату


    // анімація кількості запитань

            // анімація кількості правильних відповідей по завершенню анімації total

}