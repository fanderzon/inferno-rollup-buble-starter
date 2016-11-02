import InfernoDOM from 'inferno-dom';
import createElement from 'inferno-create-element';

import Hello from './components/Hello';

InfernoDOM.render(
  <Hello who="World" />,
  document.getElementById("app")
);
