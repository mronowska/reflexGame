# Gra „Reflex”

## Wytyczne do projektu
1)    Gra rozpoczyna się od wciśnięcia przycisku ”Start”
2)    Rozgrywka trwa 60 sekund lub do straty ostatniego życia (gracz ma trzy „życia”)
3)    Czas widoczny w prawym górnym rogu
4)    Na środku gry wyświetlone są kwadraty (liczba podawana z parametru)
5)    Co 3 sekundy losowo wybrany kwadrat zapala się na zielono
6)    Kwadrat jest zapalony na zielono przez 2 sekundy i w tym czasie gracz musi go kliknąć
7)    Jeśli graczowi uda się kliknąć zielony kwadrat, dostaje 1 punkt
8)    Gracz traci życie, jeśli w trafi w inny kwadrat lub jeśli podświetlenie zielonego kwadratu zniknie po 2 sekundach. Pojawia się alert „straciłeś życie”
9)    Grę można zresetować – wyzerowany zostaje licznik czasu i punktów, a licznik „życia” wraca do stanu początkowego (np. 3)

#### Parametr, który definiuje liczbę kwadratów zawarty jest w pliku index.js (linia 17) i nosi nazwę numberOfSquares

### Uwagi
Ze względu na możliwość swobodnej modyfikacji ustawień projektu zastosowano m.in:
* gra uruchamiana poprzez polecenie ```npm start```
* rozwiązanie, które dopiero po wciśnięciu przycisku Start powoduje pojawienie się kwadratów, których liczba zdefiniowana jest poprzez parametr w JS
* zakończenie gry wiąże się z zakończeniem wyświetlania kwadratów i pojawieniem się treści "Koniec gry!"
* lekkim zmianom poddano także prezentację gry 
