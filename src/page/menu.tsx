import "./../css/menu.css"

import { BookOutlined, FolderOpenOutlined, MenuFoldOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuNavbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [current, setCurrent] = useState<string>('mail');
    const toggleLanguage: () => void = () => {
        const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLanguage);
    };
    const isMobile: boolean = window.innerWidth <= 678;
       const items: (JSX.Element | null)[] = [
        <Menu.Item key="presentation" icon={<UserOutlined />}>
            <Link to="/">{t("menu.LinkToPresentation")}</Link>
        </Menu.Item>,
        <Menu.Item key="studiesPage" icon={<BookOutlined />}>
            <Link to="/studiesPage">{t("menu.LinkToStudies")}</Link>
        </Menu.Item>,
        <Menu.SubMenu key="projects" title={t("menu.LinkToProjects")} icon={<FolderOpenOutlined />}>
            <Menu.Item key="projectPage">
                <Link to="/projectPage">{t("menu.LinkToAllProjects")}</Link>
            </Menu.Item>
            <Menu.Item key="cosplay-maker">
                <Link to="/cosplay-maker">{t("menu.LinkToCosplayMaker")}</Link>
            </Menu.Item>
            <Menu.Item key="spotifake">
                <Link to="/spotifake">{t("menu.LinkToSpotifake")}</Link>
            </Menu.Item>
        </Menu.SubMenu>,
        <Menu.Item key="my-tools" icon={<ToolOutlined />}>
            <Link to="/my-tools">{t("menu.LinkToMyTools")}</Link>
        </Menu.Item>
    ];
    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/logo/logo-cf.png`} alt="logo" />
                <span className="logo-text">Cassandra Forestier</span>
            </div>
             <Menu overflowedIndicator={<MenuFoldOutlined className="menu-burger-icon" />} className="menu-items" onClick={onClick} selectedKeys={[current]} mode={isMobile ? "horizontal" : "vertical"}>
                {items}
            </Menu>
            <div className="btn-language">
                <Button onClick={toggleLanguage} >
                    <img src={`${process.env.PUBLIC_URL}/${i18n.language === 'fr' ? 'en' : 'fr'}.png`} alt={`${i18n.language === 'fr' ? 'Anglais' : 'Français'}`} className="language-img-icon" />
                </Button>
            </div>
        </div>);
};
export default MenuNavbar;