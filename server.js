const express = require("express");
const app = express();
const port = 3000;

const agendaData = {
  "2024-10-20": [
    {
      name: "Dave Sebek",
      description: "JSON Data Handling",
      time: "1:00PM - 1:30PM",
      color: "grey",
    },
  ],

  "2024-10-21": [
    {
      name: "Helen Armstrong",
      description: "Chinese Herbal Medicine \nwith Staff Member #1",
      time: "10:10AM - 10:45AM",
      color: "green",
    },
  ],
  "2024-10-22": [
    {
      name: "Julie Falcon",
      description: "Acu-Facial \nwith Staff Member #1",
      time: "12:00PM - 12:45PM",
      color: "purple",
    },
  ],
  "2024-10-23": [],
  "2024-10-24": [
    {
      name: "Nick Selman",
      description: "Custom Code in Draftbit",
      time: "2:00PM - 3:30PM",
      color: "grey",
    },
  ],
};

app.get("/agenda", (req, res) => {
  res.json(agendaData);
});

app.listen(port, () => {
  console.log(`Agenda API is running at http://localhost:${port}`);
});
