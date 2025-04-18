document.querySelectorAll('.table-row.expandable').forEach((row, idx) => {
    row.addEventListener('click', function () {
      document.querySelectorAll('.table-row.expandable').forEach((r, i) => {
        if (i !== idx) {
          r.classList.remove('expanded');
          r.nextElementSibling.classList.remove('expanded');
        }
      });
      row.classList.toggle('expanded');
      row.nextElementSibling.classList.toggle('expanded');
    });
  });
  
  const btn = document.getElementById('toggle-add-semana');
  const form = document.getElementById('add-semana-form');
  
  btn.addEventListener('click', function () {
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'flex';
      btn.textContent = 'Cancelar adição';
    } else {
      form.style.display = 'none';
      btn.textContent = '+ Add Semana';
    }
  });
  
  form.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    btn.textContent = '+ Add Semana';
  });
  