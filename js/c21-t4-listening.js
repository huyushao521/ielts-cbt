/* Cambridge IELTS 21 - Test 4 (Academic) Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c21-t4"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["leigh"], "2": ["motorbike"], "3": ["hairdresser"], "4": ["suit"], "5": ["laptop"],
      "6": ["monday"], "7": ["coffee"], "8": ["books"], "9": ["plants"], "10": ["cinema"],
      "11|12": ["C", "E"], "13|14": ["A", "B"],
      "15": "C", "16": "G", "17": "D", "18": "A", "19": "F", "20": "B",
      "21": "B", "22": "A", "23": "B",
      "24": "B", "25": "E", "26": "I", "27": "A", "28": "D", "29": "H", "30": "G",
      "31": ["routine"], "32": ["trials"], "33": ["calming"], "34": ["pillows"],
      "35": ["anxiety"], "36": ["medication"], "37": ["awake"], "38": ["distraction"],
      "39": ["nature"], "40": ["volume"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c21/T4S1.mp3",
        blocks: [
          {
            kind: "fill",
            intro:
              "<p><b>Questions 1-10</b></p><p>Complete the form below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Survey about shopping in Broadbeach</h3>",
            html:
              "<p class='sub'>Name: Martyn <input class='blank' data-q='1'></p>" +
              "<p class='sub'>Today's journey to Broadbeach town centre:</p>" +
              "<ul class='notes'>" +
              "<li>used his <input class='blank' data-q='2'></li>" +
              "</ul>" +
              "<p class='sub'>Purpose of today's trip:</p>" +
              "<ul class='notes'>" +
              "<li>has visited the <input class='blank' data-q='3'></li>" +
              "<li>looking for a new <input class='blank' data-q='4'></li>" +
              "<li>collecting <input class='blank' data-q='5'> (after repair)</li>" +
              "</ul>" +
              "<p class='sub'>Preferred day for shopping: <input class='blank' data-q='6'></p>" +
              "<p class='sub'>Opinions about shopping in the town centre</p>" +
              "<ul class='notes'>" +
              "<li>Finds the service in shops is excellent</li>" +
              "<li>Thinks there are too many places selling <input class='blank' data-q='7'></li>" +
              "<li>Would like more places to buy <input class='blank' data-q='8'></li>" +
              "</ul>" +
              "<p class='sub'>Opinions about new out-of-town Shopping Centre</p>" +
              "<ul class='notes'>" +
              "<li>Likes the <input class='blank' data-q='9'> best</li>" +
              "<li>Believes the <input class='blank' data-q='10'> is unnecessary</li>" +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c21/T4S2.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>In which TWO areas of the business exhibition did James Craig promote his company last year?</p>",
            groups: [ { qnums: [11,12], stem: "",
              options: [["A","the Digital Marketing Centre"],["B","the TalkCon Zone"],["C","the Breakout area"],["D","the Business Village"],["E","the Business Connections Zone"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 13 and 14</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO facts are given about discounts on popular brands available to exhibitors?</p>",
            groups: [ { qnums: [13,14], stem: "",
              options: [["A","They are available to all members of exhibiting companies."],["B","They can be used for both food and clothing."],["C","They only apply if people spend at least 400."],["D","They can be used by family members."],["E","The percentage saved is always the same."]] } ] },
          {
            kind: "match",
            intro:
              "<p><b>Questions 15-20</b></p><p>Which topic will each of the following speakers focus on?</p>" +
              "<p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 15-20.</p>",
            choices: [
              ["A","Supporting job seekers"],
              ["B","Dealing with personal problems"],
              ["C","Effects of an unexpectedly rapid expansion"],
              ["D","A global range of business experiences"],
              ["E","Coping with financial set-backs"],
              ["F","Developing a company in response to changing markets"],
              ["G","Combining business success with contributions to charities"],
            ],
            questions: [
              { n: 15, text: "Jim Clowrie" },
              { n: 16, text: "David France" },
              { n: 17, text: "Oliver Stanton" },
              { n: 18, text: "Francesca Heptonstall" },
              { n: 19, text: "Salman Khan" },
              { n: 20, text: "Annie Craven" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c21/T4S3.mp3",
        blocks: [
          {
            kind: "mc",
            intro: "<p><b>Questions 21-23</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Presentation on houses of the future</h3>",
            questions: [
              { n: 21, text: "Which aspect of their presentation are Mia and Leo both concerned about?",
                options: [["A","meeting the deadline"],["B","finding suitable examples"],["C","including original ideas"]] },
              { n: 22, text: "The students decide to focus their assignment on housing for",
                options: [["A","family groups."],["B","old people."],["C","single people."]] },
              { n: 23, text: "The students agree that demand for accommodation in urban areas should be met by",
                options: [["A","repurposing offices and factories."],["B","constructing tall buildings."],["C","developing creative ideas for smaller homes."]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 24-30</b></p><p>What opinion is given about each of the following developments?</p>" +
              "<p class='instr'>Choose <b>SEVEN</b> answers from the box and write the correct letter, <b>A-I</b>, next to Questions 24-30.</p>",
            choices: [
              ["A","This could cause unnecessary anxiety."],
              ["B","This would be especially beneficial for city residents."],
              ["C","This would be challenging for young people."],
              ["D","This would have environmental benefits."],
              ["E","This could encourage creativity."],
              ["F","This could lead to social problems."],
              ["G","This could enable retired people to share a project."],
              ["H","This would help some people but cause problems for others."],
              ["I","This would suit both existing and new members of a household."],
            ],
            questions: [
              { n: 24, text: "use of roof space for gardens" },
              { n: 25, text: "shared working spaces" },
              { n: 26, text: "moveable internal walls" },
              { n: 27, text: "smart mirrors in bathrooms" },
              { n: 28, text: "bike sheds with charging points" },
              { n: 29, text: "restriction of cars to certain areas" },
              { n: 30, text: "communal vegetable plots" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c21/T4S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Music therapy for surgical patients</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Background</p>" +
              "<ul class='notes'>" +
              "<li>Surgery impacts patients because they may experience discomfort or unwelcome changes to their <input class='blank' data-q='31'></li>" +
              "<li>Current post-surgical strategies focus mainly on pain relief.</li>" +
              "</ul>" +
              "<p class='sub'>Recent research</p>" +
              "<ul class='notes'>" +
              "<li>A study reviewed data from about 100 <input class='blank' data-q='32'> and found that listening to music</li>" +
              "<li class='sub2'>improved hospital patients' sense of wellbeing.</li>" +
              "<li class='sub2'>reduced the length of their stay.</li>" +
              "<li>The patients in the study all listened to music with a <input class='blank' data-q='33'> effect.</li>" +
              "<li>The music was mostly played through music <input class='blank' data-q='34'></li>" +
              "<li>Patients reported an absence or low levels of <input class='blank' data-q='35'></li>" +
              "<li>needed less <input class='blank' data-q='36'> than those who weren't played music.</li>" +
              "<li>The best results were achieved when patients were played music while they were <input class='blank' data-q='37'></li>" +
              "<li>The study concluded that playing music was effective because it served as a <input class='blank' data-q='38'></li>" +
              "<li>The researchers recommend playing either music or sounds from <input class='blank' data-q='39'> to all surgical patients.</li>" +
              "<li>A future study will investigate the best <input class='blank' data-q='40'> for the music.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
