import { hideLoader, showLoader } from "./loader.js";

export const getData = async (url) => {
    showLoader();
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Error fetching pizza products');
        }
        return await response.json();
    } catch (error) {
        console.log(`Error fetching pizza products: ${error}`);
        return [];
    } finally {
        hideLoader();
    }
}