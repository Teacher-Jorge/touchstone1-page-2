const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const input3 = document.getElementById('input3')
const input4 = document.getElementById('input4')
const input5 = document.getElementById('input5')
const input6 = document.getElementById('input6')

const input7 = document.getElementById('input7')
const input8 = document.getElementById('input8')
const input9 = document.getElementById('input9')
const input10 = document.getElementById('input10')
const input11 = document.getElementById('input11')
const input12 = document.getElementById('input12')

addEventListener('keyup', (e) => {
    if (input1.value === "Are") {
        input1.style.color = 'darkgreen'
        input1.style.backgroundColor = 'yellow'
        document.getElementById('input2').focus()
       
    }
})

addEventListener('keyup', (e) => {
    if (input2.value === "I'm" || input2.value === 'am') {
        input2.style.color = 'green'
        input2.style.backgroundColor = 'yellow'
        document.getElementById('input3').focus()
    }
})

addEventListener('keyup', (e) => {
    if (input3.value === "Are") {
        input3.style.color = 'darkgreen'
        input3.style.backgroundColor = 'yellow'
        document.getElementById('input4').focus()
       
    }
})

addEventListener('keyup', (e) => {
    if (input4.value === "am") {
        input4.style.color = 'darkgreen'
        input4.style.backgroundColor = 'yellow'
        document.getElementById('input5').focus()
       
    }
})

addEventListener('keyup', (e) => {
    if (input5.value === "Am") {
        input5.style.color = 'darkgreen'
        input5.style.backgroundColor = 'yellow'
        document.getElementById('input6').focus()
       
    }
})

addEventListener('keyup', (e) => {
    if (input6.value === "here") {
        input6.style.color = 'green'
        input6.style.backgroundColor = 'yellow'
        document.getElementById('input7').focus()
    }
})

addEventListener('keyup', (e) => {
    if (input7.value === "am" || input7.value === 'am') {
        input7.style.color = 'green'
        input7.style.backgroundColor = 'yellow'
        document.getElementById('input8').focus()
    }
})

addEventListener('keyup', (e) => {
    if (input8.value === "are") {
        input8.style.color = 'green'
        input8.style.backgroundColor = 'yellow'
        document.getElementById('input9').focus()
    }
})


