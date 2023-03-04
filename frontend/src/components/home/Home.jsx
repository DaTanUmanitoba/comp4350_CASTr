import React from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import WidePost from "../widepost/WidePost";

function Home() {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();
  const { userId } = JSON.parse(sessionStorage.getItem("session"));

  function handleHomeClick() {
    navigate("/");
  }

  function handleLogout() {
    dispatch({ type: "CLEAR", payload: "" });
    sessionStorage.clear();
    navigate("/login", { state: null });
  }

  return (
    <div>
      <div className="grid-rows-1 h-25">
        <button type="button" onClick={handleHomeClick}>
          <h1 className="mt-8 text-2xl font-bold ml-12 font-base tracking-tight text-black-800 sm:text-5xl">
            CASTr
          </h1>
        </button>
        <Link to={`writer/${userId}`} type="button">
          <h1 className="mt-8 text-2xl font-bold ml-12 font-base tracking-tight text-black-800 sm:text-5xl">
            Profile
          </h1>
        </Link>
        <button type="button" onClick={handleLogout}>
          <h1 className="mt-8 text-2xl font-bold ml-12 font-base tracking-tight text-black-800 sm:text-5xl">
            Logout
          </h1>
        </button>
      </div>

      <div className="grid grid-rows-4 grid-cols-6 gap-4">
        <div className="row-start-1 row-end-5 bg-black-600 row-span-2 h-screen" />
        <div className="row-start-1 col-start-2 col-span-4 row-end-5 h-screen">
          <h1 className="mt-8 text-xl font-bold ml-12 font-base tracking-tight text-black-800 sm:text-5xl">
            Your Feed
          </h1>
          <div className="grid-column-1" />
          <WidePost />
          <WidePost />
        </div>
        <div className="row-start-1 row-end-5 h-screen" />
      </div>
    </div>
  );
}

export default Home;
