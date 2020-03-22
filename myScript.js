let new_cases = document.getElementById("new_cases");
let new_death = document.getElementById("new_death");
let total_death = document.getElementById("total_death");
let total_recovered = document.getElementById("total_recovered");
let total_cases = document.getElementById("total");
let table = document.getElementById("countries_stat");

//Fetching World Data from API
fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "c1915916aamsh3164a4dba65c113p108128jsne5690d0dbf50"
  }
})
  .then(response =>
    response.json().then(data => {
      console.log(data);
      total_cases.innerHTML = data.total_cases;
      total_death.innerHTML = data.total_deaths;
      total_recovered.innerHTML = data.total_recovered;
      new_cases.innerHTML = data.new_cases;
      new_death.innerHTML = data.new_deaths;
    })
  )
  .catch(err => {
    console.log(err);
  });

//Fetching Countries Data from API
fetch(
  "https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
  {
    method: "GET",
    headers: {
      "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
      "x-rapidapi-key": "c1915916aamsh3164a4dba65c113p108128jsne5690d0dbf50"
    }
  }
)
  .then(response =>
    response.json().then(data => {
      console.log(data);
      let countries_stat = data.countries_stat;
      console.log(countries_stat);
      for (let i = 0; i < countries_stat.length; i++) {
        let row = table.insertRow(i + 1);
        let country_name = row.insertCell(0);
        let cases = row.insertCell(1);
        let deaths = row.insertCell(2);
        let serious_critical = row.insertCell(3);
        let recovered_per_country = row.insertCell(4);
        country_name.innerHTML = countries_stat[i].country_name;
        cases.innerHTML = countries_stat[i].cases;
        deaths.innerHTML = countries_stat[i].deaths;
        serious_critical.innerHTML = countries_stat[i].serious_critical;
        recovered_per_country.innerHTML = countries_stat[i].total_recovered;
      }
    })
  )
  .catch(err => {
    console.log(err);
  });
