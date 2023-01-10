const buttonStepChange = document.querySelectorAll('.button_step_change');
const confirmButton = document.querySelectorAll('.confirm_button');
const inputName = document.querySelector('input[type=text]');
const inputEmail = document.querySelector('input[type=email]');
const inputNumber = document.querySelector('input[type=number]');
const step2options = Array.from(document.getElementById('step_2_options').children);
const checkbox = document.querySelectorAll('.check');
const sel = document.getElementById('select');
const spanStep4 = Array.from(document.querySelectorAll('.span_step_4'));
const radioCheck = document.querySelectorAll('.radio_check');
const pStep2 = Array.from(document.querySelectorAll('.p_step_2'));
const goBack = Array.from(document.querySelectorAll('.go_back'));
const stepsClass = Array.from(document.querySelectorAll('.stepsClass'));

buttonStepChange.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index == 0) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })

        }
        if (index == 1) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })

        }
        if (index == 2) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })

        }
        if (index == 3) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })

        }
        if (index == 4) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })
        }
    })
})

step2options.forEach((btn, index) => btn.addEventListener('click', () => {

    step2options.forEach(b => b.classList.remove('add_border'))
    step2options[index].classList.add('add_border')
}))

let changeVerification;
let boxVerification = false;

checkbox.forEach((box, index) => {
    box.addEventListener('click', () => {
        boxVerification = !boxVerification

        if (index == 0) {
            (stepsClass[2].childNodes[5]).classList.toggle('add_border_only')
        }
        if (index == 1) {
            (stepsClass[2].childNodes[7]).classList.toggle('add_border_only')
        }

    })
})

confirmButton.forEach((button, index) => {
    button.addEventListener('click', () => {

        if (inputName.value.length == 0 || inputEmail.value.length == 0 || inputNumber.value == undefined) {
            window.alert('Step 1: Complete the form.')
        } else {
            if (index == 0) {
                stepsClass.forEach((stp, ind) => {
                    stepsClass.forEach(s => s.style.display = 'none')
                    stepsClass[index + 1].style.display = 'block'
                })
            }

            step2options.forEach(btn => {
                let btnWithBorder = btn.classList.contains('add_border')

                if (btnWithBorder) {
                    changeVerification = true
                }
            })

            if (index == 1 && changeVerification == true) {
                stepsClass.forEach((stp, ind) => {
                    stepsClass.forEach(s => s.style.display = 'none')
                    stepsClass[index + 1].style.display = 'block'
                })
            } else if (index == 1 && changeVerification == undefined) {
                window.alert('Step 2: Choose your plan.')
            }

            if (index == 2 && changeVerification == true && boxVerification == true) {
                stepsClass.forEach((stp, ind) => {
                    stepsClass.forEach(s => s.style.display = 'none')
                    stepsClass[index + 1].style.display = 'block'
                })
            } else if (index == 2 && changeVerification == undefined) {
                window.alert('Go back to step 2 and choose your plan.')
            } else if (index == 2 && boxVerification == false) {
                window.alert('Step 3: Select only one.')
            }

            if (index == 3 && changeVerification == true && boxVerification == true) {
                stepsClass.forEach((stp, ind) => {
                    stepsClass.forEach(s => s.style.display = 'none')
                    stepsClass[index + 1].style.display = 'block'
                })
            } else if (index == 3 && changeVerification == undefined && boxVerification == false) {
                window.alert('Go back to step 2 and choose your plan.')
            } else if (index == 3 && changeVerification == true && boxVerification == false) {
                window.alert('Go back to step 3 and select correctly.')
            }
        }
    })
})


sel.addEventListener('change', () => {
    if (sel.value == 'mounthly') {
        spanStep4[0].innerHTML = '$9/mo'
        spanStep4[1].innerHTML = '$1/mo'
        spanStep4[2].innerHTML = '$2/mo'
        spanStep4[3].innerHTML = '$12/mo'
    }

    if (sel.value == 'yearly') {
        spanStep4[0].innerHTML = '$90/yr'
        spanStep4[1].innerHTML = '$10/yr'
        spanStep4[2].innerHTML = '$20/yr'
        spanStep4[3].innerHTML = '$120/yr'
    }
})

radioCheck.forEach((radio, index) => {
    radio.addEventListener('change', () => {
        if (index == 0) {
            pStep2[0].innerHTML = '$9/mo'
            pStep2[1].innerHTML = '$12/mo'
            pStep2[2].innerHTML = '$15/mo'
        }
        if (index == 1) {
            pStep2[0].innerHTML = '$90/yr'
            pStep2[1].innerHTML = '$120/yr'
            pStep2[2].innerHTML = '$150/yr'
        }
    })
})

goBack.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (index == 0) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })
        }
        if (index == 1) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })
        }
        if (index == 2) {
            stepsClass.forEach((stp, ind) => {
                stepsClass.forEach(s => s.style.display = 'none')
                stepsClass[index].style.display = 'block'
            })
        }
    })
})