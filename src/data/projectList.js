const projects = [
  {
    title: "Qiskit Circuit Utility Library",
    date: "May 2026 - August 2026",
    description:
      "A utility library operating on top of qiskit.circuit providing higher level abstraction for constructing and manipulating quantum circuits.",
    details: 
      "Provides reusable operations for preparing, transforming, correcting, operating on, and measuring quantum states within circuits, reducing repetitive circuit construction.",
    tech: ["Quantum Computing", "Qiskit", "Python"],
    link: "https://github.com/1Aiden-K/qiskit-circuit-utils",
  },
  {
    title: "Custom AI Benchmarking",
    date: "May 2026 - August 2026",
    description:
      "Creates, runs, and grades various AI models against user-made custom use cases and criteria.",
    details: 
      "Uses AI-generated benchmark tasks and rubrics made by user-selected \"assessor\" models are used to test and grade user-selected \"assessee\" models and neatly displays results.",
    tech: ["OpenRouter", "React", "Python"],
    link: "https://github.com/zhenkog78028/Benchmarking",
  },
  {
    title: "Tetris",
    date: "May 2024 - June 2024",
    description:
      "The game of tetris, recreated in Java with custom graphical and game engine.",
    details: 
      "Menu and window made with JFrame, game-area graphics and game logic created manually.",
    tech: ["Java", "JFrame", "Graphics"],
    link: "https://github.com/1Aiden-K/Tetris",
  },
  {
    title: "Metar Tracker",
    date: "October 2023",
    description:
      "IoT device protoype providing real-time updates of the METAR status of the selected airport.",
    details: 
      "Made as a demo in partnership with The Windy City Labs. The prototype fetches API data using HTTPS (Node-RED) and transmits to Particle Argon MCU for parsing and display.",
    tech: ["HTTPS", "C++", "JSON"],
    link: "https://github.com/1Aiden-K/metarTracking",
  },
  {
    title: "Windy City Enigma Core",
    date: "July 2023 - August 2023",
    description:
      "Custom 8 Bit CPU designed specifically to calculate the first 8 Fibonacci numbers and store the numbers in reverse.",
    details: 
      "Made through Northwestern CTD and The Windy City Labs, winner of its design challenge with 35 cycles to calculate the first 8 Fibonacci numbers and store them in RAM in reverse address order though the use of optimized opcodes and custom hardware.",
    tech: ["CPU Design", "Assembly", "Microcode"],
    link: "https://github.com/1Aiden-K/8-bit-CPU-windy-city-enigma-core",
  },
  {
    title: "Music Practice Assistant",
    date: "June 2022 - July 2022",
    description:
      "IoT device protoype to support practicing musicians with audio playback, timing, metronome, and google calendar integration controlled through Blynk.",
    details: 
      "Created a physical prototype through Northwestern CTD and The Windy City Labs. Utilizes Particle Argon MCU and hardware peripherals such as audio transducers and digital audio controllers for audio playback, as well as creates google calendar practice schedules based on user inputs.",
    tech: ["C++", "Blynk", "IoT"],
    link: "https://github.com/1Aiden-K/CapstoneMusic",
  },
];

export default projects;