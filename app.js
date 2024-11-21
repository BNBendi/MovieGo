document.addEventListener('DOMContentLoaded', () => {
  const genreDropdown = document.getElementById('genre-dropdown');
  const typeDropdown = document.getElementById('type-dropdown');
  const orderDropdown = document.getElementById('order-dropdown');

  // Get the dropdown selected values
  const genreSelected = genreDropdown.querySelector('.dropdown-selected');
  const typeSelected = typeDropdown.querySelector('.dropdown-selected');
  const orderSelected = orderDropdown.querySelector('.dropdown-selected');

  // Handle genre dropdown
  genreDropdown.addEventListener('click', () => {
      const options = genreDropdown.querySelector('.dropdown-options');
      options.classList.toggle('show');
  });

  // Handle type dropdown
  typeDropdown.addEventListener('click', () => {
      const options = typeDropdown.querySelector('.dropdown-options');
      options.classList.toggle('show');
  });

  // Handle order dropdown
  orderDropdown.addEventListener('click', () => {
      const options = orderDropdown.querySelector('.dropdown-options');
      options.classList.toggle('show');
  });

  // Event listener to select a genre
  genreDropdown.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', () => {
          genreSelected.textContent = item.textContent;
          filterMovies();
      });
  });

  // Event listener to select a type
  typeDropdown.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', () => {
          typeSelected.textContent = item.textContent;
          filterMovies();
      });
  });

  // Event listener to select an order
  orderDropdown.querySelectorAll('li').forEach((item) => {
      item.addEventListener('click', () => {
          orderSelected.textContent = item.textContent;
          sortMovies();
      });
  });

  // Function to filter movies based on selected genre and type
  function filterMovies() {
      const selectedGenre = genreSelected.textContent;
      const selectedType = typeSelected.textContent;

      const cards = document.querySelectorAll('.card');
      cards.forEach((card) => {
          const genres = card.querySelector('.card_category').textContent.split(',');
          const type = card.querySelector('.card-type').textContent;

          if ((selectedGenre === 'Összes' || genres.includes(selectedGenre)) &&
              (selectedType === 'Összes' || type.includes(selectedType))) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  }

  // Function to sort movies based on selected order
  function sortMovies() {
      const order = orderSelected.textContent;
      const cards = Array.from(document.querySelectorAll('.card'));
      
      let sortedCards;

      if (order === 'Újak elől') {
          sortedCards = cards.sort((a, b) => {
              return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
          });
      } else if (order === 'Régiek elől') {
          sortedCards = cards.sort((a, b) => {
              return new Date(a.getAttribute('data-date')) - new Date(b.getAttribute('data-date'));
          });
      } else if (order === 'ABC sorrend') {
          sortedCards = cards.sort((a, b) => {
              return a.querySelector('.card-title a').textContent.localeCompare(b.querySelector('.card-title a').textContent);
          });
      }

      const container = document.querySelector('.popular-container');
      sortedCards.forEach((card) => {
          container.appendChild(card);
      });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  // Dropdown elemek
  const genreDropdown = document.getElementById('genre-dropdown');
  const genreSelected = genreDropdown.querySelector('.dropdown-selected');
  const genreOptions = genreDropdown.querySelectorAll('.dropdown-options li');
  
  document.addEventListener('DOMContentLoaded', () => {
    // Dropdown elemek
    const genreDropdown = document.getElementById('genre-dropdown');
    const genreSelected = genreDropdown.querySelector('.dropdown-selected');
    const genreOptions = genreDropdown.querySelectorAll('.dropdown-options li');
    
    // Műfajok szűrése
    genreOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedGenre = option.getAttribute('data-value');
            genreSelected.textContent = option.textContent; // Frissíti a kijelölt műfajt
            filterMoviesByGenre(selectedGenre);
        });
    });

    function filterMoviesByGenre(selectedGenre) {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const categoryText = card.querySelector('.card_category').textContent.trim();
            const categories = categoryText.split(',').map(category => category.trim()); // Szétválasztja a kategóriákat
            
            // Ha a kiválasztott műfaj az "összes", mutasd az összes filmet
            // Ha a kategóriák között megtalálható a kiválasztott műfaj, akkor is mutasd
            if (selectedGenre === 'osszes' || categories.includes(selectedGenre)) {
                card.style.display = 'block'; // Ha a film megfelel, mutasd
            } else {
                card.style.display = 'none'; // Ha nem, rejtsd el
            }
        });
    }

    // Kezdeti állapot: összes műfaj
    filterMoviesByGenre('osszes');
});

});



