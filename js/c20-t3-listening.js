/* Cambridge IELTS 20 - Test 3 - Listening */
window.IELTS_DATA_MAP = window.IELTS_DATA_MAP || {};
window.IELTS_DATA_MAP["c20-t3"] = {
  listening: {
    minutes: 30,
    answers: {
      "1": ["239"], "2": ["modern"], "3": ["lamp"], "4": ["aaron"], "5": ["damage"],
      "6": ["electronic"], "7": ["insurance"], "8": ["space"], "9": ["app"], "10": ["exchanges"],
      "11": "B", "12": "A", "13": "A", "14": "C", "15": "B", "16": "C",
      "17": "B", "18": "A", "19": "G", "20": "E",
      "21": "B", "22": "A", "23": "C", "24": "A", "25": "C", "26": "B",
      "27": "F", "28": "E", "29": "B", "30": "D",
      "31": ["adaptation"], "32": ["cognitive"], "33": ["desks"], "34": ["taps"],
      "35": ["blue"], "36": ["voice"], "37": ["pregnant"], "38": ["shoulders"],
      "39": ["police"], "40": ["temperature"],
    },
    parts: [
      {
        part: 1, title: "Questions 1-10", audio: "audio/T3S1.mp3",
        blocks: [
          { kind: "html", html: "<p><b>Complete the table below.</b></p><p class='instr'>Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p><h3>Furniture Rental Companies</h3>" },
          { kind: "fill", html:
              '<table class="fill-table">' +
              "<tr><th>Name of<br>company</th><th>Information about<br>costs</th><th>Additional notes</th></tr>" +
              "<tr>" +
              "<td>Peak Rentals</td>" +
              '<td>Prices range from $105 to $<input class="blank" data-q="1"> per room per month</td>' +
              '<td>The furniture is very <input class="blank" data-q="2">. Delivers in 1-2 days. Special offer: free <input class="blank" data-q="3"> with every living room set.</td>' +
              "</tr>" +
              "<tr>" +
              '<td><input class="blank" data-q="4"> and Oliver</td>' +
              "<td>Mid-range prices</td>" +
              '<td>Also offers a cleaning service. 12% monthly fee for <input class="blank" data-q="5">.</td>' +
              "</tr>" +
              "<tr>" +
              "<td>Larch Furniture</td>" +
              '<td>Offers cheapest prices for renting furniture and <input class="blank" data-q="6"> items</td>' +
              '<td>Must have own <input class="blank" data-q="7">. Minimum contract length: six months.</td>' +
              "</tr>" +
              "<tr>" +
              '<td><input class="blank" data-q="8"> Rentals</td>' +
              '<td>See the <input class="blank" data-q="9"> for the most up-to-date prices</td>' +
              '<td><input class="blank" data-q="10"> are allowed within 7 days of delivery.</td>' +
              "</tr></table>",
          },
        ],
      },
      {
        part: 2, title: "Questions 11-20", audio: "audio/T3S2.mp3",
        blocks: [
          { kind: "mc",
            intro: "<p><b>Questions 11-16</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Bidcaster Community Archaeology Project</h3>",
            questions: [
              { n: 11, text: "Who was responsible for starting the community project?",
                options: [["A","the castle owners"],["B","a national charity"],["C","the local council"]] },
              { n: 12, text: "How was the gold coin found?",
                options: [["A","Heavy rain had removed some of the soil."],["B","The ground was dug up by wild rabbits."],["C","A person with a metal detector searched the area."]] },
              { n: 13, text: "What led the archaeologists to believe there was an ancient village on this site?",
                options: [["A","the lucky discovery of old records"],["B","the bases of several structures visible in the grass"],["C","the unusual stones found near the castle"]] },
              { n: 14, text: "What are the team still hoping to find?",
                options: [["A","everyday pottery"],["B","animal bones"],["C","pieces of jewellery"]] },
              { n: 15, text: "What was found on the other side of the river to the castle?",
                options: [["A","the remains of a large palace"],["B","the outline of fields"],["C","a number of small huts"]] },
              { n: 16, text: "What do the team plan to do after work ends this summer?",
                options: [["A","prepare a display for a museum"],["B","take part in a television programme"],["C","start to organise school visits"]] },
            ] },
          { kind: "match",
            intro: "<p><b>Questions 17-20</b></p><p>Label the map below.</p><p class='instr'>Write the correct letter, <b>A-G</b>, next to Questions 17-20.</p><h3>Bidcaster Archaeological Dig</h3>",
            choices: ["A","B","C","D","E","F","G"],
            questions: [
              { n: 17, text: "bridge foundations" },
              { n: 18, text: "rubbish pit" },
              { n: 19, text: "meeting hall" },
              { n: 20, text: "fish pond" },
            ] },
        ],
      },
      {
        part: 3, title: "Questions 21-30", audio: "audio/T3S3.mp3",
        blocks: [
          { kind: "mc",
            intro: "<p><b>Questions 21-26</b></p><p class='instr'>Choose the correct letter, <b>A, B or C</b>.</p><h3>Project on Theatre Programmes</h3>",
            questions: [
              { n: 21, text: "Finn was pleased to discover that their topic",
                options: [["A","was not familiar to their module leader."],["B","had not been chosen by other students."],["C","did not prove to be difficult to research."]] },
              { n: 22, text: "Maya says a mistaken belief about theatre programmes is that",
                options: [["A","theatres pay companies to produce them."],["B","few theatre-goers buy them nowadays."],["C","they contain far more adverts than previously."]] },
              { n: 23, text: "Finn was surprised that, in early British theatre, programmes",
                options: [["A","were difficult for audiences to obtain."],["B","were given out free of charge."],["C","were seen as a kind of contract."]] },
              { n: 24, text: "Maya feels their project should include an explanation of why companies of actors",
                options: [["A","promoted their own plays."],["B","performed plays outdoors."],["C","had to tour with their plays."]] },
              { n: 25, text: "Finn and Maya both think that, compared to nineteenth-century programmes, those from the eighteenth century",
                options: [["A","were more original."],["B","were more colourful."],["C","were more informative."]] },
              { n: 26, text: "Maya doesn't fully understand why, in the twentieth century,",
                options: [["A","very few theatre programmes were printed in the USA."],["B","British theatre programmes failed to develop for so long."],["C","theatre programmes in Britain copied fashions from the USA."]] },
            ] },
          { kind: "match",
            intro: "<p><b>Questions 27-30</b></p><p>What comment is made about the programme for each of the following shows?</p><p class='instr'>Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A-F</b>, next to Questions 27-30.</p>",
            choices: [
              ["A", "Its origin is somewhat controversial."],
              ["B", "It is historically significant for a country."],
              ["C", "It was effective at attracting audiences."],
              ["D", "It is included in a recent project."],
              ["E", "It contains insights into the show."],
              ["F", "It resembles an artwork."],
            ],
            questions: [
              { n: 27, text: "Ruy Blas" },
              { n: 28, text: "Man of La Mancha" },
              { n: 29, text: "The Tragedy of Jane Shore" },
              { n: 30, text: "The Sailors' Festival" },
            ] },
        ],
      },
      {
        part: 4, title: "Questions 31-40", audio: "audio/T3S4.mp3",
        blocks: [
          { kind: "html", html: "<p><b>Complete the notes below.</b></p><p class='instr'>Write <b>ONE WORD ONLY</b> for each answer.</p><h3>Inclusive design</h3>" },
          { kind: "fill", html:
              "<p class='sub'>Definition</p>" +
              "<ul class='notes'>" +
              "<li>Designing products that can be accessed by a diverse range of people without the need for any <input class='blank' data-q='31'>.</li>" +
              "<li>Not the same as universal design: that is design for everyone, including catering for people with <input class='blank' data-q='32'> problems.</li>" +
              "</ul>" +
              "<p class='sub'>Examples of inclusive design</p>" +
              "<ul class='notes'>" +
              "<li><input class='blank' data-q='33'> which are adjustable, avoiding back or neck problems</li>" +
              "<li><input class='blank' data-q='34'> in public toilets which are easier to use</li>" +
              "</ul>" +
              "<p class='sub'>To assist the elderly:</p>" +
              "<ul class='notes'>" +
              "<li>designers avoid using <input class='blank' data-q='35'> in interfaces</li>" +
              "<li>people can make commands using a mouse, keyboard or their <input class='blank' data-q='36'></li>" +
              "</ul>" +
              "<p class='sub'>Impact of non-inclusive designs</p>" +
              "<ul class='notes'>" +
              "<li class='sub2'>Access — loss of independence for disabled people.</li>" +
              "<li class='sub2'>Safety — seatbelts are especially problematic for <input class='blank' data-q='37'> women.</li>" +
              "<li class='sub2'>PPE jackets are often unsuitable because of the size of women's <input class='blank' data-q='38'>.</li>" +
              "<li class='sub2'>PPE for female <input class='blank' data-q='39'> officers dealing with emergencies is the worst.</li>" +
              "<li class='sub2'>Comfort in the workplace — the <input class='blank' data-q='40'> in offices is often too low for women.</li>" +
              "</ul>",
          },
        ],
      },
    ],
  },
};
