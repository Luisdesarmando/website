/**
 * THE LANGUAGES ACADEMY - DIAGNOSTIC PLACEMENT ENGINE 2.0
 * Stratified CEFR Placement Test (A1, A2, B1, B2)
 * Features:
 * - 40 Stratified Questions (10 A1, 10 A2, 10 B1, 10 B2)
 * - 15:00 Countdown Timer with Warning Pulse (< 2 mins)
 * - Anti-Bias Dynamic Option Shuffling (preserves correct answer key)
 * - Sub-Score Diagnostic Breakdown (A1/A2/B1/B2)
 * - 1-Click WhatsApp Report to Professor Luis (+55 54 99186-3491)
 */

const ENGLISH_BANKS = {
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
        "has/done",
        "have/done",
        "has/did",
        "have/did"
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
        "have/studied",
        "has/studied",
        "are/studying",
        "do/study"
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
        "have/been",
        "has/been",
        "have/went",
        "has/went"
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
        "Have/tried",
        "Has/tried",
        "Have/try",
        "Has/try"
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
        "as/as",
        "more/than",
        "most/than",
        "so/as"
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
};

const OTHER_QUIZZES = {
espanol: {
    title: "Prueba de Nivel de Español",
    description: "Evalúa tu dominio del español desde nivel inicial hasta avanzado (MCER A1 - C1).",
    flag: "🇪🇸",
    questions: [
      {
        q: "1. Hola, ¿cómo _____?",
        options: ["te llamas", "se llama", "te llama", "te llamas tú"],
        answer: 0,
        explanation: "Para la segunda persona informal (tú) se usa el verbo pronominal 'te llamas'."
      },
      {
        q: "2. El fin de semana pasado mis amigos y yo _____ al cine.",
        options: ["vamos", "fuimos", "íbamos", "fueron"],
        answer: 1,
        explanation: "Pretérito perfecto simple en primera persona del plural (nosotros): 'fuimos'."
      },
      {
        q: "3. Cuando era niño, siempre _____ en el parque después de clases.",
        options: ["jugué", "jugaba", "he jugado", "jugué siempre"],
        answer: 1,
        explanation: "Pretérito imperfecto ('jugaba') para acciones habituales en el pasado."
      },
      {
        q: "4. No creo que él _____ la respuesta correcta.",
        options: ["sabe", "sepa", "supo", "sabría"],
        answer: 1,
        explanation: "La negación de verbos de opinión/creencia exige subjuntivo: 'no creo que sepa'."
      },
      {
        q: "5. Te llamaré en cuanto _____ a casa.",
        options: ["llego", "llegué", "llegue", "llegaré"],
        answer: 2,
        explanation: "Conectores temporales con sentido de futuro requieren presente de subjuntivo ('llegue')."
      },
      {
        q: "6. Si _____ más tiempo, estudiaría otro idioma.",
        options: ["tuviera", "tengo", "tendría", "habría tenido"],
        answer: 0,
        explanation: "Condicional tipo 2: Si + imperfecto de subjuntivo ('tuviera') + condicional simple."
      },
      {
        q: "7. A Juan no le gusta el café, pero a mí _____.",
        options: ["también", "tampoco", "sí", "no"],
        answer: 2,
        explanation: "Para contrastar una afirmación frente a una negación previa se usa 'a mí sí'."
      },
      {
        q: "8. El documento ya ha sido revisado _____ el comité directivo.",
        options: ["para", "por", "de", "hacia"],
        answer: 1,
        explanation: "En la voz pasiva, el complemento agente se introduce con la preposición 'por'."
      },
      {
        q: "9. De haberlo sabido antes, no _____ ese error.",
        options: ["cometería", "cometía", "habría cometido", "hubiera de cometer"],
        answer: 2,
        explanation: "Estructura condicional compuesta: 'De haberlo sabido... habría cometido'."
      },
      {
        q: "10. Por más que _____ explicárselo, se negó a escuchar razones.",
        options: ["intentó", "intentaba", "intenté", "haya intentado"],
        answer: 2,
        explanation: "Concesiva en pasado que relata un hecho constatado: 'intenté'."
      }
    ]
  },
  portugues: {
    title: "Teste de Nível de Português",
    description: "Avalie seu conhecimento do português brasileiro, gramática e uso real da língua.",
    flag: "🇧🇷",
    questions: [
      {
        q: "1. Nós _____ estudantes da The Languages Academy.",
        options: ["somos", "estamos", "é", "são"],
        answer: 0,
        explanation: "Concordância com 'nós' no presente do indicativo do verbo ser: 'somos'."
      },
      {
        q: "2. Ontem eu _____ com o professor sobre o meu progresso.",
        options: ["falo", "falei", "falava", "falado"],
        answer: 1,
        explanation: "Pretérito perfeito do indicativo para ação concluída no passado: 'falei'."
      },
      {
        q: "3. Se você _____ tempo hoje, podemos revisar o conteúdo.",
        options: ["ter", "tiver", "tinha", "tenha"],
        answer: 1,
        explanation: "Futuro do subjuntivo após a conjunção condicional 'se': 'se você tiver'."
      },
      {
        q: "4. É fundamental que todos os alunos _____ pontuais.",
        options: ["são", "sejam", "serem", "fossem"],
        answer: 1,
        explanation: "Expressão impessoal de necessidade ('é fundamental que') exige presente do subjuntivo: 'sejam'."
      },
      {
        q: "5. Faz três anos que nós _____ no Brasil.",
        options: ["moramos", "morávamos", "temos morado", "moramos desde"],
        answer: 0,
        explanation: "No português brasileiro atual, usa-se o presente para indicar ação iniciada no passado que perdura: 'moramos'."
      },
      {
        q: "6. Quando nós _____ a Gramado, avisaremos com antecedência.",
        options: ["iremos", "formos", "vamos", "fôssemos"],
        answer: 1,
        explanation: "Futuro do subjuntivo do verbo ir com o pronome nós: 'quando formos'."
      },
      {
        q: "7. Ela pediu para eu _____ o relatório antes da reunião.",
        options: ["enviar", "envie", "enviado", "enviando"],
        answer: 0,
        explanation: "Infinitivo pessoal / preposição 'para eu' seguida do infinitivo: 'enviar'."
      },
      {
        q: "8. Embora o teste _____ desafiador, ele conseguiu uma ótima nota.",
        options: ["foi", "fosse", "tenha sido", "seria"],
        answer: 1,
        explanation: "A conjunção concessiva 'embora' rege verbo no modo subjuntivo ('fosse' / 'tivesse sido')."
      },
      {
        q: "9. Não _____ a atenção com notificações durante a aula.",
        options: ["perde", "perca", "perdeu", "perdendo"],
        answer: 1,
        explanation: "Imperativo negativo para 'você': 'Não perca'."
      },
      {
        q: "10. Se tivéssemos saído mais cedo, não _____ pegado tanto trânsito.",
        options: ["teríamos", "tínhamos", "tivéssemos", "havíamos"],
        answer: 0,
        explanation: "Condicional composto / futuro do pretérito composto: 'não teríamos pegado'."
      }
    ]
  }
};

// Utility: shuffle array (Fisher-Yates)
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Global state for active quiz
let activeQuizState = {
  language: 'ingles',
  questions: [], // 40 items: { q, options, answerIndex, level, userChoice }
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

  if (lang === 'ingles') {
    renderEnglishWelcome(container);
  } else {
    renderStandardWelcome(container, lang);
  }
}

function renderEnglishWelcome(container) {
  container.innerHTML = `
    <div class="quiz-welcome-card" id="quizWelcomeCard">
      <div class="quiz-welcome-badge">AVALIAÇÃO OFICIAL CEFR • 40 QUESTÕES</div>
      <h2 class="quiz-welcome-title">Seja bem-vindo ao Teste de Nivelamento de Inglês!</h2>
      <p class="quiz-welcome-desc">
        Desenvolvido pela The Languages Academy para diagnosticar com precisão cirúrgica suas habilidades comunicativas e gramaticais do nível básico ao avançado.
      </p>

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
        <button type="button" class="btn-v2 btn-v2-purple" id="btnStartEnglishQuiz" style="font-size: 1.12rem; padding: 1.1rem 2.8rem;">
          Começar o Teste Agora ➔
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnStartEnglishQuiz').addEventListener('click', startEnglishQuiz);
}

function startEnglishQuiz() {
  // Select 10 questions from each level
  const a1Sample = shuffleArray(ENGLISH_BANKS.A1).slice(0, 10);
  const a2Sample = shuffleArray(ENGLISH_BANKS.A2).slice(0, 10);
  const b1Sample = shuffleArray(ENGLISH_BANKS.B1).slice(0, 10);
  const b2Sample = shuffleArray(ENGLISH_BANKS.B2).slice(0, 10);

  const keyMap = { a: 0, b: 1, c: 2, d: 3 };

  function processQuestion(raw, level) {
    const originalCorrectIndex = keyMap[raw.correct.toLowerCase()] ?? 0;
    const correctText = raw.options[originalCorrectIndex];
    // Dynamic option shuffling to prevent letter-A bias:
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
      alert('Tempo esgotado! Seu teste será enviado automaticamente para diagnóstico.');
      submitQuiz();
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
          <span class="quiz-level-pill" id="quizLevelPill">Nível A1 (Iniciante)</span>
        </div>
        <div class="quiz-progress-track">
          <div class="quiz-progress-bar" id="quizProgressBar" style="width: 2.5%;"></div>
        </div>
      </div>

      <!-- Question Card Area -->
      <div class="quiz-question-box" id="quizQuestionBox">
        <!-- Rendered by renderQuestion() -->
      </div>

      <!-- Navigation Bar -->
      <div class="quiz-nav-row">
        <button type="button" class="btn-v2 btn-v2-glass" id="btnPrevQuestion" style="padding: 0.75rem 1.6rem;">
          ← Questão Anterior
        </button>
        <div style="display:flex; gap:0.75rem; align-items:center;">
          <button type="button" class="btn-v2 btn-v2-glass" id="btnNextQuestion" style="padding: 0.75rem 1.6rem;">
            Seguinte →
          </button>
          <button type="button" class="btn-v2 btn-v2-purple" id="btnFinishQuiz" style="padding: 0.75rem 1.6rem; display:none;">
            Finalizar Teste ✓
          </button>
        </div>
      </div>

      <!-- Question Quick Navigation Matrix -->
      <div class="quiz-matrix-wrap">
        <div class="matrix-label">Navegação rápida pelas questões:</div>
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
      const confirmSubmit = confirm(`Você ainda tem ${unansweredCount} questão(ões) sem resposta. Deseja finalizar o teste mesmo assim?`);
      if (!confirmSubmit) return;
    }
    submitQuiz();
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

  const idx = activeQuizState.currentIndex;
  const total = activeQuizState.questions.length;
  const currentQ = activeQuizState.questions[idx];

  // Update Progress
  const percent = Math.round(((idx + 1) / total) * 100);
  countEl.textContent = `Questão ${idx + 1} de ${total} (${percent}%)`;
  barEl.style.width = `${percent}%`;

  // Update Level Pill
  const levelLabels = {
    A1: 'Nível A1 (Iniciante)',
    A2: 'Nível A2 (Básico)',
    B1: 'Nível B1 (Intermediário)',
    B2: 'Nível B2 (Intermediário Avançado)'
  };
  levelEl.textContent = levelLabels[currentQ.level] || currentQ.level;

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

      // Show finish button if last question or high answered rate
      if (idx === total - 1) {
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

function submitQuiz() {
  clearInterval(activeQuizState.timerInterval);
  activeQuizState.isSubmitted = true;

  if (activeQuizState.language === 'ingles') {
    submitEnglishQuiz();
  } else {
    submitStandardQuiz();
  }
}

function submitEnglishQuiz() {
  clearInterval(activeQuizState.timerInterval);
  activeQuizState.isSubmitted = true;

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
  let levelTitle = 'A1 - Iniciante (Breakthrough)';
  let levelDesc = 'Você consegue entender e utilizar expressões cotidianas básicas e frases muito simples.';

  if (totalScore >= 34) {
    diagnosedLevel = 'B2';
    levelTitle = 'B2 - Intermediário Avançado (Vantage)';
    levelDesc = 'Você compreende as ideias centrais de textos complexos e se comunica com espontaneidade e fluência sem grande esforço!';
  } else if (totalScore >= 27) {
    diagnosedLevel = 'B1';
    levelTitle = 'B1 - Intermediário (Threshold)';
    levelDesc = 'Você lida com a maioria das situações no idioma, compreende pontos principais de trabalho/estudos e produz textos coerentes.';
  } else if (totalScore >= 20) {
    diagnosedLevel = 'A2';
    levelTitle = 'A2 - Básico / Elementar (Waystage)';
    levelDesc = 'Você entende mensagens e expressões de uso frequente em áreas de relevância imediata (informação pessoal, trabalho, viagens).';
  } else {
    diagnosedLevel = 'A1';
    levelTitle = 'A1 - Iniciante (Breakthrough)';
    levelDesc = 'Você está iniciando sua jornada! Perfeito para criar uma base sólida sem vícios linguísticos com nosso método personalizado.';
  }

  renderEnglishResults(totalScore, scoresByLevel, diagnosedLevel, levelTitle, levelDesc);
}

function renderEnglishResults(totalScore, scores, diagnosedLevel, levelTitle, levelDesc) {
  const container = document.getElementById('quizApp');
  if (!container) return;

  // Remove floating timer
  const timerBadge = document.getElementById('quizTimerBadge');
  if (timerBadge) timerBadge.remove();

  // Scroll to top of results
  window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });

  // Calculate percentage
  const percentTotal = Math.round((totalScore / 40) * 100);

  // Status badges for sub-scores
  function getLevelStatus(score) {
    if (score >= 8) return { label: 'Excelente / Dominado', cls: 'status-high' };
    if (score >= 6) return { label: 'Bom Domínio', cls: 'status-med' };
    return { label: 'Ponto de Atenção', cls: 'status-low' };
  }

  const stA1 = getLevelStatus(scores.A1);
  const stA2 = getLevelStatus(scores.A2);
  const stB1 = getLevelStatus(scores.B1);
  const stB2 = getLevelStatus(scores.B2);

  // Pre-formatted WhatsApp message
  const waMsg = `Olá, Professor Luis! Acabei de realizar o Teste de Nivelamento de Inglês (CEFR) na The Languages Academy:
📊 Pontuação Geral: ${totalScore}/40 (${percentTotal}%)
🎯 Nível Diagnosticado: ${levelTitle}

Detalhamento Estratificado:
• Nível A1 (Iniciante): ${scores.A1}/10 (${stA1.label})
• Nível A2 (Básico): ${scores.A2}/10 (${stA2.label})
• Nível B1 (Intermediário): ${scores.B1}/10 (${stB1.label})
• Nível B2 (Avançado): ${scores.B2}/10 (${stB2.label})

Gostaria de agendar minha aula experimental gratuita com base neste diagnóstico!`;

  const waLink = `https://wa.me/5554991863491?text=${encodeURIComponent(waMsg)}`;

  container.innerHTML = `
    <div class="quiz-results-card">
      <div class="results-header">
        <span class="results-tag">RELATÓRIO DIAGNÓSTICO CONCLUÍDO</span>
        <h2 class="results-title">Parabéns! Veja o resultado do seu teste</h2>
        <p class="results-subtitle">Este relatório estratificado analisa suas competências gramaticais e comunicativas em cada nível do Quadro Europeu Comum (CEFR).</p>
      </div>

      <!-- Big Score Overview -->
      <div class="results-overview-grid">
        <div class="overview-score-box">
          <div class="score-circle">
            <span class="score-number">${totalScore}</span>
            <span class="score-max">/ 40</span>
          </div>
          <div class="score-label">Pontuação Total (${percentTotal}% de precisão)</div>
        </div>

        <div class="overview-level-box">
          <span class="level-badge-cefr">${diagnosedLevel}</span>
          <h3 class="level-name">${levelTitle}</h3>
          <p class="level-desc">${levelDesc}</p>
        </div>
      </div>

      <!-- Stratified Sub-Scores Breakdown -->
      <div class="diagnostic-breakdown-section">
        <h4 class="breakdown-title">📊 Desempenho Estratificado por Nível (CEFR)</h4>
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
            <p class="breakdown-desc">Fundamentos, verbos essenciais, pronomes e estruturas básicas do dia a dia.</p>
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
            <p class="breakdown-desc">Passado simples, comparativos, preposições compostas e rotinas cotidianas.</p>
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
            <p class="breakdown-desc">Tempos perfeitos, condicionais, verbos modais e diálogos situacionais.</p>
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
            <p class="breakdown-desc">Inversões, discurso indireto avançado, locuções complexas e fluência operacional.</p>
          </div>

        </div>
      </div>

      <!-- Pedagogical Assessment & Action -->
      <div class="pedagogical-advice-box">
        <h4 style="color:#FFF; font-size:1.15rem; margin-bottom:0.75rem; display:flex; align-items:center; gap:0.5rem;">
          <span>💡</span> Análise Pedagógica Personalizada do Professor Luis
        </h4>
        <p style="color:#CBD5E1; line-height:1.7; font-size:0.98rem; margin-bottom:1.5rem;">
          Com base na sua distribuição de acertos, identificamos exatamente a transição onde sua base está consolidada e onde começam as lacunas estruturais. Nas aulas particulares da The Languages Academy, não perdemos tempo revisando o que você já domina; nós focamos 100% nas suas áreas de oportunidade para acelerar sua fluência comunicativa!
        </p>

        <div class="results-actions-row">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn-v2 btn-v2-whatsapp" style="font-size:1.05rem; padding:1.1rem 2.2rem;">
            <span>📱</span> Enviar Diagnóstico para o Professor Luis
          </a>
          <button type="button" class="btn-v2 btn-v2-glass" id="btnRestartQuiz" style="font-size:0.98rem; padding:1.1rem 2rem;">
            <span>🔄</span> Refazer Teste com Novas Questões
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnRestartQuiz').addEventListener('click', () => {
    initQuiz('ingles');
  });
}

// Support for standard Spanish & Portuguese Quizzes
function renderStandardWelcome(container, lang) {
  const data = OTHER_QUIZZES[lang];
  if (!data) return;

  container.innerHTML = `
    <div class="quiz-welcome-card">
      <div class="quiz-welcome-badge">${data.flag} AUTOAVALIAÇÃO</div>
      <h2 class="quiz-welcome-title">${data.title}</h2>
      <p class="quiz-welcome-desc">${data.description}</p>
      
      <div style="margin-top: 2rem; text-align: center;">
        <button type="button" class="btn-v2 btn-v2-purple" id="btnStartStandardQuiz" style="font-size: 1.1rem; padding: 1.05rem 2.5rem;">
          Começar Avaliação ➔
        </button>
      </div>
    </div>
  `;

  document.getElementById('btnStartStandardQuiz').addEventListener('click', () => {
    startStandardQuiz(lang);
  });
}

function startStandardQuiz(lang) {
  const data = OTHER_QUIZZES[lang];
  activeQuizState.questions = data.questions.map(q => ({
    question: q.q,
    options: q.options,
    answerIndex: q.answer,
    level: 'Geral',
    userChoice: null
  }));
  activeQuizState.currentIndex = 0;
  activeQuizState.timeRemainingSeconds = 600; // 10 mins

  renderActiveQuizLayout();
  startTimer();
}

function submitStandardQuiz() {
  const lang = activeQuizState.language;
  const langTitle = lang === 'espanol' ? 'Espanhol' : 'Português para Estrangeiros';
  const flag = lang === 'espanol' ? '🇪🇸' : '🇧🇷';

  let totalScore = 0;
  activeQuizState.questions.forEach(q => {
    if (q.userChoice === q.answerIndex) totalScore++;
  });

  const totalQuestions = activeQuizState.questions.length;
  const percent = Math.round((totalScore / totalQuestions) * 100);

  let level = 'A1';
  let levelTitle = 'A1 / A2 - Básico / Elementar';
  let desc = 'Você possui noções básicas. Vamos construir uma base sólida nas aulas particulares!';

  if (totalScore >= 8) {
    level = 'B2+';
    levelTitle = 'B2 / C1 - Avançado / Fluente';
    desc = 'Excelente domínio gramatical e situacional! Pronto para conversação avançada e objetivos profissionais.';
  } else if (totalScore >= 5) {
    level = 'B1';
    levelTitle = 'B1 / B2 - Intermediário';
    desc = 'Bom vocabulário e compreensão. Hora de destravar a fala e refinar nuances linguísticas.';
  }

  const container = document.getElementById('quizApp');
  if (!container) return;

  const timerBadge = document.getElementById('quizTimerBadge');
  if (timerBadge) timerBadge.remove();

  window.scrollTo({ top: container.offsetTop - 80, behavior: 'smooth' });

  const waMsg = `Olá, Professor Luis! Acabei de realizar o Teste de Nivelamento de ${langTitle} na The Languages Academy:
📊 Pontuação: ${totalScore}/${totalQuestions} (${percent}%)
🎯 Nível Estimado: ${levelTitle}

Gostaria de agendar minha aula experimental gratuita com base neste diagnóstico!`;

  const waLink = `https://wa.me/5554991863491?text=${encodeURIComponent(waMsg)}`;

  container.innerHTML = `
    <div class="quiz-results-card">
      <div class="results-header">
        <span class="results-tag">${flag} AVALIAÇÃO CONCLUÍDA</span>
        <h2 class="results-title">Resultado do Teste de ${langTitle}</h2>
        <p class="results-subtitle">Confira seu resultado e agende sua aula particular gratuita com o Professor Luis.</p>
      </div>

      <div class="results-overview-grid">
        <div class="overview-score-box">
          <div class="score-circle">
            <span class="score-number">${totalScore}</span>
            <span class="score-max">/ ${totalQuestions}</span>
          </div>
          <div class="score-label">Pontuação (${percent}% de acertos)</div>
        </div>

        <div class="overview-level-box">
          <span class="level-badge-cefr">${level}</span>
          <h3 class="level-name">${levelTitle}</h3>
          <p class="level-desc">${desc}</p>
        </div>
      </div>

      <div class="pedagogical-advice-box">
        <h4 style="color:#FFF; font-size:1.15rem; margin-bottom:0.75rem; display:flex; align-items:center; gap:0.5rem;">
          <span>💡</span> Próximo Passo: Aula Experimental Gratuita
        </h4>
        <p style="color:#CBD5E1; line-height:1.7; font-size:0.98rem; margin-bottom:1.5rem;">
          Envie seu resultado agora mesmo para o Professor Luis via WhatsApp. Ele analisará suas respostas e preparará uma aula de 30 minutos 100% personalizada para seu nível e objetivos!
        </p>

        <div class="results-actions-row">
          <a href="${waLink}" target="_blank" rel="noopener" class="btn-v2 btn-v2-whatsapp" style="font-size:1.05rem; padding:1.1rem 2.2rem;">
            <span>📱</span> Enviar Resultado via WhatsApp
          </a>
          <button type="button" class="btn-v2 btn-v2-glass" id="btnRestartStdQuiz" style="font-size:0.98rem; padding:1.1rem 2rem;">
            <span>🔄</span> Refazer Teste
          </button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('btnRestartStdQuiz').addEventListener('click', () => {
    initQuiz(lang);
  });
}
