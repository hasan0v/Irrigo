$(document).ready(function() {
    // Function to round to one decimal place
    function roundToDecimalPlace(value, decimalPlaces) {
        const factor = Math.pow(10, decimalPlaces);
        return Math.round(value * factor) / factor;
    }

    // Function to get temperature color based on value
    function getTemperatureColor(value) {
        if (value < 10) return '#00bfff';
        else if (value > 30) return '#ff4500';
        else return '#32CD32';
    }

    // Function to resize charts on window resize
    function resizeCharts(charts) {
        $(window).resize(function() {
            $.each(charts, function(index, chart) {
                chart.resize();
            });
        });
    }

    // Function to initialize and set up the pH Level Gauge
    function initPHLevelGauge(phValue) {
        var phLevelChart = echarts.init($('#ph_level_gauge')[0]);
        phLevelChart.setOption({
            tooltip: { formatter: '{a} <br/>{b} : {c}' },
            series: [{
                name: 'pH Level',
                type: 'gauge',
                progress: { show: true },
                min: 3, max: 10,
                detail: { valueAnimation: true, formatter: '{value}' },
                data: [{ value: phValue, name: 'pH Level' }]
            }]
        });
    }

    // Initialize charts
    var soilMoistureChart = echarts.init($('#soil_moisture_chart')[0]);
    var temperatureChart = echarts.init($('#temperature_chart')[0]);
    var rainfallChart = 0;  // Placeholder, if needed later
    var tankWaterVolumeChart = echarts.init($('#tank_water_volume_chart')[0]);
    var waterPressureChart = echarts.init($('#water_pressure_chart')[0]);
    var uvIntensityChart = echarts.init($('#uv_intensity_chart')[0]);
    var currentTemperatureChart = echarts.init($('#current_temperature_chart')[0]);

    // Array of all charts for easy resizing
    var charts = [
        soilMoistureChart, temperatureChart, rainfallChart, 
        tankWaterVolumeChart, waterPressureChart, uvIntensityChart, 
        currentTemperatureChart
    ];

    // Set options for soil moisture chart
    soilMoistureChart.setOption({
        xAxis: { type: 'category', data: timestamps },
        yAxis: { type: 'value', title: { text: 'Soil Moisture (%)' } },
        series: [{ data: soil_moisture_values, type: 'line', smooth: true, lineStyle: { width: 3, color: '#4caf50' } }]
    });

    // Set options for temperature chart
    temperatureChart.setOption({
        xAxis: { type: 'category', data: timestamps },
        yAxis: { type: 'value', title: { text: 'Temperature (°C)' } },
        series: [{ data: temperature_values, type: 'line', smooth: true, lineStyle: { width: 3, color: '#ff5722' } }]
    });

    // Set options for tank water volume chart
    tankWaterVolumeChart.setOption({
        xAxis: { type: 'category', data: timestamps },
        yAxis: { type: 'value', title: { text: 'Tank Water Volume (Liters)' } },
        series: [{ data: tank_water_volume_values, type: 'bar', barWidth: '60%', itemStyle: { color: '#673ab7' } }]
    });

    // Set options for water pressure chart
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

    // Set options for UV intensity chart
    uvIntensityChart.setOption({
        xAxis: { type: 'category', data: timestamps },
        yAxis: { type: 'value', title: { text: 'UV Intensity (arbitrary units)' } },
        series: [{ data: uv_intensity_values, type: 'line', smooth: true, areaStyle: {}, lineStyle: { width: 3, color: '#ffeb3b' } }]
    });

    // Set options for current temperature chart
    var lastTemperatureValue = temperature_values[temperature_values.length - 1];
    var roundedTemperatureValue = Math.round(lastTemperatureValue);
    currentTemperatureChart.setOption({
        series: [{
            type: 'gauge',
            center: ['50%', '60%'],
            startAngle: 200, endAngle: -20,
            min: 0, max: 60, splitNumber: 12,
            itemStyle: { color: getTemperatureColor(roundedTemperatureValue) },
            progress: { show: true, width: 30 },
            pointer: { show: false },
            axisLine: { lineStyle: { width: 30 } },
            axisTick: { distance: -45, splitNumber: 5, lineStyle: { width: 2, color: '#999' } },
            splitLine: { distance: -52, length: 14, lineStyle: { width: 3, color: '#999' } },
            axisLabel: { distance: -20, color: '#999', fontSize: 20 },
            detail: {
                valueAnimation: true, fontSize: 60, fontWeight: 'bolder',
                formatter: '{value} °C', color: 'inherit',
                width: '60%', lineHeight: 40, borderRadius: 8,
                offsetCenter: [0, '-15%']
            },
            data: [{ value: roundedTemperatureValue }]
        }]
    });

    // Get the latest pH level value and initialize the gauge
    var latestPHLevel = ph_level_values[ph_level_values.length - 1];
    var roundedPHValue = Math.round(latestPHLevel);
    initPHLevelGauge(roundedPHValue);

    // Initialize Bootstrap tooltips
    $('[data-bs-toggle="tooltip"]').tooltip();

    // Initialize Sortable on the container holding your charts
    new Sortable($('.container .row')[0], {
        animation: 150, handle: '.card', ghostClass: 'sortable-ghost',
        onEnd: function(evt) {
            console.log('Moved element from', evt.oldIndex, 'to', evt.newIndex);
            // Optionally, save the new order to local storage or send it to the server
        }
    });

    // Make charts responsive
    resizeCharts(charts);
});