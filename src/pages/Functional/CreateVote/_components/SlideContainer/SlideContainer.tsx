import React from "react";
import * as S from "./Styles";

interface ButtonData {
  id: string;
  label: string;
  isActive: boolean;
}

interface SlideContainerProps {
  buttonData: ButtonData[]; 
  handleCreateButton: () => void; 
  onButtonClick: (id: string) => void; 
  activeButton: string; 
}

const SlideContainer: React.FC<SlideContainerProps> = ({
  buttonData,
  handleCreateButton,
  onButtonClick,
  activeButton,
}) => {
  return (
    <S.StyledCard>
      {buttonData.map((button, index) => (
        <S.SlideContainer
          key={button.id}
          $isFirst={index === 0} 
          $isLast={index === buttonData.length - 1} 
        >
          <S.Slide
            $active={button.id === activeButton} 
            $isCreateButton={button.id === "CREATE"} 
            onClick={
              button.id === "CREATE"
                ? handleCreateButton
                : () => onButtonClick(button.id) 
            }
          >
            {button.id === "CREATE" ? (
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 5v14m7-7H5"
                  stroke="#3b46f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </S.Slide>
          <S.Label
            $active={button.id === activeButton} 
            $isCreateButton={button.id === "CREATE"} 
          >
            {button.label}
          </S.Label>
        </S.SlideContainer>
      ))}
    </S.StyledCard>
  );
};

export default SlideContainer;


