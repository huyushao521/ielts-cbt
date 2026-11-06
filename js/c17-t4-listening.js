/* Cambridge IELTS 17 - Test 4 (Academic) */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c17-t4"] = {
  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["floor", "floors"], "2": ["fridge"], "3": ["shirts"], "4": ["windows"], "5": ["balcony"],
      "6": ["electrician"], "7": ["dust"], "8": ["police"], "9": ["training"], "10": ["review"],
      "11": "A", "12": "A", "13": "A", "14": "C",
      "15": "A", "16": "C", "17": "B", "18": "C", "19": "B", "20": "A",
      "21|22": ["C", "E"],
      "23|24": ["A", "D"],
      "25": "B", "26": "F", "27": "A", "28": "D", "29": "C", "30": "G",
      "31": ["golden"], "32": ["healthy"], "33": ["climate"], "34": ["rock", "rocks"], "35": ["diameter"],
      "36": ["tube"], "37": ["fire"], "38": ["steam"], "39": ["cloudy"], "40": ["litre", "liter"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c17/T4S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD</b> for each answer.</p>" +
              "<h3>Easy Life Cleaning Services</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Basic cleaning package offered</p>" +
              "<ul class='notes'>" +
              "<li>Cleaning all surfaces</li>" +
              "<li>Cleaning the <input class='blank' data-q='1'> throughout the apartment</li>" +
              "<li>Cleaning shower, sinks, toilet etc.</li>" +
              "</ul>" +
              "<p class='sub'>Additional services agreed</p>" +
              "<ul class='notes'>" +
              "<li><b>Every week</b></li>" +
              "<li>Cleaning the <input class='blank' data-q='2'></li>" +
              "<li>Ironing clothes - <input class='blank' data-q='3'> only</li>" +
              "<li><b>Every month</b></li>" +
              "<li>Cleaning all the <input class='blank' data-q='4'> from the inside</li>" +
              "<li>Washing down the <input class='blank' data-q='5'></li>" +
              "</ul>" +
              "<p class='sub'>Other possibilities</p>" +
              "<ul class='notes'>" +
              "<li>They can organise a plumber or an <input class='blank' data-q='6'> if necessary.</li>" +
              "<li>A special cleaning service is available for customers who are allergic to <input class='blank' data-q='7'></li>" +
              "</ul>" +
              "<p class='sub'>Information on the cleaners</p>" +
              "<ul class='notes'>" +
              "<li>Before being hired, all cleaners have a background check carried out by the <input class='blank' data-q='8'></li>" +
              "<li>References are required.</li>" +
              "<li>All cleaners are given <input class='blank' data-q='9'> for two weeks.</li>" +
              "<li>Customers send a <input class='blank' data-q='10'> after each visit.</li>" +
              "<li>Usually, each customer has one regular cleaner.</li>" +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c17/T4S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-14</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Hotel staff retention</h3>",
            questions: [
              { n: 11, text: "Many hotel managers are unaware that their staff often leave because of",
                options: [["A","a lack of training."],["B","long hours."],["C","low pay."]] },
              { n: 12, text: "What is the impact of high staff turnover on managers?",
                options: [["A","an increased workload"],["B","low morale"],["C","an inability to meet targets"]] },
              { n: 13, text: "What mistake should managers always avoid?",
                options: [["A","failing to treat staff equally"],["B","reorganising shifts without warning"],["C","neglecting to have enough staff during busy periods"]] },
              { n: 14, text: "What unexpected benefit did Dunwich Hotel notice after improving staff retention rates?",
                options: [["A","a fall in customer complaints"],["B","an increase in loyalty club membership"],["C","a rise in spending per customer"]] },
            ],
          },
          {
            kind: "match",
            intro: "<p><b>Questions 15-20</b></p><p class='instr'>Which way of reducing staff turnover was used in each of the following hotels?</p><p class='instr'>Write the correct letter, <b>A, B or C</b>, next to Questions 15-20.</p>",
            choices: [
              ["A","improving relationships and teamwork"],
              ["B","offering incentives and financial benefits"],
              ["C","providing career opportunities"],
            ],
            questions: [
              { n: 15, text: "The Sun Club" },
              { n: 16, text: "The Portland" },
              { n: 17, text: "Bluewater Hotels" },
              { n: 18, text: "Pentlow Hotels" },
              { n: 19, text: "Green Planet" },
              { n: 20, text: "The Amesbury" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c17/T4S3.mp3",
        blocks: [
          {
            kind: "mc2",
            intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p class='instr'>Which TWO points do Thomas and Jeanne make about Thomas's sporting activities at school?</p>",
            groups: [
              { qnums: [21,22], stem: "",
                options: [["A","He should have felt more positive about them."],["B","The training was too challenging for him."],["C","He could have worked harder at them."],["D","His parents were disappointed in him."],["E","His fellow students admired him."]] },
            ],
          },
          {
            kind: "mc2",
            intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p class='instr'>Which TWO feelings does Thomas mention having when he moved to the sports academy?</p>",
            groups: [
              { qnums: [23,24], stem: "",
                options: [["A","disbelief"],["B","relief"],["C","stress"],["D","gratitude"],["E","homesickness"]] },
            ],
          },
          {
            kind: "match",
            intro: "<p><b>Questions 25-30</b></p><p class='instr'>What comment do the students make about the development of each of the following items of sporting equipment?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 25-30.</p>",
            choices: [
              ["A","It could cause excessive sweating."],
              ["B","The material was being mass produced for another purpose."],
              ["C","People often needed to make their own."],
              ["D","It often had to be replaced."],
              ["E","The material was expensive."],
              ["F","It was unpopular among spectators."],
              ["G","It caused injuries."],
              ["H","No one using it liked it at first."],
            ],
            questions: [
              { n: 25, text: "the table tennis bat" },
              { n: 26, text: "the cricket helmet" },
              { n: 27, text: "the cycle helmet" },
              { n: 28, text: "the golf club" },
              { n: 29, text: "the hockey stick" },
              { n: 30, text: "the football" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c17/T4S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Maple syrup</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>What is maple syrup?</p>" +
              "<ul class='notes'>" +
              "<li>made from the sap of the maple tree</li>" +
              "<li>colour described as <input class='blank' data-q='31'></li>" +
              "<li>added to food or used in cooking</li>" +
              "<li>very <input class='blank' data-q='32'> compared to refined sugar</li>" +
              "</ul>" +
              "<p class='sub'>The maple tree</p>" +
              "<ul class='notes'>" +
              "<li>has many species</li>" +
              "<li>needs moist soil but does not need fertiliser as well</li>" +
              "<li>needs sunny days and cool nights</li>" +
              "<li>maple leaf has been on the Canadian flag since 1964</li>" +
              "<li>best growing conditions and <input class='blank' data-q='33'> are in Canada and North America</li>" +
              "</ul>" +
              "<p class='sub'>Early maple sugar producers</p>" +
              "<ul class='notes'>" +
              "<li>made holes in the tree trunks</li>" +
              "<li>used tree bark to make containers for collection</li>" +
              "<li>used hot <input class='blank' data-q='34'> to heat the sap</li>" +
              "<li>sweetened food and drink with sugar</li>" +
              "</ul>" +
              "<p class='sub'>Today's maple syrup - The trees</p>" +
              "<ul class='notes'>" +
              "<li>Tree trunks may not have the correct <input class='blank' data-q='35'> until they have been growing for 40 years.</li>" +
              "<li>The changing temperature and movement of water within the tree produces the sap.</li>" +
              "</ul>" +
              "<p class='sub'>The production</p>" +
              "<ul class='notes'>" +
              "<li>A tap is drilled into the trunk and a <input class='blank' data-q='36'> carries the sap into a bucket.</li>" +
              "<li>Large pans of sap called evaporators are heated by means of a <input class='blank' data-q='37'></li>" +
              "<li>A lot of <input class='blank' data-q='38'> is produced during the evaporation process.</li>" +
              "<li>Sugar sand is removed because it makes the syrup look <input class='blank' data-q='39'> and affects the taste.</li>" +
              "<li>The syrup is ready for use.</li>" +
              "<li>A huge quantity of sap is needed to make a <input class='blank' data-q='40'> of maple syrup.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
