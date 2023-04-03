import './projects.css';
import p1 from '../../pic/1.png'
import p2 from '../../pic/2.png'
import p3 from '../../pic/3.png'
import p4 from '../../pic/4.png'
import p5 from '../../pic/5.png'
function Projects(props) {
  return (
    <div className="Projects NarrowProjects">
    I started with C++, so I have good skills with it, but no decent projects. 
    Then I learned C# and wrote a small game in the style of Tower Defense 
    using WPF (<a href='https://github.com/Magnitik1/TowerDefense'>Link</a>)<br/>
     <img src={p1} alt='pic1' className='p'/>
     <img src={p2} alt='pic2' className='p'/>
     In this game, you can build defenses and upgrade or sell them.
     Enemies appear with more hp over time. The magician hits everyone but weakly, the archer hits single enemy, but strongly.
     <br/>
     <br/>
     <br/>
     I'm currently learning React, js, and this site you're on is written on it.
     I also have a music player site, where hooks and API are used.
     (<a href='https://github.com/Magnitik1/mp3-react'>Link</a>)
     <br/>
     <img src={p3} alt='pic3' className='p'/>
     <img src={p4} alt='pic4' className='p'/>
     <img src={p5} alt='pic5' className='p'/>
     You can create new playlists, delete old ones, change the theme from night 
     to day and backward, search for songs by title or author and more.
    <br/><br/>
    </div>
  );
}

export default Projects;
