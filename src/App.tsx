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
import SplashPage from "./pages/Splash/SplashPage/SplashPage";
import VotePage from "./pages/Vote/VotePage";
import FunctionalPage from "./pages/Functional/FunctionalPage";
import CourseLayout from "./components/Layout/CourseLayout";
import VoteLayout from "./components/Layout/VoteLayout";
import FunctionalLayout from "./components/Layout/FunctionalLayout";
import CoursePage from "./pages/Course/CoursePage";
import ProfileLayout from "./components/Layout/ProfileLayout";
import Kakao from "./pages/Login/Kakao";
import MyFriendPage from "./pages/MyPage/MyFriendPage/MyFriendPage";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NoticeLayout from "./components/Layout/NoticeLayout";

import BudgetLayout from "./components/Layout/BudgetLayout";
import UpComingCoursePage from "./pages/Course/UpComingCourse/UpComingCoursePage";
import withAuth from "./pages/Login/withAuth";
import FullVotingListPage from "./pages/Main/FullVotingListPage/FullVotingListPage";
import FullVotingListLayout from "./components/Layout/FullVotingListLayout";
import OnboardingPage from "./pages/Splash/onboardingPage/onboardingPagePage";
import InvitePage from "./pages/MyPage/InvitePage/InvitePage";
const ProtectedMainPage = withAuth(MainPage, true, true);
const ProtectedLoginPage = withAuth(LoginPage, false);
const ProtectedKakao = withAuth(Kakao, false);

const queryClient = new QueryClient();

const App: React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        {/* Main */}
                        {/*<Route path="/" element={<MainPage />} />*/}
                        {/* <Route path="/" element={<ProtectedMainPage />} /> */}
                        <Route path="/" element={<ProtectedMainPage />} />
                        <Route element={<FullVotingListLayout />}>
                            <Route path="/fulllist" element={<FullVotingListPage />} />
                        </Route>

                        {/* Login */}
                        <Route path="/login" element={<ProtectedLoginPage />} />
                        <Route path="/login/kakao" element={<ProtectedKakao />} />

                        {/* Budget */}
                        <Route element={<BudgetLayout />}>
                            <Route path="/budget/:aiCourseId" element={<BudgetPage />} />
                        </Route>

                        {/* MyPage */}
                        <Route element={<ProfileLayout />}>
                            <Route path="/mypage/profile" element={<MyProfilePage />} />
                            <Route path="/mypage/friend" element={<MyFriendPage />} />
                            <Route path="/invite" element={<InvitePage />} />
                            <Route path="/mypage/room" element={<RoomPage />} />
                        </Route>

                        {/* Notice */}
                        <Route element={<NoticeLayout />}>
                            <Route path="/notice" element={<NoticePage />} />
                        </Route>

                        {/* Splash */}
                        <Route path="/splash" element={<SplashPage />} />
                        <Route path="/onboarding" element={<OnboardingPage />} />

                        <Route element={<VoteLayout />}>
                            <Route path="/vote/:tripId/:roomId" element={<VotePage />} />
                        </Route>

                        <Route element={<FunctionalLayout />}>
                            <Route path="/functional" element={<FunctionalPage />} />
                        </Route>

                        <Route element={<CourseLayout />}>
                            <Route path="/course/:tripId/:roomId" element={<CoursePage />} />
                            <Route path="/course/upcoming/:roomId/:aiCourseId" element={<UpComingCoursePage />} />
                        </Route>
                    </Routes>
                </Router>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
