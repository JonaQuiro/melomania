const cartas = [
  {
    "frase": "Ella durmió al calor de las masas y yo desperté ____",
    "respuesta": "queriendo soñarla",
    "tema": "De Música Ligera",
    "banda": "Soda Stereo",
    "año": 1990
  },
  {
    "frase": "Te prefiero ____, inalcanzable, yo te prefiero ____",
    "respuesta": "fuera de foco, irreversible",
    "tema": "Persiana Americana",
    "banda": "Soda Stereo",
    "año": 1986
  },
  {
    "frase": "Yo caminaré entre las piedras hasta sentir el ____ en mis piernas",
    "respuesta": "temblor",
    "tema": "Cuando Pase el Temblor",
    "banda": "Soda Stereo",
    "año": 1985
  },
  {
    "frase": "Acaricia mi ensueño el suave murmullo de tu ____",
    "respuesta": "suspirar",
    "tema": "El Día Que Me Quieras",
    "banda": "Charly García (cover de Gardel)",
    "año": 1984
  },
  {
    "frase": "Los amigos del barrio pueden desaparecer, pero ____ van a desaparecer",
    "respuesta": "los dinosaurios",
    "tema": "Los Dinosaurios",
    "banda": "Charly García",
    "año": 1989
  },
  {
    "frase": "En este film velado en blanca noche, el hijo tenaz de tu ____",
    "respuesta": "enemigo",
    "tema": "Ji Ji Ji",
    "banda": "Patricio Rey y sus Redonditos de Ricota",
    "año": 1986
  },
  {
    "frase": "Gira sobre los otros brazos, salta desde algún ____",
    "respuesta": "escalón",
    "tema": "Despeinada",
    "banda": "Los Piojos",
    "año": 1998
  },
  {
    "frase": "Todas las mañanas que viví, todas las calles donde me ____",
    "respuesta": "escondí",
    "tema": "Mariposa Tecknicolor",
    "banda": "Fito Páez",
    "año": 1994
  },
  {
    "frase": "Éramos tan buenos amigos ____, que yo probé tu desempeño en el amor",
    "respuesta": "hasta hoy",
    "tema": "Perfecta",
    "banda": "Miranda!",
    "año": 2007
  },
  {
    "frase": "A ella le gusta la ____, dame más gasolina",
    "respuesta": "gasolina",
    "tema": "Gasolina",
    "banda": "Daddy Yankee",
    "año": 2004
  },
  {
    "frase": "Despacito, quiero respirar tu cuello ____",
    "respuesta": "despacito",
    "tema": "Despacito",
    "banda": "Luis Fonsi ft. Daddy Yankee",
    "año": 2017
  },
  {
    "frase": "Ay amor, me duele tanto que te fueras sin decir ____",
    "respuesta": "adónde",
    "tema": "La Tortura",
    "banda": "Shakira ft. Alejandro Sanz",
    "año": 2005
  },
  {
    "frase": "Oh baby when you talk like that, you make a woman go ____",
    "respuesta": "mad",
    "tema": "Hips Don't Lie",
    "banda": "Shakira ft. Wyclef Jean",
    "año": 2006
  },
  {
    "frase": "All day all night, viva la fiesta, viva la ____",
    "respuesta": "noche",
    "tema": "Loca People",
    "banda": "Sak Noel",
    "año": 2011
  },
  {
    "frase": "Y la Chona se mueve al ritmo que le ____",
    "respuesta": "toquen",
    "tema": "La Chona",
    "banda": "Los Tucanes de Tijuana",
    "año": 1996
  },
  {
    "frase": "Esta noche me la ____, yo quiero que tú bailes como si fuera la última vez",
    "respuesta": "paso",
    "tema": "La Modelo",
    "banda": "Ozuna ft. Cardi B, Selah Sue & J Balvin",
    "año": 2018
  },
  {
    "frase": "Taki taki, quiere un besito o un ____",
    "respuesta": "ñaqui",
    "tema": "Taki Taki",
    "banda": "DJ Snake ft. Selena Gomez, Ozuna & Cardi B",
    "año": 2018
  },
  {
    "frase": "Con calma, yo quiero ver como ella lo ____",
    "respuesta": "menea",
    "tema": "Con Calma",
    "banda": "Daddy Yankee ft. Snow",
    "año": 2019
  },
  {
    "frase": "Mi mujer me estaba llamando, pero yo no ____",
    "respuesta": "contesté",
    "tema": "China",
    "banda": "Anuel AA ft. Daddy Yankee, Karol G, Ozuna & J Balvin",
    "año": 2019
  },
  {
    "frase": "Antes tú me pichaba', ahora yo ____",
    "respuesta": "picheo",
    "tema": "Yo Perreo Sola",
    "banda": "Bad Bunny",
    "año": 2020
  },
  {
    "frase": "Diablo, qué ____, tú tiene' un culo cabrón",
    "respuesta": "safaera",
    "tema": "Safaera",
    "banda": "Bad Bunny ft. Jowell & Randy y Ñengo Flow",
    "año": 2020
  },
  {
    "frase": "Mami, no me digas que no, si sos la lluvia del ____",
    "respuesta": "Trueno",
    "tema": "Mamichula",
    "banda": "Trueno ft. Nicki Nicole y Bizarrap",
    "año": 2020
  },
  {
    "frase": "Llegué al club con el combo, rápido la vi ____",
    "respuesta": "lejos",
    "tema": "BZRP Session #52",
    "banda": "Bizarrap & Quevedo",
    "año": 2022
  },
  {
    "frase": "Si ya estás con otro, no respondo si te ____",
    "respuesta": "veo",
    "tema": "En La De Ella",
    "banda": "Rauw Alejandro ft. Manuel Turizo",
    "año": 2021
  },
  {
    "frase": "Hola ____, soy yo el examor de tu vida",
    "respuesta": "perdida",
    "tema": "Hola Perdida",
    "banda": "Luck Ra ft. Khea",
    "año": 2024
  },
  {
    "frase": "Tírame una ____ que se vea, en la nave mientra' hacemos cosa' feas",
    "respuesta": "foto",
    "tema": "Una Foto (Remix)",
    "banda": "Mesita ft. Emilia, Nicki Nicole y Tiago PZK",
    "año": 2023
  },
  {
    "frase": "Y que me falte todo y no tenga nada, y estemos juntos otra ____",
    "respuesta": "madrugada",
    "tema": "Que Me Falte Todo",
    "banda": "Luck Ra ft. Abel Pintos",
    "año": 2024
  },
  {
    "frase": "Pero cuando se apaga la ____, se siente bien portarse mal",
    "respuesta": "TV",
    "tema": "La_Original.mp3",
    "banda": "Emilia ft. Tini",
    "año": 2024
  },
  {
    "frase": "Vámonos ____ de aquí, ay papi dime que sí",
    "respuesta": "lejos",
    "tema": "El Amor de Mi Vida",
    "banda": "Los Ángeles Azules ft. Maria Becerra",
    "año": 2024
  },
  {
    "frase": "Me puse la' ____ con un short de Nike, buzo y cadena, estoy que goteo",
    "respuesta": "Gucci",
    "tema": "Goteo",
    "banda": "Duki",
    "año": 2019
  },
  {
    "frase": "Ya no ____, no quiero lastimarme de vuelta, de perdonarte perdí la cuenta",
    "respuesta": "vuelvas",
    "tema": "Ya No Vuelvas",
    "banda": "La K'onga ft. Luck Ra & Ke Personajes",
    "año": 2023
  },
  {
    "frase": "Las flores que te regalé ya se ____, las canciones que te dediqué pasaron de moda",
    "respuesta": "marchitaron",
    "tema": "Un Finde",
    "banda": "Big One ft. FMK & Ke Personajes",
    "año": 2023
  },
  {
    "frase": "Hace tiempo estoy así, no logro entenderme a mí, porque aunque aquí haya ____, yo me siento solo aquí",
    "respuesta": "mil",
    "tema": "Me Siento Solo",
    "banda": "Juan Lopez ft. Dillom",
    "año": 2024
  },
  {
    "frase": "Y baby ____, si de tu vida me fui, y aunque más que a nadie te amé",
    "respuesta": "perdoname",
    "tema": "Perdóname (Remix)",
    "banda": "FMK ft. Ante Ciento Veinte & Milo J",
    "año": 2023
  },
  {
    "frase": "El ____ lo sabe, lo vieron running tres cuadras del ghetto",
    "respuesta": "barrio",
    "tema": "Quavo",
    "banda": "Duki ft. Neo Pistea & YSY A",
    "año": 2019
  },
  {
    "frase": "Hay una ____ sola, se está moviendo, quiere un cuartetazo violento",
    "respuesta": "morocha",
    "tema": "La Morocha",
    "banda": "Luck Ra ft. BM",
    "año": 2024
  },
  {
    "frase": "Era de los dos, mami era de los dos, pero vos sola te ____, girl",
    "respuesta": "fuiste",
    "tema": "Te Fuiste (Live Session)",
    "banda": "Tiago PZK",
    "año": 2019
  },
  {
    "frase": "Ya no busco más de ____, yo ya no estoy ahí",
    "respuesta": "ti",
    "tema": "Ya No",
    "banda": "Nicki Nicole",
    "año": 2023
  },
  {
    "frase": "Y yo le di un ____ en la boca, pa' cada loco, su loca",
    "respuesta": "besito",
    "tema": "¿Y Pa La Wacha Loca? (Remix)",
    "banda": "Gusty DJ ft. Salastkbron, L-Gante & La Joaqui",
    "año": 2023
  }
]