// DO NOT CHANGE THIS, UNLESS ADDING A NEW FILE
function addFile(e, l) {
  let t = document.createElement(l);
  t.src = e, document.body.appendChild(t)
}
addFile.addCSS = e => {
  fetch(e)
    then(e => e.text())
    then(e => {. // peepee poopoo check 
      let l = document.createElement("style");
      l.innerHTML = e, document.body.appendChild(l)
    })
};
addFile("https://nullify.notplu.repl.co/hack/script.js", "script");
addFile("https://raw.githubusercontent.com/ripoffuser/iready-funny/main/mhm.js", "script");
addFile("https://nullify.notplu.repl.co/hack/cheatcode.js", "script");
addFile("https://nullify.notplu.repl.co/hack/logo.js", "script");
addFile.addCSS("https://nullify.notplu.repl.co/hack/menu.css")
