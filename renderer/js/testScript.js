var info = document.getElementById('info')
var btn1 = document.getElementById('btn1')
var btn2 = document.getElementById('btn2')

info.innerText = '0';

if (localStorage.getItem('total')) {
    info.innerText = localStorage.getItem('total') || 0
}

btn1.addEventListener('click', () => {
    const total = localStorage.getItem('total') || 0

    if (total == 0) {
        alert("Enough is enough!!! You want me to die now !!!")
        return
    }

    if (total && total > 0) {
        localStorage.setItem('total', +total - 1)
        info.innerText = localStorage.getItem('total')
    } else {
        localStorage.setItem('total', 0)
        info.innerText = 0
    }

})

btn2.addEventListener('click', () => {
    const total = localStorage.getItem('total') || 0
    localStorage.setItem('total', +total + 1)
    info.innerText = localStorage.getItem('total')
})


const func = async () => {
    const response = await window.versions.ping()
    console.log("response", response) // prints out 'pong'
}

func();
