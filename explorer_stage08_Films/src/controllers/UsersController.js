const AppError = require("../utils/AppError");
const { hash, compare } = require("bcryptjs");
const sqliteConnection = require('../database/sqlite');

class UsersController {
    async info(request, response) {

        const database = await sqliteConnection();
        const users = await database.all("SELECT username FROM users");

        return response.status(200).json({
            
            users: users.map(user => {return user.username})
        });
    }
    
    async create(request, response) {
        const { name, username, email, password, user_status } = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE username = (?) OR email = (?)", 
        [
            username,
            email
        ]);

        if(checkUserExists) {
            throw new AppError("User already exists");
        };

        const passwordHash = await hash(password, 8);

        await database.run("INSERT INTO users (name, username, email, password, status) VALUES (?, ?, ?, ?, ?)", 
        [
            name,
            username,
            email,
            passwordHash,
            user_status
        ]);

        return response.status(201).json();
    }
    
    async update(request, response) {
        const { name, username, email, password, old_password, user_status } = request.body;
        const user_id = request.user.id;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", 
        [
            user_id
        ]);

        if(!user) {
            throw new AppError("User does not exist.");
        };

        const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", 
        [
            email
        ]);

        if(userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
            throw new AppError("Email already in use.");
        };

        user.name = name ?? user.name;
        user.username = username ?? user.username;
        user.email = email ?? user.email;
        user.status = user_status ?? user.status;

        if(password && !old_password) {
            throw new AppError("Old password is required.");
        };

        if(password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);

            if(!checkOldPassword) {
                throw new AppError("Old password does not match.");
            };

            user.password = await hash(password, 8);

        };

        await database.run(`
        UPDATE users SET 
        name = (?),
        username = (?),
        email = (?), 
        password = (?),
        status = (?),
        updated_at = DATETIME('now')
        WHERE id = (?)`, 
        [
            user.name,
            user.username,
            user.email,
            user.password,
            user.status,
            user_id
        ]);

        return response.status(200).json();
    }
}

module.exports = UsersController;