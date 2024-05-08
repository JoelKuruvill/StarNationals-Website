/*
About Us Page
Created: 2024-APR-29
*/
import banner from '../assets/Star Nationals Inc Official Logo 2016.png';
import './AboutUsPage.css';

export default function AboutUs() {
    const fetchData = async () => {
        try {
          const response = await fetch('/api/jobs'); // Replace '/api/jobs' with your backend endpoint
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setJobs(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
    return (
        <div className='AboutUsPageContent'>
            <div className='pageCompanyHeading'>
                <h2>Welcome from</h2>
                <h3> STAR NATIONALS INC. </h3> <hr />
                <img src={banner} id="pageCompanyLogo" width={140}></img>
            </div>
            <br />
            <div>
                <h4> Who We Are </h4> <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et malesuada magna. Duis suscipit ante egestas massa consequat, non pharetra nibh rutrum. Integer tincidunt odio eget nunc sollicitudin consequat. Nam eget placerat felis, sit amet ultrices nibh. Nullam vel odio vitae metus scelerisque pellentesque. Aliquam ac magna quis velit aliquam dapibus bibendum at lacus. Suspendisse potenti.
                </p>
                <p> This website is created as a Full-stack project using React to make a website of a company I had come up with years ago.. </p>
            </div>
            <div>
                <h4> Our Values </h4> <br />
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Etiam sed risus tincidunt, dictum urna vitae, laoreet augue.</li>
                    <li>Fusce placerat odio at risus luctus, sed aliquam nisi blandit.</li>
                    <li>Donec nec ligula quis mauris elementum fringilla et at purus.</li>
                    <li>Vestibulum egestas eros at consectetur suscipit.</li>
                </ul>
            </div>
            <div>
                <h4> Our Mission </h4> <br />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut dictum diam, eget auctor ex. Sed at lacus ullamcorper, cursus dui vel, convallis lectus. Phasellus elementum diam at eros vehicula luctus at vitae neque. Morbi aliquam viverra nibh, ac tincidunt massa mollis sit amet. Vestibulum sodales est et elit congue varius. In interdum pharetra diam. Cras dictum dui ut erat tristique, eget faucibus ex scelerisque. Nulla felis ligula, sodales sit amet est finibus, euismod vehicula.
                </p>
            </div>
            <div>
            {jobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
                <h4> Careers </h4> <br />
                <table>
                    <tr>
                        <th>
                            Test1
                        </th>
                        <th>
                            Test3
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Test2
                        </td>
                        <td>
                            Test4
                        </td>
                    </tr>
                </table>
                <p> Links above redirect to smaller project I worked on related to a Caerrs page :) </p>
            </div>
        </div>
    );
}
