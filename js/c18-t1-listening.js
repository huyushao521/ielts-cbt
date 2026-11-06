/* Cambridge IELTS 18 - Test 1 (Academic) Listening
 * 由扫描版 PDF 经 OCR 整理，个别拼写/标点可能需校对。 */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c18-t1"] = {
  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["DW30 7YZ", "DW307YZ"], "2": ["24 April", "24th April", "24th of April", "April 24", "April 24th"],
      "3": ["dentist", "the dentist"], "4": ["parking"], "5": ["Claxby"], "6": ["late"],
      "7": ["evening"], "8": ["supermarket"], "9": ["pollution"], "10": ["storage"],
      "11": "C", "12": "A", "13": "A",
      "14|15": ["B", "E"],
      "16": "B", "17": "G", "18": "D", "19": "A", "20": "F",
      "21": "A", "22": "B", "23": "A", "24": "C", "25": "B", "26": "A",
      "27|28": ["B", "E"], "29|30": ["A", "C"],
      "31": ["fences"], "32": ["family"], "33": ["helicopters"], "34": ["stress"],
      "35": ["sides"], "36": ["breathing"], "37": ["feet"], "38": ["employment"],
      "39": ["weapons"], "40": ["tourism"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c18/T1S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Questions 1-10</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Transport survey</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Personal details</p>" +
              "<ul class='notes'>" +
              "<li>Name: Sadie Jones</li>" +
              "<li>Year of birth: 1991</li>" +
              '<li>Postcode: <input class="blank" data-q="1"></li>' +
              "</ul>" +
              "<p class='sub'>Travelling by bus</p>" +
              "<ul class='notes'>" +
              '<li>Date of bus journey: <input class="blank" data-q="2"></li>' +
              '<li>Reason for trip: shopping and visit to the <input class="blank" data-q="3"></li>' +
              '<li>Travelled by bus because cost of <input class="blank" data-q="4"> too high</li>' +
              '<li>Got on bus at <input class="blank" data-q="5"> Street</li>' +
              '<li>Complaints about bus service:</li>' +
              '<li class="sub2">bus today was <input class="blank" data-q="6"></li>' +
              '<li class="sub2">frequency of buses in the <input class="blank" data-q="7"></li>' +
              "</ul>" +
              "<p class='sub'>Travelling by car</p>" +
              "<ul class='notes'>" +
              '<li>Goes to the <input class="blank" data-q="8"> by car</li>' +
              "</ul>" +
              "<p class='sub'>Travelling by bicycle</p>" +
              "<ul class='notes'>" +
              '<li>Dislikes travelling by bike in the city centre because of the <input class="blank" data-q="9"></li>' +
              '<li>Doesn\'t own a bike because of a lack of <input class="blank" data-q="10"></li>' +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c18/T1S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-13</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Becoming a volunteer for ACE</h3>",
            questions: [
              { n: 11, text: "Why does the speaker apologise about the seats?",
                options: [["A","They are too small."],["B","There are not enough of them."],["C","Some of them are very close together."]] },
              { n: 12, text: "What does the speaker say about the age of volunteers?",
                options: [["A","The age of volunteers is less important than other factors."],["B","Young volunteers are less reliable than older ones."],["C","Most volunteers are about 60 years old."]] },
              { n: 13, text: "What does the speaker say about training?",
                options: [["A","It is continuous."],["B","It is conducted by a manager."],["C","It takes place online."]] },
            ],
          },
          {
            kind: "mc2",
            intro: "<p><b>Questions 14 and 15</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO issues does the speaker ask the audience to consider before they apply to be volunteers?</p>",
            groups: [
              { qnums: [14,15], stem: "",
                options: [["A","their financial situation"],["B","their level of commitment"],["C","their work experience"],["D","their ambition"],["E","their availability"]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 16-20</b></p><p>What does the speaker suggest would be helpful for each of the following areas of voluntary work?</p>" +
              "<p class='instr'>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 16-20.</p>" +
              "<h3>Helpful things volunteers might offer</h3>",
            choices: [
              ["A", "experience on stage"],
              ["B", "original, new ideas"],
              ["C", "parenting skills"],
              ["D", "an understanding of food and diet"],
              ["E", "retail experience"],
              ["F", "a good memory"],
              ["G", "a good level of fitness"],
            ],
            questions: [
              { n: 16, text: "Fundraising" },
              { n: 17, text: "Litter collection" },
              { n: 18, text: "'Playmates'" },
              { n: 19, text: "Story club" },
              { n: 20, text: "First aid" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c18/T1S3.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 21-26</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Talk on jobs in fashion design</h3>",
            questions: [
              { n: 21, text: "What problem did Chantal have at the start of the talk?",
                options: [["A","Her view of the speaker was blocked."],["B","She was unable to find an empty seat."],["C","The students next to her were talking."]] },
              { n: 22, text: "What were Hugo and Chantal surprised to hear about the job market?",
                options: [["A","It has become more competitive than it used to be."],["B","There is more variety in it than they had realised."],["C","Some areas of it are more exciting than others."]] },
              { n: 23, text: "Hugo and Chantal agree that the speaker's message was",
                options: [["A","unfair to them at times."],["B","hard for them to follow."],["C","critical of the industry."]] },
              { n: 24, text: "What do Hugo and Chantal criticise about their school careers advice?",
                options: [["A","when they received the advice"],["B","how much advice was given"],["C","who gave the advice"]] },
              { n: 25, text: "When discussing their future, Hugo and Chantal disagree on",
                options: [["A","which is the best career in fashion."],["B","when to choose a career in fashion."],["C","why they would like a career in fashion."]] },
              { n: 26, text: "How does Hugo feel about being an unpaid assistant?",
                options: [["A","He is realistic about the practice."],["B","He feels the practice is dishonest."],["C","He thinks others want to change the practice."]] },
            ],
          },
          {
            kind: "mc2",
            intro: "<p><b>Questions 27 and 28</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO mistakes did the speaker admit she made in her first job?</p>",
            groups: [
              { qnums: [27,28], stem: "",
                options: [["A","being dishonest to her employer"],["B","paying too much attention to how she looked"],["C","expecting to become well known"],["D","trying to earn a lot of money"],["E","openly disliking her client"]] },
            ],
          },
          {
            kind: "mc2",
            intro: "<p><b>Questions 29 and 30</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO pieces of retail information do Hugo and Chantal agree would be useful?</p>",
            groups: [
              { qnums: [29,30], stem: "",
                options: [["A","the reason people return fashion items"],["B","how much time people have to shop for clothes"],["C","fashion designs people want but can't find"],["D","the best time of year for fashion buying"],["E","the most popular fashion sizes"]] },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c18/T1S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Questions 31-40</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Elephant translocation</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Reasons for overpopulation at Majete National Park</p>" +
              "<ul class='notes'>" +
              "<li>strict enforcement of anti-poaching laws</li>" +
              "<li>successful breeding</li>" +
              "</ul>" +
              "<p class='sub'>Problems caused by elephant overpopulation</p>" +
              "<ul class='notes'>" +
              "<li>greater competition, causing hunger for elephants</li>" +
              '<li>damage to <input class="blank" data-q="31"> in the park</li>' +
              "</ul>" +
              "<p class='sub'>The translocation process</p>" +
              "<ul class='notes'>" +
              '<li>a suitable group of elephants from the same <input class="blank" data-q="32"> was selected</li>' +
              '<li>vets and park staff made use of <input class="blank" data-q="33"> to help guide the elephants into an open plain</li>' +
              "<li>elephants were immobilised with tranquilisers</li>" +
              '<li class="sub2">this process had to be completed quickly to reduce <input class="blank" data-q="34"></li>' +
              '<li>elephants had to be turned on their <input class="blank" data-q="35"> to avoid damage to their lungs</li>' +
              '<li>elephants\' <input class="blank" data-q="36"> had to be monitored constantly</li>' +
              "<li>tracking devices were fitted to the matriarchs</li>" +
              '<li>data including the size of their tusks and <input class="blank" data-q="37"> was taken</li>' +
              "<li>elephants were taken by truck to their new reserve</li>" +
              "</ul>" +
              "<p class='sub'>Advantages of translocation at Nkhotakota Wildlife Park</p>" +
              "<ul class='notes'>" +
              '<li><input class="blank" data-q="38"> opportunities</li>' +
              '<li>a reduction in the number of poachers and <input class="blank" data-q="39"></li>' +
              "<li>an example of conservation that other parks can follow</li>" +
              '<li>an increase in <input class="blank" data-q="40"> as a contributor to GDP</li>' +
              "</ul>",
          },
        ],
      },
    ],
  },
};
