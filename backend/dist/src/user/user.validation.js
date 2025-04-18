"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = exports.validateLoginUser = exports.validateRegisterUser = void 0;
/**
 * Validate user registration data
 */
const validateRegisterUser = (req, res, next) => {
    const { email, password, phone, name } = req.body;
    // Email validation
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    // Password validation
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }
    if (password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    // Phone validation (if provided)
    if (phone) {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: 'Invalid phone number format' });
        }
    }
    next();
};
exports.validateRegisterUser = validateRegisterUser;
/**
 * Validate user login data
 */
const validateLoginUser = (req, res, next) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    if (!password) {
        return res.status(400).json({ message: 'Password is required' });
    }
    next();
};
exports.validateLoginUser = validateLoginUser;
/**
 * Validate user update data
 */
const validateUpdateUser = (req, res, next) => {
    const { email, phone, name, bio, status } = req.body;
    // Email validation (if provided)
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Invalid email format' });
        }
    }
    // Phone validation (if provided)
    if (phone) {
        const phoneRegex = /^\+?[0-9]{10,15}$/;
        if (!phoneRegex.test(phone)) {
            return res.status(400).json({ message: 'Invalid phone number format' });
        }
    }
    // Status validation (if provided)
    if (status && !['active', 'inactive', 'banned'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status value' });
    }
    next();
};
exports.validateUpdateUser = validateUpdateUser;
//# sourceMappingURL=user.validation.js.map