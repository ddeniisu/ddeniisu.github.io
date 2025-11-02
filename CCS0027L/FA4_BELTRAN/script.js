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

students.push(s)
document.getElementById('msg').innerText = "welcome " + s.fname + " ♡"
showData()
document.getElementById('form').reset()
})

function showData(){
let area = document.getElementById('display')
area.innerHTML = ''
students.forEach(function(a){
area.innerHTML += `
<div class="card">
<p><b>${a.fname} ${a.mname} ${a.lname}</b></p>
<p>id: ${a.id}</p>
<p>gender: ${a.gender}</p>
<p>birthday: ${a.bday}</p>
</div>`
})
}
