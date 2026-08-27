const PARKS = [
  {
    "id": "animal-kingdom",
    "name": "Animal Kingdom",
    "group": "Walt Disney World",
    "map": "assets/maps/animal-kingdom.jpg",
    "description": "",
    "notes": "Horário de funcionamento do parque: das 08h às 18h  -  Estacionamento: $35  -  Distância de casa: 20min",
    "attractions": [
      {
        "id": "a1",
        "name": "Kilimanjaro Safaris",
        "area": "África",
        "x": 21.5,
        "y": 0,
        "priority": "Média",
        "category": "Atração",
        "photo": "assets/attractions/animal-kingdom-1.jpg",
        "description": "Começar aqui. Early Entry libera as áreas Pandora e Ásia, será aonde terá maior concentração de pessoas.",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Kali River Rapids",
        "area": "África",
        "x": 60.1,
        "y": 6.8,
        "priority": "Média",
        "category": "Water Ride",
        "photo": "assets/attractions/animal-kingdom-2.jpg",
        "description": "Tipo um Rio Bravo.",
        "meta": {
          "Prioridade": "Média",
          "Observação": "Molha"
        }
      },
      {
        "id": "a3",
        "name": "Expedition Everest",
        "area": "Ásia",
        "x": 89.9,
        "y": 19,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/animal-kingdom-3.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a4",
        "name": "Mickey and Minnie",
        "area": "Adventurers Outpost",
        "x": 49.6,
        "y": 22.7,
        "priority": "Alta",
        "category": "Personagem",
        "photo": "assets/attractions/animal-kingdom-4.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a5",
        "name": "Festival Lion King",
        "area": "África",
        "x": 10.8,
        "y": 16.2,
        "priority": "Opcional",
        "category": "Espetáculo",
        "photo": "assets/attractions/animal-kingdom-5.jpg",
        "description": "Horários: 10h, 11h, 12h, 13h, 14h, 15h e 16h. Tentar ir na das 15h, pós almoço.",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": "Duração: aproximadamente 40min. Chegar 20min antes."
        }
      },
      {
        "id": "a1787783235565",
        "name": "Avatar Flight of Passage",
        "area": "Pandora",
        "x": 22.4,
        "y": 63.2,
        "priority": "Média",
        "category": "Simulador",
        "photo": "assets/attractions/animal-kingdom6.jpg",
        "description": "Área mais bonita durante a noite, mas se der tempo, ir durante o dia também.",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787833417289",
        "name": "Na'vi River Journey",
        "area": "Pandora",
        "x": 26.6,
        "y": 66.9,
        "priority": "Alta",
        "category": "Water Ride",
        "photo": "assets/attractions/animal-kingdom7.jpg",
        "description": "Área mais bonita durante a noite, mas se der tempo, ir durante o dia também.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Não molha."
        }
      }
    ]
  },
  {
    "id": "hollywood-studios",
    "name": "Hollywood Studios",
    "group": "Walt Disney World",
    "map": "assets/maps/hollywood-studios.jpg",
    "description": "Roteiro interativo do Disney’s Hollywood Studios.",
    "notes": "Horário de funcionamento do parque: das 09h às 21h  -  Estacionamento: $35  -  Distância de casa: ~20min  -  Abre às 8h para todos, ficamos aguardando na área Sunset Boulevard.",
    "attractions": [
      {
        "id": "a1",
        "name": "Tower of Terror",
        "area": "Sunset Boulevard",
        "x": 81.5,
        "y": 50.6,
        "priority": "Alta",
        "category": "Elevador",
        "photo": "assets/attractions/hollywood-studios-1.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Rock'n'Roller",
        "area": "Sunset Boulevard",
        "x": 76.6,
        "y": 36.5,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/hollywood-studios-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a3",
        "name": "Pato Donald",
        "area": "Animation Courtyard",
        "x": 54.8,
        "y": 36.1,
        "priority": "Alta",
        "category": "Personagem",
        "photo": "assets/attractions/hollywood-studios-3.jpg",
        "description": "Área com Tico e Teco, Donald, Pateta, Mulan, Pluto, Rapunzel e Stitch.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a4",
        "name": "Rise of the Resistance",
        "area": "Star Wars",
        "x": 11.9,
        "y": 37.9,
        "priority": "Alta",
        "category": "Simulador",
        "photo": "assets/attractions/hollywood-studios-4.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Se o tempo de espera estiver mais de 45min, deixamos para depois."
        }
      },
      {
        "id": "a5",
        "name": "Millennium Falcon",
        "area": "Star Wars",
        "x": 6.1,
        "y": 22.7,
        "priority": "Opcional",
        "category": "Simulador",
        "photo": "assets/attractions/hollywood-studios-5.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787842253786",
        "name": "Slinky Dog Dash",
        "area": "Toy Story",
        "x": 33.3,
        "y": 4.9,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/hollywood-studios-6.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Área infantil"
        }
      },
      {
        "id": "a1787842383050",
        "name": "Alien Swirling Saucers",
        "area": "Toy Story",
        "x": 26.1,
        "y": 10.3,
        "priority": "Opcional",
        "category": "Spinning",
        "photo": "assets/attractions/hollywood-studios-7.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": "Área infantil"
        }
      },
      {
        "id": "a1787842585731",
        "name": "Toy Story Mania",
        "area": "Toy Story",
        "x": 30.6,
        "y": 12.7,
        "priority": "Opcional",
        "category": "Spinning",
        "photo": "assets/attractions/hollywood-studios-8.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": "Área infantil"
        }
      },
      {
        "id": "a1787842764810",
        "name": "Runaway Railway",
        "area": "Hollywood Boulevard",
        "x": 38.7,
        "y": 44.5,
        "priority": "Média",
        "category": "Simulador/ride",
        "photo": "assets/attractions/hollywood-studios-9.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787842999067",
        "name": "Indiana Jones Stunt",
        "area": "Echo Lake",
        "x": 40.1,
        "y": 73.7,
        "priority": "Opcional",
        "category": "Espetáculo",
        "photo": "assets/attractions/hollywood-studios-10.jpg",
        "description": "Horários: 10:45, 12:00, 13:15, 15:15 e 16:30",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787843404011",
        "name": "Fantasmic!",
        "area": "Fantasmic Stage",
        "x": 92.9,
        "y": 72.6,
        "priority": "Alta",
        "category": "Espetáculo",
        "photo": "assets/attractions/hollywood-studios-11.jpg",
        "description": "Checar horário no dia. Geralmente acontece às 20:30/21h.  -  Chegar com uma hora de antecedência.  -  Tem “dinner packages”: você reserva em um restaurante e ganha vip tickets (valores a partir de 60 dólares).",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Não sentar muito na frente porque molha"
        }
      }
    ]
  },
  {
    "id": "epcot",
    "name": "EPCOT",
    "group": "Walt Disney World",
    "map": "assets/maps/epcot.jpg",
    "description": "Roteiro interativo do EPCOT.",
    "notes": "Horário de funcionamento do parque: das 09h às 21h  -  Estacionamento: $35  -  Distância de casa: ~25min",
    "attractions": [
      {
        "id": "a1",
        "name": "Journey of Water - Moana",
        "area": "World Celebration",
        "x": 23.1,
        "y": 44.7,
        "priority": "Alta",
        "category": "Passeio",
        "photo": "assets/attractions/epcot-1.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Turtle Talk With Crush",
        "area": "World Nature",
        "x": 10.3,
        "y": 55,
        "priority": "Alta",
        "category": "Simulador Interativo",
        "photo": "assets/attractions/epcot-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Infantil"
        }
      },
      {
        "id": "a3",
        "name": "The Seas with Nemo",
        "area": "World Nature",
        "x": 13.8,
        "y": 52,
        "priority": "Opcional",
        "category": "Aquário/Ride",
        "photo": "assets/attractions/epcot-3.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a4",
        "name": "Living with the Land",
        "area": "World Nature",
        "x": 27.1,
        "y": 63.2,
        "priority": "Opcional",
        "category": "Passeio",
        "photo": "assets/attractions/epcot-4.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a5",
        "name": "Remy's Ratatouille Adventure",
        "area": "França",
        "x": 80.6,
        "y": 79.1,
        "priority": "Alta",
        "category": "Simulador/Ride",
        "photo": "assets/attractions/epcot-5.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787844776093",
        "name": "Frozen Ever After",
        "area": "Noruega",
        "x": 62.7,
        "y": 3.5,
        "priority": "Alta",
        "category": "Simulador/Ride",
        "photo": "assets/attractions/epcot-6.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Infantil"
        }
      },
      {
        "id": "a1787844943047",
        "name": "Gran Fiesta",
        "area": "México",
        "x": 52,
        "y": 8.7,
        "priority": "Opcional",
        "category": "Water Ride",
        "photo": "assets/attractions/epcot-7.jpg",
        "description": "Válido só porque tem o Zé Carioca.",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787845071006",
        "name": "Mission: Space",
        "area": "World Discovery",
        "x": 27.5,
        "y": 5.4,
        "priority": "Opcional",
        "category": "Simulador",
        "photo": "assets/attractions/epcot-8.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787845238791",
        "name": "Test Track",
        "area": "World Discovery",
        "x": 36.9,
        "y": 11,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/epcot-9.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787845374399",
        "name": "Guardians of the Galaxy",
        "area": "World Discovery",
        "x": 15.5,
        "y": 15,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/epcot-10.jpg",
        "description": "Tentar comprar Single Pass. - Se não conseguir, ir nela antes de tudo.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787845610384",
        "name": "Luminous The Symphony of Us",
        "area": "World Showcase",
        "x": 53.8,
        "y": 34.9,
        "priority": "Alta",
        "category": "Show de encerramento",
        "photo": "assets/attractions/epcot-11.jpg",
        "description": "Começa às 21h.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      }
    ]
  },
  {
    "id": "magic-kingdom",
    "name": "Magic Kingdom",
    "group": "Walt Disney World",
    "map": "assets/maps/magic-kingdom.jpg",
    "description": "Roteiro interativo do Magic Kingdom.",
    "notes": "Horário de funcionamento do parque: das 09h às 22h  -  Estacionamento: $35  -  Distância de casa: ~20min - Abre às 8h para todos. Ficamos esperando no Main Street.",
    "attractions": [
      {
        "id": "a1",
        "name": "Let the Magic Begin",
        "area": "Em frente ao castelo",
        "x": 50.3,
        "y": 26,
        "priority": "Média",
        "category": "Espetáculo",
        "photo": "assets/attractions/magic-kingdom-1.jpg",
        "description": "Já ficar em posição no lado esquerdo. O pessoal do Early Entry estará na área direita do parque.",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Big Thunder Mountain",
        "area": "Frontierland",
        "x": 5.7,
        "y": 11.3,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/magic-kingdom-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a3",
        "name": "Pirates of the Caribbean",
        "area": "Adventureland",
        "x": 9.9,
        "y": 51.5,
        "priority": "Opcional",
        "category": "Ride",
        "photo": "assets/attractions/magic-kingdom-3.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a4",
        "name": "Tiana's Bayou Adventure",
        "area": "Frontierland",
        "x": 5,
        "y": 31.1,
        "priority": "Alta",
        "category": "Water Ride",
        "photo": "assets/attractions/magic-kingdom-4.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Molha"
        }
      },
      {
        "id": "a5",
        "name": "Disney Adventure Friends Cavalcade",
        "area": "Adventureland",
        "x": 26.8,
        "y": 35.8,
        "priority": "Opcional",
        "category": "Parada",
        "photo": "assets/attractions/magic-kingdom-5.jpg",
        "description": "Horários: checar no dia! Geralmente entre as 10h e 11h.  -  Lugar mais estratégico: https://vt.tiktok.com/ZS4Hxq3wM/",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787847972119",
        "name": "Haunted Mansion",
        "area": "Liberty Square",
        "x": 23.8,
        "y": 8.5,
        "priority": "Alta",
        "category": "Ride",
        "photo": "assets/attractions/magic-kingdom-6.jpg",
        "description": "O banheiro temático Enrolados, fica próximo.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787848257480",
        "name": "Peter Pan's Flight",
        "area": "Liberty Square",
        "x": 36.8,
        "y": 8,
        "priority": "Opcional",
        "category": "Ride",
        "photo": "assets/attractions/magic-kingdom-7.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787848494263",
        "name": "Seven Dwarfs Mine Train",
        "area": "Fantasyland",
        "x": 60.5,
        "y": 10.8,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/magic-kingdom-8.jpg",
        "description": "Geralmente tem bastante tempo de espera",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787848635152",
        "name": "Under the Sea",
        "area": "Fantasyland",
        "x": 64.8,
        "y": 0,
        "priority": "Opcional",
        "category": "Ride",
        "photo": "assets/attractions/magic-kingdom-9.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787848748440",
        "name": "Winnie the Pooh",
        "area": "Fantasyland",
        "x": 62.9,
        "y": 17.1,
        "priority": "Opcional",
        "category": "Ride",
        "photo": "assets/attractions/magic-kingdom-10.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787849039329",
        "name": "Área Infantil",
        "area": "Fantasyland",
        "x": 80.6,
        "y": 3.8,
        "priority": "Média",
        "category": "Diversas",
        "photo": "assets/attractions/magic-kingdom-11.jpg",
        "description": "Diversas atrações para as meninas.  -  Lugar fixo Pato Donald e Margarida.",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787849334906",
        "name": "Festival of Fantasy Parade",
        "area": "Main Street",
        "x": 52,
        "y": 44.7,
        "priority": "Alta",
        "category": "Parada",
        "photo": "assets/attractions/magic-kingdom-12.jpg",
        "description": "Horário: 15h, mas checar no dia.  -  Assistir no lugar indicado no mapa. Link: https://vt.tiktok.com/ZS4HmSbDB/  -  Pode ser antes das atrações anteriores do roteiro. Encaixar com o horário.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Duração: 20min  -  Chegar 30min antes"
        }
      },
      {
        "id": "a1787849879139",
        "name": "Space Mountain",
        "area": "Tomorrowland",
        "x": 94.3,
        "y": 32.1,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/magic-kingdom-13.jpg",
        "description": "Aproveitar que o pessoal na Main Street vai estar terminando de ver a parada e garantir menor fila na Space Mountain.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787850061227",
        "name": "Buzz Lightyer's Space Ranger Spin",
        "area": "Tomorrowland",
        "x": 72.2,
        "y": 44.7,
        "priority": "Média",
        "category": "Spinning",
        "photo": "assets/attractions/magic-kingdom-14.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787850238795",
        "name": "Monsters, Inc.",
        "area": "Tomorrowland",
        "x": 66.8,
        "y": 45.2,
        "priority": "Opcional",
        "category": "Show",
        "photo": "assets/attractions/magic-kingdom-15.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787850432763",
        "name": "TRON",
        "area": "Tomorrowland",
        "x": 90.1,
        "y": 16.2,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/magic-kingdom-16.jpg",
        "description": "Tentar comprar Single Pass. Se não conseguir, dar prioridade encaixando em outro momento do dia.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Mais legal durante a noite."
        }
      },
      {
        "id": "a1787850636780",
        "name": "Happily Ever After",
        "area": "Main Street",
        "x": 48,
        "y": 44.2,
        "priority": "Alta",
        "category": "Show de encerramento",
        "photo": "assets/attractions/magic-kingdom-17.jpg",
        "description": "Assistir do mesmo lugar da Fantasy Parade. Link: https://vt.tiktok.com/ZS4HQ5Cw9/",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      }
    ]
  },
  {
    "id": "universal-studios",
    "name": "Universal Studios Florida",
    "group": "Universal Orlando",
    "map": "assets/maps/universal-studios.jpg",
    "description": "Roteiro interativo do Universal Studios Florida.",
    "notes": "Horário de funcionamento do parque: das 10h às 19h  -  Estacionamento: $35. Ou $32 comprando antecipado  -  Distância de casa: ~30min",
    "attractions": [
      {
        "id": "a1",
        "name": "Escape from Gringotts",
        "area": "Diagon Alley",
        "x": 86.6,
        "y": 17.6,
        "priority": "Alta",
        "category": "Montanha Russa/Simulador",
        "photo": "assets/attractions/universal-studios-1.jpg",
        "description": "Atração mais concorrida do parque. -  Começar por ela costuma ser a melhor estratégia, a não ser que o tempo de espera seja superior a 50min.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Revenge of the Mummy",
        "area": "New York",
        "x": 43.3,
        "y": 29.7,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/universal-studios-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a3",
        "name": "Transformers",
        "area": "New York",
        "x": 38.7,
        "y": 44.7,
        "priority": "Média",
        "category": "Simulador",
        "photo": "assets/attractions/universal-studios-3.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a4",
        "name": "Despicable Me Minion Mayhem",
        "area": "Ilumination's Minion Land",
        "x": 19.1,
        "y": 55.9,
        "priority": "Opcional",
        "category": "Simulador",
        "photo": "assets/attractions/universal-studios-4.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": "Infantil"
        }
      },
      {
        "id": "a5",
        "name": "E.T. Adventure",
        "area": "Hollywood",
        "x": 55.7,
        "y": 74.2,
        "priority": "Opcional",
        "category": "Simulador/Ride",
        "photo": "assets/attractions/universal-studios-5.jpg",
        "description": "Meio trash, mas é a única atração aberta desde o dia 1 do parque.",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": "Infantil"
        }
      },
      {
        "id": "a1787852356031",
        "name": "Área Infantil",
        "area": "Dreamworks",
        "x": 67.8,
        "y": 80.7,
        "priority": "Média",
        "category": "Diversas",
        "photo": "assets/attractions/universal-studios-6.jpg",
        "description": "Diversas opções de atrações para as meninas.",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787852521446",
        "name": "The Simpsons",
        "area": "Springfield",
        "x": 76.1,
        "y": 57.3,
        "priority": "Média",
        "category": "Ride",
        "photo": "assets/attractions/universal-studios-7.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787852677591",
        "name": "Men in Black: Alien Attack",
        "area": "World Expo",
        "x": 95,
        "y": 53.6,
        "priority": "Média",
        "category": "Ride",
        "photo": "assets/attractions/universal-studios-8.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      }
    ]
  },
  {
    "id": "epic-universe",
    "name": "Epic Universe",
    "group": "Universal Orlando",
    "map": "assets/maps/epic-universe.jpg",
    "description": "Roteiro interativo do Epic Universe.",
    "notes": "Horário de funcionamento do parque: das 10h às 20h  -  Estacionamento: $35. Ou $32 comprando antecipado  -  Distância de casa: ~30min",
    "attractions": [
      {
        "id": "a1",
        "name": "The Battle of the Ministry",
        "area": "Harry Potter",
        "x": 75.2,
        "y": 1.2,
        "priority": "Alta",
        "category": "Simulador/Ride",
        "photo": "assets/attractions/epic-universe-1.jpg",
        "description": "Se o tempo de espera estiver inferior a 45min, priorizar.  -  Se estiver maior do que isso, trocar a ordem com a área de Como Treinar Seu Dragão (Isle of Berk).",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Hiccups Wind Gliders",
        "area": "Isle of Berk",
        "x": 78.7,
        "y": 63.9,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/epic-universe-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a3",
        "name": "Dragon Racer's Rally",
        "area": "Isle of Berk",
        "x": 77.8,
        "y": 57.8,
        "priority": "Média",
        "category": "Tipo um chapéu mexicano on acid",
        "photo": "assets/attractions/epic-universe-3.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a4",
        "name": "Mine-Cart Madness",
        "area": "Super Nintendo World",
        "x": 16.9,
        "y": 63.9,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/epic-universe-4.jpg",
        "description": "Geralmente tem tempo de espera maior.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a5",
        "name": "Mario Kart: Bowser's Challenge",
        "area": "Super Nintendo World",
        "x": 32.6,
        "y": 64.1,
        "priority": "Média",
        "category": "Simulador/Ride",
        "photo": "assets/attractions/epic-universe-5.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787854269466",
        "name": "Monsters Unchained",
        "area": "Dark Universe",
        "x": 28.5,
        "y": 10.1,
        "priority": "Média",
        "category": "Simulador/Ride",
        "photo": "assets/attractions/epic-universe-6.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787854471322",
        "name": "Curse of the Werewolf",
        "area": "Dark Universe",
        "x": 21.2,
        "y": 18.8,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/epic-universe-7.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787854612170",
        "name": "StarDust Racer",
        "area": "Celestial Park",
        "x": 66.9,
        "y": 34.7,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/epic-universe-8.jpg",
        "description": "Pode ser antes da área Nintendo, dependendo do horário.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787854918555",
        "name": "Universal Celestial Goodnight",
        "area": "Celestial Park",
        "x": 51,
        "y": 36.1,
        "priority": "Alta",
        "category": "Show de encerramento",
        "photo": "assets/attractions/epic-universe-9.jpg",
        "description": "Checar horário no dia.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      }
    ]
  },
  {
    "id": "islands-of-adventure",
    "name": "Islands of Adventure",
    "group": "Universal Orlando",
    "map": "assets/maps/islands-of-adventure.jpg",
    "description": "Roteiro interativo do Islands of Adventure.",
    "notes": "Horário de funcionamento do parque: das 09h às 20h  -  Estacionamento: $35. Ou $32 comprando antecipado  -  Distância de casa: ~30min",
    "attractions": [
      {
        "id": "a1",
        "name": "Hagrid’s Magical Creatures Motorbike Adventure",
        "area": "Harry Potter – Hogsmeade",
        "x": 71.3,
        "y": 15.7,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/islands-of-adventure-1.jpg",
        "description": "Atração com maior demanda do parque.  -  Essencial ir antes de tudo porque: quebra muito, não tem fura fila (só single rider) e a tendência é aumentar o tempo de espera durante o dia.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Forbidden Journey",
        "area": "Harry Potter – Hogsmeade",
        "x": 61.2,
        "y": 8,
        "priority": "Alta",
        "category": "Simulador",
        "photo": "assets/attractions/islands-of-adventure-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a3",
        "name": "Flight of the Hippogriff",
        "area": "Harry Potter – Hogsmeade",
        "x": 65.2,
        "y": 6.1,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/islands-of-adventure-3.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": "Infantil"
        }
      },
      {
        "id": "a4",
        "name": "The Incredible Hulk Coaster",
        "area": "Marvel Island",
        "x": 50.5,
        "y": 79.8,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/islands-of-adventure-4.jpg",
        "description": "Sim, é atravessar o parque todo novamente.  -  É a melhor estratégia porque: 1. Todo mundo que está na área de HP vai para a VelociCoaster. -  2. Teremos dois rides de água que molham muito. Fazer a sequência do parque indo nelas e depois em simulador (Spider-Man), não é muito viável.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Dá pra aproveitar e comer algo no caminho"
        }
      },
      {
        "id": "a5",
        "name": "Doctor Doom's Fearfall",
        "area": "Marvel Island",
        "x": 43.3,
        "y": 67.9,
        "priority": "Média",
        "category": "Elevador",
        "photo": "assets/attractions/islands-of-adventure-5.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787857442847",
        "name": "The Amazing Adventures of Spider-Man",
        "area": "Marvel Island",
        "x": 38.4,
        "y": 57.3,
        "priority": "Alta",
        "category": "Simulador/Ride",
        "photo": "assets/attractions/islands-of-adventure-6.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787857579327",
        "name": "Dudley Do-Right's Ripsaw Falls",
        "area": "Toon Lagoon",
        "x": 27.3,
        "y": 32.6,
        "priority": "Média",
        "category": "Water Ride",
        "photo": "assets/attractions/islands-of-adventure-7.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": "Molha"
        }
      },
      {
        "id": "a1787857747647",
        "name": "Popeye & Bluto's Bilge-Rat Barges",
        "area": "Toon Lagoon",
        "x": 41.7,
        "y": 33.7,
        "priority": "Alta",
        "category": "Water Ride",
        "photo": "assets/attractions/islands-of-adventure-8.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787857923448",
        "name": "Reign of Kong",
        "area": "Skull Island",
        "x": 29.8,
        "y": 15.2,
        "priority": "Opcional",
        "category": "Ride",
        "photo": "assets/attractions/islands-of-adventure-9.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787858123616",
        "name": "VelociCoaster",
        "area": "Juras? Que parque?",
        "x": 55.9,
        "y": 26.5,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/islands-of-adventure-10.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787858272895",
        "name": "Área Infantil",
        "area": "Seuss Landing",
        "x": 68.5,
        "y": 56.2,
        "priority": "Opcional",
        "category": "Diversas",
        "photo": "assets/attractions/islands-of-adventure-11.jpg",
        "description": "Área com diversas atrações para as meninas.  -  Pode ser em outro momento do dia.",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      }
    ]
  },
  {
    "id": "busch-gardens",
    "name": "Busch Gardens Tampa Bay",
    "group": "Busch Gardens",
    "map": "assets/maps/busch-gardens.jpg",
    "description": "Roteiro interativo do Busch Gardens Tampa Bay.",
    "notes": "Horário de funcionamento do parque: das 10h às 17h  -  Estacionamento: $35  -  Distância de casa: ~01:30  -  Obrigatório alugar locker se levar mochila. Locker transferível: $12",
    "attractions": [
      {
        "id": "a1",
        "name": "Cheetah Hunt",
        "area": "Egypt",
        "x": 63.3,
        "y": 66.9,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/busch-gardens-1.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Montu",
        "area": "Egypt",
        "x": 89.6,
        "y": 64.8,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/busch-gardens-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a3",
        "name": "Cobra’s Curse",
        "area": "Egypt",
        "x": 79.2,
        "y": 60.9,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/busch-gardens-3.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a4",
        "name": "SkyRide",
        "area": "Egypt",
        "x": 63.6,
        "y": 59.5,
        "priority": "Média",
        "category": "Teleférico",
        "photo": "assets/attractions/busch-gardens-4.jpg",
        "description": "Nos levará para o fundo do parque sem precisar andar horrores  -  E foge do pessoal que chega mais tarde e faz as primeiras atrações",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a5",
        "name": "SheiKra",
        "area": "Stanleyville Theater",
        "x": 25.4,
        "y": 43.8,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/busch-gardens-5.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787859692347",
        "name": "Tigris",
        "area": "Stanleyville",
        "x": 20.5,
        "y": 27.9,
        "priority": "Opcional",
        "category": "Montanha Russa",
        "photo": "assets/attractions/busch-gardens-6.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787859870370",
        "name": "Congo River Rapids",
        "area": "Congo",
        "x": 28.7,
        "y": 0.3,
        "priority": "Opcional",
        "category": "Water Ride",
        "photo": "assets/attractions/busch-gardens-7.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": "Molha"
        }
      },
      {
        "id": "a1787859968579",
        "name": "Kumba",
        "area": "Congo",
        "x": 47.3,
        "y": 3.8,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/busch-gardens-8.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787860055787",
        "name": "Falcon’s Fury",
        "area": "Pantopia",
        "x": 48.4,
        "y": 28.3,
        "priority": "Alta",
        "category": "Elevador",
        "photo": "assets/attractions/busch-gardens-9.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787860216980",
        "name": "Serengeti Flyer",
        "area": "Pantopia",
        "x": 63.8,
        "y": 28.8,
        "priority": "Média",
        "category": "Balança",
        "photo": "assets/attractions/busch-gardens-10.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787860458900",
        "name": "Iron Gwazi",
        "area": "Nairobi",
        "x": 36.1,
        "y": 61.6,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/busch-gardens-11.jpg",
        "description": "Se tiver previsão de chuva, antecipar essa atração.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787860664923",
        "name": "Área Infantil",
        "area": "Sesame Street",
        "x": 12.7,
        "y": 59.9,
        "priority": "Média",
        "category": "Diversas",
        "photo": "assets/attractions/busch-gardens-12.jpg",
        "description": "Área para as meninas. Encaixar em algum momento do dia.",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      }
    ]
  },
  {
    "id": "seaworld",
    "name": "SeaWorld Orlando",
    "group": "SeaWorld",
    "map": "assets/maps/seaworld.jpg",
    "description": "Roteiro interativo do SeaWorld Orlando.",
    "notes": "Horário de funcionamento do parque: das 09h às 19h  -  Estacionamento: $37  -  Distância de casa: ~35min",
    "attractions": [
      {
        "id": "a1",
        "name": "Pipeline: The Surf Coaster",
        "area": "",
        "x": 58.4,
        "y": 72.3,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/seaworld-1.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a2",
        "name": "Manta",
        "area": "",
        "x": 37.6,
        "y": 64.6,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/seaworld-2.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a3",
        "name": "Kraken",
        "area": "",
        "x": 23.1,
        "y": 23.7,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/seaworld-3.jpg",
        "description": "Substitua este texto pela sua descrição, dica de roteiro ou observação sobre a atração.",
        "meta": {
          "Prioridade": "Alta",
          "Observação": "Ver estratégia do dia"
        }
      },
      {
        "id": "a4",
        "name": "Journey to Atlantis",
        "area": "",
        "x": 21,
        "y": 36.1,
        "priority": "Opcional",
        "category": "Water Ride",
        "photo": "assets/attractions/seaworld-4.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": "Molha"
        }
      },
      {
        "id": "a5",
        "name": "Penguin Trek",
        "area": "",
        "x": 32,
        "y": 34,
        "priority": "Opcional",
        "category": "Montanha Russa",
        "photo": "assets/attractions/seaworld-5.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787861947517",
        "name": "Mako",
        "area": "",
        "x": 53.1,
        "y": 18.5,
        "priority": "Alta",
        "category": "Montanha Russa",
        "photo": "assets/attractions/seaworld-6.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Alta",
          "Observação": ""
        }
      },
      {
        "id": "a1787862123518",
        "name": "Infinity Falls",
        "area": "",
        "x": 71.2,
        "y": 6.6,
        "priority": "Média",
        "category": "Water Ride",
        "photo": "assets/attractions/seaworld-7.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787862242599",
        "name": "Ice Breaker",
        "area": "",
        "x": 77.1,
        "y": 50.1,
        "priority": "Média",
        "category": "Montanha Russa",
        "photo": "assets/attractions/seaworld-8.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Média",
          "Observação": ""
        }
      },
      {
        "id": "a1787862429246",
        "name": "Sesame Street",
        "area": "",
        "x": 91,
        "y": 28.3,
        "priority": "Opcional",
        "category": "Diversas",
        "photo": "assets/attractions/seaworld-9.jpg",
        "description": "Área para as meninas.",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      },
      {
        "id": "a1787862568246",
        "name": "Expedition Odyssey",
        "area": "",
        "x": 89.2,
        "y": 45.7,
        "priority": "Opcional",
        "category": "Simulador",
        "photo": "assets/attractions/seaworld-10.jpg",
        "description": "",
        "meta": {
          "Prioridade": "Opcional",
          "Observação": ""
        }
      }
    ]
  }
];
