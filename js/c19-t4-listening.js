/* Cambridge IELTS 19 - Test 4 (Academic) Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c19-t4"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["Kaeden", "kaeden"], "2": ["locker", "lockers"], "3": ["passport"], "4": ["uniform"],
      "5": ["third", "3rd", "3 rd"], "6": ["0412665903"], "7": ["yellow"], "8": ["plastic"], "9": ["ice"], "10": ["gloves"],
      "11|12": ["C", "E"], "13|14": ["A", "D"],
      "15": "A", "16": "B", "17": "C", "18": "A", "19": "C", "20": "B",
      "21": "A", "22": "C", "23": "A", "24": "B", "25": "C", "26": "D", "27": "F", "28": "A", "29": "C", "30": "G",
      "31": ["competition"], "32": ["food"], "33": ["disease"], "34": ["agriculture"], "35": ["maps"],
      "36": ["cattle"], "37": ["speed"], "38": ["monkeys"], "39": ["fishing"], "40": ["flooding"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c19/T4S1.mp3",
        blocks: [
          {
            kind: "fill",
            intro:
              "<p><b>Questions 1-6</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>First day at work</h3>",
            html:
              "<ul class='notes'>" +
              '<li>Name of supervisor: <input class="blank" data-q="1"></li>' +
              '<li>Where to leave coat and bag: use <input class="blank" data-q="2"> in staffroom</li>' +
              '<li>See Tiffany in HR: to give <input class="blank" data-q="3"> number</li>' +
              '<li class="ind">to collect <input class="blank" data-q="4"></li>' +
              '<li>Location of HR office: on <input class="blank" data-q="5"> floor</li>' +
              '<li>Supervisor\'s mobile number: <input class="blank" data-q="6"></li>' +
              "</ul>",
          },
          {
            kind: "fill",
            intro:
              "<p><b>Questions 7-10</b></p><p>Complete the table below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Responsibilities</h3>",
            html:
              "<table class='fill-table'>" +
              "<tr><th>Area</th><th>Task 1</th><th>Task 2</th><th>Notes</th></tr>" +
              '<tr><td>Bakery section</td><td>Check sell-by dates</td><td>Change price labels</td><td>Use <input class="blank" data-q="7"> labels</td></tr>' +
              '<tr><td>Sushi takeaway</td><td>Re-stock with <input class="blank" data-q="8"> boxes if needed</td><td>Wipe preparation area and clean the sink</td><td>Do not clean any knives</td></tr>' +
              '<tr><td>Meat and fish counters</td><td>Clean the serving area, including the weighing scales</td><td>Collect <input class="blank" data-q="9"> for the fish from the cold-room</td><td>Must wear special <input class="blank" data-q="10"></td></tr>' +
              "</table>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c19/T4S2.mp3",
        blocks: [
          {
            kind: "mc2",
            intro:
              "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>" +
              "<p>Which TWO problems with some training programmes for new runners does Liz mention?</p>",
            groups: [
              {
                qnums: [11, 12],
                stem: "",
                options: [
                  ["A", "There is a risk of serious injury."],
                  ["B", "They are unsuitable for certain age groups."],
                  ["C", "They are unsuitable for people with health issues."],
                  ["D", "It is difficult to stay motivated."],
                  ["E", "There is a lack of individual support."],
                ],
              },
            ],
          },
          {
            kind: "mc2",
            intro:
              "<p><b>Questions 13 and 14</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>" +
              "<p>Which TWO tips does Liz recommend for new runners?</p>",
            groups: [
              {
                qnums: [13, 14],
                stem: "",
                options: [
                  ["A", "doing two runs a week"],
                  ["B", "running in the evening"],
                  ["C", "going on runs with a friend"],
                  ["D", "listening to music during runs"],
                  ["E", "running very slowly"],
                ],
              },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 15-18</b></p><p>What reason prevented each of the following members of the Compton Park Runners Club from joining until recently?</p>" +
              "<p class='instr'>Write the correct letter, <b>A, B or C</b>, next to Questions 15-18.</p>",
            choices: [
              ["A", "a lack of confidence"],
              ["B", "a dislike of running"],
              ["C", "a lack of time"],
            ],
            questions: [
              { n: 15, text: "Ceri" },
              { n: 16, text: "James" },
              { n: 17, text: "Leo" },
              { n: 18, text: "Mark" },
            ],
          },
          {
            kind: "mc",
            intro:
              "<p><b>Questions 19 and 20</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 19, text: "What does Liz say about running her first marathon?",
                options: [["A","It had always been her ambition."],["B","Her husband persuaded her to do it."],["C","She nearly gave up before the end."]] },
              { n: 20, text: "Liz says new runners should sign up for a race",
                options: [["A","every six months."],["B","within a few weeks of taking up running."],["C","after completing several practice runs."]] },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c19/T4S3.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 21-25</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 21, text: "Kieran thinks the packing advice given by Jane's grandfather is",
                options: [["A","common sense."],["B","hard to follow."],["C","over-protective."]] },
              { n: 22, text: "How does Jane feel about the books her grandfather has given her?",
                options: [["A","They are not worth keeping."],["B","They should go to a collector."],["C","They have sentimental value for her."]] },
              { n: 23, text: "Jane and Kieran agree that hardback books should be",
                options: [["A","put out on display."],["B","given as gifts to visitors."],["C","more attractively designed."]] },
              { n: 24, text: "While talking about taking a book from a shelf, Jane",
                options: [["A","describes the mistakes other people make doing it."],["B","reflects on a significant childhood experience."],["C","explains why some books are easier to remove than others."]] },
              { n: 25, text: "What do Jane and Kieran suggest about new books?",
                options: [["A","Their parents liked buying them as presents."],["B","They would like to buy more of them."],["C","Not everyone can afford them."]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 26-30</b></p><p>Where does Jane's grandfather keep each of the following types of books in his shop?</p>" +
              "<p class='instr'>Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A-G</b>, next to Questions 26-30.</p>",
            choices: [
              ["A", "near the entrance"], ["B", "in the attic"], ["C", "at the back of the shop"],
              ["D", "on a high shelf"], ["E", "near the stairs"], ["F", "in a specially designed space"], ["G", "within the cafe"],
            ],
            questions: [
              { n: 26, text: "rare books" },
              { n: 27, text: "children's books" },
              { n: 28, text: "unwanted books" },
              { n: 29, text: "requested books" },
              { n: 30, text: "coursebooks" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c19/T4S4.mp3",
        blocks: [
          {
            kind: "fill",
            intro:
              "<p><b>Questions 31-40</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Tree planting</h3>",
            html:
              "<p class='sub'>Reforestation projects should:</p>" +
              "<ul class='notes'>" +
              "<li>include a range of tree species</li>" +
              '<li>not include invasive species because of possible <input class="blank" data-q="31"> with native species</li>' +
              '<li>aim to capture carbon, protect the environment and provide sustainable sources of <input class="blank" data-q="32"> for local people</li>' +
              '<li>use tree seeds with a high genetic diversity to increase resistance to <input class="blank" data-q="33"> and climate change</li>' +
              '<li>plant trees on previously forested land which is in a bad condition, not select land which is being used for <input class="blank" data-q="34"></li>' +
              "</ul>" +
              "<p class='sub'>Large-scale reforestation projects</p>" +
              "<ul class='notes'>" +
              '<li>Base planning decisions on information from accurate <input class="blank" data-q="35"></li>' +
              '<li>Drones are useful for identifying areas in Brazil which are endangered by keeping <input class="blank" data-q="36"> and illegal logging.</li>' +
              "</ul>" +
              "<p class='sub'>Lampang Province, Northern Thailand</p>" +
              "<ul class='notes'>" +
              "<li>A forest was restored in an area damaged by mining.</li>" +
              "<li>A variety of native fig trees were planted, which are important for supporting many wildlife species</li>" +
              '<li>increasing the <input class="blank" data-q="37"> of recovery by attracting animals and birds, e.g., <input class="blank" data-q="38"> were soon attracted to the area.</li>' +
              "</ul>" +
              "<p class='sub'>Involving local communities</p>" +
              "<ul class='notes'>" +
              '<li>Destruction of mangrove forests in Madagascar made it difficult for people to make a living from <input class="blank" data-q="39"></li>' +
              "<li>The mangrove reforestation project: provided employment for local people; restored a healthy ecosystem;</li>" +
              '<li>protects against the higher risk of <input class="blank" data-q="40"></li>' +
              "</ul>",
          },
        ],
      },
    ],
  },
};
