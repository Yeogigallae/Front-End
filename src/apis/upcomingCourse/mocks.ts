import { CourseResponse } from "./types";

export const courseMock: CourseResponse = {
    httpStatus: "100 CONTINUE",
    code: "string",
    message: "코스 정보 조회 성공",
    result: {
        roomName: "제주도 여행 방",
        totalRoomMember: 0,
        startDate: "2025-02-17",
        dailyItineraries: [
            {
                day: "1일차",
                places: [
                    {
                        id: 1,
                        placeName: "성산일출봉",
                        address: "제주특별자치도 서귀포시 성산읍 성산리 1",
                        latitude: 33.4581,
                        longitude: 126.9423,
                        image: "https://example.com/image1.jpg",
                        description: "제주도의 대표적인 일출 명소",
                        userName: "사용자1",
                        profileImage: "https://example.com/profile1.jpg",
                    },
                    {
                        id: 2,
                        placeName: "우도",
                        address: "제주특별자치도 제주시 우도면 우도리",
                        latitude: 33.5124,
                        longitude: 126.9537,
                        image: "https://example.com/image2.jpg",
                        description: "아름다운 섬과 해안 경관",
                        userName: "사용자2",
                        profileImage: "https://example.com/profile2.jpg",
                    },
                ],
            },
            {
                day: "2일차",
                places: [
                    {
                        id: 2,
                        placeName: "우도",
                        address: "제주특별자치도 제주시 우도면 우도리",
                        latitude: 33.5124,
                        longitude: 126.9537,
                        image: "https://example.com/image2.jpg",
                        description: "아름다운 섬과 해안 경관",
                        userName: "사용자2",
                        profileImage: "https://example.com/profile2.jpg",
                    },
                ],
            },
            {
                day: "3일차",
                places: [
                    {
                        id: 3,
                        placeName: "한라산",
                        address: "제주특별자치도 제주시 1100로",
                        latitude: 33.3617,
                        longitude: 126.5292,
                        image: "https://example.com/image3.jpg",
                        description: "한라산 등반 및 자연 경관 감상",
                        userName: "사용자3",
                        profileImage: "https://example.com/profile3.jpg",
                    },
                ],
            },
            {
                day: "4일차",
                places: [
                    {
                        id: 4,
                        placeName: "협재 해수욕장",
                        address: "제주특별자치도 제주시 한림읍 협재리",
                        latitude: 33.3949,
                        longitude: 126.2398,
                        image: "https://example.com/image4.jpg",
                        description: "맑고 푸른 바다와 하얀 모래 해변",
                        userName: "사용자4",
                        profileImage: "https://example.com/profile4.jpg",
                    },
                ],
            },
            {
                day: "5일차",
                places: [
                    {
                        id: 5,
                        placeName: "천지연 폭포",
                        address: "제주특별자치도 서귀포시 천지연로 2",
                        latitude: 33.2462,
                        longitude: 126.5612,
                        image: "https://example.com/image5.jpg",
                        description: "웅장한 폭포와 자연 속 힐링",
                        userName: "사용자5",
                        profileImage: "https://example.com/profile5.jpg",
                    },
                ],
            },
        ],
    },
};
