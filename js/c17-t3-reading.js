/* Test 3 - Reading */
window.IELTS_DATA_MAP["c17-t3"].reading = {
  minutes: 60,
  answers: {
    "1": ["carnivorous"], "2": ["scent"], "3": ["pouch"], "4": ["fossil"], "5": ["habitat"],
    "6": "TRUE", "7": "FALSE", "8": "NOT GIVEN", "9": "FALSE", "10": "NOT GIVEN", "11": "FALSE", "12": "TRUE", "13": "NOT GIVEN",
    "14": "F", "15": "G", "16": "A", "17": "H", "18": "B", "19": "E", "20": "C",
    "21|22": ["B", "C"],
    "23": ["solid"], "24": ["Sumatran orangutan", "orangutan", "orang-utan", "Sumatran orang-utan"], "25": ["carbon stocks"], "26": ["biodiversity"],
    "27": "D", "28": "B", "29": "C", "30": "D", "31": "C",
    "32": "NO", "33": "YES", "34": "NOT GIVEN", "35": "NO",
    "36": "H", "37": "D", "38": "I", "39": "B", "40": "F",
  },
  passages: [
    /* ---------------- PASSAGE 1 ---------------- */
    {
      number: 1,
      title: "The thylacine",
      intro: "<p><b>READING PASSAGE 1</b></p><p class='instr'>You should spend about 20 minutes on <b>Questions 1-13</b>, which are based on Reading Passage 1 below.</p>",
      paragraphs: [
        "The extinct thylacine, also known as the Tasmanian tiger, was a marsupial that bore a superficial resemblance to a dog. Its most distinguishing feature was the 13-19 dark brown stripes over its back, beginning at the rear of the body and extending onto the tail. The thylacine's average nose-to-tail length for adult males was 162.6 cm, compared to 153.7 cm for females.",
        "The thylacine appeared to occupy most types of terrain except dense rainforest, with open eucalyptus forest thought to be its prime habitat. In terms of feeding, it was exclusively carnivorous, and its stomach was muscular with an ability to distend so that it could eat large amounts of food at one time, probably an adaptation to compensate for long periods when hunting was unsuccessful and food scarce. The thylacine was not a fast runner and probably relied more on scent than any other sense. They emerged to hunt during the evening, night and early morning and tended to retreat to the hills and forest for shelter during the day. Despite the common name 'tiger', the thylacine had a shy, nervous temperament. Although mainly nocturnal, it was sighted moving during the day and some individuals were even recorded basking in the sun.",
        "The thylacine had an extended breeding season from winter to spring, with indications that some breeding took place throughout the year. The thylacine, like all marsupials, was tiny and hairless when born. Newborns crawled into the pouch on the belly of their mother, and attached themselves to one of the four teats, remaining there for up to three months. When old enough to leave the pouch, the young stayed in a lair such as a deep rocky cave, well-hidden nest or hollow log, whilst the mother hunted.",
        "Approximately 4,000 years ago, the thylacine was widespread throughout New Guinea and most of mainland Australia, as well as the island of Tasmania. The most recent, well-dated occurrence of a thylacine on the mainland is a carbon-dated fossil from Murray Cave in Western Australia, which is around 3,100 years old. Its extinction coincided closely with the arrival of wild dogs called dingoes in Australia and a similar predator in New Guinea. Dingoes never reached Tasmania, and most scientists see this as the main reason for the thylacine's survival there.",
        "The dramatic decline of the thylacine in Tasmania, which began in the 1830s and continued for a century, is generally attributed to the relentless efforts of sheep farmers and bounty hunters with shotguns. While this determined campaign undoubtedly played a large part, it is likely that various other factors also contributed to the decline and eventual extinction of the species. These include competition with wild dogs introduced by European settlers, loss of habitat along with the disappearance of prey species, and a distemper-like disease which may also have affected the thylacine.",
        "There was only one successful attempt to breed a thylacine in captivity, at Melbourne Zoo in 1899. This was despite the large numbers that went through some zoos, particularly London Zoo and Tasmania's Hobart Zoo. The famous naturalist John Gould foresaw the thylacine's demise when he published his Mammals of Australia between 1848 and 1863, writing, 'The numbers of this singular animal will speedily diminish, extermination will have its full sway, and it will then, like the wolf of England and Scotland, be recorded as an animal of the past.'",
        "However, there seems to have been little public pressure to preserve the thylacine, nor was much concern expressed by scientists at the decline of this species in the decades that followed. A notable exception was T.T. Flynn, Professor of Biology at the University of Tasmania. In 1914, he was sufficiently concerned about the scarcity of the thylacine to suggest that some should be captured and placed on a small island. But it was not until 1929, with the species on the very edge of extinction, that Tasmania's Animals and Birds Protection Board passed a motion protecting thylacines only for the month of December, which was thought to be their prime breeding season.",
        "The last known wild thylacine to be killed was shot by a farmer in the north-east of Tasmania in 1930, leaving just captive specimens. Official protection of the species by the Tasmanian government was introduced in July 1936, 59 days before the last known individual died in Hobart Zoo on 7th September, 1936.",
        "There have been numerous expeditions and searches for the thylacine over the years, none of which has produced definitive evidence that thylacines still exist. The species was declared extinct by the Tasmanian government in 1986.",
      ],
      blocks: [
        { kind: "fill", intro: "<p><b>Questions 1-5</b></p><p class='instr'>Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>",
          html:
            "<h3>The thylacine</h3>" +
            "<p class='sub'>Appearance and behaviour</p>" +
            "<ul class='notes'>" +
            "<li>looked rather like a dog</li>" +
            "<li>had a series of stripes along its body and tail</li>" +
            "<li>ate an entirely <input class='blank' data-q='1'> diet</li>" +
            "<li>probably depended mainly on <input class='blank' data-q='2'> when hunting</li>" +
            "<li>young spent first months of life inside its mother's <input class='blank' data-q='3'></li>" +
            "</ul>" +
            "<p class='sub'>Decline and extinction</p>" +
            "<ul class='notes'>" +
            "<li>last evidence in mainland Australia is a 3,100-year-old <input class='blank' data-q='4'></li>" +
            "<li>probably went extinct in mainland Australia due to animals known as dingoes</li>" +
            "<li>reduction in <input class='blank' data-q='5'> and available sources of food were partly responsible for decline in Tasmania</li>" +
            "</ul>",
        },
        { kind: "tfng", intro: "<p><b>Questions 6-13</b></p><p class='instr'>Do the following statements agree with the information given in Reading Passage 1? Write <b>TRUE</b> if the statement agrees with the information; <b>FALSE</b> if the statement contradicts the information; <b>NOT GIVEN</b> if there is no information on this.</p>",
          questions: [
            { n: 6, text: "Significant numbers of thylacines were killed by humans from the 1830s onwards." },
            { n: 7, text: "Several thylacines were born in zoos during the late 1800s." },
            { n: 8, text: "John Gould's prediction about the thylacine surprised some biologists." },
            { n: 9, text: "In the early 1900s, many scientists became worried about the possible extinction of the thylacine." },
            { n: 10, text: "T. T. Flynn's proposal to rehome captive thylacines on an island proved to be impractical." },
            { n: 11, text: "There were still reasonable numbers of thylacines in existence when a piece of legislation protecting the species during their breeding season was passed." },
            { n: 12, text: "From 1930 to 1936, the only known living thylacines were all in captivity." },
            { n: 13, text: "Attempts to find living thylacines are now rarely made." },
          ] },
      ],
    },
    /* ---------------- PASSAGE 2 ---------------- */
    {
      number: 2,
      title: "Palm oil",
      intro: "<p><b>READING PASSAGE 2</b></p><p class='instr'>You should spend about 20 minutes on <b>Questions 14-26</b>, which are based on Reading Passage 2 below.</p>",
      paragraphs: [
        "A&nbsp;&nbsp;Palm oil is an edible oil derived from the fruit of the African oil palm tree, and is currently the most consumed vegetable oil in the world. It's almost certainly in the soap we wash with in the morning, the sandwich we have for lunch, and the biscuits we snack on during the day. Why is palm oil so attractive for manufacturers? Primarily because its unique properties - such as remaining solid at room temperature - make it an ideal ingredient for long-term preservation, allowing many packaged foods on supermarket shelves to have 'best before' dates of months, even years, into the future.",
        "B&nbsp;&nbsp;Many farmers have seized the opportunity to maximise the planting of oil palm trees. Between 1990 and 2012, the global land area devoted to growing oil palm trees grew from 6 to 17 million hectares, now accounting for around ten percent of total cropland in the entire world. From a mere two million tonnes of palm oil being produced annually globally 50 years ago, there are now around 60 million tonnes produced every single year, a figure looking likely to double or even triple by the middle of the century.",
        "C&nbsp;&nbsp;... plantations as a major concern. There are countless news stories of deforestation, habitat destruction and dwindling species populations, all as a direct result of land clearing to establish oil palm tree monoculture on an industrial scale, particularly in Malaysia and Indonesia. Endangered species - most famously the Sumatran orangutan, but also rhinos, elephants, tigers, and numerous other fauna - have suffered from the unstoppable spread of oil palm plantations.",
        "D&nbsp;&nbsp;'Palm oil is surely one of the greatest threats to global biodiversity' declares Dr Farnon Ellwood of the University of the West of England, Bristol. 'Palm oil is replacing rainforest, and rainforest is where all the species are. That's a problem.' This has led to some radical questions among environmentalists, such as whether consumers should try to boycott palm oil entirely. Meanwhile Bhavani Shankar, Professor at London's School of Oriental and African Studies, argues, 'It's easy to say that palm oil is the enemy and we should be against it. It makes for a more dramatic story, and it's very intuitive. But given the complexity of the argument, I think a much more nuanced story is closer to the truth.'",
        "E&nbsp;&nbsp;One response to the boycott movement has been the argument for the vital role palm oil plays in lifting many millions of people in the developing world out of poverty. Is it desirable to have palm oil boycotted, replaced, eliminated from the global supply chain, given how many low-income people in developing countries depend on it for their livelihoods? How best to strike a utilitarian balance between these competing factors has become a serious bone of contention.",
        "F&nbsp;&nbsp;Even the deforestation argument isn't as straightforward as it seems. Oil palm plantations produce at least four and potentially up to ten times more oil per hectare than soybean, rapeseed, sunflower or other competing oils. That immensely high yield - which is predominantly what makes it so profitable - is potentially also an ecological benefit. If ten times more palm oil can be produced from a patch of land than any competing oil, then ten times more land would need to be cleared in order to produce the same volume of oil from that competitor. As for the question of carbon emissions, the issue really depends on what oil palm trees are replacing. Crops vary in the degree to which they sequester carbon - in other words, the amount of carbon they capture from the atmosphere and store within the plant. The more carbon a plant sequesters, the more it reduces the effect of climate change. As Shankar explains: '[Palm oil production] actually sequesters more carbon in some ways than other alternatives. [...] Of course, if you're cutting down virgin forest it's terrible - that's what's happening in Indonesia and Malaysia, it's been allowed to get out of hand. But if it's replacing rice, for example, it might actually sequester more carbon.'",
        "G&nbsp;&nbsp;The industry is now regulated by a group called the Roundtable on Sustainable Palm Oil (RSPO), consisting of palm growers, retailers, product manufacturers, and other interested parties. Over the past decade or so, an agreement has gradually been reached regarding standards that producers of palm oil have to meet in order for their product to be regarded as certified... regular assessment of carbon stocks, among other criteria. Only once these requirements are fully satisfied is the oil allowed to be sold as certified sustainable palm oil (CSPO). Recent figures show that the RSPO now certifies around 12 million tonnes of palm oil annually, equivalent to roughly 21 percent of the world's total palm oil production.",
        "H&nbsp;&nbsp;There is even hope that oil palm plantations might not need to be such sterile monocultures, or 'green deserts', as Ellwood describes them. New research at Ellwood's lab hints at one plant which might make all the difference. The bird's nest fern (Asplenium nidus) grows on trees in an epiphytic fashion (meaning it's dependent on the tree only for support, not for nutrients), and is native to many tropical regions, where as a keystone species it performs a vital ecological role. Ellwood believes that reintroducing the bird's nest fern into oil palm plantations could potentially allow these areas to recover their biodiversity, providing a home for all manner of species, from fungi and bacteria, to invertebrates such as insects, amphibians, reptiles and even mammals.",
      ],
      blocks: [
        { kind: "match", intro: "<p><b>Questions 14-20</b></p><p class='instr'>Reading Passage 2 has eight sections, <b>A-H</b>. Which section contains the following information? Write the correct letter, <b>A-H</b>.</p>",
          choices: ["A","B","C","D","E","F","G","H"],
          questions: [
            { n: 14, text: "a reference to the high yield obtained from the cultivation of oil palms" },
            { n: 15, text: "a description of an organisation which controls the environmental impact of palm oil production" },
            { n: 16, text: "examples of the widespread global use of palm oil" },
            { n: 17, text: "reference to a particular species which could benefit the ecosystem of oil palm plantations" },
            { n: 18, text: "figures illustrating the rapid expansion of the palm oil industry" },
            { n: 19, text: "an economic justification for not opposing the palm oil industry" },
            { n: 20, text: "examples of creatures badly affected by the establishment of oil palm plantations" },
          ] },
        { kind: "mc2", intro: "<p><b>Questions 21 and 22</b></p><p class='instr'>Choose <b>TWO</b> letters, <b>A-E</b>.</p><p class='instr'>Which TWO statements are made about the Roundtable on Sustainable Palm Oil (RSPO)?</p>",
          groups: [
            { qnums: [21,22], stem: "",
              options: [["A","Its membership has grown steadily over the course of the last decade."],["B","It demands that certified producers be open and honest about their practices."],["C","It took several years to establish its set of criteria for sustainable palm oil certification."],["D","Its regulations regarding sustainability are stricter than those governing other industries."],["E","It was formed at the request of environmentalists concerned about the loss of virgin forests."]] },
          ] },
        { kind: "fill", intro: "<p><b>Questions 23-26</b></p><p class='instr'>Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>",
          html:
            "<p class='sub'>23&nbsp;&nbsp;One advantage of palm oil for manufacturers is that it stays <input class='blank' data-q='23'> even when not refrigerated.</p>" +
            "<p class='sub'>24&nbsp;&nbsp;The <input class='blank' data-q='24'> is the best known of the animals suffering habitat loss as a result of the spread of oil palm plantations.</p>" +
            "<p class='sub'>25&nbsp;&nbsp;As one of its criteria for the certification of sustainable palm oil, the RSPO insists that growers check <input class='blank' data-q='25'> on a routine basis.</p>" +
            "<p class='sub'>26&nbsp;&nbsp;Ellwood and his researchers are looking into whether the bird's nest fern could restore <input class='blank' data-q='26'> in areas where oil palm trees are grown.</p>",
        },
      ],
    },
    /* ---------------- PASSAGE 3 ---------------- */
    {
      number: 3,
      title: "Building the Skyline: The Birth and Growth of Manhattan's Skyscrapers",
      intro: "<p><b>READING PASSAGE 3</b></p><p class='instr'>You should spend about 20 minutes on <b>Questions 27-40</b>, which are based on Reading Passage 3 below.</p><p class='instr'>Book review by Katharine L. Shester</p>",
      paragraphs: [
        "In Building the Skyline, Jason Barr takes the reader through a detailed history of New York City. The book combines geology, history, economics, and a lot of data to explain why business clusters developed where they did and how the early decisions of workers and firms shaped the skyline we see today. Building the Skyline is organized into two distinct parts. The first is primarily historical and addresses New York's settlement and growth from 1609 to 1900; the second deals primarily with the 20th century and is a compilation of chapters commenting on different aspects of New York's urban development. The tone and organization of the book changes somewhat between the first and second parts, as the latter chapters incorporate aspects of Barr's related research papers.",
        "Barr begins chapter one by taking the reader on a 'helicopter time-machine' ride - giving a fascinating account of how the New York landscape in 1609 might have looked from the sky. He then moves on to a subterranean walking tour of the city, indicating the location of rock and water below the subsoil, before taking the reader back to the surface. His love of the city comes through as he describes various fun facts about the location of the New York residence of early 19th-century vice-president Aaron Burr as well as a number of legends about the city.",
        "Chapters two and three take the reader up to the Civil War (1861-1865), with chapter two focusing on the early development of land and the implementation of a grid system in 1811. Chapter three focuses on land use before the Civil War. Both chapters are informative and well researched and set the stage for the economic analysis that comes later in the book. I would have liked Barr to expand upon his claim that existing tenements prevented skyscrapers in certain neighborhoods because likely no skyscraper developer was interested in performing the necessary 'slum clearance'. Later in the book, Barr makes the claim that the depth of bedrock was not a limiting factor for developers, as foundation costs were a small fraction of the cost of development. At first glance, it is not obvious why slum clearance would be limiting, while more expensive foundations would not.",
        "Chapter four focuses on immigration and the location of neighborhoods and tenements in the late 19th century. Barr identifies four primary immigrant enclaves and analyzes their locations in terms of the amenities available in the area. Most of these enclaves were located on the least valuable land, between the industries located on the waterfront and the wealthy neighborhoods bordering Central Park.",
        "Part two of the book begins with a discussion of the economics of skyscraper height. In chapter five, Barr distinguishes between engineering height, economic height, and developer height - where engineering height is the tallest building that can be safely made at a given time, economic height is the height that is most efficient from society's point of view, and developer height is the actual height chosen by the developer, who is attempting to maximize return on investment. Chapter five also has an interesting discussion of the technological advances that led to the construction of skyscrapers. For example, the introduction of iron and steel skeletal frames made thick, load-bearing walls unnecessary, expanding the usable square footage of buildings and increasing the use of windows and availability of natural light. Chapter six then presents data on building height throughout the 20th century and uses regression analysis to 'predict' building construction. While less technical than the research paper on which the chapter is based, it is probably more technical than would be preferred by a general audience.",
        "Chapter seven tackles the 'bedrock myth', the assumption that the absence of bedrock close to the surface between Downtown and Midtown New York is the reason for skyscrapers not being built between the two urban centers. Rather, Barr argues that while deeper bedrock does increase foundation costs, these costs were neither prohibitively high nor were they large compared to the overall cost of building a skyscraper. What I enjoyed the most about this chapter was Barr's discussion of how foundations are actually built. He describes the use of caissons, which enable workers to dig down for considerable distances, often below the water table, until they reach bedrock. Barr's thorough technological history discusses not only how caissons work, but also the dangers involved. While this chapter references empirical research papers, it is a relatively easy read.",
        "Chapters eight and nine focus on the birth of Midtown and the building boom of the 1920s. Chapter eight contains lengthy discussions of urban economic theory that may serve as a distraction to readers primarily interested in New York. However, they would be well-suited for undergraduates learning about the economics of cities. In the next chapter, Barr considers two of the primary explanations for the building boom of the 1920s - the first being exuberance, and the second being financing. He uses data to assess the viability of these two explanations and finds that supply and demand factors explain much of the development of the 1920s; though it enabled the boom, cheap credit was not, he argues, the primary cause.",
        "In the final chapter (chapter 10), Barr discusses another of his empirical papers that estimates Manhattan land values from the mid-19th century to the present day. The data work that went into these estimations is particularly impressive. Toward the end of the chapter, Barr assesses 'whether skyscrapers are a cause or an effect of high land values'. He finds that changes in land values predict future building height, but the reverse is not true. The book ends with an epilogue, in which Barr discusses the impact of climate change on the city and makes policy suggestions for New York going forward.",
      ],
      blocks: [
        { kind: "mc", intro: "<p><b>Questions 27-31</b></p><p class='instr'>Choose the correct letter, <b>A</b>, <b>B</b>, <b>C</b> or <b>D</b>.</p>",
          questions: [
            { n: 27, text: "What point does Shester make about Barr's book in the first paragraph?",
              options: [["A","It gives a highly original explanation for urban development."],["B","Elements of Barr's research papers are incorporated throughout the book."],["C","Other books that are available on the subject have taken a different approach."],["D","It covers a range of factors that affected the development of New York."]] },
            { n: 28, text: "How does Shester respond to the information in the book about tenements?",
              options: [["A","She describes the reasons for Barr's interest."],["B","She indicates a potential problem with Barr's analysis."],["C","She compares Barr's conclusion with that of other writers."],["D","She provides details about the sources Barr used for his research."]] },
            { n: 29, text: "What does Shester say about chapter six of the book?",
              options: [["A","It contains conflicting data."],["B","It focuses too much on possible trends."],["C","It is too specialised for most readers."],["D","It draws on research that is out of date."]] },
            { n: 30, text: "What does Shester say about the chapter on the building boom of the 1920s?",
              options: [["A","The information should have been organised differently."],["B","More facts are needed about the way construction was financed."],["C","The explanation that is given for the building boom is unlikely."],["D","Some parts will have limited appeal to certain people."]] },
            { n: 31, text: "What does Shester praise about the book?",
              options: [["A","the broad time period that is covered"],["B","the interesting questions that Barr asks"],["C","the nature of the research into the topic"],["D","the recommendations Barr makes for the future"]] },
          ] },
        { kind: "ynng", intro: "<p><b>Questions 32-35</b></p><p class='instr'>Do the following statements agree with the claims of the writer in Reading Passage 3? Write <b>YES</b> if the statement agrees with the claims of the writer; <b>NO</b> if the statement contradicts the claims of the writer; <b>NOT GIVEN</b> if it is impossible to say what the writer thinks about this.</p>",
          questions: [
            { n: 32, text: "The description in the first chapter of how New York probably looked from the air in the early 1600s lacks interest." },
            { n: 33, text: "Chapters two and three prepare the reader well for material yet to come." },
            { n: 34, text: "The biggest problem for many nineteenth-century New York immigrant neighbourhoods was a lack of amenities." },
            { n: 35, text: "In the nineteenth century, New York's immigrant neighbourhoods tended to concentrate around the harbour." },
          ] },
        { kind: "match", intro: "<p><b>Questions 36-40</b></p><p class='instr'>Complete the summary using the list of phrases, <b>A-J</b>, below. Write the correct letter, <b>A-J</b>.</p><p class='instr'><b>List of Phrases</b><br/>A&nbsp;&nbsp;development plans<br/>B&nbsp;&nbsp;deep excavations<br/>C&nbsp;&nbsp;great distance<br/>D&nbsp;&nbsp;excessive expense<br/>E&nbsp;&nbsp;impossible tasks<br/>F&nbsp;&nbsp;associated risks<br/>G&nbsp;&nbsp;water level<br/>H&nbsp;&nbsp;specific areas<br/>I&nbsp;&nbsp;total expenditure<br/>J&nbsp;&nbsp;construction guidelines</p>",
          choices: ["A","B","C","D","E","F","G","H","I","J"],
          questions: [
            { n: 36, text: "In chapter seven, Barr indicates how the lack of bedrock close to the surface does not explain why skyscrapers are absent from" },
            { n: 37, text: "He points out that although the cost of foundations increases when bedrock is deep below the surface, this cannot be regarded as" },
            { n: 38, text: "especially when compared to" },
            { n: 39, text: "A particularly enjoyable part of the chapter was Barr's account of how foundations are built. He describes not only how" },
            { n: 40, text: "but he also discusses their. The chapter is well researched but relatively easy to understand." },
          ] },
      ],
    },
  ],
};
