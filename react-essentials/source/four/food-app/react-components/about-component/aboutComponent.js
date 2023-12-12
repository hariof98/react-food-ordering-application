import { MY_DETAILS } from "../../../../../utilities/constants.js";

const { name, description, portfolio } = MY_DETAILS[0];

const AboutComponent = () => {
    const aboutLayout = (
        <div className="about-me">
            <div className="name">{name}</div>
            <div className="description">{description}</div>
            <div className="portfolio">
                <a href={portfolio}>Portfolio</a>
            </div>
        </div>
    );

    return aboutLayout;
};

export default AboutComponent;
