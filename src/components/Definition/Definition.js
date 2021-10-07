import React, { useState } from "react";
import "./definition.css";

const Definition = ({ meanings, word, category }) => {
    const [opacity, setOpacity] = useState({
        opacity: ".5",
    });

    function handlePlay() {
        document.querySelector(".speaker").addEventListener("click", () => {
            const audio = document.getElementsByTagName("audio")[0];
            audio.play();
            setOpacity({ opacity: "1" });
            setTimeout(() => {
                setOpacity({ opacity: ".5" });
            }, audio.duration * 1000);
        });
    }

    return (
        <div className="meanings_container">
            {meanings[0] && word && category === "en" && (
                <div className="audio-container">
                    <audio
                        style={{ borderRadius: "0 !important" }}
                        src={
                            meanings[0].phonetics[0] &&
                            meanings[0].phonetics[0].audio
                        }
                        controls
                    ></audio>

                    <div
                        style={opacity}
                        className="speaker"
                        onClick={handlePlay}
                    ></div>
                </div>
            )}

            {meanings.map((word) => {
                return (
                    word.origin && (
                        <div className="origin">
                            <p>
                                Origin : <span>{word.origin}</span>
                            </p>
                        </div>
                    )
                );
            })}

            {meanings.map((mean) => {
                return mean.meanings.map((item) => {
                    return item.definitions.map((def) => {
                        return (
                            <div className="meaning">
                                <p className="speech">{item.partOfSpeech}</p>
                                <div className="info">
                                    <p className="def">{def.definition}</p>
                                    {def.example && (
                                        <div>
                                            <b>Example : </b>
                                            {def.example}
                                        </div>
                                    )}
                                    <div className="alternative">
                                        {def.antonyms.length > 0 && (
                                            <p className="antonyms">
                                                <b> Antonyms : </b>
                                                {/* {def.antonyms.join(", ")} */}
                                                {def.antonyms.map((item) => {
                                                    return <p>{item}</p>;
                                                })}
                                            </p>
                                        )}
                                        {def.synonyms.length > 0 && (
                                            <p className="synonyms">
                                                <b> Synonyms : </b>
                                                {/* {def.synonyms.join(", ")} */}
                                                {def.synonyms.map((item) => {
                                                    return <p>{item}</p>;
                                                })}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    });
                });
            })}
        </div>
    );
};

export default Definition;
