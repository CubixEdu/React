export const validation = {
    username: value => {
        if (!value) {
            return "Username is required"
        } else if (
            !/^[A-Za-z0-9]*$/.test(value)
            || value.length < 3
            || value.length > 20
        ) {
            return "Username must be between 3 and 20 characters and can only contain letters and numbers"
        }
    },
    email: value => {
        if (!value) {
            return 'Email is required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
        ) {
            return 'Invalid email address';
        }
    },
    password: (value) => {
        if (!value) {
            return "Password is required";
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(value)
            || value.length < 5
        ) {
            return "Password must be at least 5 characters long and contain upper and lowercase letters and numbers.";
        }
    }

}