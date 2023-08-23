import "../css/my-tools.css"

import { List } from 'antd';
import React from 'react';
import { useTranslation } from "react-i18next";

const MyTools = () => {
    const { t } = useTranslation();
    const isMobile = window.innerWidth <= 768;
    const tools = [
        {
            name: 'Postman',
            description: <span>{t("toolbox.postman-desc")}</span>,
            image: "logo/postman.png",
            href: "https://www.postman.com/",
        },
        {
            name: 'VS Code',
            description: <span>{t("toolbox.vscode-desc")}</span>,
            image: "logo/vscode.png",
            href: "https://code.visualstudio.com/",
        },
        {
            name: 'Docker Desktop',
            description: <span>{t("toolbox.docker-desc")}</span>,
            image: "logo/docker-desktop.png",
            href: "https://www.docker.com/products/docker-desktop",
        },
        {
            name: 'MongoDB Compass',
            description: <span>{t("toolbox.mongodb-desc")}</span>,
            image: "logo/mongodbcompass.png",
            href: "https://www.mongodb.com/products/compass",
        },
        {
            name: 'Github',
            description: <span>{t("toolbox.github-desc")}</span>,
            image: "logo/github.png",
            href: "https://www.github.com/",
        },
        {
            name: 'Jira',
            description: <span>{t("toolbox.jira-desc")}</span>,
            image: "logo/jira.png",
            href: "https://www.atlassian.com/software/jira",
        },
        {
            name: 'SendGrid',
            description: <span>{t("toolbox.sendgrid-desc")}</span>,
            image: "logo/sendgrid.png",
            href: "https://sendgrid.com/",
        },
        {
            name: "Snyk",
            description: <span>{t("toolbox.snyk-desc")}</span>,
            image: "logo/snyk.png",
            href: "https://snyk.io/",
        },
        {
            name: "Internship context tools",
            description: <span>{t("toolbox.internship-desc")}</span>,
            image: "logo/internship.png",
        }
    ];

    return (
        <div className="App">
            <h1 className="my-tools-title">{t("menu.LinkToMyTools")}</h1>
            <div className="container-list" >
                <List
                    className="list"
                    dataSource={tools}
                    renderItem={(tool) => (
                        <List.Item
                            className="list-item"
                            key={tool.title}
                            extra={
                                <img
                                    width={isMobile ? 0 : 272}
                                    alt="logo"
                                    src={tool.image}
                                    className="list-item-image"
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={tool.href}>{tool.name}</a>}
                                description={
                                    isMobile ?
                                        <span className="tool-description">{tool.description}
                                            <img src={tool.image} alt={tool.name} className="img-tool-desc" />
                                        </span>
                                        : tool.description
                                }
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div >
    );
}

export default MyTools;