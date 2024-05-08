// alert('Hello World!');
// document.querySelector("h1").innerHTML = 'GoodBye ^.^'

let score = 0; // Initialize score variable
// function checkAnswer(answer,id) {
    
//     if (id =='question1'){
//         const result1 = document.getElementById('result1');
//         if (answer === 'a') {
//             result1.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
//             result1.style.color = 'green';
//             score += 1;
//         } else {
//             result1.textContent = "Incorrect! Try again.";
//             result1.style.color = 'red';

//         }
//     } else if (id =='question2'){
//         const result2 = document.getElementById('result2');
//         if (answer === 'c') {
//             result2.textContent = "ถูกต้อง RPA ย่อมาจาก 'Robotic Process Automation'";
//             result2.style.color = 'green';
//             score += 1;
//         } else {
//             result2.textContent = "Incorrect! Try again.";
//             result2.style.color = 'red';
//         }
//         // Update score display
//         document.getElementById('scoreDisplay').innerText = `สรุปคะแนน : ${score}/2`;
//     }

//  }
 


function checkAnswer(answer, id) {
    const result = document.getElementById('result' + id.slice(-1));
    if (id === 'question1' && answer === 'a') {
        result.textContent = "Correct!";
        result.style.color = 'green';
        score += 1;
    } else if (id === 'question2' && answer === 'c') {
        result.textContent = "Correct!";
        result.style.color = 'green';
        score += 1;
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
}

function showQuestion(questionId) {
    document.getElementById('question1').classList.add('hidden');
    document.getElementById(questionId).classList.remove('hidden');
}

function calculateScore() {
    document.getElementById('question2').classList.add('hidden');
    document.getElementById('scoreDisplay').textContent = 'คุณตอบถูกทั้งหมด: ' + score + '/2 ข้อ';
    document.getElementById('scoreDisplay').classList.remove('hidden');
    document.getElementById('newStartButton').classList.remove('hidden');

}

function resetQuiz() {
    // Reset score
    score = 0;

    // Clear result messages
    document.getElementById('result1').textContent = '';
    document.getElementById('result2').textContent = '';

    // Hide score display and new start button
    document.getElementById('scoreDisplay').classList.add('hidden');
    document.getElementById('newStartButton').classList.add('hidden');

    // Show question 1 and hide question 2
    document.getElementById('question1').classList.remove('hidden');
    document.getElementById('question2').classList.add('hidden');
}