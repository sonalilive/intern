import React from 'react';

// function Hello(){
//     return(
// <div>
// <h2>plz work</h2>
//   </div>  );
// }

function Hello(){
const reaction=()=>{
console.log('ding dong');

};
return(
<div>
    <h1>hello</h1>
    <button onClick={reaction}>press the belll icon</button>
</div>
);

}

export default Hello;