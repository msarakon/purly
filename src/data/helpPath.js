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
    title: "It's going to be alright.",
    choices: [
      {
        text: "Chat anonymously with a professional"
      },
      {
        text: "Call the emergency number"
      },
      {
        text: "Show me a cute animal 🐱",
        choices: [
          {
            img: "doggo.jpg"
          }
        ]
      }
    ]
  }
];

export default choices;
