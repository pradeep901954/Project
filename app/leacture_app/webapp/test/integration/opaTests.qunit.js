sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'l/leactureapp/test/integration/FirstJourney',
		'l/leactureapp/test/integration/pages/departList',
		'l/leactureapp/test/integration/pages/departObjectPage'
    ],
    function(JourneyRunner, opaJourney, departList, departObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('l/leactureapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThedepartList: departList,
					onThedepartObjectPage: departObjectPage
                }
            },
            opaJourney.run
        );
    }
);