import { EarthHappiestBank } from "../../declarations/EarthHappiestBank";
window.addEventListener("load", async function(){
  console.log("Finished loadig");
  const currentAmount = await EarthHappiestBank.checkBalance();
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
});

document.querySelector("form").addEventListener("submit", async function(event){
  try{

  
  event.preventDefault();
  console.log("Submitted");

  const inputAmount = parseFloat(document.getElementById("input-amount").value);
  console.log("input"+inputAmount);
  const outputAmount = parseFloat(document.getElementById("withdawal-amount").value);
  console.log("output"+outputAmount);
  await EarthHappiestBank.topUp(inputAmount);
  const currentAmount = await EarthHappiestBank.checkBalance();
  console.log("currentAmount"+currentAmount);
  document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
  }catch(error){
    console.log(error);
  }
});
// import { EarthHappiestBank } from "../../declarations/EarthHappiestBank";

// document.querySelector("form").addEventListener("submit", async (e) => {
//   e.preventDefault();
//   const button = e.target.querySelector("button");

//   const name = document.getElementById("withdrawal-amount").value.toString();
//   // console.log("ritik jain"+withdrawal-amount);
//   button.setAttribute("disabled", true);

//   // Interact with foo actor, calling the greet method
//   const greeting = await EarthHappiestBank.greet(name);

//   button.removeAttribute("disabled");

//   document.getElementById("greeting").innerText = greeting;

//   return false;
// });
