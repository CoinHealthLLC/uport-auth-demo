import React, { Component } from 'react'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <center>
            <h1>Welcome!</h1>
            <p>This is a demonstration of authentication with uPort for CoinHealth</p>
            <h2>uPort Authentication</h2>
            <p>You must have uPort installed on your mobile device in order to use this authentication system</p>
            <p><a href="https://play.google.com/store/apps/details?id=com.uportMobile&hl=en">Download uPort for Android</a></p>
            <p><a href="https://itunes.apple.com/us/app/uport-id/id1123434510?mt=8">Download uPort for iOS</a></p>
            <p>In the upper-right corner, you'll see a login button.</p>
            <p>Click it to login with UPort.</p>
            <h3>Redirect Path</h3>
            <p>You will be redirected automatically after successfully completing the login with uPort</p>
            </center>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
