var info = document.getElementById('info')
info.innerText = '0';

document.getElementById('btn1').addEventListener('click', () => {
    alert('Btn pressed')
    const total = localStorage.getItem('total') || 0
    localStorage.setItem('total', +total + 1)
    info.innerText = localStorage.getItem('total')
})


const func = async () => {
    const response = await window.versions.ping()
    console.log("response", response) // prints out 'pong'
}

func();
