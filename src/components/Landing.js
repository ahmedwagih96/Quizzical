const Landing = ({handleClick}) => {

  return ( 
  <div className="landing">
    <h1>Quizzical</h1>
    <h3>Some description if needed</h3>
    <button onClick={handleClick}>Start quiz</button>
  </div> );
}
 
export default Landing;