/* Cambridge IELTS 19 - Test 1 (Academic) 数据
 * 由扫描版 PDF 经 OCR 整理，个别拼写/标点可能需校对。 */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c19-t1"] = {
  /* ---------------- LISTENING ---------------- */
  listening: {
    minutes: 30,
    answers: {
      "1": ["69", "sixty-nine", "sixty nine"], "2": ["stream"], "3": ["data"], "4": ["map"],
      "5": ["visitors"], "6": ["sounds"], "7": ["freedom"], "8": ["skills"],
      "9": ["4.95", "£4.95"], "10": ["leaders"],
      "11": "B", "12": "A", "13": "B", "14": "C", "15": "A",
      "16": "G", "17": "C", "18": "B", "19": "D", "20": "A",
      "21|22": ["B", "D"], "23|24": ["A", "E"],
      "25": "D", "26": "G", "27": "C", "28": "B", "29": "F", "30": "H",
      "31": ["walls"], "32": ["son"], "33": ["fuel"], "34": ["oxygen"],
      "35": ["rectangular"], "36": ["lamps"], "37": ["family"], "38": ["winter"],
      "39": ["soil"], "40": ["rain"],
    },
    parts: [
      {
        part: 1,
        title: "Questions 1-10",
        audio: "audio/c19/T1S1.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Questions 1-10</b></p><p>Complete the notes below.</p>" +
              "<p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p>" +
              "<h3>Hinchingbrooke Country Park</h3>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>The park</p>" +
              "<ul class='notes'>" +
              '<li>Area: <input class="blank" data-q="1"> hectares</li>' +
              "<li>Habitats: wetland, grassland and woodland</li>" +
              '<li>Wetland: lakes, ponds and a <input class="blank" data-q="2"></li>' +
              "<li>Wildlife includes birds, insects and animals</li>" +
              "</ul>" +
              "<p class='sub'>Subjects studied in educational visits include</p>" +
              "<ul class='notes'>" +
              '<li>Science: children look at <input class="blank" data-q="3"> about plants, etc.</li>' +
              '<li>Geography: includes learning to use a <input class="blank" data-q="4"> and compass</li>' +
              "<li>History: changes in land use</li>" +
              '<li>Leisure and tourism: mostly concentrates on the park\'s <input class="blank" data-q="5"></li>' +
              '<li>Music: children make <input class="blank" data-q="6"> with natural materials, and experiment with rhythm and speed.</li>' +
              "</ul>" +
              "<p class='sub'>Benefits of outdoor educational visits</p>" +
              "<ul class='notes'>" +
              '<li>They give children a feeling of <input class="blank" data-q="7"> that they may not have elsewhere.</li>' +
              '<li>Children learn new <input class="blank" data-q="8"> and gain self-confidence.</li>' +
              "</ul>" +
              "<p class='sub'>Practical issues</p>" +
              "<ul class='notes'>" +
              '<li>Cost per child: £<input class="blank" data-q="9"></li>' +
              '<li>Adults, such as <input class="blank" data-q="10">, free</li>' +
              "</ul>",
          },
        ],
      },
      {
        part: 2,
        title: "Questions 11-20",
        audio: "audio/c19/T1S2.mp3",
        blocks: [
          {
            kind: "mc",
            intro:
              "<p><b>Questions 11-15</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Stanthorpe Twinning Association</h3>",
            questions: [
              { n: 11, text: "During the visit to Malatte, in France, members especially enjoyed",
                options: [["A","going to a theme park."],["B","experiencing a river trip."],["C","visiting a cheese factory."]] },
              { n: 12, text: "What will happen in Stanthorpe to mark the 25th anniversary of the Twinning Association?",
                options: [["A","A tree will be planted."],["B","A garden seat will be bought."],["C","A footbridge will be built."]] },
              { n: 13, text: "Which event raised most funds this year?",
                options: [["A","the film show"],["B","the pancake evening"],["C","the cookery demonstration"]] },
              { n: 14, text: "For the first evening with the French visitors, host families are advised to",
                options: [["A","take them for a walk round the town."],["B","go to a local restaurant."],["C","have a meal at home."]] },
              { n: 15, text: "On Saturday evening there will be the chance to",
                options: [["A","listen to a concert."],["B","watch a match."],["C","take part in a competition."]] },
            ],
          },
          {
            kind: "match",
            intro:
              "<p><b>Questions 16-20</b></p><p>Label the map below.</p>" +
              "<p class='instr'>Write the correct letter, <b>A-H</b>, next to Questions 16-20.</p>" +
              "<h3>Farley House</h3>" +
              "<p class='instr'>Map labels: A-H (House, Lakes, Old stables, Car park, etc.) — map image not reproduced.</p>",
            choices: ["A", "B", "C", "D", "E", "F", "G", "H"],
            questions: [
              { n: 16, text: "Farm shop" },
              { n: 17, text: "Disabled entry" },
              { n: 18, text: "Adventure playground" },
              { n: 19, text: "Kitchen gardens" },
              { n: 20, text: "The Temple of the Four Winds" },
            ],
          },
        ],
      },
      {
        part: 3,
        title: "Questions 21-30",
        audio: "audio/c19/T1S3.mp3",
        blocks: [
          { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO things did Colin find most satisfying about his bread reuse project?</p>",
            groups: [ { qnums: [21,22], stem: "",
              options: [["A","receiving support from local restaurants"],["B","finding a good way to prevent waste"],["C","overcoming problems in a basic process"],["D","experimenting with designs and colours"],["E","learning how to apply 3-D printing"]] } ] },
          { kind: "mc2", intro: "<p><b>Questions 23 and 24</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p>Which TWO ways do the students agree that touch-sensitive sensors for food labels could be developed in future?</p>",
            groups: [ { qnums: [23,24], stem: "",
              options: [["A","for use on medical products"],["B","to show that food is no longer fit to eat"],["C","for use with drinks as well as foods"],["D","to provide applications for blind people"],["E","to indicate the weight of certain foods"]] } ] },
          {
            kind: "match",
            intro:
              "<p><b>Questions 25-30</b></p><p>What is the students' opinion about each of the following food trends?</p><p class='instr'>Choose <b>SIX</b> answers from the box and write the correct letter, <b>A-H</b>, next to Questions 25-30.</p>",
            choices: [
              ["A", "This is only relevant to young people."],
              ["B", "This may have disappointing results."],
              ["C", "This already seems to be widespread."],
              ["D", "Retailers should do more to encourage this."],
              ["E", "More financial support is needed for this."],
              ["F", "Most people know little about this."],
              ["G", "There should be stricter regulations about this."],
              ["H", "This could be dangerous."],
            ],
            questions: [
              { n: 25, text: "Use of local products" },
              { n: 26, text: "Reduction in unnecessary packaging" },
              { n: 27, text: "Gluten-free and lactose-free food" },
              { n: 28, text: "Use of branded products related to celebrity chefs" },
              { n: 29, text: "Development of 'ghost kitchens' for takeaway food" },
              { n: 30, text: "Use of mushrooms for common health concerns" },
            ],
          },
        ],
      },
      {
        part: 4,
        title: "Questions 31-40",
        audio: "audio/c19/T1S4.mp3",
        blocks: [
          {
            kind: "html",
            html:
              "<p><b>Complete the notes below.</b></p>" +
              "<p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p>" +
              "<h3>Céide Fields</h3>" +
              "<p>an important Neolithic archaeological site in the northwest of Ireland</p>",
          },
          {
            kind: "fill",
            html:
              "<p class='sub'>Discovery</p>" +
              "<ul class='notes'>" +
              '<li>In the 1930s, a local teacher realised that stones beneath the bog surface were once <input class="blank" data-q="31"></li>' +
              '<li>His <input class="blank" data-q="32"> became an archaeologist and undertook an investigation of the site:</li>' +
              '<li class="sub2">a traditional method used by local people to dig for <input class="blank" data-q="33"> was used to identify where stones were located</li>' +
              '<li class="sub2">carbon dating later proved the site was Neolithic.</li>' +
              '<li>Items are well preserved in the bog because of a lack of <input class="blank" data-q="34"></li>' +
              "</ul>" +
              "<p class='sub'>Neolithic farmers</p>" +
              "<ul class='notes'>" +
              '<li>Houses were <input class="blank" data-q="35"> in shape and had a hole in the roof.</li>' +
              "<li>Neolithic innovations include:</li>" +
              '<li class="sub2">cooking indoors</li>' +
              '<li class="sub2">pots used for storage and to make <input class="blank" data-q="36"></li>' +
              '<li>Each field at Céide was large enough to support a big <input class="blank" data-q="37"></li>' +
              '<li>evidence of structures to house them during <input class="blank" data-q="38"></li>' +
              "</ul>" +
              "<p class='sub'>Reasons for the decline in farming</p>" +
              "<ul class='notes'>" +
              '<li>a decline in <input class="blank" data-q="39"> quality</li>' +
              '<li>an increase in <input class="blank" data-q="40"></li>' +
              "</ul>",
          },
        ],
      },
    ],
  },
};
