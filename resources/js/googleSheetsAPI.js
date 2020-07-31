/* ################################ ABOUT ME ################################ */

if (window.location.href.includes("about-me")) {
  fetch("https://sheets.googleapis.com/v4/spreadsheets/11QSfvcXfhWIu_hA_BH-x-gcuWdOdATex3jhVFnDLCGs/values/About%20Me?key=AIzaSyAxFtgYFyStTch-G_kQHGI1lqKaUYg8p3Y")
    .then(resp => resp.json()) // Transform the google sheet api url into json
    .then(data => {
      var descrip = document.getElementById("about-me-description");
      data['values'].forEach(para => descrip.innerHTML += (para.length ? para[0] : '') + '<br>');
    })
}

/* ########################### SERVICES & PRICING ########################### */

else if (window.location.href.includes("services-pricing")) {
  fetch("https://sheets.googleapis.com/v4/spreadsheets/11QSfvcXfhWIu_hA_BH-x-gcuWdOdATex3jhVFnDLCGs/values/Services%20Pricing?key=AIzaSyAxFtgYFyStTch-G_kQHGI1lqKaUYg8p3Y")
    .then(resp => resp.json()) // Transform the google sheet api url into json
    .then(data => {
      text = data['values'];
      document.getElementById('title-description').innerHTML = text[0][0];

      var i = 1;
      [ ["IP-list",'OTHER CONTRACTS'],
        ["OC-list", 'EMPLOYMENT / WORKERS'],
        ["EW-list",'WEBSITE'],
        ["W-list",'EVENTS'],
        ["E-list",'SETTING UP YOUR COMPANY'],
        ["SUYC-list",'SITUATIONS GONE WRONG'],
        ["SGW-list",'END OF LIST']
      ].forEach(title => {
        for (i++; text[i][0] !== title[1]; i++) {
          document.getElementById(title[0]).innerHTML += '<li>' + text[i][0] + '</li>'
        }
      });

      ["pricing-description", "doc-price", "doc-description", "day-rate", "day-rate-description"]
        .forEach(id => {
          i++;
          document.getElementById(id).innerHTML = text[i][0]
      });
    })
}

/* ################################ HOME PAGE ############################### */

else {
  fetch("https://sheets.googleapis.com/v4/spreadsheets/11QSfvcXfhWIu_hA_BH-x-gcuWdOdATex3jhVFnDLCGs/values/Home?key=AIzaSyAxFtgYFyStTch-G_kQHGI1lqKaUYg8p3Y")
    .then(resp => resp.json()) // Transform the google sheet api url into json
    .then(data => {
      ['tagline','about-me-info','services-pricing-info','contact-info-title','contact-info-description']
        .forEach((id, i) => document.getElementById(id).innerHTML = data['values'][i][0])
    })
}
