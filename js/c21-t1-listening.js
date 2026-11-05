/* Cambridge IELTS 21 - Test 1 (Academic) 数据
 * 由扫描版 PDF 经 OCR 整理，个别拼写/标点可能需校对。 */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c21-t1"] = {
  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["10", "ten"], "2": ["weather"], "3": ["safety"], "4": ["discount"],
      "5": ["dictionary"], "6": ["certificate"], "7": ["towel"], "8": ["cafe", "café"],
      "9": ["videos"], "10": ["lockers"],
      "11": "A", "12": "B", "13": "A", "14": "A", "15": "A", "16": "C",
      "17": "C", "18": "A", "19": "B", "20": "C",
      "21|22": ["B", "D"], "23|24": ["C", "E"],
      "25": "G", "26": "B", "27": "F", "28": "H", "29": "A", "30": "E",
      "31": ["metal", "metals"], "32": ["slow"], "33": ["demand"], "34": ["equator"],
      "35": ["recycle"], "36": ["fungus"], "37": ["weather"], "38": ["strong"],
      "39": ["roots"], "40": ["soil"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c21/T1S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Questions 1-6</b></p><p>Complete the table below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Oyster Bay Sailing Club Courses</h3>",
          },
          {
            kind: "fill",
            html:
              '<table class="fill-table">' +
              "<tr><th>Name of<br>course</th><th>What you learn</th><th>Cost</th><th>Other information</th></tr>" +
              "<tr>" +
              "<td>Taster day</td>" +
              "<td>introduction to sailing</td>" +
              "<td>£120 if booking one place</td>" +
              '<td>small groups (max <input class="blank" data-q="1"> people)</td>' +
              "</tr>" +
              "<tr>" +
              "<td>Level 1</td>" +
              '<td>basic theory e.g. understanding the <input class="blank" data-q="2"> and tides<br>basic sailing skills including <input class="blank" data-q="3"> information</td>' +
              '<td>£200<br><input class="blank" data-q="4"> available for club members<br>all inclusive (plus a useful <input class="blank" data-q="5">)</td>' +
              '<td>a <input class="blank" data-q="6"> at the end of the course for all participants</td>' +
              "</tr></table>",
          },
          {
            kind: "html",
            html:
              "<p><b>Questions 7-10</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>General information</h3>",
          },
          {
            kind: "fill",
            html:
              "<ul class='notes'>" +
              "<li>Participants must be able to swim.</li>" +
              '<li>Bring suitable clothing, a <input class="blank" data-q="7"> and toiletries (e.g. shampoo).</li>' +
              '<li>There is a <input class="blank" data-q="8"> at the club.</li>' +
              '<li>Online training <input class="blank" data-q="9"> are recommended.</li>' +
              '<li><input class="blank" data-q="10"> are available for course participants.</li>' +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c21/T1S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-16</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Working as a makeup trainee</h3>",
            questions: [
              { n: 11, text: "What should trainees always expect to get when working on low budget short films?",
                options: [["A","travel expenses"],["B","a minimum wage"],["C","meals"]] },
              { n: 12, text: "According to the speaker, on big budget films trainees may get experience of",
                options: [["A","makeup for special effects."],["B","working with different ethnicities."],["C","creating a variety of hairstyles."]] },
              { n: 13, text: "The speaker says a problem for makeup artists is",
                options: [["A","dealing with difficult directors."],["B","being shouted at by their supervisor."],["C","waiting around for hours doing nothing."]] },
              { n: 14, text: "How did the speaker feel when she met famous actors for the first time?",
                options: [["A","very shy"],["B","very proud"],["C","very disappointed"]] },
              { n: 15, text: "What advice does the speaker give about makeup kits?",
                options: [["A","Always carry a basic kit with you."],["B","Only buy the best products for a makeup kit."],["C","Ask other makeup artists to check your kit."]] },
              { n: 16, text: "What advice does the speaker give about creating a portfolio?",
                options: [["A","Keep print and digital photos."],["B","Only include a small selection of photos."],["C","Get permission to use photos."]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 17-20</b></p><p>What ability is required for each of the following duties?</p><p class='instr'>Write the correct letter, <b>A, B or C</b>, next to Questions 17-20.</p>",
            choices: [["A","being well-organised"],["B","being flexible"],["C","working quickly"]],
            questions: [
              { n: 17, text: "Prepping an actor" },
              { n: 18, text: "Continuity" },
              { n: 19, text: "General duties" },
              { n: 20, text: "Applying makeup" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c21/T1S3.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO features of the lecture on ocean biodiversity had the greatest impact on the students?</p>",
            groups: [ { qnums: [21,22], stem: "",
              options: [["A","the references to local problems"],["B","the broad focus of the examples"],["C","the practical suggestions for solutions"],["D","the type of issues discussed"],["E","the implications for government policy"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO details about the research project particularly impressed the students?</p>",
            groups: [ { qnums: [23,24], stem: "",
              options: [["A","the team's previous successes"],["B","its wide geographical scale"],["C","the use of new technology"],["D","the extensive statistical evidence"],["E","the large range of specialists involved"]] } ] },
          {
            kind: "match",
            intro:
              "<p><b>Questions 25-30</b></p><p>What is the students' opinion of each of the following resources related to ocean biodiversity?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 25-30.</p>",
            choices: [
              ["A","This is aimed at a very specialist audience."],
              ["B","This is now rather outdated."],
              ["C","This was an effective description of a new danger."],
              ["D","This suggests possible ways to improve the situation."],
              ["E","This does not give a balanced account."],
              ["F","This is too predictable to be useful."],
              ["G","This gives insufficient evidence for its claims."],
              ["H","This gives a clear explanation of the problems."],
            ],
            questions: [
              { n: 25, text: "Article on invasive lionfish" },
              { n: 26, text: "Documentary on microplastics" },
              { n: 27, text: "Podcast on ocean pollution" },
              { n: 28, text: "Book on coastal ecosystems" },
              { n: 29, text: "Article on metal toxicity" },
              { n: 30, text: "Podcast on floating marine cities" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c21/T1S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Sources of rubber</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Three resources which are essential for industrial civilisation</p>" +
              "<ul class='notes'>" +
              "<li><input class='blank' data-q='31'></li>" +
              "<li>fossil fuels</li>" +
              "<li>rubber</li>" +
              "</ul>" +
              "<p class='sub'>Natural rubber</p>" +
              "<ul class='notes'>" +
              "<li>This mainly comes from the Pará rubber tree, now cultivated in South-East Asia.</li>" +
              "<li>The supply is limited because:</li>" +
              '<li class="sub2">the growth of the tree is <input class="blank" data-q="32"></li>' +
              '<li class="sub2">production cannot easily be adjusted because of increasing or decreasing <input class="blank" data-q="33"></li>' +
              '<li class="sub2">the tree only grows near the <input class="blank" data-q="34"></li>' +
              '<li class="sub2">extracting the latex (rubber) is labour-intensive</li>' +
              '<li class="sub2">it is very difficult to <input class="blank" data-q="35"> rubber after production.</li>' +
              "<li>New threats include:</li>" +
              '<li class="sub2">lack of genetic diversity, leading to danger of disease caused by a <input class="blank" data-q="36"></li>' +
              '<li class="sub2">a shift to the cultivation of palm oil</li>' +
              '<li class="sub2">extreme <input class="blank" data-q="37"> events.</li>' +
              "</ul>" +
              "<p class='sub'>Synthetic rubber</p>" +
              "<ul class='notes'>" +
              "<li>may be used for engine parts and cooking utensils</li>" +
              '<li>is less <input class="blank" data-q="38"> than natural rubber</li>' +
              "<li>is unsuitable for many purposes e.g. the tyres of aircraft.</li>" +
              "</ul>" +
              "<p class='sub'>An alternative source of natural rubber</p>" +
              "<ul class='notes'>" +
              '<li>A wild flower (a type of dandelion) has rubber in its <input class="blank" data-q="39"></li>' +
              '<li>It can be grown in many locations and does not require good <input class="blank" data-q="40"></li>' +
              "</ul>",
          },
        ],
      },
    ],
  },
};
