/* Cambridge IELTS 21 - Test 3 (Academic) Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c21-t3"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["northern"], "2": ["week"], "3": ["250", "two hundred and fifty"], "4": ["voucher"],
      "5": ["window"], "6": ["books"], "7": ["blanket"], "8": ["dolphins"], "9": ["drum"], "10": ["italian"],
      "11|12": ["C", "E"], "13|14": ["B", "E"],
      "15": "B", "16": "C",
      "17": "F", "18": "A", "19": "B", "20": "D",
      "21|22": ["B", "D"], "23|24": ["D", "E"],
      "25": "G", "26": "B", "27": "F", "28": "A", "29": "H", "30": "D",
      "31": ["disease"], "32": ["ecosystem"], "33": ["holiday", "holidays"], "34": ["pets"],
      "35": ["sugar"], "36": ["light"], "37": ["virus"], "38": ["behaviour", "behavior"],
      "39": ["database"], "40": ["photograph"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c21/T3S1.mp3",
        blocks: [
          {
            kind: "fill",
            intro:
              "<p><b>Questions 1-10</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Ferry to Shetland Islands</h3>",
            html:
              "<ul class='notes'>" +
              "<li>Name of ferry company: <input class='blank' data-q='1'> Ferries</li>" +
              "<li>Ferries depart seven times per <input class='blank' data-q='2'> in summer</li>" +
              "<li>Cost for four people with car: a little less than £<input class='blank' data-q='3'></li>" +
              "<li>Cancellation policy: receive a <input class='blank' data-q='4'> (if cancelled a month in advance)</li>" +
              "</ul>" +
              "<p class='sub'>Advice</p>" +
              "<ul class='notes'>" +
              "<li>Cabins: book one with a <input class='blank' data-q='5'>; luxury cabins have a TV</li>" +
              "<li>Bring snacks and <input class='blank' data-q='6'> for the children</li>" +
              "<li>A <input class='blank' data-q='7'> is required for the dog kennels</li>" +
              "<li>Try to see <input class='blank' data-q='8'> in the morning</li>" +
              "<li>If time, visit <input class='blank' data-q='9'> Castle</li>" +
              "<li>The <input class='blank' data-q='10'> restaurant in a nearby village is recommended</li>" +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c21/T3S2.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 11 and 12</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO explanations for the popularity of street food are given?</p>",
            groups: [ { qnums: [11,12], stem: "",
              options: [["A","low price"],["B","locally sourced"],["C","freshly made"],["D","convenience"],["E","unusual food"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 13 and 14</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO places are recommended for new street food businesses?</p>",
            groups: [ { qnums: [13,14], stem: "",
              options: [["A","music festivals"],["B","food markets"],["C","weddings"],["D","parties"],["E","parks"]] } ] },
          {
            kind: "mc",
            intro: "<p><b>Questions 15-16</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p>",
            questions: [
              { n: 15, text: "What does the speaker say about getting equipment for a street food business?",
                options: [["A","High quality equipment is a good investment."],["B","It's best to buy second-hand equipment."],["C","Renting equipment can be cheap."]] },
              { n: 16, text: "What advice is given about creating a product for a street food business?",
                options: [["A","Provide information about the ingredients."],["B","It is important to have an original product."],["C","The presentation is an important factor."]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 17-20</b></p><p>What problem did the owners of each of the following street food businesses experience?</p>" +
              "<p class='instr'>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A-F</b>, next to Questions 17-20.</p>",
            choices: [
              ["A","Some ingredients were too expensive."],
              ["B","The meals took a long time to prepare."],
              ["C","They had no money for marketing."],
              ["D","It was difficult to get a permit to sell food."],
              ["E","A competitor was selling similar food in their area."],
              ["F","They worked very long hours."],
            ],
            questions: [
              { n: 17, text: "Thai Basil" },
              { n: 18, text: "Basque" },
              { n: 19, text: "Lou's kitchen" },
              { n: 20, text: "Chip Chop" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c21/T3S3.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO points do the speakers make about the terms 'ethical' and 'sustainable' fashion?</p>",
            groups: [ { qnums: [21,22], stem: "",
              options: [["A","Their definitions keep changing."],["B","People think they mean the same thing."],["C","The term 'eco-friendly' is preferable."],["D","They are often used imprecisely."],["E","Companies should avoid using them on clothing labels."]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO claims about wool production do the speakers disagree with?</p>",
            groups: [ { qnums: [23,24], stem: "",
              options: [["A","Sheep are generally well-treated."],["B","Wool is easy to recycle."],["C","Wool is a long-lasting fabric."],["D","Wool production involves few chemicals."],["E","Sheep do less environmental damage than other livestock."]] } ] },
          {
            kind: "match",
            intro:
              "<p><b>Questions 25-30</b></p><p>What comment do the speakers make about each of the following semi-synthetic fabrics?</p>" +
              "<p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 25-30.</p>",
            choices: [
              ["A","The production process is fuel efficient."],
              ["B","It is the least sustainable of alternative fabrics."],
              ["C","Production costs are high."],
              ["D","It provides additional health benefits."],
              ["E","It is not durable in the long-term."],
              ["F","It needs to be produced in a certain way to be sustainable."],
              ["G","Chemicals required for production can be reused."],
              ["H","This is from a wholly sustainable source."],
            ],
            questions: [
              { n: 25, text: "Lyocell" },
              { n: 26, text: "Cupro" },
              { n: 27, text: "Bamboo" },
              { n: 28, text: "EcoVero" },
              { n: 29, text: "Cork" },
              { n: 30, text: "Hemp" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c21/T3S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Invasive species</h3>" +
              "<p class='sub'>Definition: an animal or plant that causes harm to an environment after being introduced by humans</p>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>An invasive species can be a problem when it:</p>" +
              "<ul class='notes'>" +
              "<li>eats native species.</li>" +
              "<li>introduces a new <input class='blank' data-q='31'>.</li>" +
              "<li>takes food from native species.</li>" +
              "<li>threatens an entire <input class='blank' data-q='32'>.</li>" +
              "</ul>" +
              "<p class='sub'>How invasive species spread</p>" +
              "<ul class='notes'>" +
              "<li>accidentally e.g. via people returning from their <input class='blank' data-q='33'> or on cargo ships</li>" +
              "<li>intentionally e.g. for pest control, or as <input class='blank' data-q='34'></li>" +
              "</ul>" +
              "<p class='sub'>Examples of invasive species</p>" +
              "<ul class='notes'>" +
              "<li><b>Rhinella marina (toads)</b></li>" +
              "<li>were introduced to Australia from Hawaii in 1935 to eat a type of insect that was damaging the <input class='blank' data-q='35'> plantations.</li>" +
              "<li>failed to solve the problem and became widespread in the north of Australia.</li>" +
              "<li>are poisonous for any species that eats them and reduce the food available for native frogs.</li>" +
              "<li><b>Japanese knotweed</b> plants were popular among 19th-century gardeners in the UK.</li>" +
              "<li><b>Rhododendron</b> plants prevent <input class='blank' data-q='36'> from reaching native plants.</li>" +
              "<li><b>Grey squirrels</b> from N. America reduce sources of food for the UK's native red squirrels and spread a <input class='blank' data-q='37'> that kills red squirrels.</li>" +
              "</ul>" +
              "<p class='sub'>Tackling invasive species</p>" +
              "<ul class='notes'>" +
              "<li>Monitoring helps us to understand the <input class='blank' data-q='38'> of invasive species and the impact they have.</li>" +
              "<li>Setting up a national <input class='blank' data-q='39'> makes it easier to track them.</li>" +
              "<li>Asking the public to <input class='blank' data-q='40'> and report them helps with monitoring.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
