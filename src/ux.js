
// this file contains functions which interact with the page and 
// control interactions and UX logic

function bindOnboardingEvents(response) {
    console.log(response);

    $('.fbtrex--onboarding-toggle').on('click', () => {
        $('.fbtrex--onboarding > div').toggle('fbtrex--hide');
    });

    $('#info-diet-button').on('click', () => {
        $('#info-diet-asterisk').addClass('asterisk-selected');
        $('#info-diet-asterisk').removeClass('asterisk-default');
        $('#info-diet-checkbox').text('☑');
        $('#closeContinue').addClass('enabled');
        $('#closeContinue').removeClass('continue-default');
    });

/*
    $('#anomaly-button').on('click', () => {
        $('#anomaly-checkbox').text('☑');
    });

   -- the data reuse is not personal, and bindOnboardingEventsthe researcher agreements
      needs a dedicated opt-in therefore this is removed             --
    $('#data-reuse-checkbox').on('click', () => {
        $('#data-reuse-button').toggleClass('welcome-opt-in');
        console.log("clicked 1");
    });
 */

    $('#closeContinue').on('click', () => {
        if($('#closeContinue').hasClass('enabled')) {
            $("#closeContinue").text("Saving and refreshing...");

            bo.runtime.sendMessage({
                type: 'optIn',
                payload: {
                    infoDiet: true,
                    // dataReuse: dataReuse,
                    userId: config.userId
                }
            }, (response => {
                window.location.reload();
            }));
        } 
    });
}


module.exports = {
    bindOnboardingEvents,
}