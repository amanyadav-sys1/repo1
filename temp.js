const apiKey = "13aafd3edd554989bd163808261501";

function getWeather() {
    const location = document.getElementById("locationInput").value;
    const weatherCard = document.getElementById("weatherCard");

    if (location === "") {
        alert("Please enter a city name");
        return;
    }

    const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert("Location not found!");
                return;
            }

            document.getElementById("cityName").innerText = data.location.name;
            document.getElementById("country").innerText = data.location.country;
            document.getElementById("temperature").innerText = 
                `${data.current.temp_c}°C`;
            document.getElementById("condition").innerText =
                data.current.condition.text;
            document.getElementById("weatherIcon").src =
                "https:" + data.current.condition.icon;

            weatherCard.style.display = "block";
        })
        .catch(error => {
            console.error(error);
            alert("Something went wrong. Try again!");
        });
}
