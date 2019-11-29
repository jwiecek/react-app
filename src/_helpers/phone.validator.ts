export const phoneValidator = (phone: string): boolean => {
    const phoneRegex = /^\(?([0-9]{3})\)?[(\s)-.●]?([0-9]{3})[(\s)-.●]?([0-9]{4})$/;
    return phoneRegex.test(phone);
};