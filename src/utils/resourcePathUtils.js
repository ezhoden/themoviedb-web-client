import { API_IMG_ROOT, API_IMG_SIZES } from "../constants/apiConfig";

export const getImageResourcePath = (resourceTail, size = API_IMG_SIZES.ORIGINAL) => 
    `${API_IMG_ROOT}/${size}${resourceTail}`;