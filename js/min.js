let btn = document.getElementById('btn-qut');
let p_qout = document.getElementById('qout');
let writeer = document.getElementById('writwerr');
let qoutt = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        writer: 'Oscar Wilde'
    },
    {
        quote: " “Two things are infinite the universe and human stupidity and I'm not sure about the universe.” ",
        writer: 'Albert Einstein'
    },
    {
        quote: '“So many books, so little time.”',
        writer: 'Frank Zappa'
    },
    {
        quote: '“A room without books is like a body without a soul.”',
        writer: 'Marcus Tullius Cicero'
    },
    {
        quote: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        writer: ' Bernard M. Baruch'
    },
    {
        quote: "“You only live once, but if you do it right, once is enough.”",
        writer: 'Mae West'
    },
    {
        quote: "“Be the change that you wish to see in the world.”",
        writer: 'Mahatma Gandhi'
    }
]
btn.onclick = function () {
    let random = Math.round(Math.random() * qoutt.length)
    p_qout.innerHTML = qoutt[random].quote
    writeer.innerHTML = qoutt[random].writer
}
window.onload = function () {
    let random = Math.round(Math.random() * qoutt.length)
    p_qout.innerHTML = qoutt[random].quote
    writeer.innerHTML = qoutt[random].writer
}