import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { theme } from "./styles/theme";
import MainPage from "./pages/Main/MainPage/MainPage";
import LoginPage from "./pages/Login/LoginPage/LoginPage";
import BudgetPage from "./pages/Budget/BudgetPage/BudgetPage";
import MyProfilePage from "./pages/MyPage/MyProfilePage/MyProfilePage";
import RoomPage from "./pages/MyPage/RoomPage/RoomPage";
import NoticePage from "./pages/Notice/NoticePage/NoticePage";
import BudgetSelectPage from "./pages/Scheduling/BudgetSelectPage/BudgetSelectPage";
import DateSelectPage from "./pages/Scheduling/DateSelectPage/DateSelectPage";
import SchedulePage from "./pages/Scheduling/SchedulePage/SchedulePage";
import SplashPage from "./pages/Splash/SplashPage/SplashPage";
import VotePage from "./pages/Vote/VotePage";
import FunctionalPage from "./pages/Functional/FunctionalPage";
import CourseLayout from './components/Layout/CourseLayout';
import VoteLayout from "./components/Layout/VoteLayout";
import FunctionalLayout from "./components/Layout/FunctionalLayout";
import CoursePage from "./pages/course/page";
import ProfileLayout from "./components/Layout/ProfileLayout";
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>

            {/* Main */}
            <Route path="/" element={<MainPage />} />

            {/* Login */}
            <Route path="/login" element={<LoginPage />} />

            {/* Budget */}
            <Route path="/budget" element={<BudgetPage />} />

            {/* MyPage */}
            <Route element={<ProfileLayout />}>
              <Route path="/mypage/profile" element={<MyProfilePage />} />
              <Route path="/mypage/room" element={<RoomPage />} />
            </Route>

            {/* Notice */}
            <Route path="/notice" element={<NoticePage />} />

            {/* Scheduling */}
            <Route path="/scheduling/budget-select" element={<BudgetSelectPage />} />
            <Route path="/scheduling/date-select" element={<DateSelectPage />} />
            <Route path="/scheduling/schedule" element={<SchedulePage />} />

            {/* Splash */}
            <Route path="/splash" element={<SplashPage />} />

            <Route element={<VoteLayout />}>
              <Route path="/vote" element={<VotePage />} />
            </Route>

            <Route element={<FunctionalLayout />}>
              <Route path="/functional" element={<FunctionalPage />} />
            </Route>
            
            <Route element={<CourseLayout />}>
                <Route path="/course" element={<CoursePage />} />
            </Route>

          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;


