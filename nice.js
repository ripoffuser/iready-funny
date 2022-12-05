function addFile(e, t) {
  let n = document.createElement(t);
  n.src = e, document.body.appendChild(n)
}
addFile.addCSS = e => {
  fetch(e)
    .then(e => e.text())
    .then(e => {
      let t = document.createElement("style");
      t.innerHTML = e, document.body.appendChild(t)
    })
};
let codes = {
  men() {
    addFile("https://nullify.notplu.repl.co/hack/men.js", "script")
  },
  info() {
    fetch("https://login.i-ready.com/rpc/studentdashboard/context", {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json;charset=UTF-8"
        },
        referrerPolicy: "strict-origin-when-cross-origin",
        body: '{"jsonrpc":"2.0","id":2,"method":"getLoggedInStudent","params":{"responseMetaObject":{"paging":null,"fields":{"student":["stateId","userName","studentGroupEnrollments","firstName","lastName","id","gradeLevelData","districtId","primarySchoolEnrollment","assessmentLanguage"]}}}}',
        method: "POST",
        mode: "cors",
        credentials: "include"
      })
      .then(e => e.json())
      .then(e => {
        alert("first name:" + e.result.firstName + "\nlast name:" + e.result.lastName + "\nusername:" + e.result.userName + "\nschool:" + e.result.primarySchoolEnrollment.school.name)
      })
  },
  quiz() {
    __pt1()
  },
  name() {
    addFile("https://nullify.notplu.repl.co/hack/name.js", "script")
  },
  space() {
    setInterval(function () {
      try {
        document.getElementById("background-image")
          .src = "https://25.media.tumblr.com/tumblr_ly2zeySSWA1qirmcfo1_500.gif"
      }
      catch (e) {}
    }, 2e3);
    try {
      document.getElementById("background-image")
        .src = "https://25.media.tumblr.com/tumblr_ly2zeySSWA1qirmcfo1_500.gif"
    }
    catch (e) {}
  },
  color() {
    let color = prompt('What color would you like iReady do be?')
    document.getElementById('root')
      .style.background = color
    let darkmode = document.createElement('style')
    darkmode.innerHTML = `
.eedqomz1{
background:${color};
}
.e1wq6qfu1{
background:${color};
}
.embu0a00{
background:${color};
}
.e16nsggm1{
background:${color};
}
`
    document.body.appendChild(darkmode)
  },
  test(){
    alert('test')
  },
  sex(){
    addFile("https://nullify.notplu.repl.co/hack/sex-mod/sex.js", "script")
  },
  dev(){
    window.open('https://nullify.notplu.repl.co/')
  },
  astro(){
        setInterval(function () {
      try {
        document.getElementById("background-image")
          .src = "https://media.tenor.com/RN_Qtdf11N0AAAPo/space.gif"
      }
      catch (e) {}
    }, 2e3);
    try {
      document.getElementById("background-image")
        .src = "https://media.tenor.com/RN_Qtdf11N0AAAPo/space.gif"
    }
    catch (e) {}
  }
};

function cheatCode(e) {
  "undefined" === typeof codes[e] ? alert("No code found!") : codes[e.toLowerCase()]()
}
