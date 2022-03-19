
// document.getElementById('app');
// var appEl = document.querySelector('#app');

// var div = document.createElement('div');
// div.style.width = '100px';
// div.style.height = '100px';
// div.style.background = 'green';

// //e.setAttribute();

// appEl.appendChild(div);

 var app = document.querySelector('#app');
 var bt = document.createElement('button');
 var TextoBotão = document.createTextNode("Wingardium Leviosa");
 bt.appendChild(TextoBotão);
 app.appendChild(bt);
 bt.onClick = function exibir() {
     document.getElementById('app');
     var appEl = document.querySelector('#app').value;

     var div = document.createElement('div');
     div.style.width = '100px';
     div.style.height = '100px';
    div.style.background = 'green';

     appEl.appendChild(div);
}




{/* <div id="corpo">
<label>Nome</label>
<input type="text" id="nome"/>
<button id="botao" onclick="exibir()" >EXIBIR</button>
</div>

function exibir(){
    alert(document.getElementById("nome").value)
    alert(document.querySelector("#nome").value)
} */}