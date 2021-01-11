CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" varchar UNIQUE,
  "email" varchar UNIQUE,
  "password" varchar
);
