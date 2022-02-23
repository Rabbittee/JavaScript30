/* ------
  Day12 < Easter eggs trick>
  User key-in the secret code, 
  Show the surprising gift. (Unicorn) 
------ */


const userKeyIn = [];
const secretCode = 'egg';

// MDN: docs/Web/API/Element/keyup_event
window.addEventListener('keyup', (e) => {
    // console.log(e.key); 
    // Every single letter user key-in,
    // need to put together and tell if match the secret code.
    
    // Because not sure how mnay words yet, 
    // so use '.push' to add new key into userKeyIn. 
    userKeyIn.push(e.key);
    // Check if it works: 
    // console.log(userKeyIn);
    
    // * use splice to make the length stay the same with secretCode
    // (delete old key and add new key):
    userKeyIn.splice(-secretCode.length - 1, userKeyIn.length - secretCode.length);   
    // console.log(userKeyIn);

    // Before compare them, turn the array into strings,
    // check if userKeyIn includes secretCode:    
    if ( userKeyIn.join('').includes(secretCode) ) {
        cornify_add();
        console.log("Bingo!");
    }

});


/* ------
  Array.splice: to insert or delete element. 
  Array.join: creates and returns a new string.
  Array.includes: According to if includes spec element 
                  to returning true or false. 

  cornify_add(): From the Unicorn website, shows a Unicorn.
----- */ 
