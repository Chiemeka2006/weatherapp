let apikey = "26d87d75597764dca7ddaa76d957963b";

let weather = {
    fetchWeather: function (city) {
        fetch(
            "http://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&APPID=" +
                apikey
        )
            .then((Response) => Response.json())
            .then((data) => displayWeather(data));
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search").value);
        if (document.querySelector(".search").value.length > 0) {
            document.querySelector(".card").style.opacity = "1";
            document.querySelector(".card").style.translate = "0";
            document.querySelector(".card").style.pointerEvents = "visible";
        }
    },
};

function displayWeather(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    var { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    temp = temp - 273;
    temp = Math.round(temp);
    document.querySelector(".city").innerHTML = name;
    document.querySelector(".icon").src =
        "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".condition-img p").innerHTML = description;
    document.querySelector(".humidity").innerHTML =
        "Humidity: " + humidity + "%";
    document.querySelector(".wind-speed").innerHTML =
        "Wind Speed: " + speed + "Km/h";
    // document.body.style.backgroundImage =
    //     "url('curl https://api.unsplash.com/search/photos?query=" + name + "')";

    // if ((document.querySelector(".search").value = name)) {
    //     document.querySelector(".er").style.display = "block";
    //     document.querySelector(".er").style.color = "rgba(9, 84, 9, 0.633)";
    //     document.querySelector(".er").innerHTML = "valid location inputed";
    //     document.querySelector(".error").style.marginBottom = ".5em";
    //     console.log("Valid Location Inputed");
    // } else {
    //     document.querySelector(".er").style.display = "block";
    //     document.querySelector(".card").style.display = "none";
    //     console.log("Invalid Location Inputed");
    // }
}

document.querySelector(".search-btn").addEventListener("click", function () {
    weather.search();
    document.querySelector(".search").value = "";
});

document.querySelector(".search").addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        console.log(event.key);
        weather.search();
        document.querySelector(".search").value = "";
    }
});

// weather.fetchWeather("port harcourt");

// console.log(weather.fetchWeather("lagos"));

// if ((document.querySelector(".search").value = name)) {
//     console.log("Valid Loacation Inputed");
// } else {
// document.querySelector('.er').style.opacity = '1'
// document.querySelector('.er').style.pointerEvents = 'visible'
//     console.log("Invalid Location inputed");
// }
