import "../css/cosplay-maker.css"

import { Button, Card } from "antd";

import { Link } from "react-router-dom";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useTranslation } from "react-i18next";

const Spotifake = () => {
    const { t } = useTranslation();

    return (
        <div className="cosplaymaker-container">
            <Title level={2} >Spotifake</Title>
            <div className="cosplaymaker-resume">
                <Paragraph>
                    {t('spotifake.description')}
                </Paragraph>
                <Paragraph>
                    {t('spotifake.paragraph-desc')}
                </Paragraph>
                <Button><Link to="https://github.com/Le-Bocal-Academy/spotifake-rage-against-the-machine-code" target='_blank' rel="noreferrer">{t('spotifake.github-link')}</Link></Button>
            </div>
            <Title level={3}> {t('spotifake.technologies')}</Title>
            <div className="card-container">
                <Card
                    title="Front-end"
                    className="card-frontend"
                >
                    <div>
                        <img src="logo/html.png" alt="Html icon" className="html-icon" />
                        <img src="logo/css.png" alt="Css icon" className="css-icon" />
                    </div>
                    <div>
                        <img src="logo/react.png" alt="React icon" className="react-icon" />
                        <img src="logo/MUI.png" alt="Material UI icon" className="mui-icon" />
                    </div>
                </Card>
                <Card
                    title="Back-end"
                    className="card-backend"
                >
                    <img src="logo/nodejs.png" alt="Nodejs icon" className="nodejs-icon" />
                    <img src="logo/expressjs.png" alt="Express icon" className="express-icon" />
                    <img src="logo/bucket-s3.png" alt="BucketS3 icon" className="bucket-s3" />

                </Card>
                <Card
                    title={t('spotifake.database')}
                    className="card-database"
                >
                    <img src="logo/mongodb.png" alt="MongoDB icon" className="mongodb-icon" />
                    <img src="logo/mongoose.png" alt="Mongoose icon" className="mongoose-icon" />
                </Card>
                <Card
                    title="DevOps"
                    className="card-devops"
                >
                    <img src="logo/docker.png" alt="Docker icon" className="docker-icon" />
                    <img src="logo/githubactions.png" alt="Github action icon" className="github-icon" />
                    <img src="logo/amazon-ec2.png" alt="Amazon EC2 icon" className="amazon-ec2" />
                </Card>
            </div >
            <embed src='spotifake.pdf' width='60%' height='600' type='application/pdf' style={{ margin: "2em" }} />
        </div >
    )
}
export default Spotifake;