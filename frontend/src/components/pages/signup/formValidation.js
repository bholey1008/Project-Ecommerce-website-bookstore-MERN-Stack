// Validate Phone Number
//  This function removes all hyphens from the phone number input and checks if the resulting string has a length of 10.

export const isPhoneNumberValid = (phoneNumber) => {
    // Remove all hyphens from the phone number input
    const phoneNumberWithoutHyphens = phoneNumber.replace(/-/g, "");
    return phoneNumberWithoutHyphens.length === 10;
};

// Validate Name
//This function checks if the input string does not contain any digits and has a length less than or equal to 15.

export const isNameValid = (name) => {
    const regex = /\d/;
    return !regex.test(name) && name.length <= 10;
};

// Validate Password
// This function uses a regular expression to match if the input string contains at least one letter, one number, and one symbol and has a length of at least 8.

export function validatePassword(password) {
    // Regular expression to match at least one letter, one number, and one symbol
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
}

