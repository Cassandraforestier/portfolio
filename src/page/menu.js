import "./../css/menu.css"

import { BookOutlined, FolderOpenOutlined, MenuFoldOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuNavbar = () => {
    const { t, i18n } = useTranslation(); // Use i18n from react-i18next
    const [current, setCurrent] = useState('mail');
    const toggleLanguage = () => {
        const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLanguage);
    };
    const isMobile = window.innerWidth <= 678;
    const items = [
        {
            label: <Link to="/">{t("menu.LinkToPresentation")}</Link>,
            key: 'presentation',
            icon: <UserOutlined />,
        },
        {
            label: <Link to="/studiesPage">{t("menu.LinkToStudies")}</Link>,
            key: 'studiesPage',
            icon: <BookOutlined />,
        },
        {
            label: <span>{t("menu.LinkToProjects")}</span>,
            icon: <FolderOpenOutlined />,
            children: [
                {
                    label: <Link to="/projectPage">{t("menu.LinkToAllProjects")}</Link>,
                    key: 'projectPage',
                },
                {
                    label: <Link to="/cosplay-maker">{t("menu.LinkToCosplayMaker")}</Link>,
                    key: 'cosplay-maker',
                },
                {
                    label: <Link to="/spotifake">{t("menu.LinkToSpotifake")}</Link>,
                    key: 'spotifake',
                }
            ]
        },
        {
            label: <Link to="/my-tools">{t("menu.LinkToMyTools")}</Link>,
            key: 'my-tools',
            icon: <ToolOutlined />,
        }
    ];
    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <span>Cassandra Forestier</span>
            </div>
            <Menu inlineCollapse={true} overflowedIndicator={<MenuFoldOutlined style={{ fontSize: "35px" }} />} className="menu-items" onClick={onClick} selectedKeys={[current]} mode={isMobile ? "horizontal" : "vertical"} items={items} />
            <div className="btn-language">
                <Button onClick={toggleLanguage} >
                    <img src={`/${i18n.language === 'fr' ? 'en' : 'fr'}.png`} alt='Français' style={{ height: "1.5em" }} />
                </Button>
            </div>
        </div>);
};
export default MenuNavbar;