import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import HeaderCenterContent from "../Header/HeaderCenterContent";
import withAuth from "../../pages/Login/withAuth";

interface HeaderConfig {
    title: string;
    number?: number;
}

function VoteLayout() {
    const navigate = useNavigate();
    const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({ title: "", number: undefined });
    const { title, number } = headerConfig;

    return (
        <>
            <Header
                leftContent={
                    <IconButton onClick={() => navigate(-1)}>
                        <BackIcon />
                    </IconButton>
                }
                centerContent={
                    <HeaderCenterContent title={title} number={number} />
                }
                rightContent={
                    <IconButton onClick={() => navigate("/",{replace:true})}>
                        <HomeIcon />
                    </IconButton>
                }
            />
            <main>
                <Outlet context={{ setHeaderConfig }} />
            </main>
        </>
    );
}

export default withAuth(VoteLayout, true);