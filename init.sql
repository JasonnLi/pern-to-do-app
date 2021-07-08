CREATE TABLE users(
  user_id SERIAL,
  user_name VARCHAR(255) NOT NULL,
  user_age INTEGER NOT NULL,
  user_address VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);