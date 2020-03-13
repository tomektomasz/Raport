# Raport -generator wykresów i analiza danych
 
Aplikacja generuje wykresy w przeglądarce internetowej stworzone na podstawie danych zawartych w pliku formatu *.csv. Plik ten może być wcześniej utworzony za pomocą aplikacji Google Spreadsheets lub innego programu do tworzenia tabel, który potrafi utworzyć plik formatu *.csv.  Separatorem w takim pliku jest precinek. Przykładowa tabela z danymi do aplikacji jest poniżej.</br>
<img src="read-test/screen_probka-2.png"> </br>
Kilka przykładowych plików zapisanych w *.csv użytych do testowania aplikacji znajduje się w repozytorium w katalogu Raport/read-test/
Dane z pliku ukazują się w aplikacji, a następnie mogą być przez użytkownika analizowane takimi narzędziami jak sortownie, czy filtrowanie. W następnym etapie zostaje stworzony wykres. Aplikacja ma możliwość generowania 6 typów wykresów (liniowy, słupkowy, kolumnowy, pierścieniowy, kołowy, polarny) w różnych wariantach. Dla każdego wariantu można wybrać różnego rodzaju opcje. Na końcu wykres wraz z danymi po przeanalizowaniu może być skomentowany przez użytkownika, a potem wydrukowany wraz z komentarzem i tabelą danych. 
