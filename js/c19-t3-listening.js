/* Cambridge IELTS 19 - Test 3 (Academic) Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c19-t3"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["harbour", "harbor"], "2": ["bridge"], "3": ["3.30", "three thirty", "half past three"], "4": ["Rose", "rose"], "5": ["sign"], "6": ["purple"],
      "7": ["samphire"], "8": ["melon"], "9": ["coconut"], "10": ["strawberry"],
      "11": "C", "12": "D", "13": "F", "14": "G", "15": "B", "16": "H",
      "17|18": ["D", "E"], "19|20": ["B", "C"],
      "21": "C", "22": "B", "23": "A", "24": "A", "25": "C", "26": "C", "27": "H", "28": "E", "29": "B", "30": "F",
      "31": ["clothing"], "32": ["mouths"], "33": ["salt"], "34": ["toothpaste"],
      "35": ["fertilisers", "fertilizers"], "36": ["nutrients"], "37": ["growth"], "38": ["weight"], "39": ["acid"], "40": ["society"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c19/T3S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Questions 1-6</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Local food shops</h3><p class='sub'>Where to go</p>",
          },
          {
            kind: "fill",
            html:
              "<ul class='notes'>" +
              '<li>Kite Place - near the <input class="blank" data-q="1"></li>' +
              '<li>Fish market</li>' +
              '<li class="ind">cross the <input class="blank" data-q="2"> and turn right</li>' +
              '<li class="ind">best to go before <input class="blank" data-q="3"> pm, earlier than closing time</li>' +
              '<li>Organic shop</li>' +
              '<li class="ind">called <input class="blank" data-q="4"></li>' +
              "<li class='ind'>below a restaurant in the large, grey building</li>" +
              '<li class="ind">look for the large <input class="blank" data-q="5"> outside</li>' +
              '<li>Supermarket</li>' +
              '<li class="ind">take a <input class="blank" data-q="6"> minibus, number 289</li>' +
              "</ul>",
          },
          {
            kind: "html",
            html:
              "<p><b>Questions 7-10</b></p><p>Complete the table below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Shopping</h3>",
          },
          {
            kind: "fill",
            html:
              "<table class='fill-table'>" +
              "<tr><th>Shop</th><th>To buy</th><th>Other ideas</th></tr>" +
              '<tr><td>Fish market</td><td>a dozen prawns</td><td>a handful of <input class="blank" data-q="7"> (type of seaweed)</td></tr>' +
              '<tr><td>Organic shop</td><td>beans and a <input class="blank" data-q="8"></td><td>spices and <input class="blank" data-q="9"> for dessert</td></tr>' +
              '<tr><td>Bakery</td><td>a brown loaf</td><td>a <input class="blank" data-q="10"> tart</td></tr>' +
              "</table>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c19/T3S2.mp3",
        blocks: [
          {
            kind: "match",
            intro:
              "<p><b>Questions 11-16</b></p><p>What information is given about each of the following festival workshops?</p>" +
              "<p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 11-16.</p>",
            choices: [
              ["A", "involves painting and drawing"],
              ["B", "will be led by a prize-winning author"],
              ["C", "is aimed at children with a disability"],
              ["D", "involves a drama activity"],
              ["E", "focuses on new relationships"],
              ["F", "is aimed at a specific age group"],
              ["G", "explores an unhappy feeling"],
              ["H", "raises awareness of a particular culture"],
            ],
            questions: [
              { n: 11, text: "Superheroes" },
              { n: 12, text: "Just do it" },
              { n: 13, text: "Count on me" },
              { n: 14, text: "Speak up" },
              { n: 15, text: "Jump for joy" },
              { n: 16, text: "Sticks and stones" },
            ],
          },
          {
            kind: "mc2",
            intro:
              "<p><b>Questions 17 and 18</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>" +
              "<p>Which TWO reasons does the speaker give for recommending Alive and Kicking?</p>",
            groups: [
              {
                qnums: [17, 18],
                stem: "",
                options: [
                  ["A", "It will appeal to both boys and girls."],
                  ["B", "The author is well known."],
                  ["C", "It has colourful illustrations."],
                  ["D", "It is funny."],
                  ["E", "It deals with an important topic."],
                ],
              },
            ],
          },
          {
            kind: "mc2",
            intro:
              "<p><b>Questions 19 and 20</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>" +
              "<p>Which TWO pieces of advice does the speaker give to parents about reading?</p>",
            groups: [
              {
                qnums: [19, 20],
                stem: "",
                options: [
                  ["A", "Encourage children to write down new vocabulary."],
                  ["B", "Allow children to listen to audiobooks."],
                  ["C", "Get recommendations from librarians."],
                  ["D", "Give children a choice about what they read."],
                  ["E", "Only read aloud to children until they can read independently."],
                ],
              },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c19/T3S3.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 21-25</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>" +
              "<h3>Science experiment for Year 12 students</h3>",
            questions: [
              { n: 21, text: "How does Clare feel about the students in her Year 12 science class?",
                options: [["A","worried that they are not making progress"],["B","challenged by their poor behaviour in class"],["C","frustrated at their lack of interest in the subject"]] },
              { n: 22, text: "How does Jake react to Clare's suggestion about an experiment based on children's diet?",
                options: [["A","He is concerned that the results might not be meaningful."],["B","He feels some of the data might be difficult to obtain."],["C","He suspects that the conclusions might be upsetting."]] },
              { n: 23, text: "What problem do they agree may be involved in an experiment involving animals?",
                options: [["A","Any results may not apply to humans."],["B","It may be complicated to get permission."],["C","Students may not be happy about animal experiments."]] },
              { n: 24, text: "What question do they decide the experiment should address?",
                options: [["A","Are mice capable of controlling their food intake?"],["B","Does an increase in sugar lead to health problems?"],["C","How much do supplements of different kinds affect health?"]] },
              { n: 25, text: "Clare might also consider doing another experiment involving",
                options: [["A","other types of food supplement."],["B","different genetic strains of mice."],["C","varying amounts of exercise."]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 26-30</b></p><p>Complete the flowchart below.</p>" +
              "<p class='instr'>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 26-30.</p>",
            choices: [
              ["A", "size"], ["B", "escape"], ["C", "age"], ["D", "water"],
              ["E", "cereal"], ["F", "calculations"], ["G", "changes"], ["H", "colour"],
            ],
            html:
              "<ul class='notes'>" +
              '<li>Choose mice which are all the same <span class="gap">26</span></li>' +
              '<li>Divide the mice into two groups, each with a different <span class="gap">27</span></li>' +
              "<li>Put each group in a separate cage.</li>" +
              "<li>Feed group A commercial mouse food.</li>" +
              '<li>Feed group B the same, but also sugar contained in <span class="gap">28</span></li>' +
              "<li>Take measurements using an electronic scale.</li>" +
              '<li>Place them in a weighing chamber to prevent <span class="gap">29</span></li>' +
              '<li>Do all necessary <span class="gap">30</span></li>' +
              "</ul>",
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c19/T3S4.mp3",
        blocks: [
          {
            kind: "fill",
            intro:
              "<p><b>Questions 31-40</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Microplastics</h3>",
            html:
              "<p class='sub'>Where microplastics come from</p>" +
              "<ul class='notes'>" +
              '<li>fibres from some <input class="blank" data-q="31"> during washing</li>' +
              "<li>the breakdown of large pieces of plastic</li>" +
              "<li>waste from industry</li>" +
              "<li>the action of vehicle tyres on roads</li>" +
              "</ul>" +
              "<p class='sub'>Effects of microplastics</p>" +
              "<ul class='notes'>" +
              '<li>They cause injuries to the <input class="blank" data-q="32"> of wildlife and affect their digestive systems.</li>' +
              '<li>They enter the food chain, e.g., in bottled and tap water, <input class="blank" data-q="33"> and seafood.</li>' +
              '<li>They may not affect human health, but they are already banned in skin cleaning products and <input class="blank" data-q="34"> in some countries.</li>' +
              '<li>Microplastics enter the soil through the air, rain and <input class="blank" data-q="35">.</li>' +
              "</ul>" +
              "<p class='sub'>Microplastics in the soil - a study by Anglia Ruskin University</p>" +
              "<ul class='notes'>" +
              '<li>Earthworms are important because they add <input class="blank" data-q="36"> to the soil.</li>' +
              '<li>The study aimed to find whether microplastics in earthworms affect the <input class="blank" data-q="37"> of plants.</li>' +
              "</ul>" +
              "<p class='sub'>The study found that microplastics caused:</p>" +
              "<ul class='notes'>" +
              '<li><input class="blank" data-q="38"> loss in earthworms</li>' +
              "<li>fewer seeds to germinate</li>" +
              '<li>a rise in the level of <input class="blank" data-q="39"> in the soil.</li>' +
              "</ul>" +
              "<p class='sub'>The study concluded:</p>" +
              "<ul class='notes'>" +
              "<li>soil should be seen as an important natural process.</li>" +
              '<li>changes to soil damage both ecosystems and <input class="blank" data-q="40">.</li>' +
              "</ul>",
          },
        ],
      },
    ],
  },
};
