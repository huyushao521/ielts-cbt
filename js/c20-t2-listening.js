/* Cambridge IELTS 20 - Test 2 - Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c20-t2"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["break"], "2": ["time"], "3": ["shower"], "4": ["money"], "5": ["memory"],
      "6": ["lifting"], "7": ["fall"], "8": ["taxi"], "9": ["insurance"], "10": ["stress"],
      "11": "D", "12": "I", "13": "H", "14": "E", "15": "A", "16": "B",
      "17": "B", "18": "A", "19": "B", "20": "A",
      "21": "D", "22": "G", "23": "B", "24": "A", "25": "E", "26": "C", "27": "A", "28": "A", "29": "B", "30": "C",
      "31": ["photos", "photographs", "pictures"], "32": ["vegan"], "33": ["chefs", "cooks"],
      "34": ["journalists", "reporters"], "35": ["health"], "36": ["coffee"], "37": ["environment"],
      "38": ["reputation"], "39": ["price", "cost"], "40": ["soil"],
    },
    parts: [
      {
        part: 1, title: "Questions 1-10", audio: "audio/T2S1.mp3",
        blocks: [
          { kind: "html", html: "<h3>Help for carers</h3><p class='instr'>Complete the notes below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" },
          { kind: "fill", html:
              "<p>Local councils can arrange practical support to help those caring for elderly people at home.</p>" +
              "<ul class='notes'><li>This can give the carer:</li>" +
              "<li class='sub2'>time for other responsibilities</li>" +
              "<li class='sub2'>a <input class='blank' data-q='1'></li></ul>" +
              "<p class='sub'>Assessment of mother's needs</p>" +
              "<p>This may include discussion of:</p>" +
              "<ul class='notes'>" +
              "<li>how much <input class='blank' data-q='2'> the caring involves</li>" +
              "<li>what types of tasks are involved, e.g.</li>" +
              "<li class='sub2'>help with dressing</li>" +
              "<li class='sub2'>helping her have a <input class='blank' data-q='3'></li>" +
              "<li class='sub2'>shopping</li>" +
              "<li class='sub2'>helping with meals</li>" +
              "<li class='sub2'>dealing with <input class='blank' data-q='4'></li>" +
              "<li>any aspects of caring that are especially difficult, e.g.</li>" +
              "<li class='sub2'>loss of <input class='blank' data-q='5'></li>" +
              "<li class='sub2'><input class='blank' data-q='6'> her</li>" +
              "<li class='sub2'>preventing a <input class='blank' data-q='7'></li></ul>" +
              "<p class='sub'>Types of support that may be offered to carers</p>" +
              "<ul class='notes'>" +
              "<li>transport costs, e.g. cost of a <input class='blank' data-q='8'></li>" +
              "<li>car-related costs, e.g. fuel and <input class='blank' data-q='9'></li>" +
              "<li>help with housework</li>" +
              "<li>help to reduce <input class='blank' data-q='10'></li></ul>",
          },
        ],
      },
      {
        part: 2, title: "Questions 11-20", audio: "audio/T2S2.mp3",
        blocks: [
          { kind: "match",
            intro: "<p><b>Questions 11-16</b></p><p>What is the role of the volunteers in each of the following activities?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-I</b>, next to Questions 11-16.</p>",
            choices: [
              ["A", "providing entertainment"], ["B", "providing publicity about a council service"],
              ["C", "contacting local businesses"], ["D", "giving advice to visitors"],
              ["E", "collecting feedback on events"], ["F", "selling tickets"],
              ["G", "introducing guest speakers at an event"], ["H", "encouraging cooperation between local organisations"],
              ["I", "helping people find their seats"],
            ],
            questions: [
              { n: 11, text: "walking around the town centre" },
              { n: 12, text: "helping at concerts" },
              { n: 13, text: "getting involved with community groups" },
              { n: 14, text: "helping with a magazine" },
              { n: 15, text: "participating at lunches for retired people" },
              { n: 16, text: "helping with the website" },
            ] },
          { kind: "mc",
            intro: "<p><b>Questions 17-20</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 17, text: "Which event requires the largest number of volunteers?",
                options: [["A","the music festival"],["B","the science festival"],["C","the book festival"]] },
              { n: 18, text: "What is the most important requirement for volunteers at the festivals?",
                options: [["A","interpersonal skills"],["B","personal interest in the event"],["C","flexibility"]] },
              { n: 19, text: "New volunteers will start working in the week beginning",
                options: [["A","2 September."],["B","9 September."],["C","23 September."]] },
              { n: 20, text: "What is the next annual event for volunteers?",
                options: [["A","a boat trip"],["B","a barbecue"],["C","a party"]] },
            ] },
        ],
      },
      {
        part: 3, title: "Questions 21-30", audio: "audio/T2S3.mp3",
        blocks: [
          { kind: "match",
            intro: "<p><b>Questions 21-25</b></p><p>What is Rosie and Colin's opinion about each of the following aspects of human geography?</p><p class='instr'>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 21-25.</p>",
            choices: [
              ["A", "The information given about this was too vague."],
              ["B", "This may not be relevant to their course."],
              ["C", "This will involve only a small number of statistics."],
              ["D", "It will be easy to find facts about this."],
              ["E", "The facts about this may not be reliable."],
              ["F", "No useful research has been done on this."],
              ["G", "The information provided about this was interesting."],
            ],
            questions: [
              { n: 21, text: "Population" }, { n: 22, text: "Health" }, { n: 23, text: "Economies" },
              { n: 24, text: "Culture" }, { n: 25, text: "Poverty" },
            ] },
          { kind: "mc",
            intro: "<p><b>Questions 26-30</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 26, text: "Rosie says that in her own city the main problem is",
                options: [["A","crime."],["B","housing."],["C","unemployment."]] },
              { n: 27, text: "What recent additions to the outskirts of their cities are both students happy about?",
                options: [["A","conference centres"],["B","sports centres"],["C","retail centres"]] },
              { n: 28, text: "The students agree that developing disused industrial sites may",
                options: [["A","have unexpected costs."],["B","damage the urban environment."],["C","destroy valuable historical buildings."]] },
              { n: 29, text: "The students will mention Masdar City as an example of an attempt to achieve",
                options: [["A","daily collections for waste recycling."],["B","sustainable energy use."],["C","free transport for everyone."]] },
              { n: 30, text: "When discussing the ecotown of Greenhill Abbots, Colin is uncertain about",
                options: [["A","what its objectives were."],["B","why there was opposition to it."],["C","how much of it has actually been built."]] },
            ] },
        ],
      },
      {
        part: 4, title: "Questions 31-40", audio: "audio/T2S4.mp3",
        blocks: [
          { kind: "html", html: "<h3>Developing food trends</h3><p class='instr'>Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>" },
          { kind: "fill", html:
              "<p>The growth in interest in food fashions started with <input class='blank' data-q='31'> food being shared on social media.</p>" +
              "<p>The UK food industry is constantly developing products which are new or different.</p>" +
              "<ul class='notes'>" +
              "<li>Influencers on social media become 'ambassadors' for a brand.</li>" +
              "<li class='sub2'>Sales of <input class='blank' data-q='32'> food brands have grown rapidly this way.</li>" +
              "<li>Supermarkets track demand for ingredients on social media.</li>" +
              "<li class='sub2'>Famous <input class='blank' data-q='33'> are influential.</li></ul>" +
              "<p class='sub'>Marketing campaigns</p>" +
              "<p>The avocado:</p>" +
              "<ul class='notes'>" +
              "<li><input class='blank' data-q='34'> were invited to visit growers in South Africa.</li>" +
              "<li>Advertising focused on its <input class='blank' data-q='35'> benefits.</li></ul>" +
              "<p>Oat milk:</p>" +
              "<ul class='notes'>" +
              "<li>A Swedish brand's media campaign received publicity by upsetting competitors.</li>" +
              "<li>Promotion in the USA through <input class='blank' data-q='36'> shops reduced the need for advertising.</li>" +
              "<li>It appealed to consumers who are concerned about the <input class='blank' data-q='37'>.</li></ul>" +
              "<p>Norwegian skrei:</p>" +
              "<ul class='notes'><li>has helped strengthen the <input class='blank' data-q='38'> of Norwegian seafood.</li></ul>" +
              "<p class='sub'>Ethical concerns</p>" +
              "<p>Quinoa:</p>" +
              "<ul class='notes'>" +
              "<li>Its success led to an increase in its <input class='blank' data-q='39'>.</li>" +
              "<li>Overuse of resources resulted in poor quality <input class='blank' data-q='40'>.</li></ul>",
          },
        ],
      },
    ],
  },
};
