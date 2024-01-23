// Ask username
const userName = prompt("What is your name?");
if (userName) {
  alert(`Welcome ${userName}`);

  // Does user want to continue
  const continueQ = confirm("Do you wan to contiue");
  if (continueQ) {
    alert("You have chosen to continue");
  } else {
    alert("You canceled the action");
  }
  // Log user screen details
  console.log("innerWidth", innerWidth);
  console.log("innerHeight", innerHeight);

  console.log("Page will be reloaded in 10 seconds...");
  setTimeout(() => {
    window.location.reload();
  }, 10000);
} else {
  // If no name given, Bye Bye
  console.error("You did not provide your name. Bye Bye!");
}

// const userName = window.prompt("Please enter your name:");
// if (userName) {
//   window.alert("Welcome " + userName);
//   const cont = window.confirm("Would you like to continue?");
//   if (cont) {
//     window.alert("You have chosen to continue");
//     console.log("innerHeight", innerHeight);
//     console.log("innerWidth", innerWidth);
//     setTimeout(() => {
//       window.location.reload();
//     }, 10000);
//   } else {
//     window.alert("You have canceled the action");
//   }
// } else {
//   window.alert("Bye bye!");
// }



















