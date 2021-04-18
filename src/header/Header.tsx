import React from "react"
import "./Header.css"
import Logo from "./logo/Logo"
import Navigation from "./navigation/Navigation"
import MyAccountButton from "./personal_area/MyAccount"
export default function Header() {
    return (
        <header>
            <div className="container">
                <Logo />
                <div className="space_between">
                    <Navigation />
                    <MyAccountButton />
                </div>
            </div>
        </header>
    );
}