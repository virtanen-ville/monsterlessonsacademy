import { useState } from "react";
import SearchBar from "./SearchBar";
import ArticlesTable from "./ArticlesTable";

const initialArticles = [
  {
    id: "1",
    slug: "/posts/5-tips-to-be-a-better-programmer",
    title: "5 Tips to Be a Better Programmer",
  },
  {
    id: "2",
    slug: "/posts/how-to-center-elements-using-css",
    title: "How to Center Elements Using CSS",
  },
  {
    id: "3",
    slug: "/posts/how-to-validate-javascript-forms-for-beginners",
    title: "How to Validate Javascript Forms for Beginners",
  },
  {
    id: "4",
    slug: "/posts/sort-array-method-you-need-to-know-this-cases",
    title: "Sort Array Method - You Need to Know This Cases",
  },
  {
    id: "5",
    slug: "/posts/25-coding-terms-for-beginners",
    title: "25 Coding Terms for Beginners",
  },
];

const App = () => {
  const [articles, setArticles] = useState(initialArticles);
  const filterArticles = (searchValue) => {
    if (searchValue === "") {
      setArticles(initialArticles);
      return;
    }
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    setArticles(filteredArticles);
  };
  return (
    <div>
      <SearchBar callback={filterArticles} />
      <ArticlesTable articles={articles} />
    </div>
  );
};

export default App;
