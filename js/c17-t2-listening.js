/* Cambridge IELTS 17 - Test 2 (Academic) */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c17-t2"] = {
  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["collecting"], "2": ["records"], "3": ["West"], "4": ["transport"], "5": ["art"],
      "6": ["hospital"], "7": ["garden"], "8": ["quiz"], "9": ["tickets"], "10": ["poster"],
      "11": "B", "12": "C", "13": "C", "14": "B",
      "15": "D", "16": "C", "17": "G", "18": "A", "19": "E", "20": "F",
      "21|22": ["D", "E"],
      "23": "D", "24": "C", "25": "A", "26": "E", "27": "F", "28": "B", "29": "C", "30": "C",
      "31": ["321,000", "321000"], "32": ["vocabulary"], "33": ["podcast"], "34": ["smartphones"], "35": ["bilingual"],
      "36": ["playground"], "37": ["picture"], "38": ["grammar"], "39": ["identity"], "40": ["fluent"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c17/T2S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Opportunities for voluntary work in Southoe village</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Library</p>" +
              "<ul class='notes'>" +
              "<li>Help with <input class='blank' data-q='1'> books (times to be arranged)</li>" +
              "<li>Help needed to keep <input class='blank' data-q='2'> of books up to date</li>" +
              "<li>Library is in the <input class='blank' data-q='3'> Room in the village hall</li>" +
              "</ul>" +
              "<p class='sub'>Lunch club</p>" +
              "<ul class='notes'>" +
              "<li>Help by providing <input class='blank' data-q='4'></li>" +
              "<li>Help with hobbies such as <input class='blank' data-q='5'></li>" +
              "<li>Help for individuals needed next week</li>" +
              "<li>Taking Mrs Carroll to <input class='blank' data-q='6'></li>" +
              "<li>Work in the <input class='blank' data-q='7'> at Mr Selsbury's house</li>" +
              "</ul>",
          },
          {
            kind: "html",
            html:
              "<p><b>Complete the table below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Village social events</h3>",
          },
          {
            kind: "fill",
            html:
              '<table class="fill-table">' +
              "<tr><th>Date</th><th>Event</th><th>Location</th><th>Help needed</th></tr>" +
              "<tr>" +
              "<td>19 Oct</td>" +
              '<td><input class="blank" data-q="8"></td>' +
              "<td>Village hall</td>" +
              "<td>providing refreshments</td>" +
              "</tr>" +
              "<tr>" +
              "<td>18 Nov</td>" +
              "<td>dance</td>" +
              "<td>Village hall</td>" +
              '<td>checking <input class="blank" data-q="9"></td>' +
              "</tr>" +
              "<tr>" +
              "<td>31 Dec</td>" +
              "<td>New Year's Eve party</td>" +
              "<td>Mountfort Hotel</td>" +
              '<td>designing the <input class="blank" data-q="10"></td>' +
              "</tr></table>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c17/T2S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-14</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Oniton Hall</h3>",
            questions: [
              { n: 11, text: "Many past owners made changes to",
                options: [["A","the gardens."],["B","the house."],["C","the farm."]] },
              { n: 12, text: "Sir Edward Downes built Oniton Hall because he wanted",
                options: [["A","a place for discussing politics."],["B","a place to display his wealth."],["C","a place for artists and writers."]] },
              { n: 13, text: "Visitors can learn about the work of servants in the past from",
                options: [["A","audio guides."],["B","photographs."],["C","people in costume."]] },
              { n: 14, text: "What is new for children at Oniton Hall?",
                options: [["A","clothes for dressing up"],["B","mini tractors"],["C","the adventure playground"]] },
            ],
          },
          {
            kind: "match",
            intro: "<p><b>Questions 15-20</b></p><p class='instr'>Which activity is offered at each of the following locations on the farm?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 15-20.</p>",
            choices: [
              ["A","shopping"],
              ["B","watching cows being milked"],
              ["C","seeing old farming equipment"],
              ["D","eating and drinking"],
              ["E","starting a trip"],
              ["F","seeing rare breeds of animals"],
              ["G","helping to look after animals"],
              ["H","using farming tools"],
            ],
            questions: [
              { n: 15, text: "dairy" },
              { n: 16, text: "large barn" },
              { n: 17, text: "small barn" },
              { n: 18, text: "stables" },
              { n: 19, text: "shed" },
              { n: 20, text: "parkland" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c17/T2S3.mp3",
        blocks: [
          {
            kind: "mc2",
            intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p class='instr'>Which TWO things do the students agree they need to include in their reviews of Romeo and Juliet?</p>",
            groups: [
              { qnums: [21,22], stem: "",
                options: [["A","analysis of the text"],["B","a summary of the plot"],["C","a description of the theatre"],["D","a personal reaction"],["E","a reference to particular scenes"]] },
            ],
          },
          {
            kind: "match",
            intro: "<p><b>Questions 23-27</b></p><p class='instr'>Which opinion do the speakers give about each of the following aspects of The Emporium's production of Romeo and Juliet?</p><p class='instr'>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 23-27.</p>",
            choices: [
              ["A","They both expected this to be more traditional"],
              ["B","They both thought this was original"],
              ["C","They agree this created the right atmosphere"],
              ["D","They agree this was a major strength"],
              ["E","They were both disappointed by this"],
              ["F","They disagree about why this was an issue"],
              ["G","They disagree about how this could be improved"],
            ],
            questions: [
              { n: 23, text: "the set" },
              { n: 24, text: "the lighting" },
              { n: 25, text: "the costume design" },
              { n: 26, text: "the music" },
              { n: 27, text: "the actors' delivery" },
            ],
          },
          {
            kind: "mc",
            intro:
              "<p><b>Questions 28-30</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 28, text: "The students think the story of Romeo and Juliet is still relevant for young people today because",
                options: [["A","it illustrates how easily conflict can start."],["B","it deals with problems that families experience."],["C","it teaches them about relationships."]] },
              { n: 29, text: "The students found watching Romeo and Juliet in another language",
                options: [["A","frustrating."],["B","demanding."],["C","moving."]] },
              { n: 30, text: "Why do the students think Shakespeare's plays have such international appeal?",
                options: [["A","The stories are exciting."],["B","There are recognisable characters."],["C","They can be interpreted in many ways."]] },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c17/T2S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>The impact of digital technology on the Icelandic language</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>The Icelandic language</p>" +
              "<ul class='notes'>" +
              "<li>has approximately <input class='blank' data-q='31'> speakers</li>" +
              "<li>has a <input class='blank' data-q='32'> that is still growing</li>" +
              "<li>has not changed a lot over the last thousand years</li>" +
              "<li>has its own words for computer-based concepts, such as web browser and <input class='blank' data-q='33'></li>" +
              "</ul>" +
              "<p class='sub'>Young speakers</p>" +
              "<ul class='notes'>" +
              "<li>are big users of digital technology, such as <input class='blank' data-q='34'></li>" +
              "<li>are becoming <input class='blank' data-q='35'> very quickly</li>" +
              "<li>are having discussions using only English while they are in the <input class='blank' data-q='36'> at school</li>" +
              "<li>are better able to identify the content of a <input class='blank' data-q='37'> in English than Icelandic</li>" +
              "</ul>" +
              "<p class='sub'>Technology and internet companies</p>" +
              "<ul class='notes'>" +
              "<li>write very little in Icelandic because of the small number of speakers and because of how complicated its <input class='blank' data-q='38'> is</li>" +
              "</ul>" +
              "<p class='sub'>The Icelandic government</p>" +
              "<ul class='notes'>" +
              "<li>believes that Icelandic has a secure future</li>" +
              "<li>is worried that young Icelanders may lose their <input class='blank' data-q='39'> as Icelanders</li>" +
              "<li>is worried about the consequences of children not being <input class='blank' data-q='40'> in either Icelandic or English</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
