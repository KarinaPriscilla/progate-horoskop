const main = document.getElementById('main')
const first = document.getElementById('first')
first.innerHTML = 'Keberuntungan Anda hari ini:'

const luck = () => {
    const randomNumber = Date.now()
    const num = randomNumber % 10
    const second = document.createElement('p')

    // 3-pola
    // if-else
    // if (num % 3 === 0) {
    //     second.innerHTML = 'Hebat!!'
    // } else if (num % 3 === 1) {
    //     second.innerHTML = 'Boleh juga!'
    // } else {
    //     second.innerHTML = 'Mengerikan...'
    // }

    // switch-case
    // switch (num % 3) {
    //     case 0:
    //         second.innerHTML = 'Hebat!!'
    //         break
    //     case 1:
    //         second.innerHTML = 'Boleh juga!'
    //         break
    //     default:
    //         second.innerHTML = 'Mengerikan...'
    //         break
    // }

    // 5-pola
    // if-else
    // if (num % 5 === 0) {
    //     second.innerHTML = 'Hebat!!'
    // } else if (num % 5 === 1) {
    //     second.innerHTML = 'Luar biasa!'
    // } else if (num % 5 === 2) {
    //     second.innerHTML = 'Boleh juga!'
    // } else if (num % 5 === 3) {
    //     second.innerHTML = 'Biasa saja'
    // } else {
    //     second.innerHTML = 'Mengerikan...'
    // }

    // switch-case
    // switch (num % 5) {
    //     case 0:
    //         second.innerHTML = 'Hebat!!'
    //         break
    //     case 1:
    //         second.innerHTML = 'Luar biasa!'
    //         break
    //     case 2:
    //         second.innerHTML = 'Boleh juga!'
    //         break
    //     case 3:
    //         second.innerHTML = 'Biasa saja'
    //         break
    //     default:
    //         second.innerHTML = 'Mengerikan...'
    //         break
    // }

    // peluang 20%, 60%, 20%
    // if-else
    // if (num < 2) {
    //     second.innerHTML = 'Hebat!!'
    // } else if(num >= 2 && num <= 7) {
    //     second.innerHTML = 'Boleh juga!'
    // } else {
    //     second.innerHTML = 'Mengerikan...'
    // }

    // switch-case
    switch (num) {
        case 0:
        case 1:
            second.innerHTML = 'Hebat!!'
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            second.innerHTML = 'Boleh juga!'
            break
        default:
            second.innerHTML = 'Mengerikan...'
            break;
    }
    main.append(second)
}
