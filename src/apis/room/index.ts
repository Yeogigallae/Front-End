import axios from "axios";
import { RoomFormValues, RoomResponse } from "./types";
import { DEFAULT_ROOMS } from "./mocks";

export const createRoom = async (data:RoomFormValues) => {
    try{
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/room`,data,{
            withCredentials:true,
        });
        return response.data;
    }catch(error){
        console.error("Room API 호출 오류:", error);
        return null;
    }
}

export const getRooms = async () => {
    try{
        const response = await axios.get<RoomResponse>(`${import.meta.env.VITE_API_URL}/api/room/list`,{
            withCredentials:true,
        });
        return response.data.result;
    }catch(error){
        console.error("Rooms API 호출 오류:", error);
        return DEFAULT_ROOMS;
    }
}