import React from "react";
import Categories from "../components/Categories";
import Search from "../components/search";
import MainTopic from "../components/MainTopics";

function Main() {

    return (
        <main id="main">
            <Search />
            <Categories />
            <MainTopic />
        </main>
    );
}

export default Main;