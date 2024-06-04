import "./App.scss";
import { useState, useEffect } from "react";
import jellyWikiResponse from "./interfaces/jellyBean.ts";
import NavBar from "./components/navigation/navBar.js";

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
        setJellyList(data.items);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }, []);

  // useEffect(() => {
  //   console.log("Get res", jellyResponse);
  // }, [jellyResponse]);

  useEffect(() => {
    console.log("List", jellyList);
  }, [jellyList]);

  // dbdbdb
  return (
    <div className="mb-16">
      <NavBar></NavBar>
      <main className="2xl:container mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 xs:grid-col-2  sm:grid-col-2 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {jellyList.map((jellyBean, index) => (
            <a href="#" key={index}>
              <div className="card rounded-md shadow-lg bg-white">
                <div className="card-header rounded-t-md rounded-r-md">
                  <img
                    src={jellyBean.imageUrl}
                    alt={`${jellyBean.flavorName} jellybean`}
                    className="max-w-48 min-w-48"
                  ></img>
                </div>
                <div className="card-body p-4">
                  <p className="text-lg font-semibold mb-3">{jellyBean.flavorName}</p>
                  <p className="text-sm font-medium text-gray-800">{jellyBean.description}</p>
                  <span></span>
                  <p>
                    {/* {`${jellyBean.kosher}, ${jellyBean.seasonal}, ${jellyBean.sugarFree}`} */}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
