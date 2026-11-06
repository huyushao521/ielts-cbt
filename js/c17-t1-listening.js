/* Cambridge IELTS 17 - Test 1 (Academic) 数据
 * 由扫描版 PDF 经 OCR 整理，个别拼写/标点可能需校对。 */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c17-t1"] = {
  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["litter"], "2": ["shop"], "3": ["insects"], "4": ["butterflies"], "5": ["wall"],
      "6": ["island"], "7": ["boots"], "8": ["beginners"], "9": ["spoons"], "10": ["35", "thirty five"],
      "11": "A", "12": "C", "13": "B", "14": "B",
      "15|16": ["A", "D"], "17|18": ["B", "C"], "19|20": ["D", "E"],
      "21": "A", "22": "B", "23": "B", "24": "A", "25": "C", "26": "C",
      "27": "A", "28": "E", "29": "F", "30": "C",
      "31": ["puzzle"], "32": ["logic"], "33": ["confusion"], "34": ["meditation"], "35": ["stone"],
      "36": ["coins"], "37": ["tree"], "38": ["breathing"], "39": ["paper"], "40": ["anxiety"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c17/T1S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Buckworth Conservation Group</h3>" +
              "<p class='sub'>Regular activities</p>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Beach</p>" +
              "<ul class='notes'>" +
              "<li>making sure the beach does not have <input class='blank' data-q='1'> on it</li>" +
              "<li>no <input class='blank' data-q='2'></li>" +
              "</ul>" +
              "<p class='sub'>Nature reserve</p>" +
              "<ul class='notes'>" +
              "<li>maintaining paths</li>" +
              "<li>nesting boxes for birds installed</li>" +
              "<li>next task is taking action to attract <input class='blank' data-q='3'> to the place</li>" +
              "<li>identifying types of <input class='blank' data-q='4'></li>" +
              "<li>building a new <input class='blank' data-q='5'></li>" +
              "</ul>" +
              "<p class='sub'>Forthcoming events</p>" +
              "<ul class='notes'>" +
              "<li>Saturday: meet at Dunsmore Beach car park</li>" +
              "<li>walk across the sands and reach the <input class='blank' data-q='6'></li>" +
              "<li>take a picnic</li>" +
              "<li>wear appropriate <input class='blank' data-q='7'></li>" +
              "</ul>" +
              "<p class='sub'>Woodwork session</p>" +
              "<ul class='notes'>" +
              "<li>suitable for <input class='blank' data-q='8'> to participate in</li>" +
              "<li>making <input class='blank' data-q='9'> out of wood</li>" +
              "<li>17th, from 10 a.m. to 3 p.m.</li>" +
              "<li>cost of session (no camping): <input class='blank' data-q='10'></li>" +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c17/T1S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-14</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 11, text: "What is the maximum number of people who can stand on each side of the boat?",
                options: [["A","9"],["B","15"],["C","18"]] },
              { n: 12, text: "What colour are the tour boats?",
                options: [["A","dark red"],["B","jet black"],["C","light green"]] },
              { n: 13, text: "Which lunchbox is suitable for someone who doesn't eat meat or fish?",
                options: [["A","Lunchbox 1"],["B","Lunchbox 2"],["C","Lunchbox 3"]] },
              { n: 14, text: "What should people do with their litter?",
                options: [["A","take it home"],["B","hand it to a member of staff"],["C","put it in the bins provided on the boat"]] },
            ],
          },
          {
            kind: "mc2",
            intro: "<p><b>Questions 15 and 16</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>",
            groups: [
              { qnums: [15,16], stem: "Which TWO features of the lighthouse does Lou mention?",
                options: [["A","why it was built"],["B","who built it"],["C","how long it took to build"],["D","who staffed it"],["E","what it was built with"]] },
            ],
          },
          {
            kind: "mc2",
            intro: "<p><b>Questions 17 and 18</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>",
            groups: [
              { qnums: [17,18], stem: "Which TWO types of creature might come close to the boat?",
                options: [["A","sea eagles"],["B","fur seals"],["C","dolphins"],["D","whales"],["E","penguins"]] },
            ],
          },
          {
            kind: "mc2",
            intro: "<p><b>Questions 19 and 20</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>",
            groups: [
              { qnums: [19,20], stem: "Which TWO points does Lou make about the caves?",
                options: [["A","Only large tourist boats can visit them."],["B","The entrances to them are often blocked."],["C","It is too dangerous for individuals to go near them."],["D","Someone will explain what is inside them."],["E","They cannot be reached on foot."]] },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c17/T1S3.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 21-26</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 21, text: "What problem did both Diana and Tim have when arranging their work experience?",
                options: [["A","making initial contact with suitable farms"],["B","organising transport to and from the farm"],["C","finding a placement for the required length of time"]] },
              { n: 22, text: "Tim was pleased to be able to help",
                options: [["A","a lamb that had a broken leg."],["B","a sheep that was having difficulty giving birth."],["C","a newly born lamb that was having trouble feeding."]] },
              { n: 23, text: "Diana says the sheep on her farm",
                options: [["A","were of various different varieties."],["B","were mainly reared for their meat."],["C","had better quality wool than sheep on the hills."]] },
              { n: 24, text: "What did the students learn about adding supplements to chicken feed?",
                options: [["A","These should only be given if specially needed."],["B","It is worth paying extra for the most effective ones."],["C","The amount given at one time should be limited."]] },
              { n: 25, text: "What happened when Diana was working with dairy cows?",
                options: [["A","She identified some cows incorrectly."],["B","She accidentally threw some milk away."],["C","She made a mistake when storing milk."]] },
              { n: 26, text: "What did both farmers mention about vets and farming?",
                options: [["A","Vets are failing to cope with some aspects of animal health."],["B","There needs to be a fundamental change in the training of vets."],["C","Some jobs could be done by the farmer rather than by a vet."]] },
            ],
          },
          {
            kind: "match",
            intro: "<p><b>Questions 27-30</b></p><p class='instr'>What opinion do the students give about each of the following modules on their veterinary science course?</p><p class='instr'>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A-F</b>, next to questions 27-30.</p>",
            choices: [
              ["A","Tim found this easier than expected"],
              ["B","Tim thought this was not very clearly organised"],
              ["C","Diana may do some further study on this"],
              ["D","They both found the reading required for this was difficult"],
              ["E","Tim was shocked at something he learned on this module"],
              ["F","They were both surprised how little is known about some aspects of this"],
            ],
            questions: [
              { n: 27, text: "Medical terminology" },
              { n: 28, text: "Diet and nutrition" },
              { n: 29, text: "Animal disease" },
              { n: 30, text: "Wildlife medication" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c17/T1S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Labyrinths</h3>" +
              "<p class='sub'>Definition</p>",
          },
          {
            kind: "fill",
            html:
              "<ul class='notes'>" +
              "<li>a winding spiral path leading to a central area</li>" +
              "</ul>" +
              "<p class='sub'>Labyrinths compared with mazes</p>" +
              "<ul class='notes'>" +
              "<li>Mazes are a type of <input class='blank' data-q='31'></li>" +
              "<li><input class='blank' data-q='32'> is needed to navigate through a maze</li>" +
              "<li>the word 'maze' is derived from a word meaning a feeling of <input class='blank' data-q='33'></li>" +
              "</ul>" +
              "<p class='sub'>Labyrinths represent a journey through life</p>" +
              "<ul class='notes'>" +
              "<li>they have frequently been used in <input class='blank' data-q='34'> and prayer</li>" +
              "</ul>" +
              "<p class='sub'>Early examples of the labyrinth spiral</p>" +
              "<ul class='notes'>" +
              "<li>Ancient carvings on <input class='blank' data-q='35'> have been found across many cultures</li>" +
              "<li>The Pima, a Native American tribe, wove the symbol on baskets</li>" +
              "<li>Ancient Greeks used the symbol on <input class='blank' data-q='36'></li>" +
              "</ul>" +
              "<p class='sub'>Walking labyrinths</p>" +
              "<ul class='notes'>" +
              "<li>The largest surviving example of a turf labyrinth once had a big <input class='blank' data-q='37'> at its centre</li>" +
              "</ul>" +
              "<p class='sub'>Labyrinths nowadays</p>" +
              "<ul class='notes'>" +
              "<li>e.g., walking a maze can reduce a person's <input class='blank' data-q='38'> rate</li>" +
              "<li>Used in medical and health and fitness settings and also prisons</li>" +
              "<li>Popular with patients, visitors and staff in hospitals</li>" +
              "<li>patients who can't walk can use 'finger labyrinths' made from <input class='blank' data-q='39'></li>" +
              "<li>research has shown that Alzheimer's sufferers experience less <input class='blank' data-q='40'></li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
