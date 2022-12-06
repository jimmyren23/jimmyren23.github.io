import React, { Component } from 'react';

class PathCal extends Component {
        
    render() {
        return (
            <div className="policy-page">
              <h1>Path Cal</h1>
              <p>
              This is a chrome extension that allows University of Pennsylvania students download their class schedules in an ICS format or upload it to their google calendar!

              For our privacy policy, I hereby state that none of this data is stored by the app or by me, and rather only utilizes the web data, scrapes it, and either gives you a downloadable file or uploads it to your Google Calendar using their secure API. We do not collect or share your data.

              This app only need your Google authorization in order to upload new events!
              </p>
            </div>
        );
    }
}

export default PathCal;