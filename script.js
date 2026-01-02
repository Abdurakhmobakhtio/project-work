const API = 'https://694f6bb08531714d9bce1507.mockapi.io/password'

const box = document.querySelector('.box')

const inp1 = document.getElementById('inp1')
const inp2 = document.getElementById('inp2')
const inp3 = document.getElementById('inp3')
const btn1 = document.getElementById('btn1')

const inp4 = document.getElementById('inp4')
const inp5 = document.getElementById('inp5')
const inp6 = document.getElementById('inp6')
const inp7 = document.getElementById('inp7')
const btn2 = document.getElementById('btn2')

const inpDelete = document.getElementById('inpDelete')
const btnDelete = document.getElementById('btnDelete')

function show(id) {
  document.querySelectorAll('main section')
    .forEach(sec => sec.classList.add('hidden'))
  document.getElementById(id).classList.remove('hidden')
}

function load() {
  box.innerHTML = ''
  fetch(API)
    .then(res => res.json())
    .then(data => {
      data.forEach(item => {
        box.innerHTML += `
          <div class="card">
            <img src="${item.url}">
            <h3>${item.name}</h3>
            <p>${item.password}</p>
            <small>ID: ${item.id}</small>
          </div>
        `
      })
    })
}

load()

btn1.onclick = () => {
  fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: inp1.value,
      password: inp2.value,
      url: inp3.value
    })
  }).then(load)
}

btn2.onclick = () => {
  fetch(`${API}/${inp4.value}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: inp5.value,
      password: inp6.value,
      url: inp7.value
    })
  }).then(load)
}

btnDelete.onclick = () => {
  fetch(`${API}/${inpDelete.value}`, {
    method: 'DELETE'
  }).then(load)
}
