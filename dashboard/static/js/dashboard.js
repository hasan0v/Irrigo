$(document).ready(function() {

    // Ensure labels animate correctly on page load for pre-filled inputs
    $('.form-control').each(function() {
        if ($(this).val().trim() !== '') {
            $(this).addClass('has-content');
        }
    });

    let selectedValve = null;

    // Ensure that all elements are loaded before running any code
    $(window).on('load', function() {
        
        // Handle valve button clicks for selection
        $('.valve-button').on('click', function() {
            const valve = $(this);

            // If there is a previously selected valve, reset its color
            if (selectedValve && selectedValve !== valve) {
                selectedValve.removeClass('selected');
            }

            // Select the current valve
            valve.addClass('selected');
            selectedValve = valve;
        });

        // Handle device control button clicks (Aç/Kapa)
        $('.btn-control').on('click', function() {
            const button = $(this);
            const parentCard = button.parents('.device-card').first();
            const action = button.attr('id').includes('on') ? 'on' : 'off';

            if (action === 'on') {
                parentCard.removeClass('off').addClass('on');
            } else {
                parentCard.removeClass('on').addClass('off');
            }
        });

        // Load saved states from localStorage for valve buttons and device cards
        $('.valve-button').each(function() {
            const valve = $(this);
            const valveId = valve.attr('id');
            const savedState = localStorage.getItem(valveId);
            const parentCard = valve.parents('.device-card').first();

            console.log(parentCard)

            if (parentCard.length > 0) {
                if (savedState === 'on') {
                    valve.addClass('active');
                    parentCard.addClass('on');
                } else {
                    valve.addClass('inactive');
                    parentCard.addClass('off');
                }
            } else {
                console.error('Parent card not found for valve:', valveId);
            }
        });

        function toggleValveState(valveId, valve, parentCard) {
            if (valve.hasClass('active')) {
                // Turning off
                valve.removeClass('active').addClass('inactive');
                parentCard.removeClass('on').addClass('off');
                localStorage.setItem(valveId, 'off');
            } else {
                // Turning on
                valve.removeClass('inactive').addClass('active');
                parentCard.removeClass('off').addClass('on');
                localStorage.setItem(valveId, 'on');
            }
        }
    });
// Function to handle the toggling of device states
function toggleDevice(button, deviceCard) {
    const parentCard = button.parents('.device-card').first();
    const action = button.attr('id').includes('on') ? 'on' : 'off';

    if (action === 'on') {
        parentCard.removeClass('off').addClass('on');
    } else {
        parentCard.removeClass('on').addClass('off');
    }
}
    // Event listener for circulation on/off buttons
    $('#circulation-on').on('click', function() {
        const button = $(this);
        const deviceCard = button.closest('.device-card');

        toggleDevice(button, deviceCard);
    });

    $('#circulation-off').on('click', function() {
        const button = $(this);
        const deviceCard = button.closest('.device-card');

        toggleDevice(button, deviceCard);
    });
    
    const waterLevel = $('#waterLevel');

    $('#drain-tank').on('click', function() {
        waterLevel.removeClass('fill').addClass('drain');
    });

    $('#fill-tank').on('click', function() {
        waterLevel.removeClass('drain').addClass('fill');
    });

    
    
    

});
