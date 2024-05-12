/*
About Us Page
Created: 2024-APR-29
*/
import { useState, useEffect } from 'react';
import axios from "axios";

// import mainImage from '../assets/Star Nationals Inc Official Logo 2016.png';
import './AboutUsPage.css';

export default function AboutUs() {
    const [jobs, setJobs] = useState([]);
    const [jobsTableMessage, setJobsTableMessage] = useState("Unknown Error Encountered in Loading Table Contents.");
    const [jobsTableLoading, setJobsTableLoading] = useState(true);

    useEffect(() => {
        axios.get("/").then(() => {
            axios.get('/jobs')
                .then(response => {
                    if (response.data.length > 0) {
                        console.log("Data accessed");
                        setJobsTableLoading(false);
                        setJobs(response.data);
                    } else {
                        console.log("No data returned, no opennings?");
                        setJobsTableLoading(false);
                        setJobsTableMessage("UH OH:\nNo Job Opennings at this time. Check again later!");
                    }
                })
                .catch(error => {
                    console.log('Error fetching data: ', error);
                    setJobsTableLoading(false);
                    setJobsTableMessage("DB ERROR:\nError accessing database. Please try again later");
                })
        })
            .catch((error) => {
                console.log('Error fetching data: ', error);
                setJobsTableLoading(false);
                setJobsTableMessage("DB ERROR:\nError connecting to database. Please try again later");
            })
    }, []); //runs only once.

    return (
        <div className='AboutUsPageContent'>
            <div className='pageCompanyHeading'>
                <div className='pageCompanyHeadingText'>
                    <h2>Welcome from</h2>
                    <h3> STAR NATIONALS INC. </h3> <hr />
                </div>
                {/* <img src={banner} id="pageCompanyLogo" width={140} alt='Official Star Nationals Logo 2016'></img> */}
            </div>
            <br />
            <div className='WhoWeAre'>
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
                <h4> Careers </h4> <br />
                <table className='careersTable'>
                    <thead>
                        <tr>
                            <th>Job Opennings</th>
                            <th>
                                Location
                            </th>
                            <th>
                                Salary
                            </th>
                            <th>Apply Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {console.log(jobs + " | " + jobsTableMessage)}
                        {jobsTableLoading ? <tr>TABLE CONTENTS CONNECTING AND LOADING</tr> : false}
                        {jobsTableMessage.includes("DB ERROR" || "UH OH") ? <tr>{jobsTableMessage}</tr> : (Array.isArray(jobs) &&
                         jobs.length > 0) ?
                             jobs.map(job => (
                                <tr key={job._id}>
                                    <td>{job.title}</td>
                                    <td>{job.location}</td>
                                    <td>{job.salary}</td>
                                    <td>
                                        <a href={"https://jovian-careers-website-v2-14w3.onrender.com/job/" + job._id}
                                            target='_blank'
                                            rel="noreferrer">Apply now! <i className="fa fa-external-link" /></a>
                                    </td>
                                </tr>)) : <div>{jobsTableMessage}</div> }
                    </tbody>
                </table>
                <p> Data above redirect to smaller project I worked on related to a <a
                    href='https://jovian-careers-website-v2-14w3.onrender.com/' target='_blank' rel="noreferrer">
                    careers website <i className="fa fa-external-link" /></a>.</p>
            </div>
        </div>
    );
}
