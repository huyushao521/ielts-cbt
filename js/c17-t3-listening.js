/* Cambridge IELTS 17 - Test 3 (Academic) */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c17-t3"] = {
  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["family"], "2": ["fit"], "3": ["hotels"], "4": ["Carrowniskey"], "5": ["week"],
      "6": ["bay"], "7": ["September"], "8": ["19", "nineteen"], "9": ["30", "thirty"], "10": ["boots"],
      "11|12": ["B", "E"],
      "13": "C", "14": "C", "15": "A",
      "16": "E", "17": "D", "18": "G", "19": "F", "20": "C",
      "21": "B", "22": "A", "23": "A", "24": "B",
      "25": "C", "26": "A", "27": "D", "28": "B", "29": "F", "30": "H",
      "31": ["mud"], "32": ["feathers"], "33": ["shape"], "34": ["moon"], "35": ["neck"],
      "36": ["evidence"], "37": ["destinations"], "38": ["oceans"], "39": ["recovery"], "40": ["atlas"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c17/T3S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Advice on surfing holidays</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Jack's advice</p>" +
              "<ul class='notes'>" +
              "<li>Recommends surfing for <input class='blank' data-q='1'> holidays in the summer</li>" +
              "<li>Need to be quite <input class='blank' data-q='2'></li>" +
              "</ul>" +
              "<p class='sub'>Irish surfing locations</p>" +
              "<ul class='notes'>" +
              "<li>County Clare</li>" +
              "<li>Lahinch has some good quality <input class='blank' data-q='3'> and surf schools</li>" +
              "<li>There are famous cliffs nearby</li>" +
              "<li>County Mayo</li>" +
              "<li>Good surf school at <input class='blank' data-q='4'> beach</li>" +
              "<li>Surf camp lasts for one <input class='blank' data-q='5'></li>" +
              "<li>Can also explore the local <input class='blank' data-q='6'> by kayak</li>" +
              "</ul>" +
              "<p class='sub'>Weather</p>" +
              "<ul class='notes'>" +
              "<li>Best month to go: <input class='blank' data-q='7'></li>" +
              "<li>Average temperature in summer: approx. <input class='blank' data-q='8'> degrees</li>" +
              "</ul>" +
              "<p class='sub'>Costs</p>" +
              "<ul class='notes'>" +
              "<li>Equipment</li>" +
              "<li>Wetsuit and surfboard: <input class='blank' data-q='9'> euros per day</li>" +
              "<li>Also advisable to hire <input class='blank' data-q='10'> for warmth</li>" +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c17/T3S2.mp3",
        blocks: [
          {
            kind: "mc2",
            intro: "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p class='instr'>Which TWO facts are given about the school's extended hours childcare service?</p>",
            groups: [
              { qnums: [11,12], stem: "",
                options: [["A","It started recently."],["B","More children attend after school than before school."],["C","An average of 50 children attend in the mornings."],["D","A child cannot attend both the before and after school sessions."],["E","The maximum number of children who can attend is 70."]] },
            ],
          },
          {
            kind: "mc",
            intro:
              "<p><b>Questions 13-15</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 13, text: "How much does childcare cost for a complete afternoon session per child?",
                options: [["A","£3.50"],["B","£5.70"],["C","£7.20"]] },
              { n: 14, text: "What does the manager say about food?",
                options: [["A","Children with allergies should bring their own food."],["B","Children may bring healthy snacks with them."],["C","Children are given a proper meal at 5 p.m."]] },
              { n: 15, text: "What is different about arrangements in the school holidays?",
                options: [["A","Children from other schools can attend."],["B","Older children can attend."],["C","A greater number of children can attend."]] },
            ],
          },
          {
            kind: "match",
            intro: "<p><b>Questions 16-20</b></p><p class='instr'>What information is given about each of the following activities on offer?</p><p class='instr'>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 16-20.</p>",
            choices: [
              ["A","has limited availability"],
              ["B","is no longer available"],
              ["C","is for over 8s only"],
              ["D","requires help from parents"],
              ["E","involves an additional fee"],
              ["F","is a new activity"],
              ["G","was requested by children"],
            ],
            questions: [
              { n: 16, text: "Spanish" },
              { n: 17, text: "Music" },
              { n: 18, text: "Painting" },
              { n: 19, text: "Yoga" },
              { n: 20, text: "Cooking" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c17/T3S3.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 21-24</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Holly's Work Placement Tutorial</h3>",
            questions: [
              { n: 21, text: "Holly has chosen the Orion Stadium placement because",
                options: [["A","it involves children."],["B","it is outdoors."],["C","it sounds like fun."]] },
              { n: 22, text: "Which aspect of safety does Dr Green emphasise most?",
                options: [["A","ensuring children stay in the stadium"],["B","checking the equipment children will use"],["C","removing obstacles in changing rooms"]] },
              { n: 23, text: "What does Dr Green say about the spectators?",
                options: [["A","They can be hard to manage."],["B","They make useful volunteers."],["C","They shouldn't take photographs."]] },
              { n: 24, text: "What has affected the schedule in the past?",
                options: [["A","bad weather"],["B","an injury"],["C","extra time"]] },
            ],
          },
          {
            kind: "match",
            intro: "<p><b>Questions 25-30</b></p><p class='instr'>What do Holly and her tutor agree is an important aspect of each of the following events management skills?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 25-30.</p>",
            choices: [
              ["A","being flexible"],
              ["B","focusing on details"],
              ["C","having a smart appearance"],
              ["D","hiding your emotions"],
              ["E","relying on experts"],
              ["F","trusting your own views"],
              ["G","doing one thing at a time"],
              ["H","thinking of the future"],
            ],
            questions: [
              { n: 25, text: "Communication" },
              { n: 26, text: "Organisation" },
              { n: 27, text: "Time management" },
              { n: 28, text: "Creativity" },
              { n: 29, text: "Leadership" },
              { n: 30, text: "Networking" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c17/T3S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Bird Migration Theory</h3>" +
              "<p>Most birds are believed to migrate seasonally.</p>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Hibernation theory</p>" +
              "<ul class='notes'>" +
              "<li>It was believed that birds hibernated underwater or buried themselves in <input class='blank' data-q='31'></li>" +
              "<li>This theory was later disproved by experiments on caged birds.</li>" +
              "</ul>" +
              "<p class='sub'>Transmutation theory</p>" +
              "<ul class='notes'>" +
              "<li>Aristotle believed birds changed from one species into another in summer and winter.</li>" +
              "<li>In autumn he observed that redstarts experience the loss of <input class='blank' data-q='32'> ... and thought they then turned into robins.</li>" +
              "<li>Aristotle's assumptions were logical because the two species of birds had a similar <input class='blank' data-q='33'></li>" +
              "</ul>" +
              "<p class='sub'>17th century</p>" +
              "<ul class='notes'>" +
              "<li>Charles Morton popularised the idea that birds fly to the <input class='blank' data-q='34'> in winter.</li>" +
              "</ul>" +
              "<p class='sub'>Scientific developments</p>" +
              "<ul class='notes'>" +
              "<li>In 1822, a stork was killed in Germany which had an African spear in its <input class='blank' data-q='35'></li>" +
              "<li>previously there had been no <input class='blank' data-q='36'> that storks migrate to Africa</li>" +
              "<li>Little was known about the <input class='blank' data-q='37'> and journeys of migrating birds until the practice of ringing was established.</li>" +
              "<li>It was thought large birds carried small birds on some journeys because they were considered incapable of travelling across huge <input class='blank' data-q='38'></li>" +
              "<li>Ringing depended on what is called the <input class='blank' data-q='39'> of dead birds.</li>" +
              "<li>In 1931, the first <input class='blank' data-q='40'> to show the migration of European birds was printed.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
