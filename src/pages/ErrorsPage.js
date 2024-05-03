/*
Error Page
Created: 2024-May-1
~
Photo by <a href="https://unsplash.com/@mullyadii?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mulyadi</a> on <a href="https://unsplash.com/photos/grayscale-photo-of-box-robot-on-table-ZnLprInKM7s?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
*/
import bg from '../assets/mulyadi-ZnLprInKM7s-unsplash.jpg';
import './ErrorsPage.css';

export default function ErrorPage() {
    // if (true) {
        return (
            <div>
                <h1>404 Error Page.</h1>
                <img className="ErrorPageBG" src={bg} width={100} height={100}></img>
            </div>
        );
}