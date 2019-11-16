const choices = [
  {
    text: "I want to talk about my problems with someone. 😕",
    title: "Who do you want to contact?",
    choices: [
      {
        text: "My parents 👪",
        title: "Who do you need?",
        choices: [
          {
            text: "My mom"
          },
          {
            text: "My dad"
          }
        ]
      },
      {
        text: "A nurse 👩‍⚕️",
        title: "How do you want to contact?",
        choices: [
          {
            text: "Book an appointment with nurse"
          },
          {
            text: "I want the nurse to call me"
          }
        ]
      },
      {
        text: "A psychologist 👩‍⚕️",
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
