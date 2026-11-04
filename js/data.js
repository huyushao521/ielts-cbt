/* Cambridge IELTS 20 - Test 1 (Academic) 数据
 * 由扫描版 PDF 经 OCR 整理，个别拼写/标点可能需校对。 */
window.IELTS_DATA = {
  meta: {
    book: "Cambridge IELTS 20",
    test: "Test 1",
    module: "Academic",
    sections: ["Listening", "Reading", "Writing", "Speaking"],
  },

  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["fish"], "2": ["roof"], "3": ["spanish"], "4": ["vegetarian"],
      "5": ["audley"], "6": ["hotel"], "7": ["reviews"], "8": ["local"],
      "9": ["30", "thirty", "f30"], "10": ["average"],
      "11": "A", "12": "B", "13": "C", "14": "A", "15": "B", "16": "C",
      "17|18": ["A", "E"], "19|20": ["C", "E"],
      "21|22": ["C", "E"], "23|24": ["A", "C"], "25|26": ["A", "B"],
      "27": "A", "28": "B", "29": "A", "30": "C",
      "31": ["factories"], "32": ["dead"], "33": ["whale"], "34": ["apartments"],
      "35": ["park"], "36": ["art"], "37": ["beaches"], "38": ["ferry"],
      "39": ["bikes"], "40": ["drone"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/T1S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the table below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>",
          },
          {
            kind: "fill",
            html:
              '<table class="fill-table">' +
              "<tr><th>Name of<br>restaurant</th><th>Reason for<br>recommendation</th><th>Location</th><th>Other comments</th></tr>" +
              "<tr>" +
              "<td>The Junction</td>" +
              '<td>Good for people who are especially keen on <input class="blank" data-q="1"></td>' +
              "<td>Greyson Street,<br>near the station</td>" +
              '<td>Quite expensive; the <input class="blank" data-q="2"> is a good place for a drink</td>' +
              "</tr>" +
              "<tr>" +
              "<td>Paloma</td>" +
              '<td>Serves <input class="blank" data-q="3"> food, good for sharing</td>' +
              "<td>In Bow Street,<br>next to the cinema</td>" +
              '<td>Staff are very friendly; need to pay £50 deposit; limited selection of <input class="blank" data-q="4"> dishes</td>' +
              "</tr>" +
              "<tr>" +
              '<td>The <input class="blank" data-q="5"></td>' +
              '<td>Famous chef; set lunch costs <input class="blank" data-q="9"> per person</td>' +
              '<td>In a <input class="blank" data-q="6"> near Baxter Bridge, on the top floor</td>' +
              '<td>Excellent <input class="blank" data-q="7">; uses <input class="blank" data-q="8"> products; portions of <input class="blank" data-q="10"> size</td>' +
              "</tr></table>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/T1S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-16</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 11, text: "Heather says pottery differs from other art forms because",
                options: [["A","it lasts longer in the ground."],["B","it is practised by more people."],["C","it can be repaired more easily."]] },
              { n: 12, text: "Archaeologists sometimes identify the use of ancient pottery from",
                options: [["A","the clay it was made with."],["B","the marks that are on it."],["C","the basic shape of it."]] },
              { n: 13, text: "Some people join Heather's pottery class because they want to",
                options: [["A","create an item that looks very old."],["B","find something that they are good at."],["C","make something that will outlive them."]] },
              { n: 14, text: "What does Heather value most about being a potter?",
                options: [["A","its calming effect"],["B","its messy nature"],["C","its physical benefits"]] },
              { n: 15, text: "Most of the visitors to Edelman Pottery",
                options: [["A","bring friends to join courses."],["B","have never made a pot before."],["C","try to learn techniques too quickly."]] },
              { n: 16, text: "Heather reminds her visitors that they should",
                options: [["A","put on their aprons."],["B","change their clothes."],["C","take off their jewellery."]] },
            ],
          },
          {
            kind: "mc2",
            intro: "",
            groups: [
              { qnums: [17,18], stem: "Which TWO things does Heather explain about kilns?",
                options: [["A","what their function is"],["B","when they were invented"],["C","ways of keeping them safe"],["D","where to put one in your home"],["E","what some people use instead of one"]] },
              { qnums: [19,20], stem: "Which TWO points does Heather make about a potter's tools?",
                options: [["A","Some are hard to hold."],["B","Some are worth buying."],["C","Some are essential items."],["D","Some have memorable names."],["E","Some are available for use by participants."]] },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/T1S3.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>",
            groups: [ { qnums: [21,22], stem: "Which TWO things do the students both believe are responsible for the increase in loneliness?",
              options: [["A","social media"],["B","smaller nuclear families"],["C","urban design"],["D","longer lifespans"],["E","a mobile workforce"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>",
            groups: [ { qnums: [23,24], stem: "Which TWO health effects of loneliness do the students agree have solid evidence?",
              options: [["A","a weakened immune system"],["B","dementia"],["C","cancer"],["D","obesity"],["E","cardiovascular disease"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 25 and 26</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p>",
            groups: [ { qnums: [25,26], stem: "Which TWO opinions do both the students express about the evolutionary theory of loneliness?",
              options: [["A","It has little practical relevance."],["B","It needs further investigation."],["C","It is misleading."],["D","It should be more widely accepted."],["E","It is difficult to understand."]] } ] },
          { kind: "mc", intro: "<p><b>Questions 27-30</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><p><b>Loneliness and mental health</b></p>",
            questions: [
              { n: 27, text: "When comparing loneliness to depression, the students",
                options: [["A","doubt that there will ever be a medical cure for loneliness."],["B","claim that the link between loneliness and mental health is overstated."],["C","express frustration that loneliness is not taken more seriously."]] },
              { n: 28, text: "Why do the students want to include an example from their own experience?",
                options: [["A","to explain how difficult loneliness can be"],["B","to highlight a situation that most students will recognise"],["C","to emphasise that feeling lonely is more common for men than women"]] },
              { n: 29, text: "The students agree that talking to strangers is a good strategy for dealing with loneliness because",
                options: [["A","it creates a sense of belonging."],["B","it builds self-confidence."],["C","it makes people feel more positive."]] },
              { n: 30, text: "The students find it difficult to understand why solitude is considered to be",
                options: [["A","similar to loneliness."],["B","necessary for mental health."],["C","an enjoyable experience."]] },
            ] },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/T1S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Reclaiming urban rivers</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Historical background</p>" +
              "<ul class='notes'>" +
              "<li>Nearly all major cities were built on a river.</li>" +
              "<li>Rivers were traditionally used by city dwellers for transport, fishing and recreation.</li>" +
              "<li>Industrial development and rising populations later led to:</li>" +
              "<li class='sub2'>more sewage from houses being discharged into the river</li>" +
              "<li class='sub2'>pollution from <input class='blank' data-q='31'> on the river bank.</li>" +
              "<li>In 1957, the River Thames in London was declared biologically <input class='blank' data-q='32'>.</li>" +
              "</ul>" +
              "<p class='sub'>Recent improvements</p>" +
              "<ul class='notes'>" +
              "<li>Seals and even a <input class='blank' data-q='33'> have been seen in the River Thames.</li>" +
              "<li>Riverside warehouses are converted to restaurants and <input class='blank' data-q='34'>.</li>" +
              "<li>In Los Angeles, there are plans to:</li>" +
              "<li class='sub2'>build a riverside <input class='blank' data-q='35'></li>" +
              "<li class='sub2'>display <input class='blank' data-q='36'> projects.</li>" +
              "<li>In Paris, <input class='blank' data-q='37'> are created on the sides of the river every summer.</li>" +
              "</ul>" +
              "<p class='sub'>Transport possibilities</p>" +
              "<ul class='notes'>" +
              "<li>Over 2 billion passengers already travel by <input class='blank' data-q='38'> in cities round the world.</li>" +
              "<li>Changes in shopping habits mean the number of deliveries that are made is increasing.</li>" +
              "<li>Instead of road transport, goods could be transported by large freight barges and electric <input class='blank' data-q='39'>, or, in future, by <input class='blank' data-q='40'>.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
