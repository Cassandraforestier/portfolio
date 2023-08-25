import "./../css/menu.css"

import { BookOutlined, FolderOpenOutlined, MenuFoldOutlined, ToolOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';

import { Link } from "react-router-dom";
import type { MenuProps } from 'antd';
import { useTranslation } from "react-i18next";

const MenuNavbar: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [current, setCurrent] = useState<string>('mail');
    const toggleLanguage: () => void = () => {
        const newLanguage = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLanguage);
    };
    const isMobile: boolean = window.innerWidth <= 678;
    const items: MenuProps['items'] = [
        {
            label: <Link to="/">{t("menu.LinkToPresentation")}</Link>, 
            icon: <UserOutlined />, 
            key: 'presentation'
        },
        {
            label: <Link to="/studiesPage">{t("menu.LinkToStudies")}</Link>, 
            icon: <BookOutlined />, 
            key: "studiesPage"
        },
        {
            label: t("menu.LinkToProjects") as string, 
            icon: <FolderOpenOutlined />, 
            key: "projects", 
            children: [
            {
                label:  <Link to="/projectPage">{t("menu.LinkToAllProjects")}</Link>, 
                key: 'allProjects'
            },
            {
                label: <Link to="/cosplay-maker">{t("menu.LinkToCosplayMaker")}</Link>, 
                key: 'cosplaymaker'
            },
            {
                label: <Link to="/spotifake">{t("menu.LinkToSpotifake")}</Link>, 
                key: 'spotifake'
            }
        ]},
        {
            label: <Link to="/my-tools">{t("menu.LinkToMyTools")}</Link>, 
            icon: <ToolOutlined />, 
            key: 'tools'
        }
    ];

    const onClick: MenuProps['onClick'] = (e) =>  {
        setCurrent(e.key);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={`${process.env.PUBLIC_URL}/logo/logo-cf.png`} alt="logo" />
                <span className="logo-text">Cassandra Forestier</span>
            </div>
             <Menu overflowedIndicator={<MenuFoldOutlined className="menu-burger-icon" />} className="menu-items" onClick={onClick} selectedKeys={[current]} mode={isMobile ? "horizontal" : "vertical"} items={items}/>
            <div className="btn-language">
                <Button onClick={toggleLanguage} >
                    <img src={`${process.env.PUBLIC_URL}/${i18n.language === 'fr' ? 'en' : 'fr'}.png`} alt={`${i18n.language === 'fr' ? 'Anglais' : 'Français'}`} className="language-img-icon" />
                </Button>
            </div>
        </div>);
};
export default MenuNavbar;