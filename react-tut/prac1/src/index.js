import React from 'react';
import ReactDOM from 'react-dom';
import Hello from "./Hello";
/*const name='sonali';
const ele=<h1>hello {name}</h1>;
ReactDOM.render(
  ele,
  document.getElementById('root')
);*/
//ReactDOM.render(<h3>will work ?</h3>,document.getElementById('will'));
function tick() {
  const element = (
    <div>
      <h1>whats the time RN!</h1>
      <h2>It's {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('clock'));
}

setInterval(tick, 1000);

ReactDOM.render(
  <Hello />,document.getElementById("root")
);
