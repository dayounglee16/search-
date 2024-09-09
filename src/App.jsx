import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const searchList = [
    "Life Cycle",
    "event bubbling",
    "정규표현식",
    "Git",
    "검색기능",
  ];
  const [searchListCopy, setSearchListCopy] = useState(searchList);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (searchInput === "") {
      setSearchListCopy(searchList);
    } else {
      const lowerCaseInput = searchInput.toLowerCase();
      setSearchListCopy(
        searchList.filter((filteredItem) =>
          filteredItem.toLowerCase().includes(lowerCaseInput)
        )
      );
    }
  }, [searchInput]);

  const onChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      <input type="text" value={searchInput} onChange={onChange} />
      <ul>
        {searchListCopy.map((searchItem) => {
          return <li key={searchItem}>{searchItem}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
