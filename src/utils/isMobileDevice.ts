export function isMobileDevice() {
    if (typeof window === "undefined") return false;
    return /android|iphone|ipad|ipod|opera mini|iemobile|mobile/i.test(window.navigator.userAgent);
}