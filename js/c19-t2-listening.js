/* Cambridge IELTS 19 - Test 2 (Academic) Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c19-t2"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["Mathieson"], "2": ["beginners"], "3": ["college"], "4": ["New"],
      "5": ["11", "eleven", "11 am", "eleven am"], "6": ["instrument"],
      "7": ["ear"], "8": ["clapping"], "9": ["recording"], "10": ["alone"],
      "11": "A", "12": "B", "13": "A", "14": "B", "15": "C", "16": "A",
      "17|18": ["C", "E"], "19|20": ["A", "B"],
      "21": "A", "22": "B", "23": "B", "24": "B", "25": "E", "26": "B", "27": "A", "28": "C", "29": "C", "30": "A",
      "31": ["move"], "32": ["short"], "33": ["discs"], "34": ["oxygen"], "35": ["tube"],
      "36": ["temperatures"], "37": ["protein"], "38": ["space"], "39": ["seaweed"], "40": ["endangered"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c19/T2S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Questions 1-6</b></p><p>Complete the form below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Guitar Group</h3>",
          },
          {
            kind: "fill",
            html:
              "<ul class='notes'>" +
              '<li>Coordinator: Gary <input class="blank" data-q="1"></li>' +
              '<li>Level: <input class="blank" data-q="2"></li>' +
              '<li>Place: the <input class="blank" data-q="3"></li>' +
              '<li><input class="blank" data-q="4"> Street</li>' +
              "<li>First floor, Room T347</li>" +
              '<li>Time: Thursday morning at <input class="blank" data-q="5"></li>' +
              '<li>Recommended website: \'The perfect <input class="blank" data-q="6">\'</li>' +
              "</ul>",
          },
          {
            kind: "html",
            html:
              "<p><b>Questions 7-10</b></p><p>Complete the table below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>A typical 45-minute guitar lesson</h3>",
          },
          {
            kind: "fill",
            html:
              "<table class='fill-table'>" +
              "<tr><th>Time</th><th>Activity</th><th>Notes</th></tr>" +
              '<tr><td>5 minutes</td><td>tuning guitars</td><td>using an app or by <input class="blank" data-q="7"></td></tr>' +
              '<tr><td>10 minutes</td><td>strumming chords using our thumbs</td><td>keeping time while the teacher is <input class="blank" data-q="8"></td></tr>' +
              '<tr><td>15 minutes</td><td>playing songs</td><td>often listening to a <input class="blank" data-q="9"> of a song</td></tr>' +
              '<tr><td>10 minutes</td><td>playing single notes and simple tunes</td><td>playing together, then <input class="blank" data-q="10"></td></tr>' +
              "<tr><td>5 minutes</td><td>noting things to practise at home</td><td></td></tr>" +
              "</table>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c19/T2S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-16</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Working as a lifeboat volunteer</h3>",
            questions: [
              { n: 11, text: "What made David leave London and move to Northsea?",
                options: [["A","He was eager to develop a hobby."],["B","He wanted to work shorter hours."],["C","He found his job in website design unsatisfying."]] },
              { n: 12, text: "The Lifeboat Institution in Northsea was built with money provided by",
                options: [["A","a local organisation."],["B","a local resident."],["C","the local council."]] },
              { n: 13, text: "In his health assessment, the doctor was concerned about the fact that David",
                options: [["A","might be colour blind."],["B","was rather short-sighted."],["C","had undergone eye surgery."]] },
              { n: 14, text: "After arriving at the lifeboat station, they aim to launch the boat within",
                options: [["A","five minutes."],["B","six to eight minutes."],["C","eight and a half minutes."]] },
              { n: 15, text: "As a 'helmsman', David has the responsibility of deciding",
                options: [["A","who will be the members of his crew."],["B","what equipment it will be necessary to take."],["C","if the lifeboat should be launched."]] },
              { n: 16, text: "As well as going out on the lifeboat, David",
                options: [["A","gives talks on safety at sea."],["B","helps with fundraising."],["C","recruits new volunteers."]] },
            ],
          },
          { kind: "mc2", intro: "<p><b>Questions 17 and 18</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO things does David say about the lifeboat volunteer training?</p>",
            groups: [ { qnums: [17,18], stem: "",
              options: [["A","The residential course developed his leadership skills."],["B","The training in use of ropes and knots was quite brief."],["C","The training exercises have built up his mental strength."],["D","The casualty care activities were particularly challenging for him."],["E","The wave tank activities provided practice in survival techniques."]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 19 and 20</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO things does David find most motivating about the work he does?</p>",
            groups: [ { qnums: [19,20], stem: "",
              options: [["A","working as part of a team"],["B","experiences when working in winter"],["C","being thanked by those he has helped"],["D","the fact that it keeps him fit"],["E","the chance to develop new equipment"]] } ] },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c19/T2S3.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 21-24</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 21, text: "At first, Don thought the topic of recycling footwear might be too",
                options: [["A","limited in scope."],["B","hard to research."],["C","boring for listeners."]] },
              { n: 22, text: "When discussing trainers, Bella and Don disagree about",
                options: [["A","how popular they are among young people."],["B","how suitable they are for school."],["C","how quickly they wear out."]] },
              { n: 23, text: "Bella says that she sometimes recycles shoes because",
                options: [["A","they no longer fit."],["B","she no longer likes them."],["C","they are no longer in fashion."]] },
              { n: 24, text: "What did the article say that confused Don?",
                options: [["A","Public consumption of footwear has risen."],["B","Less footwear is recycled now than in the past."],["C","People dispose of more footwear than they used to."]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 25-28</b></p><p>What reasons did the recycling manager give for rejecting footwear, according to the students?</p><p class='instr'>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A-F</b>, next to Questions 25-28.</p>",
            choices: [
              ["A", "one shoe was missing"],
              ["B", "the colour of one shoe had faded"],
              ["C", "one shoe had a hole in it"],
              ["D", "the shoes were brand new"],
              ["E", "the shoes were too dirty"],
              ["F", "the stitching on the shoes was broken"],
            ],
            questions: [
              { n: 25, text: "the high-heeled shoes" },
              { n: 26, text: "the ankle boots" },
              { n: 27, text: "the baby shoes" },
              { n: 28, text: "the trainers" },
            ],
          },
          {
            kind: "mc",
            intro:
              "<p><b>Questions 29-30</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 29, text: "Why did the project to make 'new' shoes out of old shoes fail?",
                options: [["A","People believed the 'new' pairs of shoes were unhygienic."],["B","There were not enough good parts to use in the old shoes."],["C","The shoes in the 'new' pairs were not completely alike."]] },
              { n: 30, text: "Bella and Don agree that they can present their topic",
                options: [["A","from a new angle."],["B","with relevant images."],["C","in a straightforward way."]] },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c19/T2S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Questions 31-40</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Tardigrades</h3>" +
              "<p>more than 1,000 species, 0.05-1.2 millimetres long</p>" +
              "<p>also known as water 'bears' (due to how they <input class='blank' data-q='31'>) and 'moss piglets'</p>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Physical appearance</p>" +
              "<ul class='notes'>" +
              '<li>a <input class="blank" data-q="32">, round body and four pairs of legs</li>' +
              '<li>claws or <input class="blank" data-q="33"> for gripping</li>' +
              "<li>absence of respiratory organs</li>" +
              '<li>body filled with a liquid that carries both <input class="blank" data-q="34"> and blood</li>' +
              '<li>mouth shaped like a <input class="blank" data-q="35"> with teeth called stylets</li>' +
              "</ul>" +
              "<p class='sub'>Habitat</p>" +
              "<ul class='notes'>" +
              "<li>often found at the bottom of a lake or on plants</li>" +
              '<li>very resilient and can exist in very low or high <input class="blank" data-q="36"></li>' +
              "</ul>" +
              "<p class='sub'>Cryptobiosis</p>" +
              "<ul class='notes'>" +
              "<li>In dry conditions, they roll into a ball called a 'tun'.</li>" +
              "<li>They stay alive with a much lower metabolism than usual.</li>" +
              '<li>A type of <input class="blank" data-q="37"> ensures their DNA is not damaged.</li>' +
              '<li>Research is underway to find out how many days they can stay alive in <input class="blank" data-q="38"></li>' +
              "</ul>" +
              "<p class='sub'>Feeding</p>" +
              "<ul class='notes'>" +
              '<li>consume liquids, e.g., those found in moss or <input class="blank" data-q="39"></li>' +
              "<li>may eat other tardigrades</li>" +
              "</ul>" +
              "<p class='sub'>Conservation status</p>" +
              "<ul class='notes'>" +
              '<li>They are not considered to be <input class="blank" data-q="40"></li>' +
              "</ul>",
          },
        ],
      },
    ],
  },
};
