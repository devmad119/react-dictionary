import React from "react";
import "./definition.css";
const index = ({ meanings, word, category }) => {
    return (
        <div className="meanings_container">
            {meanings[0] && word && category === "en" && (
                <audio
                    style={{ borderRadius: "0 !important" }}
                    src={
                        meanings[0].phonetics[0] &&
                        meanings[0].phonetics[0].audio
                    }
                    controls
                ></audio>
            )}

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
                                                {def.antonyms.join(", ")}
                                            </p>
                                        )}
                                        {def.synonyms.length > 0 && (
                                            <p className="synonyms">
                                                <b> Synonyms : </b>
                                                {def.synonyms.join(", ")}
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

export default index;
