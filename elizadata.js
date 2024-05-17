// elizadata.js
var elizaInitials = [
  "Hello! I am ChefBot. Tell me what ingredients you have, and I'll suggest some recipes. (format: i have a _____)"
];

var elizaFinals = [
  "Happy cooking! Come back anytime for more recipes."
];

var elizaQuits = [
  "bye",
  "goodbye",
  "exit",
  "quit"
];

var elizaPres = [
  "dont", "do not",
  "cant", "cannot",
  "wont", "will not",
  "recept", "recipe",
  "recipies", "recipes",
  "ingrediants", "ingredients"
];

var elizaPres = [
  "dont", "do not",
  "cant", "cannot",
  "wont", "will not",
  "recept", "recipe",
  "recipies", "recipes",
  "ingrediants", "ingredients",
  "yum", "delicious",
  "yummy", "delicious",
  "craving", "crave",
  "want", "desire"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are",
  "delicious", "yummy",
  "crave", "want"
];

var elizaKeywords = [
  ["xnone", 0, [
    ["*", [
      "I'm not sure what you mean. Can you tell me about the ingredients you have? (format: i have a _____)",
      "Tell me more about what you have in your kitchen.",
      "Can you list the ingredients you have? (format: i have a _____)"
    ]]
  ]],
  ["i have a", 5, [
    ["*i have a* (\\b\\w+\\b)", [
      "With (3), you can make a delicious stir-fry.",
      "Using (3), how about trying a pasta dish?",
      "With (3), a nice salad would be a great choice.",
      "With (3), you can whip up a tasty omelette.",
      "Using (3), how about creating a savory stew?",
      "With (3), you can make a delightful sandwich.",
      "Using (3), why not prepare a flavorful marinade for grilling.",
      "With (3), you can bake a decadent cake."
    ]]
  ]]
];

var elizaPostTransforms = [
  / old /g, " new ",
  /example/g, "sample"
];
