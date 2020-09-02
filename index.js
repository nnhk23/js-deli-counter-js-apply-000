var katzDeliLine = []; 
// function takeANumber (katzDeliLine, name) {
//   katzDeliLine.push(name);
//   katzDeliLine = "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
//   return katzDeliLine
// }
var i = 0;
function takeANumber (katzDeliLine) {
  i++
  katzDeliLine.push(i);
  katzDeliLine = "Welcome, you are number " + i + "."
}

function nowServing (line) {
    if (line.length === 0) {
      return "There is nobody waiting to be served!"
    } else {
      var name = line[0]
      line.splice(0,1)
      return "Currently serving " + name + "."
    }
}

function currentLine(current) {
  var line = [];
  if (current.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < current.length; i++) {
      line.push((i+1) + ". " + current[i]);
    }
  }
  return "The line is currently: " + line.join(", ")
}