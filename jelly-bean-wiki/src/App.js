import "./App.scss";
import { useState, useEffect } from "react";
import NavBar from "./components/navigation/NavBar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import Pagination from "./components/navigation/Pagination.jsx";
import SearchBar from "./components/others/SearchBar.jsx";
import Filter from "./components/others/Filter.jsx";
import Error from "./components/alerts/Error.jsx";

function App() {
  const [jellyResponse, setJellyResponse] = useState({});
  const [jellyList, setJellyList] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [hasFiltered, setHasFiltered] = useState(false);
  const [hasFilteredResults, setHasFilteredResults] = useState(false);
  const [unFilteredJellyResponse, setunFilteredJellyResponse] = useState([]);
  const [unFilteredJellyList, setunFilteredJellyList] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://jellybellywikiapi.onrender.com/api/beans?pageIndex=${pageIndex}&pageSize=${pageSize}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setJellyResponse(data);
        setJellyList(data.items);
        setunFilteredJellyResponse(data);
        setunFilteredJellyList(data.items);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(
          "We are unable to display the jellybeans at this time. Please try again later."
        );
      });
  }, [pageIndex, pageSize]);

  const handlePageChange = (pageNumber) => {
    setPageIndex(pageNumber);
  };

  const handleFlavorSearch = (flavor) => {
    fetch(
      `https://jellybellywikiapi.onrender.com/api/beans?flavorName=${flavor}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setHasSearched(true);
        setJellyResponse(data);
        setJellyList(data.items);
        setErrorMessage("");
      })
      .catch((error) => {
        setErrorMessage(
          "Your search could not be completed at this time. Please try again later."
        );
      });
  };

  useEffect(() => {
    if (hasSearched && jellyList.length < 1) {
      setShowMessage(true);
    } else {
      setShowMessage(false);
    }
  }, [hasSearched, jellyList]);

  const handleFilter = (restriction) => {
    setHasSearched(false);

    if (restriction !== "all") {
      fetch(
        `https://jellybellywikiapi.onrender.com/api/beans?${restriction}=true`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setHasFiltered(true);
          setJellyResponse(data);
          setJellyList(data.items);
          setErrorMessage("");
        })
        .catch((error) => {
          setErrorMessage(
            "We are unable to filter the jellybean list at this time. Please try again later."
          );
        });
    } else {
      setJellyResponse(unFilteredJellyResponse);
      setJellyList(unFilteredJellyList);
    }
  };

  useEffect(() => {
    if (jellyList.length > 0) {
      setHasFilteredResults(true);
    } else {
      setHasFilteredResults(false);
    }
  });

  return (
    <div className="mb-16">
      <NavBar></NavBar>
      <main className="2xl:container mx-auto px-6 mt-16">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <SearchBar onFlavorSearch={handleFlavorSearch}></SearchBar>
          <Filter onDietFilter={handleFilter}></Filter>
        </div>

        {errorMessage && <Error message={errorMessage}></Error>}

        <div className="grid grid-cols-1 xs:grid-col-2  sm:grid-col-2 md:grid-col-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10 mt-6">
          {loading &&
            Array.from({ length: 12 }, (_, c) => (
              <div
                key={c}
                className="card rounded-md shadow-lg bg-white relative animate-pulse"
              >
                <div className="card-header rounded-t-md rounded-r-md">
                  <svg
                    className="w-10 h-10 text-gray-200 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                  </svg>
                </div>
                <div className="card-body p-4">
                  <p className="mb-6 h-4 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                  <p className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700"></p>
                  <div className="mt-20">
                    <p className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 font-semibold me-2"></p>
                  </div>
                </div>
              </div>
            ))}
          {jellyList.map((jellyBean, index) => (
            <div
              className="card rounded-md shadow-lg bg-white relative"
              key={index}
            >
              <div className="card-header rounded-t-md rounded-r-md">
                <img
                  src={jellyBean.imageUrl}
                  alt={`${jellyBean.flavorName} jellybean`}
                  className="max-w-48 min-w-48"
                ></img>
              </div>
              <div className="card-body p-4">
                <p className="text-lg font-semibold mb-3 text-jelly-red">
                  {jellyBean.flavorName}
                </p>
                <p className="text-sm font-medium text-gray-800">
                  {jellyBean.description}
                </p>
                <div className="mt-10">
                  <span className="text-gray-800 text-sm font-semibold me-2">
                    {jellyBean.kosher && (
                      <>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="me-1 text-jelly-light-red"
                        />
                        Kosher
                      </>
                    )}
                  </span>
                  <span className="text-gray-800 text-sm font-semibold me-2">
                    {jellyBean.glutenFree && (
                      <>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="me-1 text-jelly-light-red"
                        />
                        Gluten free
                      </>
                    )}
                  </span>
                  <span className="text-gray-800 text-sm font-semibold me-2">
                    {jellyBean.sugarFree && (
                      <>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="me-1 text-jelly-light-red"
                        />
                        Sugar free
                      </>
                    )}
                  </span>
                  <span className="text-gray-800 text-sm font-semibold me-2">
                    {jellyBean.seasonal && (
                      <>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="me-1 text-jelly-light-red"
                        />
                        Seasonal
                      </>
                    )}
                  </span>
                </div>
              </div>
              <div className="card-back rounded-md p-4">
                <p className="text-medium font-semibold text-jelly-red mb-3">
                  Ingredients
                </p>
                <div>
                  {jellyBean.ingredients.map((ingredient, index) => (
                    <p className="text-gray-800 text-sm mb-2" key={index}>
                      {" "}
                      {ingredient}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          currentPage={jellyResponse.currentPage}
          pageSize={jellyResponse.pageSize}
          totalCount={jellyResponse.totalCount}
          totalPages={jellyResponse.totalPages}
          onPageChange={handlePageChange}
        ></Pagination>

        {(showMessage || (hasFiltered && !hasFilteredResults)) && (
          <div className="text-center">
            <FontAwesomeIcon
              icon={faBan}
              className="text-5xl"
            ></FontAwesomeIcon>
            <p className="text-4xl mb-6">
              There are no jelly beans to be displayed
            </p>
            {showMessage && hasSearched && (
              <p className="text-2xl">
                Please ensure that you type the full name of the jelly bean you
                wish to find. Example "Barbados Cherry". Partial searches
                example "Bar", "Barbados" will not return a result.
              </p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
