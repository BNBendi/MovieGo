document.addEventListener('DOMContentLoaded', () => {
  const genreDropdown = document.getElementById('genre-dropdown');
  const typeDropdown = document.getElementById('type-dropdown');

  const genreSelected = genreDropdown.querySelector('.dropdown-selected');
  const typeSelected = typeDropdown.querySelector('.dropdown-selected');

  // Dropdown menük megnyitása
  [genreDropdown, typeDropdown].forEach(dropdown => {
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
              callback();
          });
      });
  }

  // Műfajok és típusok szűrése
  handleDropdownSelection(genreDropdown, genreSelected, filterMovies);
  handleDropdownSelection(typeDropdown, typeSelected, filterMovies);

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

  filterMovies();
});
