import React, { useEffect, useContext } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navs from './component/navbar';
import Inbox from './component/inbox';
import { useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Article from './pages/article';
import Consultanform from './pages/consultanForm';
import Detail from './pages/detailArticle';
import AddArticle from './pages/addArticle';
import ProfileUser from './pages/profile';
import ProfileDr from './pages/profileDr';
import Invoice from './pages/invoice';
import ReservasiData from './pages/reservasiData';
import { API, setAuthToken } from './config/api';
import { UserContext } from './context/userContext';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);


  useEffect(() => {
    // Redirect Auth
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // if (state.isLogin === false && !isLoading) {
    //   navigate("/");
    // }
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      // If the token incorrect
      if (response.status === 404) {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      console.log("response check auth", response)

      // Get user data
      let payload = response.data.data;
      // Get token from local storage
      payload.token = localStorage.token;

      // Send data to useContext
      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
      console.log("ini data state", state)
      // setIsLoading(false)
    } catch (error) {
      console.log(error);
      // setIsLoading(false)
    }
  };

  useEffect(() => {
    if (localStorage.token) {

      checkUser();
    }
  }, []);

  // const navigate = useNavigate()

  // const [state, dispatch] = useContext(UserContext)
  // console.log("ini state", state)
  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  //   if (state.isLogin === false) {
  //     navigate('/')
  //   }
  //   // else {
  //   //   if (state.user.list_as === "docter") {
  //   //     navigate('/')
  //   //   } else if (state.user.list_as === "patient") {
  //   //     navigate('/')
  //   //   }
  //   // }

  // }, [])

  // const checkUser = async () => {
  //   try {
  //     const response = await API.get('/check-auth');

  //     if (response.status === 404) {
  //       return dispatch({
  //         type: 'AUTH_ERROR',
  //       });
  //     }
  //     console.log("response check auth", response)
  //     let payload = response.data.data;
  //     payload.token = localStorage.token;

  //     dispatch({
  //       type: 'USER_SUCCESS',
  //       payload,

  //     })
  //     console.log("ini data state", state)

  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {

  //   checkUser();


  // }, [])

  return (
    <>
      <Navs />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reservation" element={<Consultanform />} />
        <Route exact path="/article" element={<Article />} />
        <Route exact path="/detailArticle" element={<Detail />} />
        <Route exact path="/addArticle" element={<AddArticle />} />
        <Route exact path="/profile" element={<ProfileUser />} />
        <Route exact path="/profileDr" element={<ProfileDr />} />
        <Route exact path="/invoice" element={<Invoice />} />
        <Route exact path="/reservasiData" element={<ReservasiData />} />
        <Route exact path="/inbox" element={<Inbox />} />
      </Routes>
    </>
  );
}

export default App;
