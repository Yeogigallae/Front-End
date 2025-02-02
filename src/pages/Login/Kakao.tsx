import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "./useAuthStore";
import { sendAuthCodeToServer } from "./api";
import * as S from "./LoginPage/Styles";

export default function Kakao() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { setAccessToken, setRefreshToken } = useAuthStore();

    useEffect(() => {
        const code = searchParams.get("code");

        const handleLogin = async () => {
            if (!code) {
                navigate("/login", { replace: true });
                return;
            }

            try {
                const response = await sendAuthCodeToServer(code);

                if (response.accessToken && response.refreshToken) {
                    setAccessToken(response.accessToken);
                    setRefreshToken(response.refreshToken); // refreshToken 저장
                    navigate("/");
                } else {
                    navigate("/login", { replace: true });
                }
            } catch (error) {
                console.error("Login failed:", error);
                navigate("/login", { replace: true });
            }
        };

        handleLogin();
    }, [searchParams, navigate, setAccessToken, setRefreshToken]);

    return (
        <S.Container>
            <S.Title>로그인중...</S.Title>
        </S.Container>
    );
}
