import React from 'react';
import ReactDOM from 'react-dom';
const name='sonali';
const ele=<h1>hello {name}</h1>;
ReactDOM.render(
  ele,
  document.getElementById('root')
);
ReactDOM.render(<h3>will work ?</h3>,document.getElementById('will'));