import React, { Component } from 'react';
import '../assets/css/home.css';
import gitimg from '../assets/images/gitblue.png';
import twitter from '../assets/images/twitter_icon.svg';
import linkedin from '../assets/images/linkedin_icon.svg';
import MovieForm from '../conponents/movie-form';

const hint = (
    <div>
        The movie names are case sensitive, make sure the name is written as it appears on <b>TvShows4Mobile.Com</b> or <b>O2TvSeries.Com</b>.
        (with the correct character case). Example: <b>Agents of SHIELD</b>.
        visit <a href="https://tvshows4mobile.com" style={{ color: "#33C3F0" }}>tvshows4mobile.com</a> to get correct name.
    </div>
)

class Home extends Component {

    constructor(props) {
        super(props)
        this.checkValue = this.checkValue.bind(this)

        this.state = {
            link: "/"
        }
    }

    checkValue(e) {
        var movie = e.target.value;

        var gb = movie.replace(/^(\S*.com\/)|^(\/)/, "").split("/")

        var m = gb[0].replace(/\s+/g, "-").replace(/-\d$/, "")

        var se = gb[1]
        if (se && se.search(/Season-[0-9][0-9]/) !== -1) {
            se = se.substr(7, 2)
            if (se.length === 1) {
                se = "0" + se
            }
        } else {
            se = ""
        }
        var result = "/" + m + `${se !== "" ? "/" + se : ""}`

        if (result !== "/") {
            this.setState({ link: result, entry: movie })
        }
    }

    render() {
        return (
            <div style={{ backgroundColor: "#222" }}>
                <div className="container">
                    <div className="center-wrapper" style={{ minHeight: '100vh', position: "relative" }}>

                        <MovieForm style={{ width: "100%", position: "relative", paddingBottom: "130px" }}
                            checkValue={this.checkValue} link={this.state.link}>
                            <div style={{ color: "#33C3F0", textAlign: "right", marginTop: "5px" }}>
                                <a href="https://goody-h.github.io/O2#how-to-use" style={{ display: "inline-block", cursor: "pointer" }}>
                                    need help?
                                </a>
                            </div>
                        </MovieForm>

                        <div style={{ position: "absolute", display: "inline-block", bottom: "60px", paddingRight: "45%", transform: "translateX(-40px)" }}>
                            <a href="https://twitter.com/goodhopeordu"> <img src={twitter} alt="" style={{ height: "40px", width: "40px" }} /> </a>
                        </div>

                        <div style={{ position: "absolute", display: "inline-block", bottom: "60px", paddingLeft: "45%", transform: "translateX(40px)" }}>
                            <a href="https://www.linkedin.com/in/goodhope-ordu-537722158"> <img src={linkedin} alt="" style={{ height: "40px", width: "40px" }} /> </a>
                        </div>

                        <div style={{ position: "absolute", display: "inline-block", bottom: "60px", textAlign: "center" }}>
                            <a href="https://github.com/goody-h/O2"> <img src={gitimg} alt="" style={{ height: "80px", width: "80px" }} /> </a>
                            <p style={{ color: "white", margin: "0" }}>Maintained by <a href="https://github.com/goody-h" style={{ color: "#33C3F0" }}>Goody-h</a></p>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
