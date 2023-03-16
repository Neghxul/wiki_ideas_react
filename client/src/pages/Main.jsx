import React from "react";
import Categories from "../components/Categories/Categories";
import SearchBar from "../components/SearchBar/SearchBar";
import MainTopic from "../components/MainTopics/MainTopics";

function Main() {

    return (
        <main id="main">
            <SearchBar />
            <Categories />
            <MainTopic />
        </main>
    );
}

export default Main;