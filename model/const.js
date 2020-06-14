const ALLPARTIES = [
    'Solidarna Polska',
    'Platforma Obywatelska',
    'Wiosna',
    'Porozumienie',
    'Partia Razem',
    'Brak',
    'Prawo i Sprawiedliwość',
    'Wszystko dla Gdańska',
    'Sojusz Lewicy Demokratycznej',
    'Polskie Stronnictwo Ludowe',
    "Kukiz'15",
    'Partia KORWiN',
    'Partia Zieloni',
    'Inna',
    'Nowoczesna',
    'Unia Polityki Realnej',
    'Unia Europejskich Demokratów',
    'Prawica Rzeczypospolitej',
    'Kongres Nowej Prawicy',
    'Polska Partia Pracy',
    'Unia Pracy',
    'Twój Ruch',
    'Demokracja Bezpośrednia',
    'Biało-Czerwoni',
    'Socjaldemokracja Polska',
    'Europa',
    'Koalicja Europejska',
    'Ruch Narodowy',
    'Polska Razem'
  ]
  
const ZJEDNOCZONAPRAWICA = {
    parties: new Set([
    "Prawo i Sprawiedliwość",
    "Porozumienie",
    "Solidarna Polska",
    "Polska Razem"
    ]),
    name: "Zjednoczona Prawica"
}

const KOALICJAOBYWATELSKA = { 
    parties: new Set([
    "Platforma Obywatelska",
    "Nowoczesna",
    "Partia Zieloni",
    "Inicjatywa Polska"
    ]),
    name: "Koalicja Obywatelska"
}

const LEWICA = {
    parties: new Set([
    "Sojusz Lewicy Demokratycznej",
    "Wiosna",
    "Partia Razem",
    "Polska Partia Socjalistyczna"
    ]),
    name: "Lewica"
}


const KONFEDERACJA = {
    parties: new Set([
    "Partia KORWiN",
    "Ruch Narodowy",
]),
name: "Konfederacja"
}

const KOALICJAPOLSKA = {
    parties: new Set(
    ["Polskie Stronnictwo Ludowe",
    "Kukiz'15",
    'Unia Europejskich Demokratów',
    ]),
    name: "Koalicja Polska"
}

const COALITIONS = [KOALICJAOBYWATELSKA, KOALICJAPOLSKA, LEWICA, KONFEDERACJA, ZJEDNOCZONAPRAWICA]

 module.exports = {
     allParties: ALLPARTIES,
     zjednoczonaPrawica: ZJEDNOCZONAPRAWICA,
     lewica: LEWICA,
     konfederacja: KONFEDERACJA,
     koalicjaPolska: KOALICJAPOLSKA,
     koalicjaObywatelska: KOALICJAOBYWATELSKA,
     allCoalitions: COALITIONS
 }