import "./expertise.scss";

const feTools = [
  { id: 1, name: "HTML", imageSrc: "/Tech-Tools/HTML.png" },
  { id: 2, name: "CSS", imageSrc: "/Tech-Tools/CSS.svg" },
  { id: 3, name: "Javascript", imageSrc: "/Tech-Tools/Javascript.svg" },
  { id: 4, name: "Typescript", imageSrc: "/Tech-Tools/Typescript.svg" },
  { id: 5, name: "ReactJS", imageSrc: "/Tech-Tools/ReactJS.png" },
  { id: 6, name: "NextJS", imageSrc: "/Tech-Tools/NextJS.svg" },
  { id: 7, name: "Redux", imageSrc: "/Tech-Tools/Redux.svg" },
  { id: 8, name: "Git", imageSrc: "/Tech-Tools/Git.svg" },
  { id: 9, name: "Git Hub", imageSrc: "/Tech-Tools/GitHub.svg" },
  { id: 10, name: "Git Lab", imageSrc: "/Tech-Tools/GitLab.svg" },
  { id: 11, name: "Bootstrap", imageSrc: "/Tech-Tools/Bootstrap.svg" },
  { id: 12, name: "SASS", imageSrc: "/Tech-Tools/SASS.svg" },
  { id: 13, name: "Tailwind", imageSrc: "/Tech-Tools/TailwindCss.svg" },
];

const beTools = [
  { id: 14, name: "NodeJS", imageSrc: "/Tech-Tools/NodeJS.svg" },
  { id: 15, name: "Express", imageSrc: "/Tech-Tools/Express.svg" },
  { id: 16, name: "Firebase", imageSrc: "/Tech-Tools/Firebase.svg" },
  { id: 17, name: "Google Console", imageSrc: "/Tech-Tools/Google.svg" },
  { id: 18, name: "MongoDB", imageSrc: "/Tech-Tools/MongoDB.png" },
  { id: 19, name: "LAMDA", imageSrc: "/Tech-Tools/Lamda.png" },
  { id: 20, name: "Open AI", imageSrc: "/Tech-Tools/ChatGPT.png" },
];

const Expertise = () => {
  return (
    <div className="expertise">
      <div className="main-title">
          <h1>Expertise</h1>
        </div>
      <div className="tools-container">
        <div className="title">
          <h2>Front End</h2>
        </div>
        {feTools.map((skill) => (
          <div className="tool" key={skill.id}>
            <img src={skill.imageSrc} alt={skill.name} />
            <h2 className="name">{skill.name}</h2>
          </div>
        ))}
      </div>
      <div className="tools-container">
      <div className="title">
          <h2>Back End</h2>
        </div>
        {beTools.map((skill) => (
          <div className="tool" key={skill.id}>
            <img src={skill.imageSrc} alt={skill.name} />
            <h2 className="name">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
