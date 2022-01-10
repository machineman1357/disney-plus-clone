import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import db from "../firebase.js";

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        // Grab the movie info from DB
        db.collection("movies")
            .doc(id)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    // save the movie data
                    setMovie(doc.data());
                } else {
                    // redirect to home page
                }
            });
    }, [id]);

    return (
        <Container>
            {movie && (
                <>
                    <Background>
                        <img src={movie.backgroundImg} alt=""></img>
                    </Background>
                    <ImageTitle>
                        <img src={movie.titleImg} alt=""></img>
                    </ImageTitle>
                    <Controls className="controls">
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt=""></img>
                            <span>PLAY</span>
                            <BorderFlair className="border-flair" />
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt=""></img>
                            <span>Trailer</span>
                            <BorderFlair className="border-flair" />
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt=""></img>
                        </GroupWatchButton>
                    </Controls>
                    <Subtitle>{movie.subTitle}</Subtitle>
                    <Description>{movie.description}</Description>
                </>
            )}
        </Container>
    );
}

export default Detail;

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 35vw;
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const Controls = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    box-shadow: 0 1px 1px #0c0d0e47, inset 0 1px 3px 0px #0c0d0e66;
    position: relative;

    &:hover {
        animation: expandThenReturn 150ms;

        .border-flair {
            display: block;
            animation: edgeShadowInOut 250ms;
        }
    }

    @keyframes expandThenReturn {
        0% { transform: scale(1); }
        50% { transform: scale(1.08); }
        100% { transform: scale(1); }
    }

    @keyframes edgeShadowInOut {
        0% { box-shadow: 0 0 12px 3px white; }
        100% { box-shadow: 0 0 12px 3px #ffffff00; }
    }
`;

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
    transition: 150ms;

    &:hover {
        background: rgb(198, 198, 198);
    }
`;

const BorderFlair = styled.div`
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    left: -8px;
    position: absolute;
    border: 3px solid white;
    border-radius: 8px;
    pointer-events: none;
    display: none;
`;

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.6);
    border: 2px solid white;
    cursor: pointer;
    min-width: 44px;

    &:hover {
        background: rgb(198, 198, 198);
    }

    span {
        font-size: 30px;
        color: white;
    }
`;

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`;

const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`;

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`;
