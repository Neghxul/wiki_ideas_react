import React from "react";
import Categories from "../Categories/Categories";
import SearchBar from "../SearchBar/SearchBar";
import MainTopic from "../MainTopics/MainTopics";

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