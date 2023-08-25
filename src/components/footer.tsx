import "../css/footer.css"

import { Button, Col, Form, Input, Menu, MenuProps, Row, Space, Tooltip } from 'antd';
import { CodeOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Footer: React.FC  = () => {
    const [message, setMessage] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [current, setCurrent] = useState<string>('mail');
    useEffect(() => {
    }, [name, message]);
    
    const { t } = useTranslation();
    
    const items: MenuProps['items'] = [
        {
            label: <Link to="/">{t("menu.LinkToPresentation")}</Link>,
            key: 'presentation'
        },
        {
            label: <Link to="/studiesPage">{t("menu.LinkToStudies")}</Link>,
            key: "studiesPage"
        },
        {
            label: <Link to="/projectPage">{t("menu.LinkToAllProjects")}</Link>,
            key: "allprojects",
        },
        {
            label: <Link to="/my-tools">{t("menu.LinkToMyTools")}</Link>,
            key: 'tools'
        }     
    ]

      const onClick: MenuProps['onClick'] = (e) =>  {
        setCurrent(e.key);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    
    const onFinish: () => void  = () => {
        const subject: string = `Message du site Web : ${name}`;
        const body: string  = `${message}`;
        const mailtoLink: string  = `mailto:cassandra.forestier@hotmail.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
                    <Menu className="menu-footer" onClick={onClick} selectedKeys={[current]} mode={"vertical"} items={items}/>
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
                    <p>cassandra.forestier@hotmail.fr</p>
                    <p>{t("footer.driver")}</p>
                    <p>{t("footer.sector")}</p>
                </Col>
                <Col span={6}>
                    <Form onFinish={onFinish} className="form-container">
                        <p className="form-spacing">{t("footer.form")}</p>
                        <Input className="form-spacing" type="text" name="name" placeholder={t("footer.name")} onChange={(e) => setName(e.target.value)} />
                        <Form.Item className="form-spacing" name="message">
                        <Input.TextArea className="form-spacing" name="message" rows={2} placeholder={t("footer.message")} onChange={(e) => setMessage(e.target.value)}></Input.TextArea>
                        </Form.Item>
                        <Button className="form-spacing" htmlType="submit">{t("footer.send")}</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );

}

export default Footer;