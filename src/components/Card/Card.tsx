import * as S from "./Card.styles";
import CardImage from "./CardImage";
import CardTitle from "./CardTitle";
import CardItem from "./CardItem";
import CardDivider from "./CardDivider";
import React from 'react';


/**
 * 카드 컴포넌트. 컨텐츠를 배치하여 보여줍니다. Image,Title,Item,Divider 컴포넌트를 포함하여 해당 카드에 
 * 적절한 컨텐츠를 배치할 수 있습니다.
 * @param children 카드 컨텐츠
 */

interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode;
    gap?:string;
    className?:string;
}


function CardRoot({ children,gap,className,onClick }: CardProps) {
    return (
        <S.Card className={className} onClick={onClick}>
            <S.CardWrapper style={{gap:gap}}>
                {children}
            </S.CardWrapper>
        </S.Card>
    );

}

const Card = Object.assign(CardRoot,{
    Image:CardImage,
    Title:CardTitle,
    Item:CardItem,
    Divider:CardDivider,
})

export default Card;