<!-- ===================== js/antrian.js ===================== -->
<script>
const form = document.getElementById('formAntrian');
const list = document.getElementById('listAntrian');

let antrian = Storage.get('antrian');

function render() {
  list.innerHTML = '';
  antrian.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between';
    li.innerHTML = `
      ${item.nama} - ${item.motor}
      <button class="btn btn-sm btn-success" onclick="selesai(${index})">Selesai</button>
    `;
    list.appendChild(li);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();

  const nama = document.getElementById('nama').value;
  const motor = document.getElementById('motor').value;

  antrian.push({ nama, motor });
  Storage.set('antrian', antrian);

  form.reset();
  render();
});

function selesai(index) {
  antrian.splice(index, 1);
  Storage.set('antrian', antrian);
  render();
}

render();
</script>
