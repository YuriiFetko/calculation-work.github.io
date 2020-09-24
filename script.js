let input_v = document.getElementById('my-input');
let result_div = document.getElementById('btn')
let result_headline = document.querySelector('.headline')
let formula = 60;

result_div.addEventListener('click', function () {

    let result = formula - +input_v.value;
    console.log(result)
    if (isNaN(result) || input_v.value === '') {
        input_v.value = '';
        return result_headline.innerHTML = 'Некоректні дані, будь ласка, ведіть число.'

    } else if (input_v.value <= 0) {
        input_v.value = '';
        return result_headline.innerHTML = 'Некоректні дані, Тг != 0 , Тг < 0!'
    } else if (input_v.value >= 60) {
        input_v.value = '';
        return result_headline.innerHTML = 'Некоректні дані, Тг != 60 , Тг >= 0!'
    } else {
        input_v.value = '';
        return result_headline.innerHTML = `Результат: ${result} хв`;
    }
})


