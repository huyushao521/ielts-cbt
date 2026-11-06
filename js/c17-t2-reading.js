/* Test 2 - Reading */
window.IELTS_DATA_MAP["c17-t2"].reading = {
  minutes: 60,
  answers: {
    "1": ["rock"], "2": ["cave"], "3": ["clay"], "4": ["Essenes"], "5": ["Hebrew"],
    "6": "NOT GIVEN", "7": "FALSE", "8": "TRUE", "9": "TRUE", "10": "FALSE", "11": "FALSE", "12": "TRUE", "13": "NOT GIVEN",
    "14": "C", "15": "B", "16": "E", "17": "A", "18": "C",
    "19": "B", "20": "D", "21": "A", "22": "C", "23": "A",
    "24": ["flavour", "flavor"], "25": ["size"], "26": ["salt"],
    "27": "D", "28": "A", "29": "A", "30": "C", "31": "A",
    "32": "NO", "33": "NOT GIVEN", "34": "YES", "35": "NO", "36": "NOT GIVEN",
    "37": "F", "38": "D", "39": "E", "40": "B",
  },
  passages: [
    /* ---------------- PASSAGE 1 ---------------- */
    {
      number: 1,
      title: "The Dead Sea Scrolls",
      intro: "<p><b>READING PASSAGE 1</b></p><p class='instr'>You should spend about 20 minutes on <b>Questions 1-13</b>, which are based on Reading Passage 1 below.</p>",
      paragraphs: [
        "In late 1946 or early 1947, three Bedouin teenagers were tending their goats and sheep near the ancient settlement of Qumran, located on the northwest shore of the Dead Sea in what is now known as the West Bank. One of these young shepherds tossed a rock into an opening on the side of a cliff and was surprised to hear a shattering sound. He and his companions later entered the cave and stumbled across a collection of large clay jars, seven of which contained leather and papyrus scrolls. The teenagers took the seven scrolls to a nearby town where they were sold for a small sum to a local antiquities dealer. Word of the find spread, and Bedouins and archaeologists eventually unearthed tens of thousands of additional scroll fragments from 10 nearby caves; together they make up between 800 and 900 manuscripts. It soon became clear that this was one of the greatest archaeological discoveries ever made.",
        "The scrolls were written, it seems, over a period of around 300 years. Their age, dated to between 150 BCE and 70 CE, is still the subject of scholarly debate even today. According to the prevailing theory, they are the work of a population that inhabited the area until Roman troops destroyed the settlement around 70 CE. The area was known as Judea at that time, and the people are thought to have belonged to a group called the Essenes, a devout Jewish sect.",
        "The majority of the texts on the Dead Sea Scrolls are in Hebrew, with some fragments written in an ancient version of its alphabet thought to have fallen out of use in the fifth century BCE. But there are other languages as well. Some scrolls are in Aramaic, the language spoken by many inhabitants of the region from the sixth century BCE to the siege of Jerusalem in 70 CE. In addition, several texts feature translations of the Hebrew Bible into Greek.",
        "The Dead Sea Scrolls include fragments from every book of the Old Testament of the Bible except for the Book of Esther. The only entire book of the Hebrew Bible preserved among the manuscripts from Qumran is Isaiah; this copy, dated to the first century BCE, is considered the earliest biblical manuscript still in existence. Along with biblical texts, the scrolls include documents about sectarian regulations and religious writings that do not appear in the Old Testament.",
        "The writing on the Dead Sea Scrolls is mostly in black or occasionally red ink, and the scrolls themselves are nearly all made of either parchment (animal skin) or an early form of paper called 'papyrus'. The only exception is the scroll numbered 3Q15, which was created out of a combination of copper and tin. Known as the Copper Scroll, this curious document features letters chiselled onto metal - perhaps, as some have theorized, to better withstand the passage of time. One of the most intriguing manuscripts from Qumran, this is a sort of ancient treasure map that lists dozens of gold and silver caches. Using an unconventional vocabulary and odd spelling, it describes 64 underground hiding places around the region that supposedly contained buried treasures. None of these hoards have been recovered, possibly because the Romans pillaged Judea during the first century CE. According to various hypotheses, the treasure belonged to local people, or was rescued from the Second Temple before its destruction or never existed to begin with.",
        "In late 1947, a Syrian Orthodox archbishop known as Mar Samuel acquired four of the original seven scrolls from a Jerusalem shoemaker and part-time antiquity dealer, paying less than $100 for them. He then travelled to the United States and unsuccessfully offered them to a number of universities, including Yale. Finally, in 1954, he placed an advertisement in the Wall Street Journal - under the category 'Miscellaneous Items for Sale' - that read: 'Biblical Manuscripts dating back to at least 200 B.C. are for sale. This would be an ideal gift to an educational or religious institution by an individual or group.' Fortunately, Israeli archaeologist and statesman Yigael Yadin negotiated their purchase and brought the scrolls back to Jerusalem, where they remain to this day.",
        "In 2017, researchers from the University of Haifa restored and deciphered one of the last two untranslated scrolls. The team spent more than a year reassembling the 60 fragments that make up the scroll. Deciphered from a band of coded text on parchment, the find provides insight into the community of people who wrote it and the 364-day calendar they would have used, which indicates shifts in seasons and details two yearly religious events known from another Dead Sea Scroll. Only one more known scroll remains untranslated.",
      ],
      blocks: [
        { kind: "fill", intro: "<p><b>Questions 1-5</b></p><p class='instr'>Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>",
          html:
            "<h3>The Dead Sea Scrolls</h3>" +
            "<p class='sub'>Discovery</p>" +
            "<ul class='notes'>" +
            "<li>Qumran, 1946/7</li>" +
            "<li>three Bedouin shepherds in their teens were near an opening on side of cliff</li>" +
            "<li>heard a noise of breaking when one teenager threw a <input class='blank' data-q='1'></li>" +
            "<li>teenagers went into the <input class='blank' data-q='2'> and found a number of containers made of <input class='blank' data-q='3'></li>" +
            "</ul>" +
            "<p class='sub'>The scrolls</p>" +
            "<ul class='notes'>" +
            "<li>date from between 150 BCE and 70 CE</li>" +
            "<li>thought to have been written by group of people known as the <input class='blank' data-q='4'></li>" +
            "<li>written mainly in the <input class='blank' data-q='5'> language</li>" +
            "<li>most are on religious topics, written using ink on parchment or papyrus</li>" +
            "</ul>",
        },
        { kind: "tfng", intro: "<p><b>Questions 6-13</b></p><p class='instr'>Do the following statements agree with the information given in Reading Passage 1? Write <b>TRUE</b> if the statement agrees with the information; <b>FALSE</b> if the statement contradicts the information; <b>NOT GIVEN</b> if there is no information on this.</p>",
          questions: [
            { n: 6, text: "The Bedouin teenagers who found the scrolls were disappointed by how little money they received for them." },
            { n: 7, text: "There is agreement among academics about the origin of the Dead Sea Scrolls." },
            { n: 8, text: "Most of the books of the Bible written on the scrolls are incomplete." },
            { n: 9, text: "The information on the Copper Scroll is written in an unusual way." },
            { n: 10, text: "Mar Samuel was given some of the scrolls as a gift." },
            { n: 11, text: "In the early 1950s, a number of educational establishments in the US were keen to buy scrolls from Mar Samuel." },
            { n: 12, text: "The scroll that was pieced together in 2017 contains information about annual occasions in the Qumran area 2,000 years ago." },
            { n: 13, text: "Academics at the University of Haifa are currently researching how to decipher the final scroll." },
          ] },
      ],
    },

    /* ---------------- PASSAGE 2 ---------------- */
    {
      number: 2,
      title: "A second attempt at domesticating the tomato",
      intro: "<p><b>READING PASSAGE 2</b></p><p class='instr'>You should spend about 20 minutes on <b>Questions 14-26</b>, which are based on Reading Passage 2 below.</p>",
      paragraphs: [
        "A&nbsp;&nbsp;It took at least 3,000 years for humans to learn how to domesticate the wild tomato and cultivate it for food. Now two separate teams in Brazil and China have done it all over again in less than three years. And they have done it better in some ways, as the re-domesticated tomatoes are more nutritious than the ones we eat at present. This approach relies on the revolutionary CRISPR genome editing technique, in which changes are deliberately made to the DNA of a living cell, allowing genetic material to be added, removed or altered. The technique could not only improve existing crops, but could also be used to turn thousands of wild plants into useful and appealing foods. In fact, a third team in the US has already begun to do this with a relative of the tomato called the groundcherry. This fast-track domestication could help make the world's food supply healthier and far more resistant to diseases, such as the rust fungus devastating wheat crops. 'This could transform what we eat,' says Jorg Kudla at the University of Munster in Germany, a member of the Brazilian team. 'There are 50,000 edible plants in the world, but 90 percent of our energy comes from just 15 crops.' 'We can now mimic the known domestication course of major crops like rice, maize, sorghum or others,' says Caixia Gao of the Chinese Academy of Sciences in Beijing. 'Then we might try to domesticate plants that have never been domesticated.'",
        "B&nbsp;&nbsp;Wild tomatoes, which are native to the Andes region in South America, produce pea-sized fruits. Over many generations, peoples such as the Aztecs and Incas transformed the plant by selecting and breeding plants with mutations in their genetic structure, which resulted in desirable traits such as larger fruit. But every time a single plant with a mutation is taken from a larger population for breeding, much genetic diversity is lost. And sometimes the desirable mutations come with less desirable traits. For instance, the tomato strains grown for supermarkets have lost much of their flavour. By comparing the genomes of modern plants to those of their wild relatives, biologists have been working out what genetic changes occurred as plants were domesticated. The teams in Brazil and China have now used this knowledge to reintroduce these changes from scratch while maintaining the desirable traits of wild strains.",
        "C&nbsp;&nbsp;The team in Brazil increased the size of fruit by editing a gene called FRUIT WEIGHT, and increased the number of tomatoes per truss by editing another called MULTIFLORA. While the historical domestication of tomatoes reduced levels of the red pigment lycopene - thought to have potential health benefits - the team in Brazil managed to boost it instead. The wild tomato has twice as much lycopene as cultivated ones; the newly domesticated one has five times as much. 'They are quite tasty,' says Kudla. 'A little bit strong. And very aromatic.' The team in China re-domesticated several strains of wild tomatoes with desirable traits lost in domesticated tomatoes. In this way they managed to create a strain resistant to a common disease called bacterial spot race, which can devastate yields. They also created another strain that is more salt tolerant - and has higher levels of vitamin C.",
        "D&nbsp;&nbsp;Meanwhile, Joyce Van Eck at the Boyce Thompson Institute in New York state decided to use the same approach to domesticate the groundcherry or goldenberry (Physalis pruinosa) for the first time. This fruit looks similar to the closely related Cape gooseberry (Physalis peruviana). Groundcherries are already sold to a limited extent in the US but they are hard to produce because the plant has a sprawling growth habit and the small fruits fall off the branches when ripe. Van Eck's team has edited the plants to increase fruit size, to make their growth more compact and to stop their fruits dropping. 'There's potential for this to be a commercial crop,' says Van Eck. But she adds that taking the work further would be expensive because of the need to pay for a licence for the CRISPR technology.",
        "E&nbsp;&nbsp;This approach could boost the use of many obscure plants, says Jonathan Jones of the Sainsbury Lab in the UK. But it will be hard for new foods to grow so popular with farmers and consumers that they become new staple crops, he thinks. Gao mentions a number of crops that could be 'brought into the mainstream', including foxtail, oat-grass and cowpea. By choosing wild plants that are drought or heat tolerant, says Gao, we could create crops that will thrive even as the planet warms. But Kudla didn't want to reveal which species were in his team's sights, because CRISPR has made the process so easy. 'Anyone with the right skills could go to their lab and do this.'",
      ],
      blocks: [
        { kind: "match", intro: "<p><b>Questions 14-18</b></p><p class='instr'>Reading Passage 2 has five sections, <b>A-E</b>. Which section contains the following information? Write the correct letter, <b>A-E</b>.</p><p class='instr'><b>NB</b> You may use any letter more than once.</p>",
          choices: ["A","B","C","D","E"],
          questions: [
            { n: 14, text: "a reference to a type of tomato that can resist a dangerous infection" },
            { n: 15, text: "an explanation of how problems can arise from focusing only on a certain type of tomato plant" },
            { n: 16, text: "a number of examples of plants that are not cultivated at present but could be useful as food sources" },
            { n: 17, text: "a comparison between the early domestication of the tomato and more recent research" },
            { n: 18, text: "a personal reaction to the flavour of a tomato that has been genetically edited" },
          ] },
        { kind: "match", intro: "<p><b>Questions 19-23</b></p><p class='instr'>Look at the following statements (Questions 19-23) and the list of researchers below. Match each statement with the correct researcher, <b>A-D</b>.</p><p class='instr'><b>NB</b> You may use any letter more than once.</p><p class='instr'><b>List of Researchers</b><br/>A&nbsp;&nbsp;Jorg Kudla<br/>B&nbsp;&nbsp;Caixia Gao<br/>C&nbsp;&nbsp;Joyce Van Eck<br/>D&nbsp;&nbsp;Jonathan Jones</p>",
          choices: ["A","B","C","D"],
          questions: [
            { n: 19, text: "Domestication of certain plants could allow them to adapt to future environmental challenges." },
            { n: 20, text: "The idea of growing and eating unusual plants may not be accepted on a large scale." },
            { n: 21, text: "It is not advisable for the future direction of certain research to be made public." },
            { n: 22, text: "Present efforts to domesticate one wild fruit are limited by the costs involved." },
            { n: 23, text: "Humans only make use of a small proportion of the plant food available on Earth." },
          ] },
        { kind: "fill", intro: "<p><b>Questions 24-26</b></p><p class='instr'>Complete the sentences below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>",
          html:
            "<p class='sub'>24&nbsp;&nbsp;An undesirable trait such as loss of <input class='blank' data-q='24'> may be caused by a mutation in a tomato gene.</p>" +
            "<p class='sub'>25&nbsp;&nbsp;By modifying one gene in a tomato plant, researchers made the tomato three times its original <input class='blank' data-q='25'>.</p>" +
            "<p class='sub'>26&nbsp;&nbsp;A type of tomato which was not badly affected by <input class='blank' data-q='26'>, and was rich in vitamin C, was produced by a team of researchers in China.</p>",
        },
      ],
    },

    /* ---------------- PASSAGE 3 ---------------- */
    {
      number: 3,
      title: "Insight or evolution?",
      intro: "<p><b>READING PASSAGE 3</b></p><p class='instr'>You should spend about 20 minutes on <b>Questions 27-40</b>, which are based on Reading Passage 3 below.</p>",
      paragraphs: [
        "Scientific discovery is popularly believed to result from the sheer genius of such intellectual stars as naturalist Charles Darwin and theoretical physicist Albert Einstein. Our view of such unique contributions to science often disregards the person's prior experience and the efforts of their lesser-known predecessors. Conventional wisdom also places great weight on insight in promoting breakthrough scientific achievements, as if ideas spontaneously pop into someone's head - fully formed and functional.",
        "There may be some limited truth to this view. However, we believe that it largely misrepresents the real nature of scientific discovery, as well as that of creativity and innovation in many other realms of human endeavor.",
        "Setting aside such greats as Darwin and Einstein - whose monumental contributions are duly celebrated - we suggest that innovation is more a process of trial and error, where two steps forward may sometimes come with one step back, as well as one or more steps to the right or left. This evolutionary view of human innovation undermines the notion of creative genius and recognizes the cumulative nature of scientific progress.",
        "Consider one unheralded scientist: John Nicholson, a mathematical physicist working in the 1910s who postulated the existence of 'proto-elements' in outer space. By combining different numbers of weights of these 'proto-elements', atoms, Nicholson could recover the weights of all the elements in the then-known periodic table. These successes are all the more noteworthy given the fact that Nicholson was wrong about the presence of proto-elements: they do not actually exist. Yet, amid his often fanciful theories and wild speculations, Nicholson also proposed a novel theory about the structure of atoms. Niels Bohr, the Nobel prize-winning father of modern atomic theory, jumped off from this interesting idea to conceive his now-famous model of the atom.",
        "What are we to make of this story? One might simply conclude that science is a collective and cumulative enterprise. That may be true, but there may be a deeper insight to be gleaned. We propose that science is constantly evolving, much as species of animals do. In biological systems, organisms may display new characteristics that result from random genetic mutations. In the same way, random, arbitrary or accidental mutations of ideas may help pave the way for advances in science. If mutations prove beneficial, then the animal or the scientific theory will continue to thrive and perhaps reproduce.",
        "Support for this evolutionary view of behavioral innovation comes from many domains. Consider one example of an influential innovation in US horseracing. The so-called 'acey-deucy' stirrup placement, in which the rider's foot in his left stirrup is placed as much as 25 centimeters lower than the right, is believed to confer important speed advantages when turning on oval tracks. It was developed by a relatively unknown jockey named Jackie Westrope. Had Westrope conducted methodical investigations or examined extensive film records in a shrewd plan to outrun his rivals? Had he foreseen the speed advantage that would be conferred by riding acey-deucy? No. He suffered a leg injury, which left him unable to fully bend his left knee. His modification just happened to coincide with enhanced left-hand turning performance. This led to the rapid and widespread adoption of riding acey-deucy by many riders, a racing style which continues in today's thoroughbred racing.",
        "Plenty of other stories show that fresh advances can arise from error, misadventure, and also pure serendipity - a happy accident. For example, in the early 1970s, two employees of the company 3M each had a problem: Spencer Silver had a product - a glue which was only slightly sticky - and no use for it, while his colleague Art Fry was trying to figure out how to affix temporary bookmarks in his hymn book without damaging its pages. The solution to both these problems was the invention of the brilliantly simple yet phenomenally successful Post-It note. Such examples give lie to the claim that ingenious, designing minds are responsible for human creativity and invention. Far more banal and mechanical forces may be at work; forces that are fundamentally connected to the laws of science.",
        "The notions of insight, creativity and genius are often invoked, but they remain vague and of doubtful scientific utility, especially when one considers the diverse and enduring contributions of individuals such as Plato, Leonardo da Vinci, Shakespeare, Beethoven, Galileo, Newton, Kepler, Curie, Pasteur and Edison. These notions merely label rather than explain the evolution of human innovations. We need another approach, and there is a promising candidate.",
        "The Law of Effect was advanced by psychologist Edward Thorndike in 1898, some 40 years after Charles Darwin published his groundbreaking work on biological evolution, On the Origin of Species. This simple law holds that organisms tend to repeat successful behaviors and to refrain from performing unsuccessful ones. Just like Darwin's Law of Natural Selection, the Law of Effect involves an entirely mechanical process of variation and selection, without any end objective insight.",
        "Of course, the origin of human innovation demands much further study. In particular, the provenance of the raw material on which the Law of Effect operates is not as clearly known as that of the genetic mutations on which the Law of Natural Selection operates. The generation of novel ideas and behaviors may not be entirely random, but constrained by prior successes and failures - of the current individual (such as Bohr) or of predecessors (such as Nicholson). The time seems right for abandoning the naive notions of intelligent design and genius, and for scientifically exploring the true origins of creative behavior.",
      ],
      blocks: [
        { kind: "mc", intro: "<p><b>Questions 27-31</b></p><p class='instr'>Choose the correct letter, <b>A, B, C or D</b>.</p>",
          questions: [
            { n: 27, text: "The purpose of the first paragraph is to",
              options: [["A","defend particular ideas."],["B","compare certain beliefs."],["C","disprove a widely held view."],["D","outline a common assumption."]] },
            { n: 28, text: "What are the writers doing in the second paragraph?",
              options: [["A","criticising an opinion"],["B","justifying a standpoint"],["C","explaining an approach"],["D","supporting an argument"]] },
            { n: 29, text: "In the third paragraph, what do the writers suggest about Darwin and Einstein?",
              options: [["A","They represent an exception to a general rule."],["B","Their way of working has been misunderstood."],["C","They are an ideal which others should aspire to."],["D","Their achievements deserve greater recognition."]] },
            { n: 30, text: "John Nicholson is an example of a person whose idea",
              options: [["A","established his reputation as an influential scientist."],["B","was only fully understood at a later point in history."],["C","laid the foundations for someone else's breakthrough."],["D","initially met with scepticism from the scientific community."]] },
            { n: 31, text: "What is the key point of interest about the 'acey-deucy' stirrup placement?",
              options: [["A","the simple reason why it was invented"],["B","the enthusiasm with which it was adopted"],["C","the research that went into its development"],["D","the cleverness of the person who first used it"]] },
          ] },
        { kind: "ynng", intro: "<p><b>Questions 32-36</b></p><p class='instr'>Do the following statements agree with the claims of the writer in Reading Passage 3? Write <b>YES</b> if the statement agrees with the claims of the writer; <b>NO</b> if the statement contradicts the claims of the writer; <b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this.</p>",
          questions: [
            { n: 32, text: "Acknowledging people such as Plato or da Vinci as geniuses will help us understand the process by which great minds create new ideas." },
            { n: 33, text: "The Law of Effect was discovered at a time when psychologists were seeking a scientific reason why creativity occurs." },
            { n: 34, text: "The Law of Effect states that no planning is involved in the behaviour of organisms." },
            { n: 35, text: "The Law of Effect sets out clear explanations about the sources of new ideas and behaviours." },
            { n: 36, text: "Many scientists are now turning away from the notion of intelligent design and genius." },
          ] },
        { kind: "match", intro: "<p><b>Questions 37-40</b></p><p class='instr'>Complete the summary using the list of words, <b>A-G</b>, below. Write the correct letter, <b>A-G</b>.</p><p class='instr'><b>The origins of creative behaviour</b></p><p class='instr'>A&nbsp;&nbsp;invention&nbsp;&nbsp;B&nbsp;&nbsp;goals&nbsp;&nbsp;C&nbsp;&nbsp;compromise&nbsp;&nbsp;D&nbsp;&nbsp;mistakes&nbsp;&nbsp;E&nbsp;&nbsp;luck&nbsp;&nbsp;F&nbsp;&nbsp;inspiration&nbsp;&nbsp;G&nbsp;&nbsp;experiments</p>",
          choices: ["A","B","C","D","E","F","G"],
          questions: [
            { n: 37, text: "The traditional view of scientific discovery is that breakthroughs happen when a single great mind has sudden" },
            { n: 38, text: "Although this can occur, it is not often the case. Advances are more likely to be the result of a longer process. In some cases, this process involves" },
            { n: 39, text: "such as Nicholson's theory about proto-elements. In others, simple necessity may provoke innovation, often an element of" },
            { n: 40, text: "for example, the coincidence of ideas that led to the invention of the Post-It note. With both the Law of Natural Selection and the Law of Effect, there may be no clear" },
          ] },
      ],
    },
  ],
};
