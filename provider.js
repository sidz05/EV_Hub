document.addEventListener("DOMContentLoaded", () => {
    const providerForm = document.getElementById('providerForm');
    const stationsList = document.getElementById('stationsList');

    // Load existing stations from local storage
    loadStations();

    providerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const providerName = document.getElementById('providerName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const evVehicleType = document.getElementById('evVehicleType').value;
        const stationLocation = document.getElementById('stationLocation').value;

        // Create a station object
        const station = {
            providerName,
            email,
            phoneNumber,
            evVehicleType,
            stationLocation
        };

        // Save the station to local storage
        saveStation(station);

        // Clear the form
        providerForm.reset();

        // Reload the stations list
        loadStations();
    });

    function saveStation(station) {
        const stations = getStationsFromLocalStorage();
        stations.push(station);
        localStorage.setItem('stations', JSON.stringify(stations));
    }

    function getStationsFromLocalStorage() {
        const stations = localStorage.getItem('stations');
        return stations ? JSON.parse(stations) : [];
    }

    function loadStations() {
        const stations = getStationsFromLocalStorage();
        stationsList.innerHTML = ''; // Clear the list before loading

        stations.forEach((station, index) => {
            const stationDiv = document.createElement('div');
            stationDiv.className = 'p-4 border border-gray-300 rounded-md';
            stationDiv.innerHTML = `
                <h3 class="font-semibold">${station.providerName}</h3>
                <p>Email: ${station.email}</p>
                <p>Phone: ${station.phoneNumber}</p>
                <p>EV Vehicle Type: ${station.evVehicleType}</p>
                <p>Location: ${station.stationLocation}</p>
                <button class="mt-2 bg-red-600 text-white px-2 py-1 rounded-md" onclick="deleteStation(${index})">Delete</button>
            `;
            stationsList.appendChild(stationDiv);
        });
    }

    window.deleteStation = function(index) {
        const stations = getStationsFromLocalStorage();
        stations.splice(index, 1); // Remove the station
        localStorage.setItem('stations', JSON.stringify(stations)); // Update local storage
        loadStations(); // Refresh the displayed list
    };
});
