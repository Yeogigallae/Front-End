import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./styles/theme";
// 페이지
import MainPage from "./pages/Main/MainPage/MainPage";
import LoginPage from "./pages/Login/LoginPage/LoginPage";
import BudgetPage from "./pages/Budget/BudgetPage/BudgetPage";
import CourseSharePage from "./pages/Information/CourseSharePage/CourseSharePage";
import ShareChatPage from "./pages/Information/ShareChatPage/ShareChatPage";
import ShareMapPage from "./pages/Information/ShareMapPage/ShareMapPage";
import SharePage from "./pages/Information/SharePage/SharePage";
import ShareWritePage from "./pages/Information/ShareWritePage/ShareWritePage";
import MyFriendPage from "./pages/MyPage/MyFriendPage/MyFriendPage";
import MyProfilePage from "./pages/MyPage/MyProfilePage/MyProfilePage";
import RoomPage from "./pages/MyPage/RoomPage/RoomPage";
import NoticePage from "./pages/Notice/NoticePage/NoticePage";
import BudgetSelectPage from "./pages/Scheduling/BudgetSelectPage/BudgetSelectPage";
import DateSelectPage from "./pages/Scheduling/DateSelectPage/DateSelectPage";
import SchedulePage from "./pages/Scheduling/SchedulePage/SchedulePage";
import SplashPage from "./pages/Splash/SplashPage/SplashPage";
import VoteAgreePage from "./pages/Vote/VoteAgreePage/VoteAgreePage";
import VoteCompletePage from "./pages/Vote/VoteCompletePage/VoteCompletePage";
import VoteDatePage from "./pages/Vote/VoteDatePage/VoteDatePage";
import VoteMainPage from "./pages/Vote/VoteMainPage/VoteMainPage";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Main */}
          <Route path="/" element={<MainPage />} />

          {/* Login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Budget */}
          <Route path="/budget" element={<BudgetPage />} />

          {/* Information */}
          <Route path="/information/course-share" element={<CourseSharePage />} />
          <Route path="/information/share-chat" element={<ShareChatPage />} />
          <Route path="/information/share-map" element={<ShareMapPage />} />
          <Route path="/information/share" element={<SharePage />} />
          <Route path="/information/share-write" element={<ShareWritePage />} />

          {/* MyPage */}
          <Route path="/mypage/friend" element={<MyFriendPage />} />
          <Route path="/mypage/profile" element={<MyProfilePage />} />
          <Route path="/mypage/room" element={<RoomPage />} />

          {/* Notice */}
          <Route path="/notice" element={<NoticePage />} />

          {/* Scheduling */}
          <Route path="/scheduling/budget-select" element={<BudgetSelectPage />} />
          <Route path="/scheduling/date-select" element={<DateSelectPage />} />
          <Route path="/scheduling/schedule" element={<SchedulePage />} />

          {/* Splash */}
          <Route path="/splash" element={<SplashPage />} />

          {/* Vote */}
          <Route path="/vote/agree" element={<VoteAgreePage />} />
          <Route path="/vote/complete" element={<VoteCompletePage />} />
          <Route path="/vote/date" element={<VoteDatePage />} />
          <Route path="/vote" element={<VoteMainPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
