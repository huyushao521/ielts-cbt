/* Cambridge IELTS 18 - Test 4 Listening */
window.IELTS_DATA_MAP["c18-t4"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["receptionist"], "2": ["Medical"], "3": ["Chastons"], "4": ["appointments"],
      "5": ["database"], "6": ["experience"], "7": ["confident"], "8": ["temporary"],
      "9": ["1.15", "1:15"], "10": ["parking"],
      "11": "B", "12": "A", "13": "A", "14": "C",
      "15": "F", "16": "G", "17": "E", "18": "A", "19": "C", "20": "B",
      "21|22": ["B", "D"],
      "23": "D", "24": "A", "25": "C", "26": "G", "27": "F",
      "28": "A", "29": "B", "30": "C",
      "31": ["plot"], "32": ["poverty"], "33": ["Europe"], "34": ["poetry"],
      "35": ["drawings"], "36": ["furniture"], "37": ["lamps"], "38": ["harbour", "harbor"],
      "39": ["children"], "40": ["relatives"],
    },
    parts: [
      {
        part: 1, title: "Questions 1-10", audio: "audio/c18/T4S1.mp3",
        blocks: [
          { kind: "html", html: "<h3>Job details from employment agency</h3><p class='instr'>Complete the notes below. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" },
          { kind: "fill", html:
              '<table class="fill-table">' +
              "<tr><th>Role</th><th>Location</th></tr>" +
              "<tr>" +
              '<td><input class="blank" data-q="1"></td>' +
              '<td>Fordham <input class="blank" data-q="2"> Centre</td>' +
              "</tr>" +
              "<tr><td></td>" +
              '<td><input class="blank" data-q="3"> Road, Fordham</td>' +
              "</tr></table>" +
              "<p class='sub'>Work involves</p>" +
              "<ul class='notes'>" +
              "<li>dealing with enquiries</li>" +
              '<li>making <input class="blank" data-q="4"> and reorganising them</li>' +
              '<li>maintaining the internal <input class="blank" data-q="5"></li>' +
              "<li>general administration</li></ul>" +
              "<p class='sub'>Requirements</p>" +
              "<ul class='notes'>" +
              '<li><input class="blank" data-q="6"> (essential)</li>' +
              '<li>a calm and <input class="blank" data-q="7"> manner</li>' +
              "<li>good IT skills</li></ul>" +
              "<p class='sub'>Other information</p>" +
              "<ul class='notes'>" +
              '<li>a <input class="blank" data-q="8"> job — further opportunities may be available</li>' +
              '<li>hours: 7.45 a.m. to <input class="blank" data-q="9"> p.m. Monday to Friday</li>' +
              '<li><input class="blank" data-q="10"> is available onsite</li></ul>',
          },
        ],
      },
      {
        part: 2, title: "Questions 11-20", audio: "audio/c18/T4S2.mp3",
        blocks: [
          { kind: "mc", intro: "<p><b>Questions 11-14</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 11, text: "The museum building was originally",
                options: [["A","a factory."],["B","a private home."],["C","a hall of residence."]] },
              { n: 12, text: "The university uses part of the museum building as",
                options: [["A","teaching rooms."],["B","a research library."],["C","administration offices."]] },
              { n: 13, text: "What does the guide say about the entrance fee?",
                options: [["A","Visitors decide whether or not they wish to pay."],["B","Only children and students receive a discount."],["C","The museum charges extra for special exhibitions."]] },
              { n: 14, text: "What are visitors advised to leave in the cloakroom?",
                options: [["A","cameras"],["B","coats"],["C","bags"]] },
            ] },
          { kind: "match", intro: "<p><b>Questions 15-20</b></p><p>What information does the speaker give about each of the following areas of the museum?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 15-20.</p>",
            choices: [
              ["A","Parents must supervise their children."],
              ["B","There are new things to see."],
              ["C","It is closed today."],
              ["D","This is only for school groups."],
              ["E","There is a quiz for visitors."],
              ["F","It features something created by students."],
              ["G","An expert is here today."],
              ["H","There is a one-way system."],
            ],
            questions: [
              { n: 15, text: "Four Seasons" }, { n: 16, text: "Farmhouse Kitchen" }, { n: 17, text: "A Year on the Farm" },
              { n: 18, text: "Wagon Walk" }, { n: 19, text: "Bees are Magic" }, { n: 20, text: "The Pond" },
            ] },
        ],
      },
      {
        part: 3, title: "Questions 21-30", audio: "audio/c18/T4S3.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO educational skills were shown in the video of children doing origami?</p>",
            groups: [{ qnums: [21,22], stem: "",
              options: [["A","solving problems"],["B","following instructions"],["C","working cooperatively"],["D","learning through play"],["E","developing hand-eye coordination"]] }] },
          { kind: "match", intro: "<p><b>Questions 23-27</b></p><p>Which comment do the students make about each of the following children in the video?</p><p class='instr'>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 23-27.</p>",
            choices: [
              ["A","demonstrated independence"],["B","asked for teacher support"],["C","developed a competitive attitude"],
              ["D","seemed to find the activity calming"],["E","seemed pleased with the results"],["F","seemed confused"],
              ["G","seemed to find the activity easy"],
            ],
            questions: [
              { n: 23, text: "Sid" }, { n: 24, text: "Jack" }, { n: 25, text: "Naomi" },
              { n: 26, text: "Anya" }, { n: 27, text: "Zara" },
            ] },
          { kind: "mc", intro: "<p><b>Questions 28-30</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 28, text: "Before starting an origami activity in class, the students think it is important for the teacher to",
                options: [["A","make models that demonstrate the different stages."],["B","check children understand the terminology involved."],["C","tell children not to worry if they find the activity difficult."]] },
              { n: 29, text: "The students agree that some teachers might be unwilling to use origami in class because",
                options: [["A","they may not think that crafts are important."],["B","they may not have the necessary skills."],["C","they may worry that it will take up too much time."]] },
              { n: 30, text: "Why do the students decide to use origami in their maths teaching practice?",
                options: [["A","to correct a particular misunderstanding"],["B","to set a challenge"],["C","to introduce a new concept"]] },
            ] },
        ],
      },
      {
        part: 4, title: "Questions 31-40", audio: "audio/c18/T4S4.mp3",
        blocks: [
          { kind: "html", html: "<h3>Victor Hugo</h3><p class='instr'>Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>" },
          { kind: "fill", html:
              "<p class='sub'>His novel, Les Misérables</p>" +
              "<ul class='notes'>" +
              "<li>It has been adapted for theatre and cinema.</li>" +
              '<li>We know more about its overall <input class="blank" data-q="31"> than about its author.</li></ul>' +
              "<p class='sub'>His early career</p>" +
              "<ul class='notes'>" +
              "<li>In Paris, his career was successful and he led the Romantic movement.</li>" +
              '<li>He spoke publicly about social issues, such as <input class="blank" data-q="32"> and education.</li>' +
              "<li>Napoleon III disliked his views and exiled him.</li></ul>" +
              "<p class='sub'>His exile from France</p>" +
              "<ul class='notes'>" +
              '<li>Victor Hugo had to live elsewhere in <input class="blank" data-q="33">.</li>' +
              '<li>He used his income from the sale of some <input class="blank" data-q="34"> he had written to buy a house on Guernsey.</li></ul>' +
              "<p class='sub'>His house on Guernsey</p>" +
              "<ul class='notes'>" +
              "<li>Victor Hugo lived in this house until the end of the Empire in France.</li>" +
              '<li>The ground floor contains portraits, <input class="blank" data-q="35"> and tapestries that he valued.</li>' +
              '<li>He bought cheap <input class="blank" data-q="36"> made of wood and turned this into beautiful wall carvings.</li>' +
              '<li>The first floor consists of furnished areas with wallpaper and <input class="blank" data-q="37"> that have a Chinese design.</li>' +
              "<li>The library still contains many of his favourite books.</li>" +
              '<li>He wrote in a room at the top of the house that had a view of the <input class="blank" data-q="38">.</li>' +
              '<li>He entertained other writers as well as poor <input class="blank" data-q="39"> in his house.</li>' +
              '<li>Victor Hugo\'s <input class="blank" data-q="40"> gave ownership of the house to the city of Paris in 1927.</li></ul>',
          },
        ],
      },
    ],
  },
};
