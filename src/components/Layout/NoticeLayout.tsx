import Header from "../Header"
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import { Outlet, useNavigate } from 'react-router-dom';
import CommonContainer from './CommonContainer';
import HeaderCenterContent from "../Header/HeaderCenterContent";
import { useState } from "react";
import { HeaderConfig } from "../../types/header/header";
import withAuth from "../../pages/Login/withAuth";

function NoticeLayout() {
    const navigate = useNavigate();
    const [headerConfig, setHeaderConfig] = useState<HeaderConfig>({title:""});
    const { title } = headerConfig;

    return (
        <>
            <Header 
                leftContent={
                    <IconButton onClick={ (() => navigate(-1))}>
                        <BackIcon/>
                    </IconButton>
                }
                centerContent={
                    <HeaderCenterContent title={title} />
                }
                rightContent={
                    <IconButton onClick={() => navigate('/',{replace:true})}>
                        <HomeIcon/>
                    </IconButton>
                }
            />
            <main>
                <CommonContainer>   
                    <Outlet context={{setHeaderConfig}} />
                </CommonContainer>
            </main>
        </>
    )
}

export default withAuth(NoticeLayout, true);