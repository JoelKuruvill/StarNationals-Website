/*
About Us Page
Created: 2024-APR-29
*/
import banner from '../assets/Star Nationals Inc Official Logo 2016.png'
export default function AboutUs() {
    if (true) {
        return (
            <div>
                <h1>Welcome from</h1>
                <h2> STAR NATIONALS INC. </h2>
                <img src={banner} width={140}></img>
                <br /> <hr/>
                <b> Who We Are </b> <br/>
                <b> Our Values </b> <br/>
                <b> Our Mission </b> <br/>
                <b> Careers </b> <br/>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1> Hello There! </h1>
                <b> Who We Are </b> <br/>
                <b> Our Values </b> <br/>
                <b> Our Mission </b> <br/>
            </div>
        );
    }
}
