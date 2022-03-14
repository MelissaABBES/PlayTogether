import './style.scss';
import controller from 'src/assets/img/joystick.png';
import level from 'src/assets/img/level-up.png';


// == Composant
const Team = () => {

  return (

  <><div className="titleIcons">
      <img className="titleIcons--controller" src={controller} />
      <h1 class="title_page">La Team</h1>
      <img className="titleIcons--level" src={level} />   
    </div>
    <main class="page-content">
      <div class="card">
        <div class="contentTeam">
          <h2 class="title">Mathieu</h2>
          <p class="copy">Product owner / Dev front</p>
          <img id="mathieu_picture" src="https://media-exp1.licdn.com/dms/image/D4E35AQHKF6dSOI3nWg/profile-framedphoto-shrink_800_800/0/1643549093210?e=1644314400&v=beta&t=N4xNE61SC_OXdJKu0IocsQfy0XEhMEtAo_Ut2myLq5k" alt="" />
          <a href="https://www.linkedin.com/in/mathieu-marc-14b741168/" target="_blank"><button class="btn">LinkedIn</button></a>
        </div>
      </div>
      <div class="card">
        <div class="contentTeam">
          <h2 class="title">Mélissa</h2>
          <p class="copy">Lead dev front / Dev front</p>
          <img id="mathieu_picture" src="https://ca.slack-edge.com/T029L5QN3GF-U02B0CB550W-31bc535b70bd-512" alt="" />
          <a class="btn" href="https://www.linkedin.com/in/m%C3%A9lissa-abbes-2b240b68/">LinkedIn</a>
        </div>
      </div>
      <div class="card">
        <div class="contentTeam">
          <h2 class="title">Mourad</h2>
          <p class="copy">Dev Front</p>
          <img id="mathieu_picture" src="https://ca.slack-edge.com/T029L5QN3GF-U02AU0CNT7V-ba81427b6f4c-512" alt="" />
          <button class="btn">LinkedIn</button>
        </div>
      </div>
      <div class="card">
        <div class="contentTeam">
          <h2 class="title">Nicolas</h2>
          <p class="copy">Lead dev back / Dev back</p>
          <img id="nicolas_picture" src="https://media-exp1.licdn.com/dms/image/C5603AQFUxbieR_hC4A/profile-displayphoto-shrink_400_400/0/1638354478608?e=1649289600&v=beta&t=e04sXQDQEimwNb1aXKxKX8Vt6u-C2QLD4H6W9HZD8oc" alt="" />
          <a href="https://www.linkedin.com/in/nicolas-le-laic-081b86208/" target="_blank"><button class="btn">LinkedIn</button></a>
        </div>
      </div>
      <div class="card">
        <div class="contentTeam">
          <h2 class="title">Thibault</h2>
          <p class="copy">Scrum master / Dev back</p>
          <img id="thibault_picture" src="https://media-exp1.licdn.com/dms/image/C4D03AQGmkYL2c8U1DA/profile-displayphoto-shrink_400_400/0/1637574446194?e=1649289600&v=beta&t=kHwS3a4MPY3qp3lUu-lVKq5WdI3OC7n54GIN6B0p_3c" alt="" />
          <a href="https://www.linkedin.com/in/thibault-pougin-638661a8/" target="_blank"><button class="btn">LinkedIn</button></a>
        </div>
      </div>
    </main></>
  );
};

// == Export
export default Team;
