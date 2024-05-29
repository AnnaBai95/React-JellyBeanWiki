import "./App.scss";
import { useState, useEffect } from "react";

function App() {
  const [jellyResponse, setJellyResponse] = useState({});
  const [jellyList, setJellyList] = useState([]);

  useEffect(() => {
    
    fetch("https://jellybellywikiapi.onrender.com/api/beans")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJellyResponse(data);
        setJellyList(jellyResponse.items);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4">
        {jellyList.map((jellyBean, index) => (
          <a href="#">
            <div className="card" key={index}>
              <img
                src={jellyBean.imageUrl}
                alt={`${jellyBean.flavorName} jellybean`}
              ></img>
              <div>
                <p>{jellyBean}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}

export default App;
