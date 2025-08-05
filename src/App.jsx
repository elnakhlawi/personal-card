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
  return (
    <>
      <div style={{display:'flex',gap:'7px',width:'100%',flexWrap:'wrap'}}>
        <Skill skl="React " emj="💪" bgColor='#217095ff' />
        <Skill skl="Javascript " emj="❤️"  bgColor='yellow'/>
        <Skill skl="HTML " emj="❤️‍🔥"   bgColor='#B2F2BB'/>
        <Skill skl="CSS " emj="💥"  bgColor='#f13434d7'/>
        <Skill skl="Tailwind " emj="🚀"  bgColor='#89CFF0'/>
        <Skill skl="Nodejs " emj="💣"  bgColor='#34c742ff'/>
      </div>
    </>
  );
}

function Skill(p) {
  return (
    <div className='skill'style={{color:'black',backgroundColor:`${p.bgColor}`,padding:'5px 15px',borderRadius:'5px',fontWeight:'bold'}}>
      <div>
        <span>{p.skl}</span>
        <span>{p.emj}</span>
      </div>
    </div>
  );
}

export default App;
