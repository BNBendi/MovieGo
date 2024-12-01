document.addEventListener('DOMContentLoaded', () => {
    const genreDropdown = document.getElementById('genre-dropdown');
    const typeDropdown = document.getElementById('type-dropdown');
    const orderDropdown = document.getElementById('order-dropdown');
  
    const genreSelected = genreDropdown.querySelector('.dropdown-selected');
    const typeSelected = typeDropdown.querySelector('.dropdown-selected');
    const orderSelected = orderDropdown.querySelector('.dropdown-selected');
  
    // Dropdown menük megnyitása
    [genreDropdown, typeDropdown, orderDropdown].forEach(dropdown => {
      dropdown.addEventListener('click', () => {
        const options = dropdown.querySelector('.dropdown-options');
        options.classList.toggle('show');
      });
    });
  
    // Dropdown opciók kezelése
    function handleDropdownSelection(dropdown, selectedElement, callback) {
      const options = dropdown.querySelectorAll('li');
      options.forEach(option => {
        option.addEventListener('click', () => {
          selectedElement.textContent = option.textContent;
          callback(option.getAttribute('data-value'));
        });
      });
    }
  
    // Műfajok szűrése
    handleDropdownSelection(genreDropdown, genreSelected, filterMovies);
    handleDropdownSelection(typeDropdown, typeSelected, filterMovies);
  
    // Rendezési sorrend kezelése
    handleDropdownSelection(orderDropdown, orderSelected, sortMovies);
  
    // Filmek szűrése
    function filterMovies() {
      const selectedGenre = genreSelected.textContent;
      const selectedType = typeSelected.textContent;
  
      const cards = document.querySelectorAll('.card');
      cards.forEach(card => {
        const genres = card.querySelector('.card_category').textContent.split(',').map(g => g.trim());
        const type = card.querySelector('.card-type').textContent.trim();
  
        const genreMatch = selectedGenre === 'Összes' || genres.includes(selectedGenre);
        const typeMatch = selectedType === 'Összes' || type.includes(selectedType);
  
        card.style.display = genreMatch && typeMatch ? 'block' : 'none';
      });
    }
  
    // Filmek rendezése
    function sortMovies(order) {
      const cards = Array.from(document.querySelectorAll('.card'));
      const container = document.querySelector('.popular-container');
  
      let sortedCards;
      if (order === 'Újak elől') {
        sortedCards = cards.sort((a, b) => new Date(b.dataset.date) - new Date(a.dataset.date));
      } else if (order === 'Régiek elől') {
        sortedCards = cards.sort((a, b) => new Date(a.dataset.date) - new Date(b.dataset.date));
      } else if (order === 'ABC sorrend') {
        sortedCards = cards.sort((a, b) =>
          a.querySelector('.card-title a').textContent.localeCompare(b.querySelector('.card-title a'))
        );
      }
  
      sortedCards.forEach(card => container.appendChild(card));
    }
  
    // Alapértelmezett állapot: összes műfaj
    filterMovies();
  });
  