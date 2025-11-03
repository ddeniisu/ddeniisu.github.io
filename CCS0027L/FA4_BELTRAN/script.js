let students = []

document.getElementById('save').addEventListener('click', function(){
let s = {
id: document.getElementById('idnum').value,
fname: document.getElementById('fname').value,
mname: document.getElementById('mname').value,
lname: document.getElementById('lname').value,
gender: document.getElementById('gender').value,
bday: document.getElementById('bday').value
}

if(s.id && s.fname && s.lname && s.gender && s.bday){
students.push(s)
document.getElementById('msg').innerText = "welcome, " + s.fname
showData()
document.getElementById('form').reset()
} else {
document.getElementById('msg').innerText = "please fill out all fields"
}
})

function showData(){
let area = document.getElementById('display')
area.innerHTML = ''
students.forEach(function(a){
area.innerHTML += `
<div class="card">
<p><b>${a.fname} ${a.mname} ${a.lname}</b></p>
<p>ID: ${a.id}</p>
<p>Gender: ${a.gender}</p>
<p>Birthday: ${a.bday}</p>
</div>`
})
}
const saveBtn = document.getElementById('save')

saveBtn.addEventListener('mouseover', () => {
saveBtn.style.backgroundColor = '#9575cd'
saveBtn.style.transform = 'scale(1.05)'
})

saveBtn.addEventListener('mouseout', () => {
saveBtn.style.backgroundColor = '#7e57c2'
saveBtn.style.transform = 'scale(1)'
})
