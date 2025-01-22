import Header from "../Header";
import HomeIcon from "../../assets/icons/Home.svg?react";
import BackIcon from "../../assets/icons/Back.svg?react";
import { IconButton } from "../Button";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFunnel } from "../../hooks/useFunnel/useFunnel"; 

export default function Layout() {
  const { currentStep: step, setStep } = useFunnel("생성"); 
  const navigate = useNavigate();

  const getCenterContent = () => {
    if (step === "주소검색") return "장소 찾기";
    if (step === "캘린더") return "기간 정하기";
    return "생성하기";
  };

  const handleBack = () => {
    if (step === "주소검색" || step === "캘린더") {
      setStep("생성"); 
    } else {
      navigate(-1); 
    }
  };

  return (
    <>
      <Header
        leftContent={
          <IconButton onClick={handleBack}>
            <BackIcon />
          </IconButton>
        }
        centerContent={<Typography>{getCenterContent()}</Typography>}
        rightContent={
          <IconButton onClick={() => setStep("생성")}>
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

const Typography = styled.div`
  font-size: 1rem;
  color: #ffffff;
  font-weight: 500;
  line-height: 1.178rem;
`;


