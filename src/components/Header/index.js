import React from "react";
import categories from "../../data/category";
import "./header.css";

const Header = ({ category, setCategory, word, setWord }) => {
    return (
        <header className="header">
            <span className="title">{word ? word : "Dictionary"}</span>

            <div className="inputs">
                <input
                    className="word_input"
                    type="text"
                    placeholder="Search"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                />
                <select
                    className="categories"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map((option) => {
                        return (
                            <option key={option.label} value={option.label}>
                                {option.value}
                            </option>
                        );
                    })}
                </select>
            </div>
        </header>
    );
};

export default Header;
