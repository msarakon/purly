const choices = [
  {
    text: "I want to talk about my problems with someone. 😕",
    title: "Who do you want to contact?",
    choices: [
      {
        text: "My parents",
        title: "What do you want to do?",
        choices: [
          {
            text: "Call dad :)"
          },
          {
            text: "Call mom :))))"
          }
        ]
      },
      {
        text: "A nurse",
        choices: []
      },
      {
        text: "A psychologist",
        choices: []
      }
    ]
  },
  {
    text: "I'm having a bad moment and need help ASAP. 😞",
    title: "Who do you want to contact?",
    choices: []
  }
];

export default choices;
