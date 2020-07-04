const ALLPARTIES = [
    {name:'Solidarna Polska',url:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUvr9rbPmjVyyfn5DO7i6GImO3f-usHeCT3F4Viy-WTyRyes1k&usqp=CAU'},
    {name:'Platforma Obywatelska',url:'https://vignette.wikia.nocookie.net/polityka/images/f/fb/Logo_po.png/revision/latest?cb=20200117173739&path-prefix=pl'},
    {name:'Wiosna',url:'https://dailyweb.pl/wp-content/uploads/2019/02/wiosnalogo.png'},
    {name:'Porozumienie',url: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Agreement_party_logo.png/190px-Agreement_party_logo.png'},
    {name:'Partia Razem',url: 'https://lh3.googleusercontent.com/proxy/Fg0ORJ-3Smfdec685eF3689TD_AC5eIDL1t3luXGTVyxBoDRaD5lqGpwI75RU7F8HqMrKLFDLX83xKB5BhOyoWbwOYAllWK0bdCVyRDB6wlUIjZbfeJmayouo6ThNe2oLyuZ'},
    {name:'Brak',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'},
    {name:'Prawo i Sprawiedliwość',url: 'https://siecobywatelska.pl/wp-content/uploads/2019/03/PiS.jpg'},
    {name:'Wszystko dla Gdańska',url: 'http://sh221901.website.pl/wdgg/wp-content/uploads/2018/09/logo.png'},
    {name:'Sojusz Lewicy Demokratycznej',url: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Logo_SLD.jpg'},
    {name:'Polskie Stronnictwo Ludowe',url: 'https://www.psl.pl/wp-content/uploads/2019/02/logo_psl_inwersja-01.png'},
    {name:"Kukiz'15",url: 'https://dailyweb.pl/wp-content/uploads/2019/10/kukiz15-1200x1200.jpg'},
    {name:'Partia KORWiN',url: 'https://wolnosc.pl/wp-content/uploads/2017/09/logo-wolnosc-300x300.png'} ,
    {name:'Partia Zieloni',url:'https://partiazieloni.pl/wp-content/uploads/2018/06/partia_zieloni_ekran_zielone_tlo.png'},
    {name:'Inna',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'},
    {name:'Nowoczesna',url: 'https://studioopinii.pl/wp-content/uploads/2017/02/logo-n.png'},
    {name:'Unia Polityki Realnej',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/UPR_flag.svg/220px-UPR_flag.svg.png'},
    {name:'Unia Europejskich Demokratów',url:'https://upload.wikimedia.org/wikipedia/commons/c/c0/Union_of_European_Democrats.png'},
    {name:'Prawica Rzeczypospolitej',url: 'https://lh3.googleusercontent.com/proxy/z_K5K7zz07UTakPobGNaFzscSoJHeNpeE0hRupadnjbq8fm8xCS_fd5L5o0pm-ETnEwv-LDAzEkdk0ZZtnsKxY-QO_Ms9ssscqlS1RZlWa-4'},
    {name:'Kongres Nowej Prawicy',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Emblem_of_Nowa_Prawica.svg/1200px-Emblem_of_Nowa_Prawica.svg.png'},
    {name:'Polska Partia Pracy',url: 'https://lh3.googleusercontent.com/proxy/mw7tD26PYobPLLo5StTgnxb-ODBLX1irMe3yCov7q0epfrbNGZxXgFsPLftO4WAJbhL8meK3L_5p9SG3RAKaVRyQiMaZpkqXSeb3kqly31EDy6eGYKzJb6HNjCXlHtdGzVPVVu__CBNtvQml4ikT'},
    {name:'Unia Pracy',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Arbeitsunion-Logo.svg/240px-Arbeitsunion-Logo.svg.png'},
    {name:'Twój Ruch',url: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Logo_TwojRuch.png'},
    {name:'Demokracja Bezpośrednia',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Demokracja_Bezpo%C5%9Brednia_logo.svg/1200px-Demokracja_Bezpo%C5%9Brednia_logo.svg.png'},
    {name:'Biało-Czerwoni',url: 'http://politykawarszawska.pl/img/i/images/logo.png'},
    {name:'Socjaldemokracja Polska',url: 'https://pbs.twimg.com/profile_images/1180096927/logo_sdpl_400x400.jpg'},
    {name:'Europa',url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'},
    {name:'Koalicja Europejska',url: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Logo-KE-formularz.jpg'},
    {name:'Ruch Narodowy',url: 'https://vignette.wikia.nocookie.net/logopedia/images/8/84/Ruch-narodowy-logo-fot-arch-300x296-1-.png/revision/latest/scale-to-width-down/340?cb=20151223161238'},
    {name:'Polska Razem',url: 'https://www.marekczuma.pl/wp-content/uploads/2016/12/polska-razem.jpg'}
  ]
  
const ZJEDNOCZONAPRAWICA = {
    parties: new Set([
    "Prawo i Sprawiedliwość",
    "Porozumienie",
    "Solidarna Polska",
    "Polska Razem"
    ]),
    name: "Zjednoczona Prawica",
    url: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/United_Right_Poland_logo.png/180px-United_Right_Poland_logo.png'
}

const KOALICJAOBYWATELSKA = { 
    parties: new Set([
    "Platforma Obywatelska",
    "Nowoczesna",
    "Partia Zieloni",
    "Inicjatywa Polska"
    ]),
    name: "Koalicja Obywatelska",
    url:'https://videosejm.pl/upload/kluby/club-image-5deb67c54f2e7_d.png'
}

const LEWICA = {
    parties: new Set([
    "Sojusz Lewicy Demokratycznej",
    "Wiosna",
    "Partia Razem",
    "Polska Partia Socjalistyczna"
    ]),
    name: "Lewica",
    url: 'https://pbs.twimg.com/media/ECAHjSgXUAI6ap9?format=jpg&name=small'
}


const KONFEDERACJA = {
    parties: new Set([
    "Partia KORWiN",
    "Ruch Narodowy",
]),
name: "Konfederacja",
url: 'https://demagog.org.pl/wp-content/uploads/2020/02/Konfederacja-logo-300x300.jpg'
}

const KOALICJAPOLSKA = {
    parties: new Set(
    ["Polskie Stronnictwo Ludowe",
    "Kukiz'15",
    'Unia Europejskich Demokratów',
    ]),
    name: "Koalicja Polska",
    url: 'https://pbs.twimg.com/profile_images/1103407166562713605/JWRjEWum_400x400.png'
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