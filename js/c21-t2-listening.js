/* Cambridge IELTS 21 - Test 2 (Academic) Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c21-t2"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["13 january", "13th january", "13.01", "13.1", "january 13"],
      "2": ["48", "forty-eight"], "3": ["pizza"], "4": ["india"], "5": ["mirror"],
      "6": ["6 april", "6th april", "06.04", "6.4", "april 6"],
      "7": ["natural"], "8": ["67.50", "67.5", "sixty-seven fifty"], "9": ["shirt"], "10": ["hammer"],
      "11|12": ["B", "E"], "13|14": ["C", "D"],
      "15": "F", "16": "B", "17": "D", "18": "A", "19": "H", "20": "E",
      "21|22": ["B", "E"], "23|24": ["C", "D"], "25|26": ["A", "C"],
      "27": "C", "28": "D", "29": "F", "30": "A",
      "31": ["pollution"], "32": ["tax"], "33": ["chocolate"], "34": ["timing"], "35": ["cost"],
      "36": ["rules"], "37": ["diving"], "38": ["vegan"], "39": ["wifi"], "40": ["videos"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c21/T2S1.mp3",
        blocks: [
          {
            kind: "fill",
            intro:
              "<p><b>Questions 1-10</b></p><p>Complete the table below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>One-day classes at Steynford College</h3>",
            html:
              '<table class="fill-table">' +
              "<tr><th>Course</th><th>Date</th><th>Cost</th><th>Notes</th></tr>" +
              "<tr>" +
              "<td>Vietnamese food</td>" +
              '<td><input class="blank" data-q="1"></td>' +
              "<td>£59</td>" +
              "<td>It provides information on the use of herbs. There are no places at present.</td>" +
              "</tr>" +
              "<tr>" +
              "<td>Bread making</td>" +
              "<td>20 March</td>" +
              '<td>£<input class="blank" data-q="2"></td>' +
              '<td>There is also an extra charge for ingredients. Participants make white bread, sourdough and <input class="blank" data-q="3">.</td>' +
              "</tr>" +
              "<tr>" +
              "<td>Face massage</td>" +
              "<td>23 February</td>" +
              "<td>£35</td>" +
              '<td>The teacher trained in <input class="blank" data-q="4">. Bring a <input class="blank" data-q="5">.</td>' +
              "</tr>" +
              "<tr>" +
              "<td>Candle making</td>" +
              '<td><input class="blank" data-q="6"></td>' +
              "<td>£52</td>" +
              '<td>Only <input class="blank" data-q="7"> ingredients are used. The candles can be used as presents.</td>' +
              "</tr>" +
              "<tr>" +
              "<td>Silk painting</td>" +
              "<td>18 May</td>" +
              '<td>£<input class="blank" data-q="8"></td>' +
              '<td>Bring an apron or old <input class="blank" data-q="9">.</td>' +
              "</tr>" +
              "<tr>" +
              "<td>DIY for beginners</td>" +
              "<td>24 February</td>" +
              "<td>£125</td>" +
              '<td>Learn how to use a drill, saw and <input class="blank" data-q="10">. ... put up a shelf.</td>' +
              "</tr></table>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c21/T2S2.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO pieces of advice are given about the Marsden Coastal Walk?</p>",
            groups: [ { qnums: [11,12], stem: "",
              options: [["A","Stop for lunch in an ancient town."],["B","Don't miss the ruins of a certain building."],["C","Catch a boat to the start of this walk."],["D","Be careful of the steep and rocky paths."],["E","Don't worry about getting lost."]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 13 and 14</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO things are said about the Melby Heritage Walk?</p>",
            groups: [ { qnums: [13,14], stem: "",
              options: [["A","This walk is mostly downhill."],["B","The paths can get busy during the day."],["C","This is a circular walk."],["D","A tower stands on the site of an older structure."],["E","There are far-reaching views the whole way."]] } ] },
          {
            kind: "match",
            intro:
              "<p><b>Questions 15-20</b></p><p>Label the map below.</p>" +
              "<p class='instr'>Write the correct letter, <b>A-I</b>, next to Questions 15-20.</p>" +
              "<h3>Melby Coal Mine</h3>" +
              "<p class='instr'>Map labels: A-I (Engine house, Main visitor centre, Ticket office, Car park, etc.) — map image not reproduced.</p>",
            choices: ["A","B","C","D","E","F","G","H","I"],
            questions: [
              { n: 15, text: "Exhibition" },
              { n: 16, text: "Baths" },
              { n: 17, text: "Tools" },
              { n: 18, text: "Vehicles" },
              { n: 19, text: "Ponies" },
              { n: 20, text: "Education centre" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c21/T2S3.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO facts in the sessions on food safety were new information for Nadia and Fergus?</p>",
            groups: [ { qnums: [21,22], stem: "",
              options: [["A","the amount of plastic in the ocean"],["B","the number of diseases caused by contaminated food"],["C","the amount of food that is wasted"],["D","the number of people who are obese"],["E","the result of treating animals with antibiotics"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO features of a project aiming to prevent food fraud impressed Fergus?</p>",
            groups: [ { qnums: [23,24], stem: "",
              options: [["A","the new technology it used"],["B","the publicity it received"],["C","the use of multiple tests on food items"],["D","the variety of dietary requirements included"],["E","the way information was made widely accessible"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 25 and 26</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO topics do both students recommend should be included in the course?</p>",
            groups: [ { qnums: [25,26], stem: "",
              options: [["A","sustainable fishing"],["B","targeted nutrition"],["C","global differences in consumption"],["D","sustainable agriculture"],["E","digital technology and food"]] } ] },
          {
            kind: "match",
            intro:
              "<p><b>Questions 27-30</b></p><p>Complete the flow-chart below.</p>" +
              "<p class='instr'>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A-F</b>, next to Questions 27-30.</p>" +
              "<h3>Student project: developing a new food product</h3>",
            choices: [
              ["A","This was challenging but enjoyable."],
              ["B","This led to some disagreement."],
              ["C","This was easy to decide on."],
              ["D","This was helped by the guidelines provided."],
              ["E","This seemed like an unnecessary stage."],
              ["F","This involved selecting a new ingredient."],
            ],
            questions: [
              { n: 27, text: "Initial aim" },
              { n: 28, text: "Literature review" },
              { n: 29, text: "Product development" },
              { n: 30, text: "Product production" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c21/T2S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Challenges facing the cruise ship industry</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Problems with overtourism</p>" +
              "<ul class='notes'>" +
              "<li><input class='blank' data-q='31'> is one of the worst problems.</li>" +
              '<li>A tourist <input class="blank" data-q="32"> is being introduced in some cities to reduce numbers, e.g. Barcelona.</li>' +
              '<li>Bruges: action was taken to limit day trips from the nearby port because the city was becoming a \'theme park\' (e.g. many shops were only stocking <input class="blank" data-q="33"> and souvenirs).</li>' +
              '<li>Dubrovnik: limits the number of tourists by managing the <input class="blank" data-q="34"> of cruise ship arrivals.</li>' +
              "</ul>" +
              "<p class='sub'>Problems of perception</p>" +
              "<ul class='notes'>" +
              "<li>Cruises are generally associated with the elderly.</li>" +
              '<li>There is an assumption about the <input class="blank" data-q="35"> of cruises.</li>' +
              '<li>People think there may be too many <input class="blank" data-q="36">.</li>' +
              "</ul>" +
              "<p class='sub'>Solutions</p>" +
              "<ul class='notes'>" +
              "<li>Cruise lines are attracting younger customers by:</li>" +
              '<li class="sub2">becoming more sustainable e.g. using hybrid engines.</li>' +
              '<li class="sub2">having a wide range of activities e.g. boxing, <input class="blank" data-q="37"> and well-being programmes.</li>' +
              '<li class="sub2">offering a diverse selection of food including <input class="blank" data-q="38"> options.</li>' +
              '<li class="sub2">providing reliable <input class="blank" data-q="39"></li>' +
              '<li class="sub2">improving marketing on social media with high quality <input class="blank" data-q="40"></li>' +
              "</ul>",
          },
        ],
      },
    ],
  },
};
