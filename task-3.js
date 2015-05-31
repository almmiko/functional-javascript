/*# Task

Use Array#filter to write a function called getShortMessages.

getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.

The function should return an array containing the messages themselves, without their containing object.

## Conditions

  * Do not use any for/while loops or Array#forEach.
  * Do not create any unnecessary functions e.g. helpers.

*/

function getShortMessages(messages) {
    return messages.filter(function(el){
       if (el.message.length < 50) {
         return el.message;
       }
     }).map(function(text){
      return text.message;
    });
}

 module.exports = getShortMessages
