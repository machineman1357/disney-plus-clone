import React, { useEffect } from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider.js";
import Viewers from "./Viewers.js";
import Movies from "./Movies.js";
import db from "../firebase.js";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice.js";

function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection("movies").onSnapshot((snapshot) => {
            let tempMovies = snapshot.docs.map((doc) => {
                return { id: doc.id, ...doc.data() }
            });

            dispatch(setMovies(tempMovies));
        });
    }, []);

    return (
        <div>
            <Container>
                <ImageSlider />
                <Viewers />
                <Movies />
            </Container>
        </div>
    );
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url("/images/home-background.png") center center / cover
            no-repeat fixed;
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
`;
