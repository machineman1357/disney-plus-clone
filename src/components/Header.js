import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import NavButton from "./NavButton.js";
import {
    selectUserName,
    selectUserPhoto,
    setSignOut,
    setUserLogin,
} from "../features/user/userSlice.js";
import { useSelector, useDispatch } from "react-redux";

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if(user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                }));
                navigate("/home");
            }
        });
    }, []);

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }));
            navigate("/home");
        });
    };

    const signOut = () => {
        auth.signOut()
        .then(() => {
            dispatch(setSignOut());
            navigate("/login");
        });
    };

    return (
        <Nav className="nav">
            <Logo src="/images/logo.svg" />
            { !userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                ):
                <>
                    <NavMenu>
                        <NavButton src="/images/home-icon.svg" alt="home icon" text="HOME" />
                        <NavButton src="/images/search-icon.svg" alt="search icon" text="SEARCH" />
                        <NavButton src="/images/watchlist-icon.svg" alt="watchlist icon" text="WATCHLIST" />
                        <NavButton src="/images/original-icon.svg" alt="original icon" text="ORIGINAL" />
                        <NavButton src="/images/movie-icon.svg" alt="movies icon" text="MOVIES" />
                        <NavButton src="/images/series-icon.svg" alt="series icon" text="SERIES" />
                    </NavMenu>
                    <UserImg
                        onClick={signOut}
                        src={userPhoto}
                    />
                </>
            }
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
    overflow-x: hidden;
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

const Login = styled.div`
    border-radius: 4px;
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s ease 0s;
    cursor: pointer;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border-color: transparent;
    }
`;

const LoginContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
`;