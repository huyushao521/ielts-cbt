/* Cambridge IELTS 18 - Test 3 Listening */
window.IELTS_DATA_MAP["c18-t3"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["Marrowfield"], "2": ["relative"], "3": ["socialise", "socialize"], "4": ["full"],
      "5": ["Domestic Life"], "6": ["clouds"], "7": ["timing"], "8": ["Animal Magic"],
      "9": ["animal movement", "movement"], "10": ["dark"],
      "11|12": ["B", "C"], "13|14": ["B", "D"],
      "15": "C", "16": "B", "17": "B", "18": "C", "19": "A", "20": "A",
      "21|22": ["A", "E"], "23|24": ["B", "D"],
      "25": "G", "26": "E", "27": "B", "28": "C", "29": "F", "30": "A",
      "31": ["technical"], "32": ["cheap"], "33": ["thousands"], "34": ["identification"],
      "35": ["tracking"], "36": ["military"], "37": ["location"], "38": ["prediction"],
      "39": ["database"], "40": ["trust"],
    },
    parts: [
      {
        part: 1, title: "Questions 1-10", audio: "audio/c18/T3S1.mp3",
        blocks: [
          { kind: "html", html: "<h3>Wayside Camera Club — membership form</h3><p><b>Questions 1-4</b></p><p class='instr'>Complete the form below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" },
          { kind: "fill", html:
              "<ul class='notes'>" +
              "<li>Name: Dan Green</li>" +
              "<li>Email address: dan1068@market.com</li>" +
              "<li>Home address: 52 <input class='blank' data-q='1'> Street, Peacetown</li>" +
              "<li>Heard about us: from a <input class='blank' data-q='2'></li>" +
              "<li>Reasons for joining: to enter competitions</li>" +
              "<li class='sub2'>to <input class='blank' data-q='3'></li>" +
              "<li>Type of membership: <input class='blank' data-q='4'> membership (£30)</li>" +
              "</ul>",
          },
          { kind: "html", html: "<p><b>Questions 5-10</b></p><p class='instr'>Complete the table below. Write <b>NO MORE THAN TWO WORDS</b> for each answer.</p><h3>Photography competitions</h3>" },
          { kind: "fill", html:
              '<table class="fill-table">' +
              "<tr><th>Title of competition</th><th>Instructions</th><th>Feedback to Dan</th></tr>" +
              "<tr>" +
              '<td><input class="blank" data-q="5"></td>' +
              "<td>A scene in the home</td>" +
              "<td>The picture's composition was not good.</td>" +
              "</tr>" +
              "<tr>" +
              "<td>'Beautiful Sunsets'</td>" +
              '<td>Scene must show some <input class="blank" data-q="6"></td>' +
              '<td>The <input class="blank" data-q="7"> was wrong.</td>' +
              "</tr>" +
              "<tr>" +
              '<td><input class="blank" data-q="8"></td>' +
              '<td>Scene must show <input class="blank" data-q="9"></td>' +
              '<td>The photograph was too <input class="blank" data-q="10"></td>' +
              "</tr>" +
              "</table>",
          },
        ],
      },
      {
        part: 2, title: "Questions 11-20", audio: "audio/c18/T3S2.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO warnings does Dan give about picking mushrooms?</p>",
            groups: [{ qnums: [11,12], stem: "",
              options: [["A","Don't pick more than one variety of mushroom at a time."],["B","Don't pick mushrooms near busy roads."],["C","Don't eat mushrooms given to you."],["D","Don't eat mushrooms while picking them."],["E","Don't pick old mushrooms."]] }] },
          { kind: "mc2", intro: "<p><b>Questions 13 and 14</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO ideas about wild mushrooms does Dan say are correct?</p>",
            groups: [{ qnums: [13,14], stem: "",
              options: [["A","Mushrooms should always be peeled before eating."],["B","Mushrooms eaten by animals may be unsafe."],["C","Cooking destroys toxins in mushrooms."],["D","Brightly coloured mushrooms can be edible."],["E","All poisonous mushrooms have a bad smell."]] }] },
          { kind: "mc", intro: "<p><b>Questions 15-20</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 15, text: "What advice does Dan give about picking mushrooms in parks?",
                options: [["A","Choose wooded areas."],["B","Don't disturb wildlife."],["C","Get there early."]] },
              { n: 16, text: "Dan says it is a good idea for beginners to",
                options: [["A","use a mushroom app."],["B","join a group."],["C","take a reference book."]] },
              { n: 17, text: "What does Dan say is important for conservation?",
                options: [["A","selecting only fully grown mushrooms"],["B","picking a limited amount of mushrooms"],["C","avoiding areas where rare mushroom species grow"]] },
              { n: 18, text: "According to Dan, some varieties of wild mushrooms are in decline because there is",
                options: [["A","a huge demand for them from restaurants."],["B","a lack of rain in this part of the country."],["C","a rise in building developments locally."]] },
              { n: 19, text: "Dan says that when storing mushrooms, people should",
                options: [["A","keep them in the fridge for no more than two days."],["B","keep them in a brown bag in a dark room."],["C","leave them for a period after washing them."]] },
              { n: 20, text: "What does Dan say about trying new varieties of mushrooms?",
                options: [["A","Experiment with different recipes."],["B","Expect some to have a strong taste."],["C","Cook them for a long time."]] },
            ] },
        ],
      },
      {
        part: 3, title: "Questions 21-30", audio: "audio/c18/T3S3.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO opinions about the Luddites do the students express?</p>",
            groups: [{ qnums: [21,22], stem: "",
              options: [["A","Their actions were ineffective."],["B","They are still influential today."],["C","They have received unfair criticism."],["D","They were proved right."],["E","Their attitude is understandable."]] }] },
          { kind: "mc2", intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO predictions about the future of work are the students doubtful about?</p>",
            groups: [{ qnums: [23,24], stem: "",
              options: [["A","Work will be more rewarding."],["B","Unemployment will fall."],["C","People will want to delay retiring."],["D","Working hours will be shorter."],["E","People will change jobs more frequently."]] }] },
          { kind: "match", intro: "<p><b>Questions 25-30</b></p><p>What comment do the students make about each of the following jobs?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 25-30.</p>",
            choices: [
              ["A","These jobs are likely to be at risk."],
              ["B","Their role has become more interesting in recent years."],
              ["C","The number of people working in this sector has fallen dramatically."],
              ["D","This job will require more qualifications."],
              ["E","Higher disposable income has led to a huge increase in jobs."],
              ["F","There is likely to be a significant rise in demand for this service."],
              ["G","Both employment and productivity have risen."],
            ],
            questions: [
              { n: 25, text: "Accountants" }, { n: 26, text: "Hairdressers" }, { n: 27, text: "Administrative staff" },
              { n: 28, text: "Agricultural workers" }, { n: 29, text: "Care workers" }, { n: 30, text: "Bank clerks" },
            ] },
        ],
      },
      {
        part: 4, title: "Questions 31-40", audio: "audio/c18/T3S4.mp3",
        blocks: [
          { kind: "html", html: "<h3>Space Traffic Management</h3><p class='instr'>Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>" },
          { kind: "fill", html:
              "<p>A Space Traffic Management system</p>" +
              "<ul class='notes'>" +
              "<li>is a concept similar to Air Traffic Control, but for satellites rather than planes.</li>" +
              "<li>would aim to set up legal and <input class='blank' data-q='31'> ways of improving safety.</li>" +
              "<li>does not actually exist at present.</li></ul>" +
              "<p class='sub'>Problems in developing effective Space Traffic Management</p>" +
              "<ul class='notes'>" +
              "<li>Satellites are now quite <input class='blank' data-q='32'> and therefore more widespread (e.g. there are constellations made up of <input class='blank' data-q='33'> of satellites).</li>" +
              "<li>At present, satellites are not required to transmit information to help with their <input class='blank' data-q='34'>.</li>" +
              "<li>There are few systems for <input class='blank' data-q='35'> satellites.</li>" +
              "<li>Small pieces of debris may be difficult to identify.</li>" +
              "<li>Operators may be unwilling to share details of satellites used for <input class='blank' data-q='36'> or commercial reasons.</li>" +
              "<li>It may be hard to collect details of the object's <input class='blank' data-q='37'> at a given time.</li>" +
              "<li>Scientists can only make a <input class='blank' data-q='38'> about where the satellite will go.</li></ul>" +
              "<p class='sub'>Solutions</p>" +
              "<ul class='notes'>" +
              "<li>Common standards should be agreed on for the presentation of information.</li>" +
              "<li>The information should be combined in one <input class='blank' data-q='39'>.</li>" +
              "<li>A coordinated system must be designed to create <input class='blank' data-q='40'> in its users.</li></ul>",
          },
        ],
      },
    ],
  },
};
