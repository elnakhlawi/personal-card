
const skills = [
  { skill: "HTML", level: "Beginner", backgroundColor: "#d4f4dd" },      // Light Green
  { skill: "CSS", level: "Beginner", backgroundColor: "#d4f4dd" },       // Light Green
  { skill: "JavaScript", level: "Intermediate", backgroundColor: "#fff3cd" }, // Light Yellow
  { skill: "React.js", level: "Intermediate", backgroundColor: "#fff3cd" },   // Light Yellow
  { skill: "Node.js", level: "Advanced", backgroundColor: "#f8d7da" },   // Light Red
  { skill: "MongoDB", level: "Advanced", backgroundColor: "#f8d7da" }    // Light Red
];
function App() {
  return (
    <>
      <div className="parent">
        <Avatar />
        <div className="content-section">
          <Intro />
          <Skills />
        </div>
      </div>
    </>
  );
}



function Avatar() {
  return (
    <div className="img-parent">
      <img
        className="img"
        src="../public/e90a45a7-1a7c-4f89-9b4c-6973120f0031.png"
        alt="avatar img"
      />
    </div>
  );
}
function Intro() {
  return (
    <div className="intro-section">
      <h2>Mahmoud Elnakhlawy</h2>
      <p className="intro-p">
        
        a web developer using MERN Stack and tools like React, Tailwind, and
        Bootstrap.
      </p>
    </div>
  );
}

function Skills() {
  console.log(skills);
  return (
    <>
      <div style={{display:'flex',gap:'7px',width:'100%',flexWrap:'wrap'}}>
      {skills.map((skill) => <Skill skill={skill.skill} level={skill.level} emj="💪" bgColor={skill.backgroundColor} key={skill.skill} />)}
  
      </div>
    </>
  );
}

function Skill({skill,level,emj,bgColor}) {
  return (
    <div className='skill'style={{color:'black',backgroundColor:`${bgColor}`,padding:'5px 15px',borderRadius:'5px',fontWeight:'bold'}}>
      <div>
        <span>{skill}</span>
        <span>
          {level==="Beginner"&&'👶'}
          {level==="Intermediate"&&'💪'}
          {level==="Advanced"&&'🚀'}


        </span>
      </div>
    </div>
  );
}

export default App;
