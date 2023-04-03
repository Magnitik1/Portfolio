import './home.css';
import me from '../pic/me.png';
import Projects from '../Bar/Projects/Projects';
function Home(props) {
  return (
    <>
      {props.info===1 ? 
      <div className="Home">
      <div>
        <img src={me} alt='me' className='me'/>
        <div className='aboutMe'>
        IT knowledge:
        <ul>
<li>C# ( ASP.NET (MVC),  WPF,  WinForms,  Xaml Design )</li>
<li>C++ <br/></li>
<li>JavaScript (React)<br/></li>
<li>HTML\CSS<br/></li>
<li>SQL<br/></li>
<li>Have some basic knowledge of Python<br/>
(at the moment, studying it at university)<br/><br/></li>
</ul>
Languages:<br/>
My English is about B2. Ukrainian and Russian are native languages. Polish - B1.<br/><br/>
About me:<br/>
I'm from Ukraine, Vinnytsia, and now I'm in Poland, Wroclaw.<br/>
I'm studying at WSB we Wroclawe on Software Development.<br/>
I've almost finished Step academy, where I learned how to use C++, C#,<br/>
 and JS(react) with HTML and CSS. I'm in my 3rd, and last, year of studying there.<br/>
I can work 2 or 3 days per week and on the 4th Sunday if needed.<br/>
I like to be criticized because I can improve upon my mistakes, I like self-improvement.<br/>
About salary, I'm not picky. Right now experience is much more important to me. 
        </div></div></div>: <div><Projects/></div>}
    </>
  );
}

export default Home;
