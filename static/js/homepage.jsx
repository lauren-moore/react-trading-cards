'use strict';

function Homepage() {
 
  //welcome message here
  return (
    <React.Fragment>
      <p>Welcome to the Trading Site!</p>
      <a href='/cards'>Click here to view the cards</a>
      <p></p>
      <img src="/static/img/balloonicorn.jpg"></img>
    </React.Fragment>
  );

}

ReactDOM.render(<Homepage />, document.querySelector('#app'));


// function Hello() {
//   return (
//     <ul>
//       <li>Hi World!</li>
//     </ul>
//   );
// }