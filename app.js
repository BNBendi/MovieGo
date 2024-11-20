document.querySelectorAll('.custom-dropdown').forEach(dropdown => {
    const selected = dropdown.querySelector('.dropdown-selected');
    const options = dropdown.querySelector('.dropdown-options');
  
    selected.addEventListener('click', () => {
      options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });
  
    options.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        selected.textContent = event.target.textContent;
        selected.setAttribute('data-value', event.target.getAttribute('data-value'));
        options.style.display = 'none';
      }
    });
  
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        options.style.display = 'none';
      }
    });
  });
  
  