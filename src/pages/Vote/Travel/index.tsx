import TravelCard from "./_components/TravelCard";

export default function OverView({
    onNext
}: {
    onNext:()=>void
}){

    
    return (
        <>
            <TravelCard
                onNext={onNext}
            />
        </>
    )
}



