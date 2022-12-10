export function drinkStorage(){
    let numRequest = Number(window.localStorage.getItem("request-ls"));
    numRequest++;
    localStorage.setItem("request-ls", numRequest);
  }