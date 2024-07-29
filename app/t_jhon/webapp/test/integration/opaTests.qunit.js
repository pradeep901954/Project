sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        't/tjhon/test/integration/FirstJourney',
		't/tjhon/test/integration/pages/departList',
		't/tjhon/test/integration/pages/departObjectPage',
		't/tjhon/test/integration/pages/teacherObjectPage'
    ],
    function(JourneyRunner, opaJourney, departList, departObjectPage, teacherObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('t/tjhon') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThedepartList: departList,
					onThedepartObjectPage: departObjectPage,
					onTheteacherObjectPage: teacherObjectPage
                }
            },
            opaJourney.run
        );
    }
);