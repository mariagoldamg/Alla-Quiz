const button = document.querySelector (`.btn`);
button.addEventListener (`click`, result);

function result (e){

e.preventDefault();

let points = 0;
 if (document.querySelector(`#answer1`).checked) {
    points++;
 }
 if (document.querySelector(`#answer2`).checked) {
    points++;
 }

 if (document.querySelector(`#answer3`).checked) {
    points++;
 }

 if (document.querySelector(`#answer4`).checked) {
    points++;
 }

 if (document.querySelector(`#answer5`).checked) {
    points++;
 }


 const par = document.querySelector(`#show`);
 par.textContent = `Ваши баллы: ` + points;


}