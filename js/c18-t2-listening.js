/* Cambridge IELTS 18 - Test 2 Listening */
window.IELTS_DATA_MAP["c18-t2"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["training"], "2": ["discount"], "3": ["taxi"], "4": ["service"], "5": ["English"],
      "6": ["Wivenhoe"], "7": ["equipment"], "8": ["9.75", "£9.75"], "9": ["deliveries"], "10": ["Sunday"],
      "11|12": ["B", "E"], "13|14": ["B", "C"],
      "15": "G", "16": "C", "17": "D", "18": "B", "19": "H", "20": "A",
      "21": "C", "22": "A", "23": "B", "24": "B",
      "25|26": ["A", "B"],
      "27": "D", "28": "A", "29": "C", "30": "F",
      "31": ["convenient"], "32": ["suits"], "33": ["tailor"], "34": ["profession"],
      "35": ["visible"], "36": ["string", "strings"], "37": ["waist", "waists"], "38": ["perfume"],
      "39": ["image"], "40": ["handbag"],
    },
    parts: [
      {
        part: 1, title: "Questions 1-10", audio: "audio/c18/T2S1.mp3",
        blocks: [
          { kind: "html", html: "<h3>Working at Milo's Restaurants</h3><p><b>Questions 1-5</b></p><p class='instr'>Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>" },
          { kind: "fill", html:
              "<p class='sub'>Benefits</p>" +
              "<ul class='notes'>" +
              "<li><input class='blank' data-q='1'> provided for all staff</li>" +
              "<li><input class='blank' data-q='2'> during weekdays at all Milo's Restaurants</li>" +
              "<li><input class='blank' data-q='3'> provided after midnight</li>" +
              "</ul>" +
              "<p class='sub'>Person specification</p>" +
              "<ul class='notes'>" +
              "<li>must be prepared to work well in a team</li>" +
              "<li>must care about maintaining a high standard of <input class='blank' data-q='4'></li>" +
              "<li>must have a qualification in <input class='blank' data-q='5'></li>" +
              "</ul>",
          },
          { kind: "html", html: "<p><b>Questions 6-10</b></p><p class='instr'>Complete the table below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" },
          { kind: "fill", html:
              '<table class="fill-table">' +
              "<tr><th>Responsibilities</th><th>Location</th><th>Job title</th><th>Pay and conditions</th></tr>" +
              "<tr>" +
              "<td>Checking portions, etc. are correct</td>" +
              '<td><input class="blank" data-q="6"> Street</td>' +
              "<td>Breakfast supervisor</td>" +
              '<td>Starting salary £<input class="blank" data-q="8"> per hour</td>' +
              "</tr>" +
              "<tr>" +
              '<td>Making sure <input class="blank" data-q="7"> is clean</td>' +
              "<td>City Road</td>" +
              "<td>Junior chef</td>" +
              '<td>Supporting senior chefs<br>Annual salary £23,000<br>No work on a <input class="blank" data-q="10"></td>' +
              "</tr>" +
              "<tr>" +
              '<td>Maintaining stock and organising <input class="blank" data-q="9"> once a month</td>' +
              "<td></td><td></td><td></td>" +
              "</tr>" +
              "</table>",
          },
        ],
      },
      {
        part: 2, title: "Questions 11-20", audio: "audio/c18/T2S2.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>What are the TWO main reasons why this site has been chosen for the housing development?</p>",
            groups: [{ qnums: [11,12], stem: "",
              options: [["A","It has suitable geographical features."],["B","There is easy access to local facilities."],["C","It has good connections with the airport."],["D","The land is of little agricultural value."],["E","It will be convenient for workers."]] }] },
          { kind: "mc2", intro: "<p><b>Questions 13 and 14</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO aspects of the planned housing development have people given positive feedback about?</p>",
            groups: [{ qnums: [13,14], stem: "",
              options: [["A","the facilities for cyclists"],["B","the impact on the environment"],["C","the encouragement of good relations between residents"],["D","the low cost of all the accommodation"],["E","the rural location"]] }] },
          { kind: "match", intro: "<p><b>Questions 15-20</b></p><p>Label the map below.</p><p class='instr'>Write the correct letter, <b>A-I</b>, next to Questions 15-20.</p>",
            choices: ["A","B","C","D","E","F","G","H","I"],
            questions: [
              { n: 15, text: "School" }, { n: 16, text: "Sports centre" }, { n: 17, text: "Clinic" },
              { n: 18, text: "Community centre" }, { n: 19, text: "Supermarket" }, { n: 20, text: "Playground" },
            ] },
        ],
      },
      {
        part: 3, title: "Questions 21-30", audio: "audio/c18/T2S3.mp3",
        blocks: [
          { kind: "mc", intro: "<p><b>Questions 21-24</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 21, text: "Why do the students think the Laki eruption of 1783 is so important?",
                options: [["A","It was the most severe eruption in modern times."],["B","It led to the formal study of volcanoes."],["C","It had a profound effect on society."]] },
              { n: 22, text: "What surprised Adam about observations made at the time?",
                options: [["A","the number of places producing them"],["B","the contradictions in them"],["C","the lack of scientific data to support them"]] },
              { n: 23, text: "According to Michelle, what did the contemporary sources say about the Laki haze?",
                options: [["A","People thought it was similar to ordinary fog."],["B","It was associated with health issues."],["C","It completely blocked out the sun for weeks."]] },
              { n: 24, text: "Adam corrects Michelle when she claims that Benjamin Franklin",
                options: [["A","came to the wrong conclusion about the cause of the haze."],["B","was the first to identify the reason for the haze."],["C","supported the opinions of other observers about the haze."]] },
            ] },
          { kind: "mc2", intro: "<p><b>Questions 25 and 26</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO issues following the Laki eruption surprised the students?</p>",
            groups: [{ qnums: [25,26], stem: "",
              options: [["A","how widespread the effects were"],["B","how long-lasting the effects were"],["C","the number of deaths it caused"],["D","the speed at which the volcanic ash cloud spread"],["E","how people ignored the warning signs"]] }] },
          { kind: "match", intro: "<p><b>Questions 27-30</b></p><p>What comment do the students make about the impact of the Laki eruption on the following countries?</p><p class='instr'>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A-F</b>, next to Questions 27-30.</p>",
            choices: [
              ["A","This country suffered the most severe loss of life."],
              ["B","The impact on agriculture was predictable."],
              ["C","There was a significant increase in deaths of young people."],
              ["D","Animals suffered from a sickness."],
              ["E","This country saw the highest rise in food prices in the world."],
              ["F","It caused a particularly harsh winter."],
            ],
            questions: [
              { n: 27, text: "Iceland" }, { n: 28, text: "Egypt" }, { n: 29, text: "UK" }, { n: 30, text: "USA" },
            ] },
        ],
      },
      {
        part: 4, title: "Questions 31-40", audio: "audio/c18/T2S4.mp3",
        blocks: [
          { kind: "html", html: "<h3>Pockets</h3><p class='instr'>Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>" },
          { kind: "fill", html:
              "<p class='sub'>Reason for choice of subject</p>" +
              "<p>They are <input class='blank' data-q='31'> but can be overlooked by consumers and designers.</p>" +
              "<p class='sub'>Pockets in men's clothes</p>" +
              "<ul class='notes'>" +
              "<li>Men started to wear <input class='blank' data-q='32'> in the 18th century.</li>" +
              "<li>A <input class='blank' data-q='33'> sewed pockets into the lining of the garments.</li>" +
              "<li>The wearer could use the pockets for small items.</li>" +
              "<li>Bigger pockets might be made for men who belonged to a certain type of <input class='blank' data-q='34'>.</li>" +
              "</ul>" +
              "<p class='sub'>Pockets in women's clothes</p>" +
              "<ul class='notes'>" +
              "<li>Women's pockets were less <input class='blank' data-q='35'> than men's.</li>" +
              "<li>Women were very concerned about pickpockets.</li>" +
              "<li>Pockets were produced in pairs using <input class='blank' data-q='36'> to link them together.</li>" +
              "<li>Pockets hung from the women's <input class='blank' data-q='37'> under skirts and petticoats.</li>" +
              "<li>Items such as <input class='blank' data-q='38'> could be reached through a gap in the material.</li>" +
              "<li>Pockets, of various sizes, stayed inside clothing for many decades.</li>" +
              "<li>When dresses changed shape, hidden pockets had a negative effect on the <input class='blank' data-q='39'> of women.</li>" +
              "<li>Bags called 'pouches' became popular, before women carried a <input class='blank' data-q='40'>.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
