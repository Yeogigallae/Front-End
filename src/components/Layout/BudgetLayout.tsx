import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
import HeaderCenterContent from "../Header/HeaderCenterContent";
import { budgetPageDataMock } from "../../apis/budget/mocks";
import withAuth from "../../pages/Login/withAuth";

function BudgetLayout() {
    const navigate = useNavigate();

    return (
        <>
            <Header
                leftContent={
                    <IconButton onClick={() => navigate(-1)}>
                        <BackIcon />
                    </IconButton>
                }
                centerContent={<HeaderCenterContent title={"예산정하기"} number={budgetPageDataMock.result.userCount} />}
                rightContent={
                    <IconButton onClick={() => navigate("/",{replace:true})}>
                        <HomeIcon />
                    </IconButton>
                }
            />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default withAuth(BudgetLayout, true);