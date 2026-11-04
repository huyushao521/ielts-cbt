/* Cambridge IELTS 20 - Test 4 - Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c20-t4"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["kings"], "2": ["125"], "3": ["walking"], "4": ["boat"], "5": ["tuesday"],
      "6": ["space"], "7": ["vegetarian"], "8": ["2.30", "two thirty"], "9": ["75"], "10": ["port"],
      "11|12": ["B", "C"], "13|14": ["A", "C"],
      "15": "D", "16": "F", "17": "B", "18": "H", "19": "C", "20": "G",
      "21|22": ["C", "E"], "23|24": ["A", "C"],
      "25": "C", "26": "A", "27": "A", "28": "B", "29": "B", "30": "C",
      "31": ["rats"], "32": ["snakes"], "33": ["tourism"], "34": ["traffic"], "35": ["rain"],
      "36": ["poison"], "37": ["building"], "38": ["dog"], "39": ["noise"], "40": ["combination"],
    },
    parts: [
      {
        part: 1, title: "Questions 1-10", audio: "audio/T4S1.mp3",
        blocks: [
          { kind: "html", html: "<p><b>Complete the notes below.</b></p><p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p><h3>Advice on family visit</h3>" },
          { kind: "fill", html:
              "<p class='sub'>Accommodation</p>" +
              "<ul class='notes'>" +
              "<li><input class='blank' data-q='1'> Hotel on George Street</li>" +
              "<li>cost of family room per night: £<input class='blank' data-q='2'> (approx.)</li>" +
              "</ul>" +
              "<p class='sub'>Recommended trips</p>" +
              "<ul class='notes'>" +
              "<li>a <input class='blank' data-q='3'> tour of the city centre (starts in Carlton Square)</li>" +
              "<li>a trip by <input class='blank' data-q='4'> to the old fort</li>" +
              "<li>Science Museum — best day to visit: <input class='blank' data-q='5'></li>" +
              "<li>see the exhibition about <input class='blank' data-q='6'>, which opens soon</li>" +
              "</ul>" +
              "<p class='sub'>Food</p>" +
              "<ul class='notes'>" +
              "<li>Clacton Market — good for <input class='blank' data-q='7'> food</li>" +
              "<li>need to have lunch before <input class='blank' data-q='8'> p.m.</li>" +
              "</ul>" +
              "<p class='sub'>Theatre tickets</p>" +
              "<ul class='notes'>" +
              "<li>save up to <input class='blank' data-q='9'>% on ticket prices at bargaintickets.com</li>" +
              "</ul>" +
              "<p class='sub'>Free activities</p>" +
              "<ul class='notes'>" +
              "<li>Blakewell Gardens:</li>" +
              "<li class='sub2'>- Roots Music Festival</li>" +
              "<li class='sub2'>- climb Telegraph Hill to see a view of the <input class='blank' data-q='10'></li>" +
              "</ul>",
          },
        ],
      },
      {
        part: 2, title: "Questions 11-20", audio: "audio/T4S2.mp3",
        blocks: [
          { kind: "mc2",
            intro: "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO things does the speaker say about visiting the football stadium with children?</p>",
            groups: [ { qnums: [11, 12], stem: "", options: [
              ["A", "Children can get their photo taken with a football player."],
              ["B", "There is a competition for children today."],
              ["C", "Parents must stay with their children at all times."],
              ["D", "Children will need sunhats and drinks."],
              ["E", "The café has a special offer on meals for children."],
            ] } ] },
          { kind: "mc2",
            intro: "<p><b>Questions 13 and 14</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO features of the stadium tour are new this year?</p>",
            groups: [ { qnums: [13, 14], stem: "", options: [
              ["A", "VIP tour"],
              ["B", "360 cinema experience"],
              ["C", "audio guide"],
              ["D", "dressing room tour"],
              ["E", "tours in other languages"],
            ] } ] },
          { kind: "match",
            intro: "<p><b>Questions 15-20</b></p><p>Which event in the history of football in the UK took place in each of the following years?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 15-20.</p>",
            choices: [
              ["A", "the introduction of pay for the players"],
              ["B", "a change to the design of the goal"],
              ["C", "the first use of lights for matches"],
              ["D", "the introduction of goalkeepers"],
              ["E", "the first international match"],
              ["F", "two changes to the rules of the game"],
              ["G", "the introduction of a fee for spectators"],
              ["H", "an agreement on the length of a game"],
            ],
            questions: [
              { n: 15, text: "1870" },
              { n: 16, text: "1874" },
              { n: 17, text: "1875" },
              { n: 18, text: "1877" },
              { n: 19, text: "1878" },
              { n: 20, text: "1880" },
            ] },
        ],
      },
      {
        part: 3, title: "Questions 21-30", audio: "audio/T4S3.mp3",
        blocks: [
          { kind: "mc2",
            intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO benefits for children of learning to write did both students find surprising?</p>",
            groups: [ { qnums: [21, 22], stem: "", options: [
              ["A", "improved fine motor skills"],
              ["B", "improved memory"],
              ["C", "improved concentration"],
              ["D", "improved imagination"],
              ["E", "improved spatial awareness"],
            ] } ] },
          { kind: "mc2",
            intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>For children with dyspraxia, which TWO problems with handwriting do the students think are easiest to correct?</p>",
            groups: [ { qnums: [23, 24], stem: "", options: [
              ["A", "not spacing letters correctly"],
              ["B", "not writing in a straight line"],
              ["C", "applying too much pressure when writing"],
              ["D", "confusing letter shapes"],
              ["E", "writing very slowly"],
            ] } ] },
          { kind: "mc",
            intro: "<p><b>Questions 25-30</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Teaching handwriting</h3>",
            questions: [
              { n: 25, text: "What does the woman say about using laptops to teach writing to children with dyslexia?",
                options: [["A","Children often lack motivation to learn that way."],["B","Children become fluent relatively quickly."],["C","Children react more positively if they make a mistake."]] },
              { n: 26, text: "When discussing whether to teach cursive or print writing, the woman thinks that",
                options: [["A","cursive writing disadvantages a certain group of children."],["B","print writing is associated with lower academic performance."],["C","most teachers in the UK prefer a traditional approach to handwriting."]] },
              { n: 27, text: "According to the students, what impact does poor handwriting have on exam performance?",
                options: [["A","There is evidence to suggest grades are affected by poor handwriting."],["B","Neat handwriting is less important now than it used to be."],["C","Candidates write more slowly and produce shorter answers."]] },
              { n: 28, text: "What prediction does the man make about the future of handwriting?",
                options: [["A","Touch typing will be taught before writing by hand."],["B","Children will continue to learn to write by hand."],["C","People will dislike handwriting on digital devices."]] },
              { n: 29, text: "The woman is concerned that relying on digital devices has made it difficult for her to",
                options: [["A","take detailed notes."],["B","spell and punctuate."],["C","read old documents."]] },
              { n: 30, text: "How do the students feel about their own handwriting?",
                options: [["A","concerned they are unable to write quickly"],["B","embarrassed by comments made about it"],["C","regretful that they have lost the habit"]] },
            ] },
        ],
      },
      {
        part: 4, title: "Questions 31-40", audio: "audio/T4S4.mp3",
        blocks: [
          { kind: "html", html: "<p><b>Complete the notes below.</b></p><p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p><h3>Research in the area around the Chembe Bird Sanctuary</h3>" },
          { kind: "fill", html:
              "<p class='sub'>The importance of birds of prey to the local communities</p>" +
              "<ul class='notes'>" +
              "<li>They destroy <input class='blank' data-q='31'> and other rodents.</li>" +
              "<li>They help to prevent farmers from being bitten by <input class='blank' data-q='32'>.</li>" +
              "<li>They have been an important part of the local culture for many years.</li>" +
              "<li>They now support the economy by encouraging <input class='blank' data-q='33'> in the area.</li>" +
              "</ul>" +
              "<p class='sub'>Falling numbers of birds of prey</p>" +
              "<ul class='notes'>" +
              "<li>The birds may be accidentally killed</li>" +
              "<li class='sub2'>- by <input class='blank' data-q='34'> when they are hunting or sleeping</li>" +
              "<li class='sub2'>- by electrocution from contact with power lines, especially at times when there is a lot of <input class='blank' data-q='35'></li>" +
              "<li>Local farmers may illegally shoot them or <input class='blank' data-q='36'> them.</li>" +
              "</ul>" +
              "<p class='sub'>Ways of protecting chickens from birds of prey</p>" +
              "<ul class='notes'>" +
              "<li>clearing away vegetation from the area (unhelpful)</li>" +
              "<li>providing a <input class='blank' data-q='37'> for chickens (expensive)</li>" +
              "<li>frightening birds of prey by</li>" +
              "<li class='sub2'>- keeping a <input class='blank' data-q='38'></li>" +
              "<li class='sub2'>- making a <input class='blank' data-q='39'> e.g. with metal objects</li>" +
              "<li>A <input class='blank' data-q='40'> of methods is usually most effective.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
