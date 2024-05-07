const createUsers = `
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR,
        username VARCHAR,
        email VARCHAR,
        password VARCHAR,
        status VARCHAR,
        avatar VARCHAR NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );

        INSERT INTO users (name, username, email, password, status)
        SELECT 'admin', 'admin', 'admin@films.com', '$2a$08$wFm8uYq5iPvao0UhxxVXj.Sjl.tyizo7MUaYBMdQjVwyi8SE2AL6K', 'admin'
        WHERE (SELECT COUNT(*) FROM users WHERE username = 'admin' OR email = 'admin@films.com') = 0;
`;

module.exports = createUsers;