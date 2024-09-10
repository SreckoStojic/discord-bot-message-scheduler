# Discord Bot

## Description

Briefly describe what your project is about. Include any relevant information such as features, technology stack, or the problem it solves.

---

## Table of Contents

1. [Setup](#Setup)


---

## Setup

Follow these steps to set up your environment and install the necessary dependencies.

1. **Clone the repository:**
    ```sh
    git clone 
    cd discord-bot-vrchat
    ```

2. **Install pnpm:**
    ```sh
    npm install -g pnpm
    ```

3. **Install dependencies:**
    ```sh
    pnpm install
    ```
4. **Create .env file and copy .env.example**

5. **Run docker containers:**
    ```sh
    docker-compose up -d
    ```

6. **Database (prisma) setup:**
    ```sh
    npx prisma migrate dev
    npx prisma generate
    ```
7. **Start development server:**
    ```sh
    pnpm run dev
    ```


# discord-bot-message-scheduler
