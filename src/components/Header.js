import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton.js";

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <NavButton src="/images/home-icon.svg" alt="home icon" text="HOME" />
                <NavButton src="/images/search-icon.svg" alt="search icon" text="SEARCH" />
                <NavButton src="/images/watchlist-icon.svg" alt="watchlist icon" text="WATCHLIST" />
                <NavButton src="/images/original-icon.svg" alt="original icon" text="ORIGINAL" />
                <NavButton src="/images/movie-icon.svg" alt="movies icon" text="MOVIES" />
                <NavButton src="/images/series-icon.svg" alt="series icon" text="SERIES" />
            </NavMenu>
            <UserImg src="https://cdn.xxl.thumbs.canstockphoto.com/beautiful-young-woman-holding-the-hair-with-flirting-sexy-look-beautiful-young-woman-holding-the-stock-photos_csp11609138.jpg"/>
        </Nav>
    );
}

export default Header;

const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
`;

const Logo = styled.img`
    width: 80px;
`;

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: "";
                height: 2px;
                opacity: 0;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`;

const UserImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 100ms;

    &:hover {
        transform: scale(1.1);
    }
`;