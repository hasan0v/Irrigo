// Function to round to one decimal place
function roundToDecimalPlace(value, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(value * factor) / factor;
}

// Function to resize charts
function resizeCharts(charts) {
    window.addEventListener('resize', function() {
        charts.forEach(function(chart) {
            chart.resize();
        });
    });
}

// Initialize charts
var soilMoistureChart = echarts.init(document.getElementById('soil_moisture_chart'));
var temperatureChart = echarts.init(document.getElementById('temperature_chart'));
// var phLevelChart = echarts.init(document.getElementById('ph_level_chart'));
var rainfallChart = echarts.init(document.getElementById('rainfall_chart'));
var tankWaterVolumeChart = echarts.init(document.getElementById('tank_water_volume_chart'));
var waterPressureChart = echarts.init(document.getElementById('water_pressure_chart'));
var uvIntensityChart = echarts.init(document.getElementById('uv_intensity_chart'));
var currentTemperatureChart = echarts.init(document.getElementById('current_temperature_chart'));

// Array of all charts for easy resizing
var charts = [
    soilMoistureChart,
    temperatureChart,
    // phLevelChart,
    rainfallChart,
    tankWaterVolumeChart,
    waterPressureChart,
    uvIntensityChart,
    currentTemperatureChart
];

// Set options for each chart
soilMoistureChart.setOption({
    xAxis: { type: 'category', data: timestamps },
    yAxis: { type: 'value', title: { text: 'Soil Moisture (%)' } },
    series: [{ data: soil_moisture_values, type: 'line', smooth: true, lineStyle: { width: 3, color: '#4caf50' } }]
});

temperatureChart.setOption({
    xAxis: { type: 'category', data: timestamps },
    yAxis: { type: 'value', title: { text: 'Temperature (°C)' } },
    series: [{ data: temperature_values, type: 'line', smooth: true, lineStyle: { width: 3, color: '#ff5722' } }]
});

// phLevelChart.setOption({
//     xAxis: { type: 'category', data: timestamps },
//     yAxis: { type: 'value', title: { text: 'pH Level' } },
//     series: [{ data: ph_level_values, type: 'line', smooth: true, lineStyle: { width: 3, color: '#9c27b0' } }]
// });

rainfallChart.setOption({
    xAxis: { type: 'category', data: timestamps },
    yAxis: { type: 'value', title: { text: 'Rainfall (%)' } },
    series: [{ data: rainfall_values, type: 'bar', barWidth: '60%', itemStyle: { color: '#2196f3' } }]
});

tankWaterVolumeChart.setOption({
    xAxis: { type: 'category', data: timestamps },
    yAxis: { type: 'value', title: { text: 'Tank Water Volume (Liters)' } },
    series: [{ data: tank_water_volume_values, type: 'bar', barWidth: '60%', itemStyle: { color: '#673ab7' } }]
});
console.log(water_pressure_values)
var lastPressureValue = roundToDecimalPlace(water_pressure_values[water_pressure_values.length - 1], 1);
waterPressureChart.setOption({
    series: [{
        type: 'gauge', min: 0, max: 5,
        axisLine: { lineStyle: { width: 30, color: [[0.3, '#67e0e3'], [0.7, '#37a2da'], [1, '#fd666d']] } },
        pointer: { itemStyle: { color: 'auto' } },
        axisTick: { distance: -30, length: 8, lineStyle: { color: '#fff', width: 2 } },
        splitLine: { distance: -30, length: 30, lineStyle: { color: '#fff', width: 4 } },
        axisLabel: { color: 'inherit', distance: 40, fontSize: 20 },
        detail: { valueAnimation: true, formatter: '{value} bar', color: 'inherit' },
        data: [{ value: lastPressureValue }]
    }]
});
// document.getElementById('pressure_label').innerText = `Current Water Pressure: ${lastPressureValue} bar`;

uvIntensityChart.setOption({
    xAxis: { type: 'category', data: timestamps },
    yAxis: { type: 'value', title: { text: 'UV Intensity (arbitrary units)' } },
    series: [{ data: uv_intensity_values, type: 'line', smooth: true, areaStyle: {}, lineStyle: { width: 3, color: '#ffeb3b' } }]
});

function getTemperatureColor(value) {
    if (value < 10) { return '#00bfff'; } 
    else if (value > 30) { return '#ff4500'; } 
    else { return '#32CD32'; }
}

var lastTemperatureValue = temperature_values[temperature_values.length - 1];
console.log('heyyy',lastTemperatureValue, temperature_values.length)
var roundedTemperatureValue = Math.round(lastTemperatureValue);
currentTemperatureChart.setOption({
    series: [{
        type: 'gauge',
        center: ['50%', '60%'],
        startAngle: 200,
        endAngle: -20,
        min: 0,
        max: 60,
        splitNumber: 12,
        itemStyle: { color: getTemperatureColor(roundedTemperatureValue) },
        progress: { show: true, width: 30 },
        pointer: { show: false },
        axisLine: { lineStyle: { width: 30 } },
        axisTick: { distance: -45, splitNumber: 5, lineStyle: { width: 2, color: '#999' } },
        splitLine: { distance: -52, length: 14, lineStyle: { width: 3, color: '#999' } },
        axisLabel: { distance: -20, color: '#999', fontSize: 20 },
        anchor: { show: false },
        title: { show: false },
        detail: {
            valueAnimation: true,
            width: '60%',
            lineHeight: 40,
            borderRadius: 8,
            offsetCenter: [0, '-15%'],
            fontSize: 60,
            fontWeight: 'bolder',
            formatter: '{value} °C',
            color: 'inherit'
        },
        data: [{ value: roundedTemperatureValue }]
    }]
});
// document.getElementById('temperature_label').innerText = `Current Temperature: ${roundedTemperatureValue} °C`;

// Function to initialize and set up the pH Level Gauge
function initPHLevelGauge(phValue) {
    var phLevelChart = echarts.init(document.getElementById('ph_level_gauge'));
    console.log('pop',phLevelChart)
    var phLevelOption = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}'
        },
        series: [
            {
                name: 'pH Level',
                type: 'gauge',
                progress: {
                    show: true
                },
                
                min: 3,
                max: 10,
                detail: {
                    valueAnimation: true,
                    formatter: '{value}'
                },
                data: [
                    {
                        value: phValue,
                        name: 'pH Level'
                    }
                ]
            }
        ]
    };
    phLevelChart.setOption(phLevelOption);
}

// Get the latest pH level value and initialize the gauge
var latestPHLevel = ph_level_values[ph_level_values.length - 1];
var roundedPHValue = Math.round(latestPHLevel);

initPHLevelGauge(roundedPHValue);


document.addEventListener('DOMContentLoaded', function() {
    var dashboardContainer = document.querySelector('.container .row');

    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Sortable on the container holding your charts
    Sortable.create(dashboardContainer, {
        animation: 150,
        handle: '.card-title', // Restricts dragging to the card header
        ghostClass: 'sortable-ghost', // Class for the placeholder during drag
        onEnd: function(evt) {
            console.log('Moved element from', evt.oldIndex, 'to', evt.newIndex);
            // Optionally, save the new order to local storage or send it to the server
        }
    });
});


 // Ensure labels animate correctly on page load for pre-filled inputs
 document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.form-control').forEach(function (input) {
        if (input.value.trim() !== '') {
            input.classList.add('has-content');
        }
    });
});

// Initialize the ECharts map instance
var mapChart = echarts.init(document.getElementById('field_map'));

var mapOption = {
    geo: {
        map: 'world', // Replace with your custom map if necessary
        roam: true,   // Enables zooming and panning
        label: {
            show: true,
            color: '#fff'
        },
        itemStyle: {
            areaColor: '#cccccc',
            borderColor: '#111'
        },
        emphasis: {
            label: {
                show: true,
                color: '#fff'
            },
            itemStyle: {
                areaColor: '#2a333d'
            }
        }
    },
    series: [
        {
            name: 'Fields',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: [
                {name: 'Field A', value: [34.0522, -118.2437, 70]}, // Los Angeles, USA
                {name: 'Field B', value: [51.5074, -0.1278, 85]},  // London, UK
                {name: 'Field C', value: [35.6895, 139.6917, 90]}, // Tokyo, Japan
                {name: 'Field D', value: [-33.8688, 151.2093, 65]}, // Sydney, Australia
                {name: 'Field E', value: [48.8566, 2.3522, 78]},   // Paris, France
            ],
            symbolSize: 10,
            itemStyle: {
                color: '#FFCC00'
            }
        }
    ]
};

mapChart.setOption(mapOption);
mapChart.on('click', function (params) {
    if (params.componentType === 'series' && params.seriesType === 'scatter') {
        var selectedField = params.name;
        var selectedData = params.value[2]; // Assuming this is your data value

        // Highlight the selected point by changing its color or adding a glow effect
        highlightSelectedPoint(params);

        // Update other charts with the selected data
        updateDashboards(selectedField, selectedData);
    }
});

function highlightSelectedPoint(params) {
    // Clear previous highlights
    mapChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
    });

    // Highlight the selected point
    mapChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: params.dataIndex
    });
}

function updateDashboards(field, data) {
    // Update the charts with the data of the selected field
    console.log("Selected Field: " + field + ", Data: " + data);

    // Example: Update the soil moisture chart with new data
    var soilMoistureChart = echarts.getInstanceByDom(document.getElementById('soil_moisture_chart'));
    var newSoilMoistureOption = {
        series: [{
            data: [/* your updated data here based on the selected field */]
        }]
    };
    soilMoistureChart.setOption(newSoilMoistureOption);

    // Similarly, update other charts
}


// Make charts responsive
resizeCharts(charts);
