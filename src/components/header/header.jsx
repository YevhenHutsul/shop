import React from "react";
import { Link, NavLink, Route, Router, Routes } from "react-router-dom";
import { CardBlock } from "../card-block/CardBlock";
import './header.css';

export const Header = () => {
    return (
            <div className="header">
                <div className="wrapper">
                    <a href='/' className="header__store-title">Game Store</a>
                </div>
                <div className="wrapper header__card-btn-wrapper">
                    <CardBlock/>
                </div>
            </div>
    )
}