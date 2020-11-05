var tr;
var deleteIndex;
var editIndex;
var mygtukas = document.getElementById('mygtukas');
var kitasMygtukas = document.getElementById('kitasmygtukas');
var editData = document.getElementById('edit-data');
var editNumeris = document.getElementById('edit-numeris');
var editLaikas = document.getElementById('edit-laikas');
var editAtstumas = document.getElementById('edit-atstumas');
var redaguotiMygtukas = document.getElementById('redaguoti');
var neredaguotiMygtukas = document.getElementById('neredaguoti');
var netrintiMygtukas = document.getElementById('netrinti');
var trintiMygtukas = document.getElementById('trinti');
var modalas = document.querySelector('.modalo_fonas');
var m = [inputas, inputas1, inputas2, inputas3];
var kitasModalas = document.querySelector('.kitas_modalas');
var data = document.getElementById('inputas');
var numeris = document.getElementById('inputas1');
var laikas = document.getElementById('inputas3');
var atstumas = document.getElementById('inputas2');
tbody = document.getElementById('lentele');
function musuFunkcija() {
    var tr = document.createElement('tr');  
    var mygtukas = document.createElement('button');
    mygtukas.setAttribute('id', 'mygtukas');
    mygtukas.innerHTML = ('trinti');
    var kitasMygtukas = document.createElement('button');
    kitasMygtukas.setAttribute('id', 'kitasmygtukas');
    kitasMygtukas.innerHTML = ('redaguoti');
    m.push(mygtukas);
    m.push(kitasMygtukas);
            for (var i = 0;  i < 5; i++) {
               if (m[0].value <= 0 || m[1].value <= 0 || m[2].value <= 0 || m[3].value <= 0  ) {
                  alert('neuzpildytas vienas is lauku');
                  break;
              } else  { 
                  var td = document.createElement('td');
                  td.innerHTML = m[i].value;
                  td.appendChild(mygtukas);
                  tr.appendChild(td);
                  td.appendChild(kitasMygtukas);
                  tr.appendChild(td);

              }
              tbody.appendChild(tr);
          }
            tbody.addEventListener('click' , function(event) {
                if (event.target && event.target.id == 'mygtukas' ) {
                tr = event.target.parentElement.parentElement;
                modalas.classList.add('modalas-aktyvus');
                }
            });
            trintiMygtukas.addEventListener('click', function(){
            modalas.classList.remove('modalas-aktyvus');
            tr.remove();  
            });
            netrintiMygtukas.addEventListener('click', function(){
            modalas.classList.remove('modalas-aktyvus');
            });
          var forma = document.getElementById('forma').reset();
    var tr = document.querySelectorAll('tr');
    for (var j = 0; j < tr.length; j++) {
       if (j % 2 == 1 && j > 0 ) {
          tr[j].style.backgroundColor = 'lightseagreen';
       };
      var spalva = document.getElementById('lentele');
 spalva.addEventListener("click", function(e) {
     if (e.target.id == 'mygtukas' || e.target.id == 'kitasmygtukas') {
    var tr = e.target;
    tr.style.transform = 'scale(1.5)';
     }
});
      }
      }
      tbody.addEventListener('click' , function(event) {
        if (event.target && event.target.id == 'kitasmygtukas' ) {
        kitasModalas.classList.add('modalas-aktyvus');
        editIndex = event.target.parentElement.parentElement.rowIndex;
        editData.value =  document.querySelector('tbody tr:nth-child('+ editIndex +') td:nth-child(1)').innerHTML;
        editNumeris.value = document.querySelector('tbody tr:nth-child('+ editIndex +') td:nth-child(2)').innerHTML;
        editAtstumas.value = document.querySelector('tbody tr:nth-child('+ editIndex +') td:nth-child(3)').innerHTML;
        editLaikas.value = document.querySelector('tbody tr:nth-child('+ editIndex +') td:nth-child(4)').innerHTML;
        deleteIndex = event.target.parentElement.parentElement;
        }
    });
        neredaguotiMygtukas.addEventListener('click', function(){
            kitasModalas.classList.remove('modalas-aktyvus');
        });
       
  
        redaguotiMygtukas.addEventListener('click', function (e) {
            deleteIndex.remove();
            var tr = document.createElement('tr');  
            var mygtukas = document.createElement('button');
            mygtukas.setAttribute('id', 'mygtukas');
            mygtukas.innerHTML = ('trinti');
            var kitasMygtukas = document.createElement('button');
            kitasMygtukas.setAttribute('id', 'kitasmygtukas');
            kitasMygtukas.innerHTML = ('redaguoti');
            var duomenys = [ editData,  editNumeris,  editAtstumas,  editLaikas];
    duomenys.push(mygtukas);
    duomenys.push(kitasMygtukas);
            for (var i = 0;  i < 5; i++) {
                if (duomenys[0].value <= 0 || duomenys[1].value <= 0 || duomenys[2].value <= 0 || duomenys[3].value <= 0  ) {
                    alert('neuzpildytas vienas is lauku');
                    break;
                } else  { 
                  var td = document.createElement('td');
                  td.innerHTML = duomenys[i].value;
                  td.appendChild(mygtukas);
                  tr.appendChild(td);
                  td.appendChild(kitasMygtukas);
                  tr.appendChild(td);

              }
              tbody.appendChild(tr);
              kitasModalas.classList.remove('modalas-aktyvus');
        }
        });
          