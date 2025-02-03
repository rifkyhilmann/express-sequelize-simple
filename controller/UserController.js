// UserController.js
const User = require("../models/User");
const createResponse = require("../utils/response");

class UserController {
    // Create a new user
    static async create(req, res) {
        try {
            const { name, email, password } = req.body;

            // Validasi input jika diperlukan
            if (!name || !email || !password) {
                return createResponse(res, 400, "All fields are required");
            }

            // Membuat pengguna baru
            const newUser = await User.create({ name, email, password });

            return createResponse(res, 201, "User created successfully", newUser);
        } catch (error) {
            console.log(error);
            return createResponse(res, 500, "Internal Server Error");
        }
    }

    // Read all users (GET)
    static async getAll(req, res) {
        try {
            const users = await User.findAll();

            if (!users) {
                return createResponse(res, 300, "Not Data");
            }

            return createResponse(res, 200, "Users retrieved successfully", users);
        } catch (error) {
            console.log(error);
            return createResponse(res, 500, "Internal Server Error");
        }
    }

    // Read a specific user by ID (GET)
    static async getById(req, res) {
        try {
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return createResponse(res, 404, "User not found");
            }

            return createResponse(res, 200, "User retrieved successfully", user);
        } catch (error) {
            console.log(error);
            return createResponse(res, 500, "Internal Server Error");
        }
    }

    // Update user by ID (PUT/PATCH)
    static async update(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return createResponse(res, 404, "User not found");
            }

            // Update user
            user.name = name || user.name;
            user.email = email || user.email;
            user.password = password || user.password;

            await user.save();

            return createResponse(res, 200, "User updated successfully", user);
        } catch (error) {
            console.log(error);
            return createResponse(res, 500, "Internal Server Error");
        }
    }

    // Delete user by ID (DELETE)
    static async delete(req, res) {
        try {
            const user = await User.findByPk(req.params.id);

            if (!user) {
                return createResponse(res, 404, "User not found");
            }

            await user.destroy();
            return createResponse(res, 200, "User deleted successfully");
        } catch (error) {
            console.log(error);
            return createResponse(res, 500, "Internal Server Error");
        }
    }
}

module.exports = UserController;
