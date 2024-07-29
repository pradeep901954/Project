sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        't/teacherstjhon/test/integration/FirstJourney',
		't/teacherstjhon/test/integration/pages/lecturesList',
		't/teacherstjhon/test/integration/pages/lecturesObjectPage'
    ],
    function(JourneyRunner, opaJourney, lecturesList, lecturesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('t/teacherstjhon') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThelecturesList: lecturesList,
					onThelecturesObjectPage: lecturesObjectPage
                }
            },
            opaJourney.run
        );
    }
);