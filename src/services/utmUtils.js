export const UTM_STORAGE_KEY = 'fhc_utm_params';

// Extract UTM parameters from URL
export const extractUTMParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {};

    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    utmKeys.forEach(key => {
        const value = urlParams.get(key);
        if (value) {
            utmParams[key] = value;
        }
    });

    return utmParams;
};

// Store UTM parameters in sessionStorage (clears when browser session ends)
export const storeUTMParams = (params) => {
    if (Object.keys(params).length > 0) {
        sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(params));
    }
};

// Retrieve UTM parameters from sessionStorage
export const getStoredUTMParams = () => {
    try {
        const stored = sessionStorage.getItem(UTM_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Error retrieving UTM parameters:', error);
        return {};
    }
};

// Clear stored UTM parameters
export const clearUTMParams = () => {
    sessionStorage.removeItem(UTM_STORAGE_KEY);
};

// Add UTM parameters to a URL
export const addUTMParamsToUrl = (baseUrl, utmParams = null) => {
    const params = utmParams || getStoredUTMParams();

    if (Object.keys(params).length === 0) {
        return baseUrl;
    }

    const url = new URL(baseUrl);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });

    return url.toString();
};