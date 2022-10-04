import React from "react";
import Article from "../components/Article";

const articles = [
    {
        id: 1,
        title: "Singapore",
        author: "Wikipedia",
        text: "Officially the Republic of Singapore, is a sovereign island country and city-state in maritime Southeast Asia. It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south, the South China Sea to the east and the Straits of Johor to the north."
    },
    {
        id: 2,
        title: "Singapore City?",
        author: "Wiki",
        text: "Officially the Republic of Singapore, is a sovereign island country and city-state in maritime Southeast Asia. It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south, the South China Sea to the east and the Straits of Johor to the north."
    },
    {
        id: 3,
        title: "Singapore Country?",
        author: "Wikipedia",
        text: "Officially the Republic of Singapore, is a sovereign island country and city-state in maritime Southeast Asia. It lies about one degree of latitude (137 kilometres or 85 miles) north of the equator, off the southern tip of the Malay Peninsula, bordering the Strait of Malacca to the west, the Singapore Strait to the south, the South China Sea to the east and the Straits of Johor to the north."
    }
]
const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article}/>
    ))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;