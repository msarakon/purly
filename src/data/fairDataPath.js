const choices = [
  {
    text: "Phone data",
    title: "Choose data type",
    choices: [
      {
        text: "Screentime. Notice: Only on/off time is saved, not apps you are using!",
        title: "Who can see your data?",
        choices: [
          {
            text: "Only me"
          },
          {
            text: "Me and Pöhinämasiina"
          },
          {
            text: "Me, Pöhinämasiina and school health workers"
          }
        ]
      }
    ]
    },
    {
    text: "Sleep data",
    title: "Who can see your data?",
    choices: [
          {
            text: "Only me"
          },
          {
            text: "Me and Pöhinämasiina"
          },
          {
            text: "Me, Pöhinämasiina and school health workers"
          }
        ]
      }
];


export default choices;
