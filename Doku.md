# MovieGo

Ehhez az ötlet Bendétől jött és mindenki beleegyezett mert volt benne kreativitás

A project egy filmes oldal, meg lehet tekinteni a filmet es a leirasat 

Az én részem volt a filmtár:
- A filmek fel vannak sorolva egyben az összes és a menüpontokra kattintva szűrni tudod, hogy milyen fajta filmet vagy sorozatot akarsz nezni
  
Felhasználói útmutató:
- először nyisd meg az egyik szűrőt és valaszd ki a kivánt kategoriat
- ezutan automatikusan azok jelennek meg, amelyek megfelelnek a keresésnek
- ahhoz hogy megint megjelenjen az összes kattints a kategoriakban az összesre vagy töltsd újra az oldalt

Felépítés
- **filmek.html**: Meghatározza a játék HTML-struktúráját, beleértve a fő interaktív elemeket.
- **films.css**: Az alkalmazás megjelenéséért felelős stílusokat tartalmazza, beleértve a játéktáblát, a színválasztási lehetőségeket és a gombokat.
- **app.js**: A játék fő logikáját tartalmazza pl: dropdown menu irányítása, szűrés


Főbb funkciók:
- handleDropdownSelection() Ez a dropdown opciók értékét kéri be kattintásra
- filterMovies() a kiválasztott műfajt vagy típust olvassa be és az alapjan jeleníti meg a filmeket
- 