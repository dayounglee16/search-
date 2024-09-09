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

  //searchInput이 비어있을 땐 전체리스트 보이게 하기
  //searchInput에 입력한 내용이 item이랑 겹칠 때 겹치는 요소만 보이게하기

  useEffect(() => {
    if (searchInput === "") {
      setSearchListCopy(searchList);
    } else {
      setSearchListCopy(
        searchList.filter((filteredItem) => filteredItem.includes(searchInput))
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
