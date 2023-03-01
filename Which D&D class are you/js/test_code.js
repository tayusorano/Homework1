window.onload = function () {
    let result = {};
    let step = 0;

    function showQuestion(questionNumber) {
        document.querySelector('.question').innerHTML = test[step]['q'];
        let answer = '';
        for (let key in test[step]['a']) {
            answer += `<li data-v="${key}" class = "answer-variant">${test[step]['a'][key]}</li>`;
        }
        document.querySelector('.answer').innerHTML = answer;
    }

    document.onclick = function (event) {
        event.stopPropagation();
        if (event.target.classList.contains('answer-variant') && step < test.length) {
            if (result[event.target.dataset.v] != undefined) {
                result[event.target.dataset.v]++;
            }
            else {
                result[event.target.dataset.v] = 0;
            }
            step++;
            if (step == test.length) {
                document.querySelector('.question').remove();
                document.querySelector('.answer').remove();
                showResult();
            }
            else {
                showQuestion(step);
            }
        }
        // console.log(result);
    }

    function showResult() {
        let key = Object.keys(result).reduce(function (a, b) {
            return result[a] > result[b] ? a : b;
        });
        // console.log(key);

        let div = document.createElement('div');
        let image = document.createElement("img");

        image.src = answers[key]['image'];
        image.alt = "img load";
        document.querySelector('main').appendChild(image);

        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);

        document.querySelector('h1').innerHTML = answers[key]['class'];

    }

    showQuestion(step);
}