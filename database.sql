-- create TABLE user (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     surname VARCHAR(255)
-- );

create TABLE todo (
    uuid UUID,
    name TEXT,
    done BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP
);