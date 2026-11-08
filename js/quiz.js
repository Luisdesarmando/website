/**
 * THE LANGUAGES ACADEMY - UNIFIED STRATIFIED PLACEMENT ENGINE 2.0
 * Stratified CEFR / MCER Diagnostic Placement Tests (English, Spanish, Portuguese)
 * 
 * Features:
 * - 40 Stratified Questions per Test (10 A1, 10 A2, 10 B1, 10 B2)
 * - 15:00 Countdown Timer with Red Warning Pulse (< 2 mins)
 * - Anti-Bias Dynamic Option Shuffling (preserves exact correct answer text)
 * - Interactive 40-Question Jump Matrix
 * - Sub-Score Diagnostic Breakdown (A1, A2, B1, B2)
 * - 1-Click WhatsApp Diagnostic Report to Professor Luis (+55 54 99186-3491)
 */

const QUESTION_BANKS = {
  ingles: {
  "A1": [
    {
      "question": "What ___ your favorite food?",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "correct": "b"
    },
    {
      "question": "They ___ from Brazil.",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "correct": "c"
    },
    {
      "question": "How many sisters ___ he have?",
      "options": [
        "do",
        "does",
        "are",
        "has"
      ],
      "correct": "b"
    },
    {
      "question": "___ you speak English?",
      "options": [
        "Do",
        "Does",
        "Are",
        "Is"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ coffee every morning.",
      "options": [
        "drink",
        "drinks",
        "drinking",
        "drinked"
      ],
      "correct": "b"
    },
    {
      "question": "We ___ students at this school.",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "correct": "c"
    },
    {
      "question": "This is ___ umbrella.",
      "options": [
        "a",
        "an",
        "the",
        "--"
      ],
      "correct": "b"
    },
    {
      "question": "___ old are you?",
      "options": [
        "What",
        "How",
        "When",
        "Where"
      ],
      "correct": "b"
    },
    {
      "question": "The cat is ___ the box.",
      "options": [
        "in",
        "on",
        "at",
        "to"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ like chocolate.",
      "options": [
        "don't",
        "doesn't",
        "not",
        "no"
      ],
      "correct": "a"
    },
    {
      "question": "___ is your phone number?",
      "options": [
        "What",
        "Which",
        "How",
        "Where"
      ],
      "correct": "a"
    },
    {
      "question": "He ___ soccer on weekends.",
      "options": [
        "play",
        "plays",
        "playing",
        "played"
      ],
      "correct": "b"
    },
    {
      "question": "These are ___ keys.",
      "options": [
        "my",
        "I",
        "mine",
        "me"
      ],
      "correct": "a"
    },
    {
      "question": "___ there any water?",
      "options": [
        "Is",
        "Are",
        "Do",
        "Does"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ not study French.",
      "options": [
        "do",
        "does",
        "is",
        "are"
      ],
      "correct": "b"
    },
    {
      "question": "The restaurant is ___ the bank.",
      "options": [
        "next to",
        "in",
        "on",
        "at"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ TV in the evening.",
      "options": [
        "watch",
        "watches",
        "watching",
        "watched"
      ],
      "correct": "a"
    },
    {
      "question": "___ is your birthday?",
      "options": [
        "When",
        "What",
        "Where",
        "Who"
      ],
      "correct": "a"
    },
    {
      "question": "They ___ lunch at 12:00.",
      "options": [
        "have",
        "has",
        "having",
        "had"
      ],
      "correct": "a"
    },
    {
      "question": "The book is ___ the table.",
      "options": [
        "on",
        "in",
        "at",
        "to"
      ],
      "correct": "a"
    },
    {
      "question": "___ she like pizza?",
      "options": [
        "Do",
        "Does",
        "Is",
        "Are"
      ],
      "correct": "b"
    },
    {
      "question": "We ___ in an apartment.",
      "options": [
        "live",
        "lives",
        "living",
        "lived"
      ],
      "correct": "a"
    },
    {
      "question": "This is ___ easy test.",
      "options": [
        "a",
        "an",
        "the",
        "--"
      ],
      "correct": "a"
    },
    {
      "question": "___ name is John.",
      "options": [
        "His",
        "He",
        "Him",
        "He's"
      ],
      "correct": "a"
    },
    {
      "question": "The children ___ at school.",
      "options": [
        "is",
        "are",
        "be",
        "being"
      ],
      "correct": "b"
    },
    {
      "question": "I ___ from Canada.",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "correct": "a"
    },
    {
      "question": "___ do you live?",
      "options": [
        "Where",
        "When",
        "What",
        "Who"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ eggs for breakfast.",
      "options": [
        "eat",
        "eats",
        "eating",
        "ate"
      ],
      "correct": "b"
    },
    {
      "question": "We ___ happy today.",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "correct": "c"
    },
    {
      "question": "___ this your car?",
      "options": [
        "Is",
        "Are",
        "Do",
        "Does"
      ],
      "correct": "a"
    },
    {
      "question": "He ___ to work by bus.",
      "options": [
        "go",
        "goes",
        "going",
        "went"
      ],
      "correct": "b"
    },
    {
      "question": "They ___ not speak Chinese.",
      "options": [
        "do",
        "does",
        "are",
        "is"
      ],
      "correct": "a"
    },
    {
      "question": "___ you have a pet?",
      "options": [
        "Do",
        "Does",
        "Are",
        "Is"
      ],
      "correct": "a"
    },
    {
      "question": "The movie ___ at 7 PM.",
      "options": [
        "start",
        "starts",
        "starting",
        "started"
      ],
      "correct": "b"
    },
    {
      "question": "I ___ bread for breakfast.",
      "options": [
        "want",
        "wants",
        "wanting",
        "wanted"
      ],
      "correct": "a"
    },
    {
      "question": "___ is your teacher's name?",
      "options": [
        "What",
        "Who",
        "How",
        "Where"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ in a big house.",
      "options": [
        "live",
        "lives",
        "living",
        "lived"
      ],
      "correct": "b"
    },
    {
      "question": "We ___ class at 9 AM.",
      "options": [
        "have",
        "has",
        "having",
        "had"
      ],
      "correct": "a"
    },
    {
      "question": "___ the window open?",
      "options": [
        "Is",
        "Are",
        "Do",
        "Does"
      ],
      "correct": "a"
    },
    {
      "question": "They ___ breakfast every day.",
      "options": [
        "eat",
        "eats",
        "eating",
        "ate"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's your name?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: My name ___ John.",
      "options": [
        "is",
        "am",
        "are",
        "be"
      ],
      "correct": "a"
    },
    {
      "question": "A: How are you?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'm ___, thank you.",
      "options": [
        "fine",
        "good",
        "well",
        "nice"
      ],
      "correct": "a"
    },
    {
      "question": "A: Where are you from?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'm ___ Brazil.",
      "options": [
        "from",
        "in",
        "at",
        "on"
      ],
      "correct": "a"
    },
    {
      "question": "A: What color is this?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___.",
      "options": [
        "blue",
        "blues",
        "a blue",
        "the blue"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you have a pet?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I have ___ cat.",
      "options": [
        "a",
        "an",
        "the",
        "--"
      ],
      "correct": "a"
    },
    {
      "question": "A: What time is it?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___ o'clock.",
      "options": [
        "three",
        "third",
        "tree",
        "three's"
      ],
      "correct": "a"
    },
    {
      "question": "A: Is this your book?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, it's ___.",
      "options": [
        "mine",
        "my",
        "me",
        "I"
      ],
      "correct": "a"
    },
    {
      "question": "A: How old are you?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I ___ 10 years old.",
      "options": [
        "am",
        "is",
        "are",
        "be"
      ],
      "correct": "a"
    },
    {
      "question": "A: What day is today?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Today is ___.",
      "options": [
        "Monday",
        "Mondays",
        "the Monday",
        "a Monday"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you like ice cream?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___, I do.",
      "options": [
        "Yes",
        "Yeah",
        "Yep",
        "Ok"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's this?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___ apple.",
      "options": [
        "an",
        "a",
        "the",
        "--"
      ],
      "correct": "a"
    },
    {
      "question": "A: How many brothers do you have?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I have ___ brother.",
      "options": [
        "one",
        "a",
        "an",
        "the"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's her name?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ name is Mary.",
      "options": [
        "Her",
        "She",
        "His",
        "He"
      ],
      "correct": "a"
    },
    {
      "question": "A: Are you hungry?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___, I am.",
      "options": [
        "Yes",
        "No",
        "Fine",
        "Good"
      ],
      "correct": "a"
    },
    {
      "question": "A: Where is the book?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___ the table.",
      "options": [
        "on",
        "in",
        "at",
        "to"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's your favorite color?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: My favorite color is ___.",
      "options": [
        "red",
        "a red",
        "the red",
        "reds"
      ],
      "correct": "a"
    },
    {
      "question": "A: Can you speak English?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I ___ speak English.",
      "options": [
        "can",
        "do",
        "am",
        "have"
      ],
      "correct": "a"
    },
    {
      "question": "A: Is it cold today?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No, it's ___.",
      "options": [
        "hot",
        "heat",
        "heated",
        "heating"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's in your bag?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I have ___ books.",
      "options": [
        "some",
        "any",
        "a",
        "the"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you like bananas?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No, I ___.",
      "options": [
        "don't",
        "not",
        "no",
        "doesn't"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's his job?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: He's ___ teacher.",
      "options": [
        "a",
        "an",
        "the",
        "--"
      ],
      "correct": "a"
    },
    {
      "question": "A: Is this your phone?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, it's ___.",
      "options": [
        "mine",
        "my",
        "me",
        "I"
      ],
      "correct": "a"
    },
    {
      "question": "A: How many students are there?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: There ___ ten students.",
      "options": [
        "are",
        "is",
        "be",
        "am"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's the weather like?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___ today.",
      "options": [
        "sunny",
        "sun",
        "shine",
        "shining"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you have a pencil?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I ___ one.",
      "options": [
        "have",
        "has",
        "had",
        "having"
      ],
      "correct": "a"
    }
  ],
  "A2": [
    {
      "question": "I ___ to the cinema last weekend.",
      "options": [
        "go",
        "went",
        "gone",
        "going"
      ],
      "correct": "b"
    },
    {
      "question": "She ___ already ___ her homework.",
      "options": [
        "has ... done",
        "have ... done",
        "has ... did",
        "have ... did"
      ],
      "correct": "a"
    },
    {
      "question": "When I was young, I ___ play soccer every day.",
      "options": [
        "use to",
        "used to",
        "was",
        "used"
      ],
      "correct": "b"
    },
    {
      "question": "This book is ___ than that one.",
      "options": [
        "more interesting",
        "interestinger",
        "most interesting",
        "interesting"
      ],
      "correct": "a"
    },
    {
      "question": "If it ___ tomorrow, I'll stay home.",
      "options": [
        "rains",
        "rain",
        "will rain",
        "raining"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ be at home now. I'm not sure.",
      "options": [
        "might",
        "can",
        "should",
        "must"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ cooking dinner when she called.",
      "options": [
        "was",
        "were",
        "am",
        "is"
      ],
      "correct": "a"
    },
    {
      "question": "How long ___ you ___ English?",
      "options": [
        "have ... studied",
        "has ... studied",
        "are ... studying",
        "do ... study"
      ],
      "correct": "a"
    },
    {
      "question": "___ you like to come to my party?",
      "options": [
        "Would",
        "Will",
        "Do",
        "Are"
      ],
      "correct": "a"
    },
    {
      "question": "He ___ to work by car every day.",
      "options": [
        "drives",
        "drive",
        "driving",
        "drove"
      ],
      "correct": "a"
    },
    {
      "question": "I don't have ___ free time these days.",
      "options": [
        "much",
        "many",
        "a lot",
        "some"
      ],
      "correct": "a"
    },
    {
      "question": "We ___ visit our grandparents next week.",
      "options": [
        "are going to",
        "will",
        "going",
        "go to"
      ],
      "correct": "a"
    },
    {
      "question": "She's the ___ student in the class.",
      "options": [
        "best",
        "better",
        "good",
        "goodest"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ never ___ to Paris.",
      "options": [
        "have ... been",
        "has ... been",
        "have ... went",
        "has ... went"
      ],
      "correct": "a"
    },
    {
      "question": "___ there any milk left in the fridge?",
      "options": [
        "Is",
        "Are",
        "Have",
        "Has"
      ],
      "correct": "a"
    },
    {
      "question": "You ___ wear a uniform at this school.",
      "options": [
        "must",
        "should",
        "can",
        "might"
      ],
      "correct": "a"
    },
    {
      "question": "While I ___ TV, the phone rang.",
      "options": [
        "was watching",
        "watched",
        "watch",
        "watching"
      ],
      "correct": "a"
    },
    {
      "question": "She's ___ than her sister.",
      "options": [
        "taller",
        "more tall",
        "tallest",
        "most tall"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ the dishes yet.",
      "options": [
        "haven't done",
        "didn't do",
        "not done",
        "don't do"
      ],
      "correct": "a"
    },
    {
      "question": "What time ___ the movie start yesterday?",
      "options": [
        "did",
        "does",
        "do",
        "has"
      ],
      "correct": "a"
    },
    {
      "question": "There aren't ___ people at the party.",
      "options": [
        "many",
        "much",
        "a lot",
        "few"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ to the gym twice a week.",
      "options": [
        "go",
        "going",
        "goes",
        "went"
      ],
      "correct": "a"
    },
    {
      "question": "___ you ever ___ sushi?",
      "options": [
        "Have ... tried",
        "Has ... tried",
        "Have ... try",
        "Has ... try"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ in London for three years.",
      "options": [
        "has lived",
        "have lived",
        "lived",
        "living"
      ],
      "correct": "a"
    },
    {
      "question": "This is the ___ book I've ever read.",
      "options": [
        "most interesting",
        "more interesting",
        "interestingest",
        "very interesting"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ able to swim when I was five.",
      "options": [
        "was",
        "could",
        "can",
        "am"
      ],
      "correct": "a"
    },
    {
      "question": "What ___ you doing at 8 PM last night?",
      "options": [
        "were",
        "was",
        "are",
        "did"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ to call me tomorrow.",
      "options": [
        "promised",
        "promise",
        "promises",
        "promising"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ like spicy food before, but now I do.",
      "options": [
        "didn't use to",
        "wasn't",
        "haven't",
        "don't"
      ],
      "correct": "a"
    },
    {
      "question": "___ we have lunch together tomorrow?",
      "options": [
        "Shall",
        "Will",
        "Do",
        "Are"
      ],
      "correct": "a"
    },
    {
      "question": "He ___ be sick; he's not at work today.",
      "options": [
        "must",
        "should",
        "might",
        "can"
      ],
      "correct": "a"
    },
    {
      "question": "I've been studying English ___ three years.",
      "options": [
        "for",
        "since",
        "during",
        "while"
      ],
      "correct": "a"
    },
    {
      "question": "This exercise is ___ difficult ___ the last one.",
      "options": [
        "as ... as",
        "more ... than",
        "most ... than",
        "so ... as"
      ],
      "correct": "a"
    },
    {
      "question": "If you ___ hard, you will pass the exam.",
      "options": [
        "study",
        "studies",
        "studied",
        "studying"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ her keys last week.",
      "options": [
        "lost",
        "lose",
        "loses",
        "losing"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ to the radio while I work.",
      "options": [
        "usually listen",
        "usually listening",
        "use listen",
        "usually listens"
      ],
      "correct": "a"
    },
    {
      "question": "___ you mind opening the window?",
      "options": [
        "Would",
        "Will",
        "Do",
        "Are"
      ],
      "correct": "a"
    },
    {
      "question": "They ___ to the beach every summer.",
      "options": [
        "go",
        "goes",
        "went",
        "going"
      ],
      "correct": "a"
    },
    {
      "question": "I ___ my homework before dinner yesterday.",
      "options": [
        "finished",
        "finish",
        "finishing",
        "finishes"
      ],
      "correct": "a"
    },
    {
      "question": "She ___ English very well now.",
      "options": [
        "speaks",
        "speak",
        "speaking",
        "spoke"
      ],
      "correct": "a"
    },
    {
      "question": "A: What time do you usually wake up?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I wake up ___ 7 o'clock every morning.",
      "options": [
        "at",
        "in",
        "on",
        "by"
      ],
      "correct": "a"
    },
    {
      "question": "A: Where's my book?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___ the table in the kitchen.",
      "options": [
        "on",
        "in",
        "at",
        "by"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you like pizza?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, it's my ___ food!",
      "options": [
        "favorite",
        "better",
        "best",
        "good"
      ],
      "correct": "a"
    },
    {
      "question": "A: How was your weekend?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It was ___. I went to the beach.",
      "options": [
        "great",
        "greatly",
        "greater",
        "greatest"
      ],
      "correct": "a"
    },
    {
      "question": "A: Can you swim?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No, I ___ swim very well.",
      "options": [
        "can't",
        "don't",
        "am not",
        "not"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's the weather like today?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___ and sunny.",
      "options": [
        "warm",
        "warming",
        "warmed",
        "warms"
      ],
      "correct": "a"
    },
    {
      "question": "A: Are you hungry?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I ___ like a sandwich.",
      "options": [
        "would",
        "will",
        "want",
        "am"
      ],
      "correct": "a"
    },
    {
      "question": "A: How often do you exercise?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I go to the gym ___ a week.",
      "options": [
        "twice",
        "two times",
        "second",
        "double"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's your sister doing?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: She ___ television right now.",
      "options": [
        "is watching",
        "watches",
        "watch",
        "watched"
      ],
      "correct": "a"
    },
    {
      "question": "A: Did you enjoy the movie?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, it was very ___.",
      "options": [
        "interesting",
        "interest",
        "interested",
        "interests"
      ],
      "correct": "a"
    },
    {
      "question": "A: What time is your class?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It ___ at 9:30.",
      "options": [
        "starts",
        "starting",
        "start",
        "started"
      ],
      "correct": "a"
    },
    {
      "question": "A: Where do you work?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I work ___ a hospital.",
      "options": [
        "in",
        "at",
        "on",
        "by"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you have any brothers?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I have ___ brothers.",
      "options": [
        "two",
        "second",
        "twice",
        "double"
      ],
      "correct": "a"
    },
    {
      "question": "A: What did you do yesterday?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I ___ to the supermarket.",
      "options": [
        "went",
        "go",
        "going",
        "gone"
      ],
      "correct": "a"
    },
    {
      "question": "A: How do you go to work?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I usually go ___ bus.",
      "options": [
        "by",
        "with",
        "in",
        "on"
      ],
      "correct": "a"
    },
    {
      "question": "A: Would you like some coffee?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No, thank you. I ___ like coffee.",
      "options": [
        "don't",
        "not",
        "am not",
        "doesn't"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's your favorite season?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I ___ summer the best.",
      "options": [
        "like",
        "likes",
        "liking",
        "liked"
      ],
      "correct": "a"
    },
    {
      "question": "A: Can I help you?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I'm ___ for the bathroom.",
      "options": [
        "looking",
        "look",
        "looked",
        "looks"
      ],
      "correct": "a"
    },
    {
      "question": "A: How was school today?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It was ___. We had a test.",
      "options": [
        "okay",
        "good",
        "fine",
        "well"
      ],
      "correct": "a"
    },
    {
      "question": "A: What time do you go to bed?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I usually go to bed ___ 10:30.",
      "options": [
        "at",
        "in",
        "on",
        "by"
      ],
      "correct": "a"
    },
    {
      "question": "A: Is this your car?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No, it's my ___.",
      "options": [
        "brother's",
        "brothers",
        "brother",
        "brothers'"
      ],
      "correct": "a"
    },
    {
      "question": "A: How old are you?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I ___ twenty years old.",
      "options": [
        "am",
        "have",
        "be",
        "is"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you like dancing?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I ___ dancing very much.",
      "options": [
        "enjoy",
        "enjoys",
        "enjoyed",
        "enjoying"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's your job?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'm ___ teacher.",
      "options": [
        "a",
        "the",
        "an",
        "--"
      ],
      "correct": "a"
    },
    {
      "question": "A: How was your lunch?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It was very ___.",
      "options": [
        "good",
        "well",
        "nice",
        "finely"
      ],
      "correct": "a"
    }
  ],
  "B1": [
    {
      "question": "A: What's your opinion ___ the new restaurant?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I think it's excellent.",
      "options": [
        "about",
        "of",
        "on",
        "in"
      ],
      "correct": "a"
    },
    {
      "question": "A: I can't find my glasses anywhere.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: You ___ have left them at the office.",
      "options": [
        "must",
        "should",
        "would",
        "could"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ you mind helping me with these bags?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Not at all!",
      "options": [
        "Would",
        "Will",
        "Could",
        "Can"
      ],
      "correct": "a"
    },
    {
      "question": "A: I've been working ___ 8 o'clock this morning.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: You must be tired!",
      "options": [
        "since",
        "for",
        "from",
        "at"
      ],
      "correct": "a"
    },
    {
      "question": "A: What ___ you do if you won the lottery?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'd buy a big house.",
      "options": [
        "would",
        "will",
        "should",
        "could"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'm not sure if I can come to the party.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Let me know as soon as you ___ out.",
      "options": [
        "find",
        "will find",
        "found",
        "finding"
      ],
      "correct": "a"
    },
    {
      "question": "A: How long ___ you been studying English?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: For about three years.",
      "options": [
        "have",
        "has",
        "had",
        "are"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'm really looking forward ___ the weekend.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me too!",
      "options": [
        "to",
        "for",
        "at",
        "on"
      ],
      "correct": "a"
    },
    {
      "question": "A: She's very good ___ playing the piano.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, she practices a lot.",
      "options": [
        "at",
        "in",
        "with",
        "on"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ you like another cup of coffee?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, please.",
      "options": [
        "Would",
        "Will",
        "Do",
        "Are"
      ],
      "correct": "a"
    },
    {
      "question": "A: I wish I ___ speak Chinese.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Why don't you take classes?",
      "options": [
        "could",
        "can",
        "would",
        "will"
      ],
      "correct": "a"
    },
    {
      "question": "A: If I ___ you, I wouldn't worry about it.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Really?",
      "options": [
        "were",
        "was",
        "am",
        "be"
      ],
      "correct": "a"
    },
    {
      "question": "A: She suggested ___ to the cinema.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's a good idea!",
      "options": [
        "going",
        "to go",
        "go",
        "goes"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'm not used ___ up so early.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: You'll get used to it.",
      "options": [
        "to getting",
        "getting",
        "get",
        "to get"
      ],
      "correct": "a"
    },
    {
      "question": "A: What time did you ___ home last night?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Around midnight.",
      "options": [
        "get",
        "got",
        "getting",
        "gets"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'd rather ___ at home tonight.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's fine with me.",
      "options": [
        "stay",
        "to stay",
        "staying",
        "stayed"
      ],
      "correct": "a"
    },
    {
      "question": "A: She's been ___ a headache all day.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: She should see a doctor.",
      "options": [
        "having",
        "have",
        "has",
        "had"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ you like to come to dinner on Saturday?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'd love to!",
      "options": [
        "Would",
        "Will",
        "Do",
        "Are"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'm really tired ___ studying.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Take a break then.",
      "options": [
        "of",
        "from",
        "with",
        "about"
      ],
      "correct": "a"
    },
    {
      "question": "A: She ___ have gone home already.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I think so.",
      "options": [
        "must",
        "should",
        "would",
        "could"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'm not very good ___ mathematics.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Neither am I.",
      "options": [
        "at",
        "in",
        "with",
        "on"
      ],
      "correct": "a"
    },
    {
      "question": "A: What ___ you been doing?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Just watching TV.",
      "options": [
        "have",
        "has",
        "had",
        "are"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'm thinking ___ changing my job.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Really? Why?",
      "options": [
        "of",
        "about",
        "on",
        "in"
      ],
      "correct": "a"
    },
    {
      "question": "A: She's responsible ___ the marketing department.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's right.",
      "options": [
        "for",
        "of",
        "with",
        "about"
      ],
      "correct": "a"
    },
    {
      "question": "A: I'm worried ___ my exam next week.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Don't worry, you'll do fine.",
      "options": [
        "about",
        "of",
        "for",
        "with"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ you mind if I opened the window?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Not at all.",
      "options": [
        "Would",
        "Will",
        "Do",
        "Are"
      ],
      "correct": "a"
    },
    {
      "question": "A: I've been waiting ___ two hours!<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'm so sorry I'm late.",
      "options": [
        "for",
        "since",
        "during",
        "while"
      ],
      "correct": "a"
    },
    {
      "question": "A: How was your vacation?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It was absolutely ___! I had a great time.",
      "options": [
        "wonderful",
        "wonder",
        "wonderfully",
        "wondering"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you want to go to the cinema tonight?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'm sorry, but I ___ to study for my exam.",
      "options": [
        "need",
        "must",
        "should",
        "have"
      ],
      "correct": "a"
    },
    {
      "question": "A: What time does the meeting start?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'm not sure, but I ___ find out for you.",
      "options": [
        "can",
        "would",
        "will",
        "should"
      ],
      "correct": "c"
    },
    {
      "question": "A: I've lost my phone!<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Don't worry, I'll help you ___ for it.",
      "options": [
        "look",
        "looking",
        "to look",
        "looked"
      ],
      "correct": "a"
    },
    {
      "question": "A: How long have you known Sarah?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I ___ her since high school.",
      "options": [
        "have known",
        "know",
        "knew",
        "am knowing"
      ],
      "correct": "a"
    },
    {
      "question": "A: This exercise is very difficult.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Would you like me to ___ you with it?",
      "options": [
        "help",
        "helping",
        "helped",
        "to help"
      ],
      "correct": "a"
    },
    {
      "question": "A: What did you think of the book?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I found it very ___ to read.",
      "options": [
        "interesting",
        "interested",
        "interest",
        "interests"
      ],
      "correct": "a"
    },
    {
      "question": "A: Are you going to the party?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, I'm really looking ___ to it!",
      "options": [
        "forward",
        "ahead",
        "up",
        "on"
      ],
      "correct": "a"
    },
    {
      "question": "A: Why are you so tired?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I ___ very well last night.",
      "options": [
        "didn't sleep",
        "haven't slept",
        "don't sleep",
        "wasn't sleeping"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's wrong with your computer?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It keeps ___ down for no reason.",
      "options": [
        "shutting",
        "to shut",
        "shut",
        "shuts"
      ],
      "correct": "a"
    },
    {
      "question": "A: Have you finished the report?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'm still ___ on it.",
      "options": [
        "working",
        "work",
        "worked",
        "works"
      ],
      "correct": "a"
    },
    {
      "question": "A: Where's Maria?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: She ___ be in the library. I saw her going there.",
      "options": [
        "must",
        "should",
        "would",
        "could"
      ],
      "correct": "a"
    },
    {
      "question": "A: This soup tastes strange.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: You're right. There's ___ salt in it.",
      "options": [
        "too much",
        "too many",
        "very much",
        "so many"
      ],
      "correct": "a"
    },
    {
      "question": "A: Can I borrow your pen?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Of course! Just remember to give it ___ to me later.",
      "options": [
        "back",
        "away",
        "over",
        "up"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's the weather like today?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's ___ to rain later.",
      "options": [
        "supposed",
        "thinking",
        "meant",
        "going"
      ],
      "correct": "d"
    },
    {
      "question": "A: Did you enjoy the concert?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, the music was ___ amazing!",
      "options": [
        "absolutely",
        "complete",
        "totally",
        "fully"
      ],
      "correct": "a"
    },
    {
      "question": "A: Why didn't you come to the meeting?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I ___ stuck in traffic.",
      "options": [
        "got",
        "had",
        "was",
        "became"
      ],
      "correct": "a"
    },
    {
      "question": "A: Do you need any help?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No thanks, I can manage ___ myself.",
      "options": [
        "by",
        "with",
        "for",
        "on"
      ],
      "correct": "a"
    },
    {
      "question": "A: What's your new job like?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It's quite ___, but I'm enjoying it.",
      "options": [
        "challenging",
        "challenged",
        "challenge",
        "challenges"
      ],
      "correct": "a"
    },
    {
      "question": "A: When will the results be published?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: They should be ___ next week.",
      "options": [
        "out",
        "up",
        "over",
        "in"
      ],
      "correct": "a"
    }
  ],
  "B2": [
    {
      "question": "A: I wish I ___ the job offer when I had the chance.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, you really should have.",
      "options": [
        "had accepted",
        "would accept",
        "accepted",
        "have accepted"
      ],
      "correct": "a"
    },
    {
      "question": "A: No sooner ___ home than the phone rang.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: What a coincidence!",
      "options": [
        "had I got",
        "I had got",
        "did I get",
        "I got"
      ],
      "correct": "a"
    },
    {
      "question": "A: The project ___ by the end of next month.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's quite ambitious.",
      "options": [
        "will have been completed",
        "will be completing",
        "will complete",
        "would complete"
      ],
      "correct": "a"
    },
    {
      "question": "A: Had I known about the meeting, I ___ it.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, it was important.",
      "options": [
        "would have attended",
        "had attended",
        "would attend",
        "will attend"
      ],
      "correct": "a"
    },
    {
      "question": "A: She ___ have been promoted if she hadn't worked so hard.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: True, she deserved it.",
      "options": [
        "wouldn't",
        "couldn't",
        "shouldn't",
        "mustn't"
      ],
      "correct": "a"
    },
    {
      "question": "A: It's high time we ___ about our future plans.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I agree completely.",
      "options": [
        "thought",
        "think",
        "are thinking",
        "will think"
      ],
      "correct": "a"
    },
    {
      "question": "A: The report ___ to have been submitted last week.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, there's been a delay.",
      "options": [
        "was supposed",
        "is supposed",
        "has supposed",
        "had supposed"
      ],
      "correct": "a"
    },
    {
      "question": "A: Not until she ___ the email did she realize her mistake.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's unfortunate.",
      "options": [
        "had sent",
        "sent",
        "has sent",
        "was sending"
      ],
      "correct": "a"
    },
    {
      "question": "A: The new policy, ___ comes into effect next month, will benefit everyone.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's good news.",
      "options": [
        "which",
        "that",
        "what",
        "whose"
      ],
      "correct": "a"
    },
    {
      "question": "A: She insisted ___ accompanying me to the airport.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: How kind of her!",
      "options": [
        "on",
        "in",
        "at",
        "for"
      ],
      "correct": "a"
    },
    {
      "question": "A: The conference ___ place regardless of the weather conditions.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Good to know.",
      "options": [
        "will take",
        "takes",
        "is taking",
        "took"
      ],
      "correct": "a"
    },
    {
      "question": "A: Were it not for your help, I ___ have managed.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: You're welcome.",
      "options": [
        "wouldn't",
        "couldn't",
        "shouldn't",
        "might not"
      ],
      "correct": "a"
    },
    {
      "question": "A: She'd rather ___ informed about the changes earlier.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, it was quite sudden.",
      "options": [
        "have been",
        "be",
        "being",
        "to be"
      ],
      "correct": "a"
    },
    {
      "question": "A: The more you practice, ___ you'll become.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's true.",
      "options": [
        "the more proficient",
        "more proficient",
        "the proficient",
        "much proficient"
      ],
      "correct": "a"
    },
    {
      "question": "A: Should you ___ any assistance, don't hesitate to ask.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Thank you.",
      "options": [
        "require",
        "requires",
        "required",
        "requiring"
      ],
      "correct": "a"
    },
    {
      "question": "A: Little ___ they know about the surprise party.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Let's keep it that way!",
      "options": [
        "did",
        "do",
        "have",
        "would"
      ],
      "correct": "a"
    },
    {
      "question": "A: By the time we arrive, the movie ___ .<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: We should hurry then.",
      "options": [
        "will have started",
        "will start",
        "starts",
        "is starting"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ the deadline approaches, the team becomes more focused.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's natural.",
      "options": [
        "As",
        "While",
        "During",
        "When"
      ],
      "correct": "a"
    },
    {
      "question": "A: She ___ to have been one of the most influential artists of her time.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Indeed.",
      "options": [
        "is said",
        "says",
        "has said",
        "was saying"
      ],
      "correct": "a"
    },
    {
      "question": "A: Under no circumstances ___ the confidential information be shared.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Understood.",
      "options": [
        "should",
        "would",
        "could",
        "might"
      ],
      "correct": "a"
    },
    {
      "question": "A: The project ___ considerable planning and preparation.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, it's quite complex.",
      "options": [
        "calls for",
        "calls on",
        "calls up",
        "calls in"
      ],
      "correct": "a"
    },
    {
      "question": "A: Not only ___ the deadline, but she also improved the original design.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Impressive!",
      "options": [
        "did she meet",
        "she met",
        "has she met",
        "she had met"
      ],
      "correct": "a"
    },
    {
      "question": "A: The committee ___ the proposal for several hours now.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: They're being thorough.",
      "options": [
        "has been discussing",
        "is discussing",
        "discusses",
        "discussed"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ having completed the course, she applied for the position.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Smart move.",
      "options": [
        "Upon",
        "After",
        "While",
        "During"
      ],
      "correct": "a"
    },
    {
      "question": "A: The report ___ by tomorrow morning at the latest.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: I'll make sure of that.",
      "options": [
        "must be submitted",
        "must submit",
        "must be submitting",
        "must have submitted"
      ],
      "correct": "a"
    },
    {
      "question": "A: Did they manage to close the deal?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yes, but only after negotiations had ___ on for several months.",
      "options": [
        "dragged",
        "pulled",
        "held",
        "drawn"
      ],
      "correct": "a"
    },
    {
      "question": "A: Seldom ___ such an inspiring keynote address.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It truly moved the entire audience.",
      "options": [
        "have I heard",
        "I have heard",
        "did I hear",
        "had I hearing"
      ],
      "correct": "a"
    },
    {
      "question": "A: If he hadn't taken the earlier flight, he ___ here with us right now.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's mixed conditionals at work!",
      "options": [
        "wouldn't be",
        "won't be",
        "hadn't been",
        "wouldn't have been"
      ],
      "correct": "a"
    },
    {
      "question": "A: The board recommended that the CEO ___ immediate measures to restore confidence.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: It was a crucial decision.",
      "options": [
        "take",
        "takes",
        "took",
        "taking"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ all night, she was utterly exhausted by the time of the presentation.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: She should get some rest.",
      "options": [
        "Having studied",
        "Studied",
        "Have studied",
        "Having study"
      ],
      "correct": "a"
    },
    {
      "question": "A: The company is said to ___ millions in the overseas expansion.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That explains the financial restructuring.",
      "options": [
        "have lost",
        "lose",
        "losing",
        "had lost"
      ],
      "correct": "a"
    },
    {
      "question": "A: Much ___ I appreciate your offer, I am afraid I must decline.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's completely understandable.",
      "options": [
        "as",
        "so",
        "than",
        "though"
      ],
      "correct": "a"
    },
    {
      "question": "A: Scarcely had the plane taken off ___ severe turbulence began.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That must have been terrifying.",
      "options": [
        "when",
        "than",
        "then",
        "until"
      ],
      "correct": "a"
    },
    {
      "question": "A: The manager insisted on ___ with the project despite the initial setbacks.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Her determination paid off.",
      "options": [
        "proceeding",
        "to proceed",
        "proceed",
        "proceeded"
      ],
      "correct": "a"
    },
    {
      "question": "A: In no way ___ responsible for the misunderstanding.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Glad we cleared that up.",
      "options": [
        "can she be held",
        "she can be held",
        "she is held",
        "can be held she"
      ],
      "correct": "a"
    },
    {
      "question": "A: By next December, she ___ as head of department for a full decade.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: A remarkable milestone!",
      "options": [
        "will have been serving",
        "will be serving",
        "will serve",
        "is serving"
      ],
      "correct": "a"
    },
    {
      "question": "A: He spoke with such conviction that nobody dared ___ his authority.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: He is definitely a natural leader.",
      "options": [
        "question",
        "questioning",
        "questioned",
        "to questioning"
      ],
      "correct": "a"
    },
    {
      "question": "A: The proposal was approved ___ the committee raised some minor objections.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: That's great progress.",
      "options": [
        "even though",
        "in spite",
        "despite of",
        "whereas"
      ],
      "correct": "a"
    },
    {
      "question": "A: Never before ___ so many technological breakthroughs in a single year.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Artificial intelligence is accelerating everything.",
      "options": [
        "have we witnessed",
        "we have witnessed",
        "did we witnessed",
        "we witnessed"
      ],
      "correct": "a"
    },
    {
      "question": "A: Had it not been for the prompt medical attention, the outcome ___ far worse.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Thankfully the team reacted immediately.",
      "options": [
        "could have been",
        "could be",
        "can have been",
        "had been"
      ],
      "correct": "a"
    }
  ]
},
  espanol: {
  "A1": [
    {
      "question": "A: ¿Tienes hermanos?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___, tengo dos.",
      "options": [
        "Nadie",
        "Nada",
        "Sí",
        "No"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Dónde está el baño?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Está ___ la derecha.",
      "options": [
        "de",
        "por",
        "en",
        "a"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Cuál es tu apellido?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ García.",
      "options": [
        "Se llama",
        "Es",
        "Me apellido",
        "Mi apellido es"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿___ tu hermano?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tiene 15 años.",
      "options": [
        "Qué años tiene",
        "Cuántos años tiene",
        "Cuál edad tiene",
        "Qué edad tiene"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿De dónde eres?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Soy ___.",
      "options": [
        "en México",
        "de México",
        "mexicano",
        "México"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Qué ___?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Estudio medicina.",
      "options": [
        "estudio",
        "estudiamos",
        "estudias",
        "estudia"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Cuándo es tu cumpleaños?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es ___ 15 de marzo.",
      "options": [
        "en",
        "de",
        "el",
        "a"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Tienes mascotas?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___, tengo un perro.",
      "options": [
        "No",
        "También",
        "Tampoco",
        "Sí"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Qué te gusta comer?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me gusta ___ pasta.",
      "options": [
        "el",
        "los",
        "las",
        "la"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Cómo vas al trabajo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Voy ___ autobús.",
      "options": [
        "a",
        "con",
        "por",
        "en"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Qué hora ___?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Son las tres.",
      "options": [
        "están",
        "es",
        "son",
        "está"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Dónde está el libro?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Está ___ la mesa.",
      "options": [
        "en",
        "a",
        "sobre",
        "de"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ es tu número favorito?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: El siete.",
      "options": [
        "Cómo",
        "Cuál",
        "Cuánto",
        "Qué"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Qué deporte ___?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Juego fútbol.",
      "options": [
        "entrenas",
        "practicas",
        "haces",
        "juegas"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Cómo se llama tu mejor amigo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ Juan.",
      "options": [
        "Está",
        "Se llama",
        "Tiene",
        "Es"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Qué tipo de música ___?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me gusta el rock.",
      "options": [
        "gustas",
        "gusta",
        "te gusta",
        "te gustan"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ tu película favorita?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Titanic.",
      "options": [
        "Dónde es",
        "Cómo es",
        "Qué es",
        "Cuál es"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Cómo es tu casa?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es ___ y bonita.",
      "options": [
        "muy",
        "bien",
        "mucho",
        "grande"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Qué te gusta hacer?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me gusta ___.",
      "options": [
        "leo",
        "leyendo",
        "leído",
        "leer"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿___ estación del año prefieres?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: El verano.",
      "options": [
        "Cómo",
        "Qué",
        "Cuál",
        "Cuánta"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Te gustan los animales?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___, me gustan los gatos.",
      "options": [
        "No",
        "También",
        "Sí",
        "Tampoco"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ días trabajas?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: De lunes a viernes.",
      "options": [
        "Dónde",
        "Cuáles",
        "Cuántos",
        "Qué"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Qué ___ beber?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Un café, por favor.",
      "options": [
        "quiere",
        "quieres",
        "queremos",
        "quiero"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ la televisión?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, me gusta mucho.",
      "options": [
        "Gusta",
        "Te gustan",
        "Te gusta",
        "Gustas"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ juegas fútbol?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Los domingos.",
      "options": [
        "Dónde",
        "Por qué",
        "Cómo",
        "Cuándo"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿Te gustan las frutas?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___, me gustan las manzanas.",
      "options": [
        "No",
        "Sí",
        "Tampoco",
        "También"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ es tu cantante favorito?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Shakira.",
      "options": [
        "Qué",
        "Cómo",
        "Quién",
        "Cuál"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ vives?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: En un apartamento.",
      "options": [
        "Por qué",
        "Dónde",
        "Cuándo",
        "Cómo"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Cómo se llama tu profesor?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ Carlos.",
      "options": [
        "Es",
        "Está",
        "Se llama",
        "Tiene"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ está tu casa?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Cerca del parque.",
      "options": [
        "Qué",
        "Cuál",
        "Dónde",
        "Cómo"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Cuántos idiomas hablas?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Hablo dos ___: español e inglés.",
      "options": [
        "idioma",
        "idiomas",
        "lengua",
        "palabras"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿A qué hora desayunas?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Desayuno ___ las ocho de la mañana.",
      "options": [
        "en",
        "a",
        "de",
        "por"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Quién es esa chica?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es ___ hermana de Pedro.",
      "options": [
        "un",
        "una",
        "el",
        "la"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿De qué color es tu coche?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es ___.",
      "options": [
        "rojo",
        "roja",
        "rojos",
        "rojas"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Cómo estás hoy?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Muy ___, gracias. ¿Y tú?",
      "options": [
        "bueno",
        "bien",
        "buena",
        "mejor"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Dónde trabajas?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Trabajo ___ un hospital.",
      "options": [
        "a",
        "de",
        "en",
        "por"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Tienes un boli?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, aquí ___ tienes.",
      "options": [
        "lo",
        "la",
        "los",
        "le"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Qué compras en el mercado?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compro verduras y ___.",
      "options": [
        "panes",
        "fruta",
        "leches",
        "carnes"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Vas al gimnasio hoy?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No, hoy no ___ tiempo.",
      "options": [
        "tienes",
        "tengo",
        "tiene",
        "tenemos"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Cuándo es la fiesta?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es ___ sábado por la noche.",
      "options": [
        "en",
        "el",
        "a",
        "de"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Te gusta la comida española?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, me ___ mucho la paella.",
      "options": [
        "gusta",
        "gustan",
        "gusto",
        "gustas"
      ],
      "correct": "a"
    }
  ],
  "A2": [
    {
      "question": "A: ¿Qué ___ el fin de semana pasado?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Fui al cine.",
      "options": [
        "hiciste",
        "has hecho",
        "haces",
        "harás"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ has estado en México?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, dos veces.",
      "options": [
        "Cuántas veces",
        "Dónde",
        "Cuándo",
        "Por qué"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Qué ___ hacer mañana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Voy a estudiar.",
      "options": [
        "vas",
        "vas a",
        "tienes",
        "quieres"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ tiempo llevas estudiando español?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tres meses.",
      "options": [
        "Qué",
        "Cuál",
        "Cuánto",
        "Cuándo"
      ],
      "correct": "c"
    },
    {
      "question": "A: Mi hermano es ___ que yo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ¿Cuántos años tiene?",
      "options": [
        "mayor",
        "más grande",
        "más viejo",
        "más alto"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ te duele?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me duele la cabeza.",
      "options": [
        "Cuál",
        "Qué",
        "Dónde",
        "Cómo"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Con qué frecuencia ___ deporte?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tres veces por semana.",
      "options": [
        "juegas",
        "haces",
        "practicas",
        "entrenas"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ cocinar comida mexicana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, sé hacer tacos.",
      "options": [
        "Puedes",
        "Quieres",
        "Sabes",
        "Debes"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Qué ___ si llueve mañana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me quedaré en casa.",
      "options": [
        "haces",
        "harás",
        "hiciste",
        "has hecho"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ venir a mi fiesta?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo siento, no puedo.",
      "options": [
        "Podrías",
        "Puedes",
        "Podrás",
        "Pudiste"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Qué ___ hacer este fin de semana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Todavía no lo sé.",
      "options": [
        "piensas",
        "crees",
        "quieres",
        "vas a"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ muy cansado últimamente.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Deberías descansar más.",
      "options": [
        "Estoy",
        "Soy",
        "Tengo",
        "He"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ te fue en el examen?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Bastante bien.",
      "options": [
        "Qué",
        "Cómo",
        "Cuál",
        "Dónde"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ prefieres, té o café?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Prefiero el café.",
      "options": [
        "Cuál",
        "Qué",
        "Cuánto",
        "Dónde"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Por qué ___ tarde ayer?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Porque perdí el autobús.",
      "options": [
        "llegaste",
        "has llegado",
        "llegas",
        "llegarás"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ tiempo hace en tu ciudad?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Hace mucho frío.",
      "options": [
        "Cuál",
        "Qué",
        "Cómo",
        "Cuánto"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ es más grande, Madrid o Barcelona?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Madrid.",
      "options": [
        "Cuál",
        "Qué",
        "Quién",
        "Dónde"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ has terminado la tarea?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Todavía no.",
      "options": [
        "Si",
        "Ya",
        "Aún",
        "Cuando"
      ],
      "correct": "b"
    },
    {
      "question": "A: Me duele la garganta y tengo fiebre.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ ir al médico.",
      "options": [
        "Debes",
        "Puedes",
        "Quieres",
        "Sabes"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ es tu película favorita?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Porque me gusta más que las otras.",
      "options": [
        "Por qué",
        "Cuál",
        "Dónde",
        "Cómo"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ al gimnasio ayer?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No, estaba cerrado.",
      "options": [
        "Fuiste",
        "Has ido",
        "Vas",
        "Irás"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ está tu hermano?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Está mejor, gracias.",
      "options": [
        "Qué",
        "Cómo",
        "Dónde",
        "Cuándo"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ veces has estado en España?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Nunca he estado.",
      "options": [
        "Cuántas",
        "Qué",
        "Cuáles",
        "Cuándo"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ es más importante para ti?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: La familia.",
      "options": [
        "Qué",
        "Cuál",
        "Quién",
        "Dónde"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ te gusta más vivir?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: En la ciudad.",
      "options": [
        "Dónde",
        "Cuándo",
        "Por qué",
        "Cómo"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ aprendiste a cocinar?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Con mi abuela.",
      "options": [
        "Dónde",
        "Cuándo",
        "Con quién",
        "Por qué"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ vas a quedarte en Madrid?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Dos semanas.",
      "options": [
        "Cuánto tiempo",
        "Qué tiempo",
        "Cuál tiempo",
        "Qué hora"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ prefieres ir de vacaciones?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: A la playa.",
      "options": [
        "Dónde",
        "Cuándo",
        "Por qué",
        "Adónde"
      ],
      "correct": "d"
    },
    {
      "question": "A: ¿___ estudiando español?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Desde hace dos años.",
      "options": [
        "Cuándo llevas",
        "Cuánto llevas",
        "Qué llevas",
        "Dónde llevas"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ es tu comida favorita?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: La paella.",
      "options": [
        "Cuál",
        "Qué",
        "Dónde",
        "Por qué"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ te sientes hoy?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Mucho mejor, gracias.",
      "options": [
        "Qué",
        "Cuál",
        "Cómo",
        "Dónde"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ es más difícil, español o inglés?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Para mí, el inglés.",
      "options": [
        "Qué",
        "Cuál",
        "Quién",
        "Dónde"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ has estado enfermo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Desde el lunes.",
      "options": [
        "Cuándo",
        "Desde cuándo",
        "Hasta cuándo",
        "Por cuándo"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ prefieres hacer ejercicio?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Por la mañana.",
      "options": [
        "Dónde",
        "Por qué",
        "Cuándo",
        "Cómo"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ vas a la piscina?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Dos veces por semana.",
      "options": [
        "Cada cuándo",
        "Dónde",
        "Por qué",
        "Cómo"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ te parece la clase?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Muy interesante.",
      "options": [
        "Qué",
        "Cuál",
        "Cómo",
        "Dónde"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ prefieres, tren o avión?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Prefiero el tren.",
      "options": [
        "Qué",
        "Cuál",
        "Dónde",
        "Cómo"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ has estado esperando?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Media hora.",
      "options": [
        "Cuánto tiempo",
        "Qué tiempo",
        "Cuál tiempo",
        "Cómo tiempo"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ es tu estación favorita?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: El verano.",
      "options": [
        "Qué",
        "Cuál",
        "Dónde",
        "Cómo"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ aprendiste a nadar?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Cuando era pequeño.",
      "options": [
        "Dónde",
        "Por qué",
        "Cuándo",
        "Cómo"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ es más alto que tú?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Mi hermano.",
      "options": [
        "Quién",
        "Qué",
        "Cuál",
        "Dónde"
      ],
      "correct": "a"
    }
  ],
  "B1": [
    {
      "question": "A: Si ___ más tiempo libre, ¿qué harías?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Viajaría más.",
      "options": [
        "tendrías",
        "tuvieras",
        "tienes",
        "tengas"
      ],
      "correct": "b"
    },
    {
      "question": "A: Me han ofrecido un trabajo en el extranjero.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yo que tú, lo ___.",
      "options": [
        "aceptaría",
        "aceptara",
        "acepté",
        "aceptaba"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ que el cambio climático es un problema grave?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, definitivamente.",
      "options": [
        "Piensas",
        "Crees",
        "Opinas",
        "Consideras"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Qué ___ hacer si te hubieras quedado sin trabajo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Buscaría otro inmediatamente.",
      "options": [
        "habrías",
        "hubieras",
        "habrás",
        "harías"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ que llegues a tiempo a la reunión.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No te preocupes, llegaré.",
      "options": [
        "Es necesario",
        "Es importante",
        "Es probable",
        "Es posible"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Qué opinas sobre ___ prohibir los coches en el centro?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me parece una buena idea.",
      "options": [
        "que",
        "de que",
        "de",
        "para"
      ],
      "correct": "a"
    },
    {
      "question": "A: Antes de ___ la decisión, deberías pensarlo bien.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tienes razón.",
      "options": [
        "tomar",
        "tomando",
        "tomas",
        "tomado"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ cuenta de que has cometido un error?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, me acabo de dar cuenta.",
      "options": [
        "Te has dado",
        "Te das",
        "Te darás",
        "Te diste"
      ],
      "correct": "a"
    },
    {
      "question": "A: Me gustaría que ___ a mi fiesta de cumpleaños.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ¡Por supuesto que iré!",
      "options": [
        "vengas",
        "vienes",
        "vendrás",
        "vinieras"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ explicarme cómo funciona esto?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Con mucho gusto.",
      "options": [
        "Podrías",
        "Puedes",
        "Podrás",
        "Pudiste"
      ],
      "correct": "a"
    },
    {
      "question": "A: No creo que ___ tan difícil como parece.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tienes razón.",
      "options": [
        "es",
        "sea",
        "será",
        "sería"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿Qué ___ si pudieras viajar en el tiempo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Visitaría el futuro.",
      "options": [
        "harías",
        "haces",
        "hiciste",
        "harás"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que hubieras avisado antes.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo siento, no pude.",
      "options": [
        "Mejor",
        "Hubiera sido mejor",
        "Sería mejor",
        "Es mejor"
      ],
      "correct": "b"
    },
    {
      "question": "A: ¿___ seguro de lo que dices?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Completamente.",
      "options": [
        "Estás",
        "Eres",
        "Tienes",
        "Has"
      ],
      "correct": "a"
    },
    {
      "question": "A: A pesar de ___ enfermo, fue a trabajar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No debería haberlo hecho.",
      "options": [
        "estar",
        "ser",
        "que está",
        "que es"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Qué ___ hacer este fin de semana si no llueve?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ir de excursión.",
      "options": [
        "te gustaría",
        "te gustará",
        "te gusta",
        "te gustaré"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es importante ___ las normas de seguridad.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Estoy de acuerdo.",
      "options": [
        "cumplir",
        "cumpliendo",
        "que cumple",
        "de cumplir"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ participar en el proyecto?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Me encantaría.",
      "options": [
        "Te interesaría",
        "Te interesa",
        "Te interesará",
        "Te interesó"
      ],
      "correct": "a"
    },
    {
      "question": "A: Cuando ___ el informe, envíamelo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo haré.",
      "options": [
        "termines",
        "terminas",
        "terminarás",
        "terminaste"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que no vengas si no te encuentras bien.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Gracias por entender.",
      "options": [
        "Es mejor",
        "Será mejor",
        "Sería mejor",
        "Ha sido mejor"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿___ alguna vez pensado en vivir en el extranjero?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, muchas veces.",
      "options": [
        "Has",
        "Habrás",
        "Habías",
        "Hubieras"
      ],
      "correct": "a"
    },
    {
      "question": "A: Me alegro de que ___ conseguido el trabajo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ¡Gracias!",
      "options": [
        "hayas",
        "has",
        "habías",
        "hubieras"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ prefieres que nos reunamos?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: En mi oficina.",
      "options": [
        "Dónde",
        "Cuándo",
        "Por qué",
        "Cómo"
      ],
      "correct": "a"
    },
    {
      "question": "A: No creo que ___ necesario trabajar tanto.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Quizás tengas razón.",
      "options": [
        "es",
        "sea",
        "será",
        "sería"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ que no hubieras venido.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo siento mucho.",
      "options": [
        "Preferiría",
        "Prefiero",
        "Preferí",
        "Prefería"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Qué ___ hacer si fueras presidente?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Mejoraría la educación.",
      "options": [
        "harías",
        "haces",
        "harás",
        "hiciste"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es importante que ___ puntual mañana.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo seré.",
      "options": [
        "seas",
        "eres",
        "serás",
        "fuiste"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ a la reunión si te invitan?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Probablemente sí.",
      "options": [
        "Irías",
        "Vas",
        "Irás",
        "Fuiste"
      ],
      "correct": "a"
    },
    {
      "question": "A: Me gustaría que ___ tu opinión.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Creo que es una buena idea.",
      "options": [
        "me des",
        "me das",
        "me darás",
        "me diste"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ que la tecnología nos hace la vida más fácil?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: En general, sí.",
      "options": [
        "Crees",
        "Piensas",
        "Consideras",
        "Opinas"
      ],
      "correct": "c"
    },
    {
      "question": "A: Antes de ___ una decisión, consúltalo con tu familia.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo haré.",
      "options": [
        "tomar",
        "tomas",
        "tomarás",
        "tomaste"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ dispuesto a cambiar de trabajo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Depende de la oferta.",
      "options": [
        "Estarías",
        "Estás",
        "Estarás",
        "Estuviste"
      ],
      "correct": "a"
    },
    {
      "question": "A: No creo que ___ la mejor solución.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ¿Por qué no?",
      "options": [
        "es",
        "sea",
        "será",
        "sería"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ que hubieras avisado antes.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tienes razón, lo siento.",
      "options": [
        "Me gustaría",
        "Me gustará",
        "Me hubiera gustado",
        "Me gustaré"
      ],
      "correct": "c"
    },
    {
      "question": "A: ¿Qué ___ si ganaras la lotería?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Viajaría por el mundo.",
      "options": [
        "harías",
        "haces",
        "harás",
        "hiciste"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es probable que ___ tarde hoy.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No hay problema.",
      "options": [
        "llegue",
        "llego",
        "llegaré",
        "llegué"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ preferido otro trabajo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: La verdad es que no.",
      "options": [
        "Habrías",
        "Has",
        "Habías",
        "Hubieras"
      ],
      "correct": "d"
    },
    {
      "question": "A: Cuando ___ el informe, avísame.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: De acuerdo.",
      "options": [
        "termines",
        "terminas",
        "terminarás",
        "terminaste"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que no fuera necesario trabajar los sábados.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Yo también.",
      "options": [
        "Desearía",
        "Deseo",
        "Deseaba",
        "Desearé"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿___ alguna vez vivido en el extranjero?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sí, en Francia.",
      "options": [
        "Has",
        "Habrás",
        "Habías",
        "Hubieras"
      ],
      "correct": "a"
    },
    {
      "question": "A: Me alegro de que ___ el examen.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ¡Gracias!",
      "options": [
        "aprobaste",
        "aprobarás",
        "hayas aprobado",
        "apruebes"
      ],
      "correct": "c"
    }
  ],
  "B2": [
    {
      "question": "A: De ___ sabido las consecuencias, habría actuado de otra manera.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Siempre es fácil decirlo después.",
      "options": [
        "haber",
        "poder",
        "deber",
        "querer"
      ],
      "correct": "a"
    },
    {
      "question": "A: Por mucho que ___, no logró convencerme.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es que sus argumentos no eran sólidos.",
      "options": [
        "insistiera",
        "insistía",
        "insiste",
        "insistiría"
      ],
      "correct": "a"
    },
    {
      "question": "A: Diga lo que ___, no cambiaré de opinión.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eres muy testarudo.",
      "options": [
        "diga",
        "dice",
        "dirá",
        "diría"
      ],
      "correct": "a"
    },
    {
      "question": "A: En caso de que ___ algún problema, no dudes en llamarme.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo tendré en cuenta.",
      "options": [
        "surja",
        "surge",
        "surgirá",
        "surgiera"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿No crees que ___ mejor posponerlo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Puede que tengas razón.",
      "options": [
        "sería",
        "será",
        "es",
        "sea"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ cuenta de que todo había sido un malentendido.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Menos mal que se aclaró.",
      "options": [
        "Me di",
        "Me doy",
        "Me daré",
        "Me daba"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es fundamental que se ___ medidas al respecto.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Estoy totalmente de acuerdo.",
      "options": [
        "tomen",
        "toman",
        "tomarán",
        "tomaron"
      ],
      "correct": "a"
    },
    {
      "question": "A: Pase lo que ___, siempre encuentra una excusa.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Así es su personalidad.",
      "options": [
        "pase",
        "pasa",
        "pasará",
        "pasaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: No hay quien ___ con este calor.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es insoportable.",
      "options": [
        "pueda",
        "puede",
        "podría",
        "podrá"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ sido mejor consultarlo antes.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tienes toda la razón.",
      "options": [
        "Habría",
        "Hubiera",
        "Ha",
        "Había"
      ],
      "correct": "a"
    },
    {
      "question": "A: ¿Qué harías si te ___ esa oportunidad?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: La aprovecharía sin duda.",
      "options": [
        "dieran",
        "dan",
        "darán",
        "dieron"
      ],
      "correct": "a"
    },
    {
      "question": "A: A menos que ___ un cambio radical, la situación empeorará.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Coincido contigo.",
      "options": [
        "haya",
        "hay",
        "habrá",
        "habría"
      ],
      "correct": "a"
    },
    {
      "question": "A: No es que ___ mal, sino que podría estar mejor.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Siempre se puede mejorar.",
      "options": [
        "esté",
        "está",
        "estará",
        "estaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: Suceda lo que ___, mantén la calma.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Intentaré hacerlo.",
      "options": [
        "suceda",
        "sucede",
        "sucederá",
        "sucedería"
      ],
      "correct": "a"
    },
    {
      "question": "A: En el supuesto de que ___ cierto, ¿qué harías?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tendría que pensarlo.",
      "options": [
        "fuera",
        "es",
        "será",
        "sería"
      ],
      "correct": "a"
    },
    {
      "question": "A: No creo que ___ tan grave como parece.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ojalá tengas razón.",
      "options": [
        "sea",
        "es",
        "será",
        "sería"
      ],
      "correct": "a"
    },
    {
      "question": "A: Digas lo que ___, no me convencerás.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Al menos lo intenté.",
      "options": [
        "digas",
        "dices",
        "dirás",
        "dirías"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es imprescindible que ___ todos los documentos.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ya me he encargado de eso.",
      "options": [
        "revises",
        "revisas",
        "revisarás",
        "revisarías"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ más temprano, no habría tanto tráfico.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es verdad.",
      "options": [
        "Si saliéramos",
        "Si salimos",
        "Si saldremos",
        "Si saldríamos"
      ],
      "correct": "a"
    },
    {
      "question": "A: No es que ___ de acuerdo, es que no tengo alternativa.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Entiendo tu posición.",
      "options": [
        "esté",
        "estoy",
        "estaré",
        "estaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: Sea como ___, hay que encontrar una solución.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Estoy de acuerdo.",
      "options": [
        "sea",
        "es",
        "será",
        "sería"
      ],
      "correct": "a"
    },
    {
      "question": "A: En caso de que ___ algún cambio, avísame.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Por supuesto.",
      "options": [
        "haya",
        "hay",
        "habrá",
        "habría"
      ],
      "correct": "a"
    },
    {
      "question": "A: No me extraña que ___ esa decisión.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Era lo más lógico.",
      "options": [
        "tomara",
        "tomó",
        "tomará",
        "tomaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: Pase lo que ___, mantendremos nuestra postura.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Respeto vuestra decisión.",
      "options": [
        "pase",
        "pasa",
        "pasará",
        "pasaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es fundamental que se ___ todas las opciones.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Las analizaremos detenidamente.",
      "options": [
        "consideren",
        "consideran",
        "considerarán",
        "considerarían"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ sido mejor esperar un poco más.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ahora ya es tarde.",
      "options": [
        "Habría",
        "Ha",
        "Habrá",
        "Había"
      ],
      "correct": "a"
    },
    {
      "question": "A: No creo que ___ la mejor manera de hacerlo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ¿Tienes una mejor idea?",
      "options": [
        "sea",
        "es",
        "será",
        "sería"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ocurra lo que ___, no cambiaré de parecer.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eres muy obstinado.",
      "options": [
        "ocurra",
        "ocurre",
        "ocurrirá",
        "ocurriría"
      ],
      "correct": "a"
    },
    {
      "question": "A: En el caso de que ___ la oportunidad, ¿la aprovecharías?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sin duda.",
      "options": [
        "tuvieras",
        "tienes",
        "tendrás",
        "tendrías"
      ],
      "correct": "a"
    },
    {
      "question": "A: No es que ___ mal, es que podría estar mejor.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Siempre hay margen de mejora.",
      "options": [
        "esté",
        "está",
        "estará",
        "estaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: Por mucho que ___, no lograrás hacerme cambiar de idea.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Al menos déjame explicarte.",
      "options": [
        "insistas",
        "insistes",
        "insistirás",
        "insistías"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es imprescindible que ___ con tiempo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Lo tendré en cuenta.",
      "options": [
        "llegues",
        "llegas",
        "llegarás",
        "llegarías"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ más atención, no habría cometido ese error.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Aprenderá de la experiencia.",
      "options": [
        "Si hubiera prestado",
        "Si prestara",
        "Si presta",
        "Si prestaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: No me sorprende que ___ esa conclusión.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Era bastante evidente.",
      "options": [
        "llegara a",
        "llegó a",
        "llegará a",
        "llegaría a"
      ],
      "correct": "a"
    },
    {
      "question": "A: Sea como ___, saldremos adelante.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eso espero.",
      "options": [
        "sea",
        "es",
        "será",
        "sería"
      ],
      "correct": "a"
    },
    {
      "question": "A: En el supuesto de que ___ el proyecto, ¿qué harías?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tendría un plan B.",
      "options": [
        "fallara",
        "falla",
        "fallará",
        "fallaría"
      ],
      "correct": "a"
    },
    {
      "question": "A: No es que ___ pesimista, sino realista.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Hay que ser objetivo.",
      "options": [
        "sea",
        "soy",
        "seré",
        "sería"
      ],
      "correct": "a"
    },
    {
      "question": "A: Suceda lo que ___, mantendremos el rumbo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Es lo más sensato.",
      "options": [
        "suceda",
        "sucede",
        "sucederá",
        "sucedería"
      ],
      "correct": "a"
    },
    {
      "question": "A: Es crucial que se ___ todas las medidas necesarias.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Se tomarán.",
      "options": [
        "adopten",
        "adoptan",
        "adoptarán",
        "adoptarían"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ sido preferible consultarlo antes.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ahora ya es tarde.",
      "options": [
        "Hubiera",
        "Ha",
        "Habrá",
        "Había"
      ],
      "correct": "a"
    },
    {
      "question": "A: No creo que ___ la única solución posible.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Debemos explorar otras opciones.",
      "options": [
        "sea",
        "es",
        "será",
        "sería"
      ],
      "correct": "a"
    }
  ]
},
  portugues: {
  "A1": [
    {
      "question": "A: Oi, tudo bem?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ bem, obrigado!",
      "options": [
        "Estão",
        "Estamos",
        "Estou",
        "Está"
      ],
      "correct": "c"
    },
    {
      "question": "A: Como você se chama?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ me chamo Maria.",
      "options": [
        "Você",
        "Ele",
        "Eu",
        "Nós"
      ],
      "correct": "c"
    },
    {
      "question": "A: Qual é a sua nacionalidade?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu sou ___.",
      "options": [
        "brasília",
        "brasileiro",
        "brasil",
        "brasiliano"
      ],
      "correct": "b"
    },
    {
      "question": "A: Quantos anos você ___?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu tenho 25 anos.",
      "options": [
        "és",
        "tem",
        "está",
        "é"
      ],
      "correct": "b"
    },
    {
      "question": "A: De onde você é?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu sou ___ São Paulo.",
      "options": [
        "em",
        "para",
        "de",
        "por"
      ],
      "correct": "c"
    },
    {
      "question": "A: Que horas ___?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: São duas horas.",
      "options": [
        "é",
        "está",
        "tem",
        "são"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ dia é hoje?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Hoje é segunda-feira.",
      "options": [
        "Quando",
        "Como",
        "Que",
        "Qual"
      ],
      "correct": "c"
    },
    {
      "question": "A: Você fala inglês?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, eu ___ inglês.",
      "options": [
        "falamos",
        "falo",
        "fala",
        "falam"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ você mora?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu moro em Curitiba.",
      "options": [
        "Como",
        "Onde",
        "Por que",
        "Quando"
      ],
      "correct": "b"
    },
    {
      "question": "A: Qual é o seu número de telefone?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: ___ número é 9999-8888.",
      "options": [
        "Seu",
        "Teu",
        "Minha",
        "Meu"
      ],
      "correct": "d"
    },
    {
      "question": "A: Você ___ estudante?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, sou estudante.",
      "options": [
        "tem",
        "está",
        "é",
        "vai"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você trabalha?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu trabalho em um banco.",
      "options": [
        "Quando",
        "Como",
        "Quem",
        "Onde"
      ],
      "correct": "d"
    },
    {
      "question": "A: Qual é a sua cor ___?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Azul.",
      "options": [
        "prefere",
        "preferido",
        "preferida",
        "preferir"
      ],
      "correct": "c"
    },
    {
      "question": "A: Você tem irmãos?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, eu tenho ___ irmão.",
      "options": [
        "uma",
        "uns",
        "umas",
        "um"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ é seu sobrenome?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Meu sobrenome é Silva.",
      "options": [
        "Onde",
        "Qual",
        "Como",
        "Quem"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você gosta ___ café?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, eu gosto.",
      "options": [
        "da",
        "dos",
        "de",
        "do"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você vai ao trabalho?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: De ônibus.",
      "options": [
        "Onde",
        "Por que",
        "Como",
        "Quando"
      ],
      "correct": "c"
    },
    {
      "question": "A: Qual é o seu ___ favorito?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Pizza.",
      "options": [
        "bebida",
        "refeição",
        "comida",
        "prato"
      ],
      "correct": "d"
    },
    {
      "question": "A: Você ___ casado?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Não, sou solteiro.",
      "options": [
        "tem",
        "vai",
        "está",
        "é"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ horas você acorda?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Às 7 horas.",
      "options": [
        "Qual",
        "Que",
        "Quanto",
        "Quais"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você tem ___ animal de estimação?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, tenho um gato.",
      "options": [
        "uma",
        "uns",
        "um",
        "umas"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ é seu endereço de e-mail?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: É joao@email.com.",
      "options": [
        "Como",
        "Qual",
        "Onde",
        "Quando"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ dirigir?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, eu sei dirigir.",
      "options": [
        "saber",
        "sabes",
        "sabi",
        "sabe"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ dias você trabalha por semana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Cinco dias.",
      "options": [
        "Quanto",
        "Quantos",
        "Quanta",
        "Quantas"
      ],
      "correct": "b"
    },
    {
      "question": "A: Qual é o seu ___ preferido?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Vermelho.",
      "options": [
        "cores",
        "colorido",
        "cor",
        "colorida"
      ],
      "correct": "c"
    },
    {
      "question": "A: Você ___ esporte?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, eu jogo futebol.",
      "options": [
        "fazer",
        "faze",
        "fazi",
        "faz"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você nasceu?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Em 1995.",
      "options": [
        "Como",
        "Quando",
        "Onde",
        "Por que"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você tem ___ filhos?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Não, não tenho filhos.",
      "options": [
        "alguma",
        "algumas",
        "algum",
        "alguns"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ é seu filme favorito?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Matrix.",
      "options": [
        "Como",
        "Que",
        "Qual",
        "Onde"
      ],
      "correct": "c"
    },
    {
      "question": "A: Você ___ tocar algum instrumento?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, toco violão.",
      "options": [
        "saber",
        "sabes",
        "sabe",
        "sabi"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você mora?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Em um apartamento.",
      "options": [
        "Quando",
        "Como",
        "Por que",
        "Onde"
      ],
      "correct": "d"
    },
    {
      "question": "A: Qual é a sua ___ favorita?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Matemática.",
      "options": [
        "classe",
        "matéria",
        "aula",
        "escola"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ café da manhã?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, sempre tomo.",
      "options": [
        "come",
        "bebe",
        "toma",
        "faz"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você vai ao médico?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Uma vez por ano.",
      "options": [
        "Onde",
        "Como",
        "Por que",
        "Quando"
      ],
      "correct": "d"
    },
    {
      "question": "A: Você tem ___ computador?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, tenho um notebook.",
      "options": [
        "uma",
        "uns",
        "um",
        "umas"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você estuda português?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Para trabalhar no Brasil.",
      "options": [
        "Quando",
        "Por que",
        "Como",
        "Onde"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ música brasileira?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, eu gosto muito.",
      "options": [
        "gostas",
        "gostar",
        "gosta",
        "gosta de"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ pessoas moram com você?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Três pessoas.",
      "options": [
        "Quanto",
        "Quanta",
        "Quantos",
        "Quantas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Qual é o seu ___ de nascimento?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: 15 de março.",
      "options": [
        "tempo",
        "dia",
        "ano",
        "data"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ algum hobby?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, gosto de ler.",
      "options": [
        "é",
        "há",
        "tem",
        "está"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você mora aqui?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Há dois anos.",
      "options": [
        "Quando",
        "Como",
        "Onde",
        "Há quanto tempo"
      ],
      "correct": "d"
    }
  ],
  "A2": [
    {
      "question": "A: Como foi sua viagem?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Foi ___, mas o voo atrasou.",
      "options": [
        "boa",
        "bem",
        "bom",
        "bons"
      ],
      "correct": "a"
    },
    {
      "question": "A: O que você ___ fazendo quando eu liguei?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Estava tomando banho.",
      "options": [
        "estava",
        "estive",
        "estaria",
        "esteve"
      ],
      "correct": "a"
    },
    {
      "question": "A: Se você ___ dinheiro, o que compraria?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compraria uma casa.",
      "options": [
        "tem",
        "tinha",
        "tivesse",
        "tiver"
      ],
      "correct": "c"
    },
    {
      "question": "A: Você já ___ ao Rio de Janeiro?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, fui ano passado.",
      "options": [
        "foi",
        "ia",
        "ido",
        "ir"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que horas você chegou ontem?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Cheguei às 10.",
      "options": [
        "Em",
        "A",
        "Por",
        "De"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você poderia ___ mais devagar?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Claro, desculpe.",
      "options": [
        "fale",
        "falando",
        "falar",
        "falou"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você não veio à festa?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Porque estava doente.",
      "options": [
        "Que",
        "Como",
        "Por que",
        "Onde"
      ],
      "correct": "c"
    },
    {
      "question": "A: Antes de dormir, eu sempre ___ um livro.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que legal!",
      "options": [
        "leio",
        "lendo",
        "lido",
        "ler"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ tempo você demora para chegar ao trabalho?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Uns 30 minutos.",
      "options": [
        "Que",
        "Qual",
        "Quanto",
        "Como"
      ],
      "correct": "c"
    },
    {
      "question": "A: Você ___ me emprestar sua caneta?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Claro, aqui está.",
      "options": [
        "pode",
        "podes",
        "pude",
        "podia"
      ],
      "correct": "a"
    },
    {
      "question": "A: O que você vai fazer ___ fim de semana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Vou viajar.",
      "options": [
        "no",
        "ao",
        "em",
        "do"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ela disse que ___ atrasada hoje.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ok, vou esperar.",
      "options": [
        "chegará",
        "chegaria",
        "chegou",
        "chegar"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ você prefere: café ou chá?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Prefiro café.",
      "options": [
        "Que",
        "Qual",
        "Como",
        "Onde"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ assistir ao filme ontem?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Não, estava ocupado.",
      "options": [
        "conseguiu",
        "conseguia",
        "consegue",
        "conseguir"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que você chegou, as coisas melhoraram.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que bom!",
      "options": [
        "Depois",
        "Antes",
        "Desde",
        "Durante"
      ],
      "correct": "c"
    },
    {
      "question": "A: Você ___ tocar violão há quanto tempo?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Há 2 anos.",
      "options": [
        "aprende",
        "aprendeu",
        "está aprendendo",
        "aprender"
      ],
      "correct": "c"
    },
    {
      "question": "A: Se chover, ___ em casa.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Boa ideia.",
      "options": [
        "ficamos",
        "ficaremos",
        "ficaríamos",
        "ficávamos"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ fazer exercícios regularmente?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, todo dia.",
      "options": [
        "costuma",
        "costume",
        "costumava",
        "costumar"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ vezes você come fora por semana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Duas vezes.",
      "options": [
        "Quanto",
        "Quantas",
        "Quantos",
        "Quanta"
      ],
      "correct": "b"
    },
    {
      "question": "A: Ela ___ que não gosta de chocolate.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sério?",
      "options": [
        "disse",
        "falou",
        "contou",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você estiver pronto, me avise.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ok, vou avisar.",
      "options": [
        "Quando",
        "Se",
        "Caso",
        "Enquanto"
      ],
      "correct": "a"
    },
    {
      "question": "A: Você ___ comprar pão, por favor?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Claro!",
      "options": [
        "podia",
        "poderia",
        "pode",
        "pôde"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ pessoas vieram à festa?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Umas 30 pessoas.",
      "options": [
        "Quanto",
        "Quantas",
        "Quanta",
        "Quantos"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ acordar cedo amanhã?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, às 6h.",
      "options": [
        "vai",
        "irá",
        "precisa",
        "deve"
      ],
      "correct": "c"
    },
    {
      "question": "A: Como você ___ seu fim de semana?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Foi ótimo!",
      "options": [
        "passou",
        "passaste",
        "passaram",
        "passado"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ tempo você mora nesta cidade?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Faz 5 anos.",
      "options": [
        "Há quanto",
        "Quanto",
        "Por quanto",
        "Que"
      ],
      "correct": "a"
    },
    {
      "question": "A: Você ___ vir à reunião amanhã?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, estarei lá.",
      "options": [
        "pode",
        "podes",
        "poderá",
        "poderia"
      ],
      "correct": "c"
    },
    {
      "question": "A: O que você faria se ___ na loteria?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Viajaria muito!",
      "options": [
        "ganhasse",
        "ganharia",
        "ganhar",
        "ganha"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ela ___ de São Paulo ontem à noite.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que bom!",
      "options": [
        "voltou",
        "voltar",
        "volta",
        "voltava"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você está estudando português?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Para trabalhar no Brasil.",
      "options": [
        "Por que",
        "Porque",
        "Como",
        "Onde"
      ],
      "correct": "a"
    },
    {
      "question": "A: Você ___ terminar este trabalho até amanhã?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, vou terminar.",
      "options": [
        "consegue",
        "conseguirá",
        "conseguiu",
        "conseguia"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ que horas você pretende sair?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Às 8h.",
      "options": [
        "Em",
        "A",
        "Por",
        "De"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você já ___ para a Europa?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Não, nunca viajei.",
      "options": [
        "viajou",
        "viajava",
        "viaja",
        "viajará"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você prefere trabalhar: em casa ou no escritório?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Em casa.",
      "options": [
        "Onde",
        "Como",
        "Quando",
        "Aonde"
      ],
      "correct": "a"
    },
    {
      "question": "A: Se você ___ tempo, poderia me ajudar?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Claro!",
      "options": [
        "tem",
        "tiver",
        "tinha",
        "tivesse"
      ],
      "correct": "b"
    },
    {
      "question": "A: Você ___ tocar algum instrumento musical?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sim, piano.",
      "options": [
        "sabe",
        "pode",
        "consegue",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ tempo faz que você não vai à praia?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Uns 2 anos.",
      "options": [
        "Quanto",
        "Que",
        "Há quanto",
        "Por quanto"
      ],
      "correct": "a"
    },
    {
      "question": "A: Você ___ me ajudar com esta tradução?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Claro!",
      "options": [
        "poderia",
        "podia",
        "pode",
        "pôde"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você estava quando te liguei?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: No mercado.",
      "options": [
        "Onde",
        "Aonde",
        "Para onde",
        "De onde"
      ],
      "correct": "a"
    },
    {
      "question": "A: Que horas você ___ amanhã?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Às 7h.",
      "options": [
        "acorda",
        "acordará",
        "acordou",
        "acordava"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ você começou a estudar português?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Há 6 meses.",
      "options": [
        "Quando",
        "Onde",
        "Como",
        "Por que"
      ],
      "correct": "a"
    }
  ],
  "B1": [
    {
      "question": "A: Se eu ___ que você viria, teria preparado algo especial.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Não se preocupe!",
      "options": [
        "sabia",
        "soubesse",
        "saberia",
        "soube"
      ],
      "correct": "b"
    },
    {
      "question": "A: Assim que ela ___ o trabalho, nos avisará.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Está bem.",
      "options": [
        "terminar",
        "termine",
        "terminou",
        "terminará"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que você tivesse me avisado antes!<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Desculpe, não deu tempo.",
      "options": [
        "Gostei",
        "Queria",
        "Preferia",
        "Tomara"
      ],
      "correct": "c"
    },
    {
      "question": "A: Por mais que eu ___, não consigo entender este assunto.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Posso te ajudar.",
      "options": [
        "tente",
        "tentava",
        "tentaria",
        "tentasse"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você não tivesse perdido o ônibus, não teríamos este problema.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu sei.",
      "options": [
        "Se",
        "Caso",
        "Mesmo que",
        "Desde que"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ela ficou ___ ao saber da notícia que não conseguiu trabalhar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compreensível.",
      "options": [
        "tão abalada",
        "muito abalada",
        "abalada tanto",
        "tanto abalada"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você tiver dúvidas, não hesite em perguntar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Obrigado!",
      "options": [
        "Caso",
        "Se",
        "Quando",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ele age ___ fosse o dono da empresa.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Verdade!",
      "options": [
        "que",
        "como se",
        "igual",
        "feito"
      ],
      "correct": "b"
    },
    {
      "question": "A: ___ você tivesse chegado mais cedo, teríamos conseguido as entradas.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que pena!",
      "options": [
        "Caso",
        "Se",
        "Mesmo que",
        "Desde que"
      ],
      "correct": "b"
    },
    {
      "question": "A: Quanto mais ela estuda, ___ ela aprende.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: É verdade!",
      "options": [
        "mais",
        "muito",
        "tanto",
        "menos"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que você termine o relatório até amanhã.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Pode deixar.",
      "options": [
        "Preciso",
        "Quero",
        "É necessário",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela não só fala inglês ___ também francês.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Impressionante!",
      "options": [
        "mas",
        "e",
        "como",
        "além"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você esteja ocupado, preciso de sua ajuda.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tudo bem.",
      "options": [
        "Embora",
        "Porque",
        "Pois",
        "Já que"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ele trabalha ___ conseguir uma promoção.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que dedicação!",
      "options": [
        "para",
        "a fim de",
        "com objetivo de",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você tivesse me consultado, eu teria ajudado.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sinto muito.",
      "options": [
        "Se",
        "Caso",
        "Quando",
        "Assim que"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ela está ___ cansada que não consegue trabalhar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Deveria descansar.",
      "options": [
        "tão",
        "muito",
        "tanto",
        "mais"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que você chegou, as coisas melhoraram significativamente.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Obrigado!",
      "options": [
        "Depois",
        "Desde",
        "Assim",
        "Logo"
      ],
      "correct": "b"
    },
    {
      "question": "A: Ele age ___ não soubesse de nada.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Estranho...",
      "options": [
        "como se",
        "que",
        "igual",
        "feito"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você precise, estarei aqui para ajudar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Agradeço muito!",
      "options": [
        "Caso",
        "Se",
        "Quando",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela não ___ ter feito isso sem ajuda.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Concordo.",
      "options": [
        "poderia",
        "deveria",
        "teria",
        "conseguiria"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ eu tivesse mais tempo livre, estudaria outro idioma.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Entendo.",
      "options": [
        "Se",
        "Caso",
        "Quando",
        "Assim que"
      ],
      "correct": "a"
    },
    {
      "question": "A: Quanto ___ você pretende ficar na Europa?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Uns 3 meses.",
      "options": [
        "tempo",
        "período",
        "dias",
        "semanas"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que você termine, podemos ir embora.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Já estou terminando.",
      "options": [
        "Assim",
        "Logo",
        "Desde",
        "Depois"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ela ___ ter chegado há uma hora.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Mas ainda não chegou.",
      "options": [
        "deveria",
        "poderia",
        "teria",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você não goste, precisa participar da reunião.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu sei.",
      "options": [
        "Mesmo que",
        "Ainda que",
        "Embora",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ele trabalha ___ estivesse atrasado.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sempre foi assim.",
      "options": [
        "como se",
        "que nem",
        "igual",
        "feito"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você tiver concluído, me avise.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Pode deixar.",
      "options": [
        "Quando",
        "Assim que",
        "Logo que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela não só canta ___ também compõe.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que talento!",
      "options": [
        "mas",
        "e",
        "como",
        "além"
      ],
      "correct": "c"
    },
    {
      "question": "A: ___ você esteja certo, precisamos de mais evidências.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compreendo.",
      "options": [
        "Embora",
        "Porque",
        "Pois",
        "Já que"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ele estuda ___ passar no concurso.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que dedicação!",
      "options": [
        "para",
        "a fim de",
        "com objetivo de",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você tivesse me avisado, eu teria comparecido.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Desculpe.",
      "options": [
        "Se",
        "Caso",
        "Quando",
        "Assim que"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ela ficou ___ feliz que começou a chorar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Que emoção!",
      "options": [
        "tão",
        "muito",
        "tanto",
        "mais"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que começamos o projeto, tudo mudou.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Verdade!",
      "options": [
        "Depois",
        "Desde",
        "Assim",
        "Logo"
      ],
      "correct": "b"
    },
    {
      "question": "A: Ele fala ___ fosse especialista no assunto.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Percebi.",
      "options": [
        "como se",
        "que",
        "igual",
        "feito"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você necessite, pode contar comigo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Obrigado!",
      "options": [
        "Caso",
        "Se",
        "Quando",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela não ___ ter esquecido da reunião.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Pois é...",
      "options": [
        "deveria",
        "poderia",
        "teria",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ eu pudesse, mudaria tudo isso.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Eu também.",
      "options": [
        "Se",
        "Caso",
        "Quando",
        "Assim que"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ tempo você pretende ficar no Brasil?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Um ano.",
      "options": [
        "Quanto",
        "Que",
        "Por quanto",
        "Qual"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ que terminarmos, vamos comemorar.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ótimo!",
      "options": [
        "Assim",
        "Logo",
        "Desde",
        "Depois"
      ],
      "correct": "a"
    },
    {
      "question": "A: Ela ___ estar chegando neste momento.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tomara!",
      "options": [
        "deve",
        "pode",
        "tem que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você não concorde, respeito sua opinião.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Obrigado.",
      "options": [
        "Mesmo que",
        "Ainda que",
        "Embora",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    }
  ],
  "B2": [
    {
      "question": "A: ___ que você tivesse me procurado antes, eu não teria como resolver agora.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Entendo...",
      "options": [
        "Mesmo",
        "Por mais",
        "Ainda",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela não só ___ o projeto, como também o aperfeiçoou significativamente.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Impressionante!",
      "options": [
        "desenvolveu",
        "tinha desenvolvido",
        "houvesse desenvolvido",
        "teria desenvolvido"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ as circunstâncias, teremos que adiar a reunião.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compreensível.",
      "options": [
        "Dadas",
        "Tendo em vista",
        "Considerando",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Caso você ___ comparecer, favor avisar com antecedência.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Certamente.",
      "options": [
        "não possa",
        "não pudesse",
        "não poderá",
        "não poderia"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ a complexidade do assunto, precisaremos de mais tempo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Concordo plenamente.",
      "options": [
        "Haja vista",
        "Em virtude de",
        "Devido a",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela age de maneira ___ que todos a admiram.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Verdade!",
      "options": [
        "tão profissional",
        "muito profissional",
        "bastante profissional",
        "demasiado profissional"
      ],
      "correct": "a"
    },
    {
      "question": "A: ___ você tivesse se preparado adequadamente, não estaria nesta situação.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Tem razão.",
      "options": [
        "Se",
        "Caso",
        "Desde que",
        "Contanto que"
      ],
      "correct": "a"
    },
    {
      "question": "A: O projeto foi desenvolvido ___ as especificações técnicas.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Perfeito!",
      "options": [
        "conforme",
        "segundo",
        "de acordo com",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ que pareça improvável, ainda há chances de sucesso.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Esperança é importante.",
      "options": [
        "Por mais",
        "Ainda",
        "Mesmo",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela não ___ ter concluído o trabalho sem ajuda externa.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Concordo.",
      "options": [
        "poderia",
        "haveria de",
        "teria como",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ as devidas providências, daremos continuidade ao processo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ótimo.",
      "options": [
        "Tomadas",
        "Sendo tomadas",
        "Tendo sido tomadas",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: O documento ___ ser entregue impreterivelmente até amanhã.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Entendido.",
      "options": [
        "deverá",
        "terá de",
        "haverá de",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ sua experiência, ele seria o candidato ideal.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sem dúvida.",
      "options": [
        "Dado",
        "Considerando",
        "Levando em conta",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: A empresa ___ grandes mudanças nos últimos anos.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: De fato.",
      "options": [
        "vem sofrendo",
        "tem sofrido",
        "está sofrendo",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você concorde ou não, as mudanças serão implementadas.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compreendo.",
      "options": [
        "Quer",
        "Seja que",
        "Independente de",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: O projeto ___ sido concluído, caso não houvesse imprevistos.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: É verdade.",
      "options": [
        "teria",
        "haveria",
        "poderia ter",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ as circunstâncias, sua decisão foi acertada.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Obrigado.",
      "options": [
        "Dadas",
        "Considerando",
        "Tendo em vista",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela ___ estar ciente das consequências de sua decisão.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Certamente.",
      "options": [
        "deve",
        "há de",
        "precisa",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ que você tenha experiência, o cargo exige formação específica.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Entendo.",
      "options": [
        "Não obstante",
        "Apesar de",
        "Mesmo",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: O relatório ___ ser revisado antes da apresentação.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Será feito.",
      "options": [
        "precisará",
        "deverá",
        "terá que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ fossem outras as circunstâncias, eu teria aceitado a proposta.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compreendo.",
      "options": [
        "Se",
        "Caso",
        "Desde que",
        "Se porventura"
      ],
      "correct": "a"
    },
    {
      "question": "A: A empresa ___ implementando novas políticas gradualmente.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Interessante.",
      "options": [
        "vem",
        "está",
        "anda",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ que você apresente as devidas justificativas.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Providenciarei.",
      "options": [
        "É imprescindível",
        "É necessário",
        "É fundamental",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: O projeto ___ sido mais bem-sucedido se houvesse mais planejamento.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Concordo.",
      "options": [
        "teria",
        "poderia ter",
        "deveria ter",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ as mudanças necessárias, o projeto foi aprovado.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Ótimo!",
      "options": [
        "Feitas",
        "Realizadas",
        "Efetuadas",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela ___ estar ciente dos riscos envolvidos.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Sem dúvida.",
      "options": [
        "deve",
        "precisa",
        "tem que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ sua experiência anterior, ela foi selecionada para o cargo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Merecido.",
      "options": [
        "Devido a",
        "Em virtude de",
        "Graças a",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: O documento ___ ser assinado com certificação digital.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Entendido.",
      "options": [
        "deverá",
        "precisará",
        "terá que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você concorde, iniciaremos o projeto imediatamente.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Concordo.",
      "options": [
        "Caso",
        "Desde que",
        "Contanto que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: A empresa ___ grandes investimentos nos últimos anos.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Verdade.",
      "options": [
        "tem feito",
        "vem fazendo",
        "está fazendo",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ as circunstâncias atuais, precisaremos readequar o orçamento.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Compreendo.",
      "options": [
        "Tendo em vista",
        "Considerando",
        "Dadas",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: O projeto ___ sido mais eficiente com sua participação.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Obrigado.",
      "options": [
        "teria",
        "poderia ter",
        "haveria",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ que pareça complexo, o sistema é bastante intuitivo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Percebi isso.",
      "options": [
        "Embora",
        "Ainda",
        "Por mais",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: Ela ___ estar preparada para a apresentação amanhã.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Certamente.",
      "options": [
        "deve",
        "precisa",
        "tem que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você tivesse me consultado antes, poderíamos ter evitado isso.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: É verdade.",
      "options": [
        "Se",
        "Caso",
        "Desde que",
        "Se porventura"
      ],
      "correct": "a"
    },
    {
      "question": "A: O relatório ___ ser entregue com todos os anexos necessários.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Entendido.",
      "options": [
        "deverá",
        "precisará",
        "terá que",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ as devidas análises, tomaremos uma decisão.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Perfeito.",
      "options": [
        "Feitas",
        "Realizadas",
        "Efetuadas",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: A implementação ___ sido mais suave se houvesse mais tempo.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Concordo.",
      "options": [
        "teria",
        "poderia ter",
        "deveria ter",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ sua competência, ela foi promovida rapidamente.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Merecido.",
      "options": [
        "Devido a",
        "Em virtude de",
        "Graças a",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: O sistema ___ passar por uma atualização em breve.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Bom saber.",
      "options": [
        "deverá",
        "irá",
        "vai",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    },
    {
      "question": "A: ___ você esteja ocupado, precisamos resolver isso hoje.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;B: Está bem.",
      "options": [
        "Ainda que",
        "Mesmo que",
        "Embora",
        "Todas as opções estão corretas"
      ],
      "correct": "d"
    }
  ]
}
};

const QUIZ_CONFIGS = {
  ingles: {
    langCode: 'en',
    name: 'Inglês',
    flag: '<img src="assets/images/flags/flag-us.svg" alt="USA" class="quiz-inline-flag">',
    welcomeBadge: 'AVALIAÇÃO OFICIAL CEFR • 40 QUESTÕES',
    welcomeTitle: 'Seja bem-vindo ao Teste de Nivelamento de Inglês!',
    welcomeDesc: 'Desenvolvido pela The Languages Academy para diagnosticar com precisão cirúrgica suas habilidades comunicativas e gramaticais do nível básico ao avançado.',
    startButtonText: 'Começar o Teste de Inglês ➔',
    nextButtonText: 'Seguinte →',
    prevButtonText: '← Anterior',
    finishButtonText: 'Finalizar Teste ✓',
    matrixLabel: 'Navegação rápida pelas 40 questões:',
    unansweredWarning: 'Você ainda tem questões sem resposta. Deseja finalizar o teste mesmo assim?',
    timeOutAlert: 'Tempo esgotado! Seu teste será enviado automaticamente para diagnóstico.',
    levelPills: {
      A1: 'Nível A1 (Iniciante)',
      A2: 'Nível A2 (Básico)',
      B1: 'Nível B1 (Intermediário)',
      B2: 'Nível B2 (Intermediário Avançado)'
    },
    levels: {
      A1: { title: 'A1 - Iniciante (Breakthrough)', desc: 'Você está iniciando sua jornada! Perfeito para criar uma base sólida sem vícios linguísticos com nosso método personalizado.' },
      A2: { title: 'A2 - Básico / Elementar (Waystage)', desc: 'Você entende mensagens e expressões de uso frequente em áreas de relevância imediata (informação pessoal, trabalho, viagens).' },
      B1: { title: 'B1 - Intermediário (Threshold)', desc: 'Você lida com a maioria das situações no idioma, compreende pontos principais de trabalho/estudos e produz textos coerentes.' },
      B2: { title: 'B2 - Intermediário Avançado (Vantage)', desc: 'Você compreende as ideias centrais de textos complexos e se comunica com espontaneidade e fluência sem grande esforço!' }
    },
    breakdownDescriptions: {
      A1: 'Fundamentos, verbos essenciais, pronomes e estruturas básicas do dia a dia.',
      A2: 'Passado simples, comparativos, preposições compostas e rotinas cotidianas.',
      B1: 'Tempos perfeitos, condicionais, verbos modais e diálogos situacionais.',
      B2: 'Inversões, discurso indireto avançado, locuções complexas e fluência operacional.'
    },
    resultsHeader: 'RELATÓRIO DIAGNÓSTICO CONCLUÍDO',
    resultsTitle: 'Parabéns! Veja o resultado do seu teste',
    resultsSubtitle: 'Este relatório estratificado analisa suas competências gramaticais e comunicativas em cada nível do Quadro Europeu Comum (CEFR).',
    breakdownSectionTitle: '📊 Desempenho Estratificado por Nível (CEFR)',
    pedagogicalTitle: '💡 Análise Pedagógica Personalizada do Professor Luis',
    pedagogicalText: 'Com base na sua distribuição de acertos, identificamos exatamente a transição onde sua base está consolidada e onde começam as lacunas estruturais. Nas aulas particulares da The Languages Academy, não perdemos tempo revisando o que você já domina; nós focamos 100% nas suas áreas de oportunidade para acelerar sua fluência comunicativa!',
    waButtonText: '📱 Enviar Diagnóstico para o Professor Luis',
    restartButtonText: '🔄 Refazer Teste com Novas Questões',
    waHeader: 'Olá, Professor Luis! Acabei de realizar o Teste de Nivelamento de Inglês (CEFR) na The Languages Academy:',
    waClosing: 'Gostaria de agendar minha aula experimental gratuita com base neste diagnóstico!'
  },

  espanol: {
    langCode: 'es',
    name: 'Espanhol',
    flag: '<img src="assets/images/flags/flag-es.svg" alt="Espanha" class="quiz-inline-flag">',
    welcomeBadge: 'EVALUACIÓN OFICIAL MCER • 40 PREGUNTAS',
    welcomeTitle: '¡Bienvenido a la Prueba de Nivel de Español!',
    welcomeDesc: 'Diseñado por The Languages Academy para diagnosticar con precisión tu dominio gramatical, vocabulario y soltura comunicativa desde el nivel básico hasta el avanzado.',
    startButtonText: 'Comenzar la Prueba de Español ➔',
    nextButtonText: 'Siguiente →',
    prevButtonText: '← Anterior',
    finishButtonText: 'Finalizar Prueba ✓',
    matrixLabel: 'Navegación rápida por las 40 preguntas:',
    unansweredWarning: 'Aún tienes preguntas sin responder. ¿Deseas finalizar la prueba de todos modos?',
    timeOutAlert: '¡Tiempo agotado! Tu prueba se enviará automáticamente para diagnóstico.',
    levelPills: {
      A1: 'Nivel A1 (Acceso / Inicial)',
      A2: 'Nivel A2 (Plataforma / Básico)',
      B1: 'Nivel B1 (Umbral / Intermedio)',
      B2: 'Nivel B2 (Avanzado / Independiente)'
    },
    levels: {
      A1: { title: 'A1 - Inicial / Básico (Acceso)', desc: 'Comprendes y utilizas expresiones cotidianas muy frecuentes para satisfacer necesidades inmediatas.' },
      A2: { title: 'A2 - Básico / Elemental (Plataforma)', desc: 'Comprendes frases y vocabulario habitual sobre temas de interés personal, compras y trabajo.' },
      B1: { title: 'B1 - Intermedio (Umbral)', desc: 'Te desenvuelves en la mayoría de situaciones cotidianas y profesionales, redactando textos sencillos y coherentes.' },
      B2: { title: 'B2 - Intermedio Avanzado (Avanzado)', desc: 'Te comunicas con fluidez y naturalidad con hablantes nativos, defendiendo posturas sobre temas complejos.' }
    },
    breakdownDescriptions: {
      A1: 'Vocabulario esencial, presentaciones, gustos y tiempos presentes regulares.',
      A2: 'Tiempos del pasado (pretérito indefinido/imperfecto), comparativos y obligaciones.',
      B1: 'Subjuntivo presente/imperfecto, condicionales simples y conectores discursivos.',
      B2: 'Estructuras concesivas avanzadas, locuciones fijas, estilo indirecto y oraciones complejas.'
    },
    resultsHeader: 'INFORME DIAGNÓSTICO CONCLUIDO',
    resultsTitle: '¡Felicitaciones! Mira el resultado de tu prueba',
    resultsSubtitle: 'Este informe estratificado analiza tus competencias gramaticales y comunicativas en cada nivel del Marco Común Europeo (MCER).',
    breakdownSectionTitle: '📊 Desempeño Estratificado por Nivel (MCER)',
    pedagogicalTitle: '💡 Análisis Pedagógico Personalizado del Profesor Luis',
    pedagogicalText: 'Con base en tu distribución de aciertos, identificamos con claridad dónde tu base está sólida y dónde comienzan las dudas estructurales. En las clases particulares de The Languages Academy, no perdemos tiempo revisando lo que ya dominas; nos enfocamos 100% en tus áreas de oportunidad para acelerar tu fluidez comunicativa.',
    waButtonText: '📱 Enviar Diagnóstico al Profesor Luis',
    restartButtonText: '🔄 Repetir Prueba con Nuevas Preguntas',
    waHeader: '¡Hola, Profesor Luis! Acabo de realizar la Prueba de Nivel de Español (MCER) en The Languages Academy:',
    waClosing: '¡Me gustaría agendar mi clase experimental gratuita con base en este diagnóstico!'
  },

  portugues: {
    langCode: 'pt',
    name: 'Português',
    flag: '<img src="assets/images/flags/flag-br.svg" alt="Brasil" class="quiz-inline-flag">',
    welcomeBadge: 'AVALIAÇÃO OFICIAL PLE / CEFR • 40 QUESTÕES',
    welcomeTitle: 'Seja bem-vindo ao Teste de Nivelamento de Português!',
    welcomeDesc: 'Desenvolvido pela The Languages Academy para avaliar seu domínio comunicativo e gramatical do Português do Brasil, do nível iniciante ao fluente.',
    startButtonText: 'Começar o Teste de Português ➔',
    nextButtonText: 'Seguinte →',
    prevButtonText: '← Anterior',
    finishButtonText: 'Finalizar Teste ✓',
    matrixLabel: 'Navegação rápida pelas 40 questões:',
    unansweredWarning: 'Você ainda tem questões sem resposta. Deseja finalizar o teste mesmo assim?',
    timeOutAlert: 'Tempo esgotado! Seu teste será enviado automaticamente para diagnóstico.',
    levelPills: {
      A1: 'Nível A1 (Iniciante)',
      A2: 'Nível A2 (Básico)',
      B1: 'Nível B1 (Intermediário)',
      B2: 'Nível B2 (Intermediário Avançado)'
    },
    levels: {
      A1: { title: 'A1 - Iniciante (Iniciação)', desc: 'Compreende e usa expressões cotidianas e frases básicas para interações imediatas.' },
      A2: { title: 'A2 - Básico / Elementar (Sobrevivência)', desc: 'Capaz de lidar com situações cotidianas, rotinas, compras e viagens com vocabulário essencial.' },
      B1: { title: 'B1 - Intermediário (Independente)', desc: 'Compreende pontos essenciais de trabalho, estudo e lazer, expressando opiniões e narrando acontecimentos.' },
      B2: { title: 'B2 - Intermediário Avançado (Fluente Operacional)', desc: 'Compreende textos e conversas complexas, usando conectivos oracionais refinados com grande naturalidade.' }
    },
    breakdownDescriptions: {
      A1: 'Saudações, verbo ser/estar/ter, artigos e estruturas cotidianas imediatas.',
      A2: 'Pretérito perfeito/imperfeito, preposições compostas, rotinas e planos futuros.',
      B1: 'Futuro do subjuntivo, pretérito imperfeito do subjuntivo e orações subordinadas.',
      B2: 'Regência culta, conectivos concessivos e causais avançados e locuções conjuntivas.'
    },
    resultsHeader: 'RELATÓRIO DIAGNÓSTICO CONCLUÍDO',
    resultsTitle: 'Parabéns! Veja o resultado do seu teste',
    resultsSubtitle: 'Este relatório estratificado analisa suas competências gramaticais e comunicativas em cada nível do Quadro Europeu Comum (CEFR).',
    breakdownSectionTitle: '📊 Desempenho Estratificado por Nível (CEFR / PLE)',
    pedagogicalTitle: '💡 Análise Pedagógica Personalizada do Professor Luis',
    pedagogicalText: 'Com base na sua distribuição de acertos, identificamos exatamente a transição onde sua base está consolidada e onde começam as lacunas estruturais. Nas aulas particulares da The Languages Academy, não perdemos tempo revisando o que você já domina; nós focamos 100% nas suas áreas de oportunidade para acelerar sua fluência comunicativa!',
    waButtonText: '📱 Enviar Diagnóstico para o Professor Luis',
    restartButtonText: '🔄 Refazer Teste com Novas Questões',
    waHeader: 'Olá, Professor Luis! Acabei de realizar o Teste de Nivelamento de Português (PLE/CEFR) na The Languages Academy:',
    waClosing: 'Gostaria de agendar minha aula experimental gratuita com base neste diagnóstico!'
  }
};

// Utility: Fisher-Yates array shuffle
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Global state for active quiz
var activeQuizState = {
  language: 'ingles',
  questions: [], // 40 items: { question, options, answerIndex, level, userChoice }
  currentIndex: 0,
  timerInterval: null,
  timeRemainingSeconds: 900, // 15:00
  isSubmitted: false
};

function initQuiz(lang = 'ingles') {
  const container = document.getElementById('quizApp');
  if (!container) return;

  activeQuizState.language = lang;
  activeQuizState.isSubmitted = false;
  activeQuizState.currentIndex = 0;
  clearInterval(activeQuizState.timerInterval);

  renderUnifiedWelcome(container, lang);
}

function renderUnifiedWelcome(container, lang) {
  const conf = QUIZ_CONFIGS[lang] || QUIZ_CONFIGS.ingles;

  container.innerHTML = `
    <div class="quiz-welcome-card" id="quizWelcomeCard">
      <div class="quiz-welcome-badge">${conf.welcomeBadge}</div>
      <h2 class="quiz-welcome-title">${conf.welcomeTitle}</h2>
      <p class="quiz-welcome-desc">${conf.welcomeDesc}</p>

      <div class="quiz-features-grid">
        <div class="quiz-feature-item">
          <span class="quiz-feature-icon">🎯</span>
          <div>
            <strong>40 Questões Estratificadas</strong>
            <p>10 de Nível A1, 10 de A2, 10 de B1 e 10 de B2.</p>
          </div>
        </div>
        <div class="quiz-feature-item">
          <span class="quiz-feature-icon">⏱</span>
          <div>
            <strong>15 Minutos Cronometrados</strong>
            <p>Avalia seu reflexo e domínio linguístico em tempo real.</p>
          </div>
        </div>
        <div class="quiz-feature-item">
          <span class="quiz-feature-icon">📊</span>
          <div>
            <strong>Diagnóstico Completo por Nível</strong>
            <p>Descubra seus pontos fortes e onde focar seus estudos.</p>
          </div>
        </div>
        <div class="quiz-feature-item">
          <span class="quiz-feature-icon">📱</span>
          <div>
            <strong>Envio Direto ao Professor Luis</strong>
            <p>Receba orientações personalizadas para sua aula gratuita.</p>
          </div>
        </div>
      </div>

      <div style="margin-top: 2.2rem; text-align: center;">
        <button type="button" class="btn-v2 btn-v2-purple" id="btnStartQuiz" style="font-size: 1.12rem; padding: 1.1rem 2.8rem;">
          ${conf.startButtonText}
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnStartQuiz').addEventListener('click', () => {
    startStratifiedQuiz(lang);
  });
}

function startStratifiedQuiz(lang) {
  const banks = QUESTION_BANKS[lang];
  if (!banks) return;

  // 10 from A1, 10 from A2, 10 from B1, 10 from B2
  const a1Sample = shuffleArray(banks.A1).slice(0, 10);
  const a2Sample = shuffleArray(banks.A2).slice(0, 10);
  const b1Sample = shuffleArray(banks.B1).slice(0, 10);
  const b2Sample = shuffleArray(banks.B2).slice(0, 10);

  const keyMap = { a: 0, b: 1, c: 2, d: 3 };

  function processQuestion(raw, level) {
    const originalCorrectIndex = keyMap[raw.correct.toLowerCase()] ?? 0;
    const correctText = raw.options[originalCorrectIndex];

    // Anti-Bias Option Shuffling:
    const shuffledOptions = shuffleArray(raw.options);
    const newAnswerIndex = shuffledOptions.indexOf(correctText);

    return {
      question: raw.question,
      options: shuffledOptions,
      answerIndex: newAnswerIndex,
      level: level,
      userChoice: null
    };
  }

  activeQuizState.questions = [
    ...a1Sample.map(q => processQuestion(q, 'A1')),
    ...a2Sample.map(q => processQuestion(q, 'A2')),
    ...b1Sample.map(q => processQuestion(q, 'B1')),
    ...b2Sample.map(q => processQuestion(q, 'B2'))
  ];

  activeQuizState.currentIndex = 0;
  activeQuizState.timeRemainingSeconds = 900; // 15 mins
  activeQuizState.isSubmitted = false;

  renderActiveQuizLayout();
  startTimer();
}

function startTimer() {
  clearInterval(activeQuizState.timerInterval);
  updateTimerUI();

  activeQuizState.timerInterval = setInterval(() => {
    activeQuizState.timeRemainingSeconds--;
    updateTimerUI();

    if (activeQuizState.timeRemainingSeconds <= 0) {
      clearInterval(activeQuizState.timerInterval);
      const conf = QUIZ_CONFIGS[activeQuizState.language] || QUIZ_CONFIGS.ingles;
      alert(conf.timeOutAlert);
      submitStratifiedQuiz();
    }
  }, 1000);
}

function updateTimerUI() {
  const timerBadge = document.getElementById('quizTimerBadge');
  const timerText = document.getElementById('quizTimerText');
  if (!timerBadge || !timerText) return;

  const totalSec = Math.max(0, activeQuizState.timeRemainingSeconds);
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  timerText.textContent = formatted;

  // Warning state when under 2 minutes (120s)
  if (totalSec <= 120) {
    timerBadge.classList.add('timer-warning');
  } else {
    timerBadge.classList.remove('timer-warning');
  }
}

function renderActiveQuizLayout() {
  const container = document.getElementById('quizApp');
  if (!container) return;

  const conf = QUIZ_CONFIGS[activeQuizState.language] || QUIZ_CONFIGS.ingles;

  container.innerHTML = `
    <!-- Floating / Sticky Timer Badge -->
    <div id="quizTimerBadge" class="quiz-timer-badge">
      <span class="timer-icon">⏱</span>
      <span id="quizTimerText">15:00</span>
    </div>

    <div class="quiz-runner-container" id="quizRunnerCard">
      <!-- Progress & Level Bar -->
      <div class="quiz-runner-header">
        <div class="quiz-progress-meta">
          <span id="quizProgressCount">Questão 1 de 40</span>
          <span class="quiz-level-pill" id="quizLevelPill">Nível A1</span>
        </div>
        <div class="quiz-progress-track">
          <div class="quiz-progress-bar" id="quizProgressBar" style="width: 2.5%;"></div>
        </div>
      </div>

      <!-- Question Card Area -->
      <div class="quiz-question-box" id="quizQuestionBox">
        <!-- Rendered dynamically -->
      </div>

      <!-- Navigation Bar -->
      <div class="quiz-nav-row">
        <button type="button" class="btn-v2 btn-v2-glass" id="btnPrevQuestion" style="padding: 0.75rem 1.6rem;">
          ${conf.prevButtonText}
        </button>
        <div style="display:flex; gap:0.75rem; align-items:center;">
          <button type="button" class="btn-v2 btn-v2-glass" id="btnNextQuestion" style="padding: 0.75rem 1.6rem;">
            ${conf.nextButtonText}
          </button>
          <button type="button" class="btn-v2 btn-v2-purple" id="btnFinishQuiz" style="padding: 0.75rem 1.6rem; display:none;">
            ${conf.finishButtonText}
          </button>
        </div>
      </div>

      <!-- Question Quick Navigation Matrix -->
      <div class="quiz-matrix-wrap">
        <div class="matrix-label">${conf.matrixLabel}</div>
        <div class="quiz-matrix-grid" id="quizMatrixGrid">
          <!-- 40 pill dots -->
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnPrevQuestion').addEventListener('click', () => {
    if (activeQuizState.currentIndex > 0) {
      activeQuizState.currentIndex--;
      renderQuestion();
    }
  });

  document.getElementById('btnNextQuestion').addEventListener('click', () => {
    if (activeQuizState.currentIndex < activeQuizState.questions.length - 1) {
      activeQuizState.currentIndex++;
      renderQuestion();
    }
  });

  document.getElementById('btnFinishQuiz').addEventListener('click', () => {
    const unansweredCount = activeQuizState.questions.filter(q => q.userChoice === null).length;
    if (unansweredCount > 0) {
      const confirmSubmit = confirm(conf.unansweredWarning);
      if (!confirmSubmit) return;
    }
    submitStratifiedQuiz();
  });

  renderQuestion();
}

function renderQuestion() {
  const qBox = document.getElementById('quizQuestionBox');
  const countEl = document.getElementById('quizProgressCount');
  const levelEl = document.getElementById('quizLevelPill');
  const barEl = document.getElementById('quizProgressBar');
  const prevBtn = document.getElementById('btnPrevQuestion');
  const nextBtn = document.getElementById('btnNextQuestion');
  const finishBtn = document.getElementById('btnFinishQuiz');

  if (!qBox) return;

  const conf = QUIZ_CONFIGS[activeQuizState.language] || QUIZ_CONFIGS.ingles;
  const idx = activeQuizState.currentIndex;
  const total = activeQuizState.questions.length;
  const currentQ = activeQuizState.questions[idx];

  // Update Progress
  const percent = Math.round(((idx + 1) / total) * 100);
  const qPrefix = activeQuizState.language === 'espanol' ? 'Pregunta' : 'Questão';
  countEl.textContent = `${qPrefix} ${idx + 1} de ${total} (${percent}%)`;
  barEl.style.width = `${percent}%`;

  // Update Level Pill
  levelEl.textContent = conf.levelPills[currentQ.level] || currentQ.level;

  // Render question text & options
  const letters = ['A', 'B', 'C', 'D'];
  qBox.innerHTML = `
    <div class="quiz-q-title">
      <span class="quiz-q-num">#${idx + 1}</span>
      <div class="quiz-q-text">${currentQ.question}</div>
    </div>
    <div class="quiz-options-list">
      ${currentQ.options.map((opt, oIdx) => `
        <label class="quiz-option-card ${currentQ.userChoice === oIdx ? 'selected' : ''}" data-opt-idx="${oIdx}">
          <input type="radio" name="questionChoice" value="${oIdx}" ${currentQ.userChoice === oIdx ? 'checked' : ''} style="display:none;">
          <span class="option-bubble">${letters[oIdx]}</span>
          <span class="option-label">${opt}</span>
        </label>
      `).join('')}
    </div>
  `;

  // Add click listeners to option cards
  qBox.querySelectorAll('.quiz-option-card').forEach(card => {
    card.addEventListener('click', () => {
      const chosenIdx = parseInt(card.getAttribute('data-opt-idx'), 10);
      currentQ.userChoice = chosenIdx;

      // Update UI active card
      qBox.querySelectorAll('.quiz-option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      renderMatrix();

      // Show finish button if on last question or all answered
      if (idx === total - 1 || activeQuizState.questions.every(q => q.userChoice !== null)) {
        finishBtn.style.display = 'inline-flex';
      }
    });
  });

  // Button states
  prevBtn.disabled = idx === 0;
  prevBtn.style.opacity = idx === 0 ? '0.45' : '1';
  prevBtn.style.pointerEvents = idx === 0 ? 'none' : 'auto';

  if (idx === total - 1) {
    nextBtn.style.display = 'none';
    finishBtn.style.display = 'inline-flex';
  } else {
    nextBtn.style.display = 'inline-flex';
    finishBtn.style.display = activeQuizState.questions.every(q => q.userChoice !== null) ? 'inline-flex' : 'none';
  }

  renderMatrix();
}

function renderMatrix() {
  const matrix = document.getElementById('quizMatrixGrid');
  if (!matrix) return;

  matrix.innerHTML = activeQuizState.questions.map((q, i) => {
    const isCurrent = i === activeQuizState.currentIndex;
    const isAnswered = q.userChoice !== null;
    let cls = 'matrix-dot';
    if (isAnswered) cls += ' answered';
    if (isCurrent) cls += ' active';

    return `<button type="button" class="${cls}" data-goto="${i}" title="Ir para questão ${i + 1} (${q.level})">${i + 1}</button>`;
  }).join('');

  matrix.querySelectorAll('.matrix-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      activeQuizState.currentIndex = parseInt(dot.getAttribute('data-goto'), 10);
      renderQuestion();
    });
  });
}

function submitStratifiedQuiz() {
  clearInterval(activeQuizState.timerInterval);
  activeQuizState.isSubmitted = true;

  const conf = QUIZ_CONFIGS[activeQuizState.language] || QUIZ_CONFIGS.ingles;

  // Calculate scores
  let totalScore = 0;
  let scoresByLevel = { A1: 0, A2: 0, B1: 0, B2: 0 };

  activeQuizState.questions.forEach(q => {
    if (q.userChoice === q.answerIndex) {
      totalScore++;
      scoresByLevel[q.level]++;
    }
  });

  // Determine overall CEFR Level
  let diagnosedLevel = 'A1';
  if (totalScore >= 34) {
    diagnosedLevel = 'B2';
  } else if (totalScore >= 27) {
    diagnosedLevel = 'B1';
  } else if (totalScore >= 20) {
    diagnosedLevel = 'A2';
  } else {
    diagnosedLevel = 'A1';
  }

  const levelInfo = conf.levels[diagnosedLevel];
  renderUnifiedResults(totalScore, scoresByLevel, diagnosedLevel, levelInfo.title, levelInfo.desc);
}

function renderUnifiedResults(totalScore, scores, diagnosedLevel, levelTitle, levelDesc) {
  const container = document.getElementById('quizApp');
  if (!container) return;

  const conf = QUIZ_CONFIGS[activeQuizState.language] || QUIZ_CONFIGS.ingles;

  // Remove floating timer
  const timerBadge = document.getElementById('quizTimerBadge');
  if (timerBadge) timerBadge.remove();

  // Scroll to top of results
  window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });

  // Calculate percentage
  const percentTotal = Math.round((totalScore / 40) * 100);

  // Status badges for sub-scores
  function getLevelStatus(score) {
    if (activeQuizState.language === 'espanol') {
      if (score >= 8) return { label: 'Excelente / Dominado', cls: 'status-high' };
      if (score >= 6) return { label: 'Buen Dominio', cls: 'status-med' };
      return { label: 'Punto de Atención', cls: 'status-low' };
    }
    if (score >= 8) return { label: 'Excelente / Dominado', cls: 'status-high' };
    if (score >= 6) return { label: 'Bom Domínio', cls: 'status-med' };
    return { label: 'Ponto de Atenção', cls: 'status-low' };
  }

  const stA1 = getLevelStatus(scores.A1);
  const stA2 = getLevelStatus(scores.A2);
  const stB1 = getLevelStatus(scores.B1);
  const stB2 = getLevelStatus(scores.B2);

  const waMsg = `${conf.waHeader}
📊 Pontuação / Puntuación: ${totalScore}/40 (${percentTotal}%)
🎯 Nível Diagnosticado: ${levelTitle}

Detalhamento Estratificado:
• A1: ${scores.A1}/10 (${stA1.label})
• A2: ${scores.A2}/10 (${stA2.label})
• B1: ${scores.B1}/10 (${stB1.label})
• B2: ${scores.B2}/10 (${stB2.label})

${conf.waClosing}`;

  const waLink = `https://wa.me/5554991863491?text=${encodeURIComponent(waMsg)}`;

  container.innerHTML = `
    <div class="quiz-results-card">
      <div class="results-header">
        <span class="results-tag">${conf.flag} ${conf.resultsHeader}</span>
        <h2 class="results-title">${conf.resultsTitle}</h2>
        <p class="results-subtitle">${conf.resultsSubtitle}</p>
      </div>

      <!-- Big Score Overview -->
      <div class="results-overview-grid">
        <div class="overview-score-box">
          <div class="score-circle">
            <span class="score-number">${totalScore}</span>
            <span class="score-max">/ 40</span>
          </div>
          <div class="score-label">${activeQuizState.language === 'espanol' ? 'Puntuación Total' : 'Pontuação Total'} (${percentTotal}%)</div>
        </div>

        <div class="overview-level-box">
          <span class="level-badge-cefr">${diagnosedLevel}</span>
          <h3 class="level-name">${levelTitle}</h3>
          <p class="level-desc">${levelDesc}</p>
        </div>
      </div>

      <!-- Stratified Sub-Scores Breakdown -->
      <div class="diagnostic-breakdown-section">
        <h4 class="breakdown-title">${conf.breakdownSectionTitle}</h4>
        <div class="breakdown-grid">
          
          <!-- A1 -->
          <div class="breakdown-card">
            <div class="breakdown-head">
              <span class="breakdown-lvl">Nível A1</span>
              <span class="breakdown-badge ${stA1.cls}">${stA1.label}</span>
            </div>
            <div class="breakdown-score">${scores.A1} <span style="font-size:0.85rem; color:#94A3B8;">/ 10</span></div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${scores.A1 * 10}%;"></div>
            </div>
            <p class="breakdown-desc">${conf.breakdownDescriptions.A1}</p>
          </div>

          <!-- A2 -->
          <div class="breakdown-card">
            <div class="breakdown-head">
              <span class="breakdown-lvl">Nível A2</span>
              <span class="breakdown-badge ${stA2.cls}">${stA2.label}</span>
            </div>
            <div class="breakdown-score">${scores.A2} <span style="font-size:0.85rem; color:#94A3B8;">/ 10</span></div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${scores.A2 * 10}%;"></div>
            </div>
            <p class="breakdown-desc">${conf.breakdownDescriptions.A2}</p>
          </div>

          <!-- B1 -->
          <div class="breakdown-card">
            <div class="breakdown-head">
              <span class="breakdown-lvl">Nível B1</span>
              <span class="breakdown-badge ${stB1.cls}">${stB1.label}</span>
            </div>
            <div class="breakdown-score">${scores.B1} <span style="font-size:0.85rem; color:#94A3B8;">/ 10</span></div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${scores.B1 * 10}%;"></div>
            </div>
            <p class="breakdown-desc">${conf.breakdownDescriptions.B1}</p>
          </div>

          <!-- B2 -->
          <div class="breakdown-card">
            <div class="breakdown-head">
              <span class="breakdown-lvl">Nível B2</span>
              <span class="breakdown-badge ${stB2.cls}">${stB2.label}</span>
            </div>
            <div class="breakdown-score">${scores.B2} <span style="font-size:0.85rem; color:#94A3B8;">/ 10</span></div>
            <div class="breakdown-track">
              <div class="breakdown-bar" style="width: ${scores.B2 * 10}%;"></div>
            </div>
            <p class="breakdown-desc">${conf.breakdownDescriptions.B2}</p>
          </div>

        </div>
      </div>

      <!-- Pedagogical Assessment & Action -->
      <div class="pedagogical-advice-box">
        <h4 style="color:#FFF; font-size:1.15rem; margin-bottom:0.75rem; display:flex; align-items:center; gap:0.5rem;">
          <span>${conf.flag}</span> ${conf.pedagogicalTitle}
        </h4>
        <p style="color:#CBD5E1; line-height:1.7; font-size:0.98rem; margin-bottom:1.5rem;">
          ${conf.pedagogicalText}
        </p>

        <div class="results-actions-row">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn-v2 btn-v2-whatsapp" style="font-size:1.05rem; padding:1.1rem 2.2rem;">
            ${conf.waButtonText}
          </a>
          <button type="button" class="btn-v2 btn-v2-glass" id="btnRestartUnifiedQuiz" style="font-size:0.98rem; padding:1.1rem 2rem;">
            ${conf.restartButtonText}
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnRestartUnifiedQuiz').addEventListener('click', () => {
    initQuiz(activeQuizState.language);
  });
}
