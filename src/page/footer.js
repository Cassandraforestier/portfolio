import "../css/footer.css"

import { Button, Col, Form, Input, Menu, Row, Space, Tooltip } from 'antd';
import { CodeOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const [message, setMessage] = React.useState('');
    const [name, setName] = React.useState('');
    useEffect(() => {
    }, [name, message]);
    const { t } = useTranslation();
    const onFinish = () => {
        const subject = `Message du site Web : ${name}`;
        const body = `${message}`;
        const mailtoLink = `mailto:cassandra.forestier@hotmail.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    };

    return (
        <div className='footer-container'>
            <div className="footer-title">
                <h4>{t("footer.navigation")}</h4>
                <h4>{t("footer.followMe")}</h4>
                <h4>{t("footer.myResume")}</h4>
                <h4>{t("footer.contactMe")}</h4>
            </div>
            <Row className="row-container" gutter={[16, 16]}>
                <Col span={6} className="navigation-container">
                    <Menu mode="vertical" className="menu-footer">
                        <Menu.Item key="menu.LinkToPresentation"><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t("menu.LinkToPresentation")}</Link></Menu.Item>
                        <Menu.Item key="menu.LinkToStudies"><Link to="/studiesPage" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t("menu.LinkToStudies")}</Link></Menu.Item>
                        <Menu.Item key="menu.LinkToProjects"><Link to="/projectPage" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t("menu.LinkToProjects")}</Link></Menu.Item>
                        <Menu.Item key="menu.LinkToMyTools"><Link to="/my-tools" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{t("menu.LinkToMyTools")}</Link></Menu.Item>
                    </Menu>
                </Col>
                <Col span={6} className="follow-me-container">
                    <Space size="middle" className="space-follow-me">
                        <Tooltip placement="topLeft" title="Github" >
                            <a target='_blank' rel="noreferrer" href="https://github.com/Cassandraforestier">
                                <GithubOutlined className="icon-size" />
                            </a>
                        </Tooltip>
                        <Tooltip placement="topLeft" title="Codingame" >
                            <a target='_blank' rel="noreferrer" href="https://www.codingame.com/profile/62704d19c92e1eb821b93fa72ea592650785233">
                                <CodeOutlined className="icon-size" />
                            </a>
                        </Tooltip>
                        <Tooltip placement="topLeft" title="LinkedIn" >
                            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/cassandra-forestier-964b4514b/">
                                <LinkedinOutlined className="icon-size" />
                            </a>
                        </Tooltip>
                    </Space>
                </Col>
                <Col className="informations-container" span={6}>
                    <p>Forestier Cassandra</p>
                    <p>E-mail : cassandra.forestier@hotmail.fr</p>
                    <p>{t("footer.driver")}</p>
                    <p>{t("footer.sector")}</p>
                </Col>
                <Col span={6}>
                    <Form onFinish={onFinish} className="form-container">
                        <p className="form-spacing">{t("footer.form")}</p>
                        <Input className="form-spacing" type="text" name="name" placeholder={t("footer.name")} onChange={(e) => setName(e.target.value)} />
                        <Input className="form-spacing" name="message" rows="5" cols="50" placeholder={t("footer.message")} onChange={(e) => setMessage(e.target.value)}></Input>
                        <Button className="form-spacing" htmlType="submit">{t("footer.send")}</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );

}

export default Footer;