# ✅ To-Do List API

A simple RESTful API for managing your daily tasks. Built with Node.js, Express, and MongoDB as part of the 30 Days Backend Challenge.

---

## 🚀 Features

- Add new to-do tasks
- View all to-dos
- View a single to-do by ID
- Update a to-do (mark as completed or edit title)
- Delete a to-do

---

## 📦 Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Favouridowu02/30-days_with_Techy_Jaunt.git
   cd "Backend Engineering/Day1_To-Do List API"
   ```

2. **Install dependencies:**
   ```sh
   npm install
   npm install nodemon
   ```

3. **Start MongoDB** (make sure MongoDB is running locally on port 27017).
    Install mongod if not installed and start it on a seperate tab terminal
    ```
        mongod
    ```

4. **Start the server:**
   ```sh
   node index.js
   ```
   The server will run on `http://localhost:3000` by default.

---

## 🛠️ API Endpoints

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/todos`         | Get all to-dos           |
| GET    | `/todos/:id`     | Get a to-do by ID        |
| POST   | `/todos`         | Create a new to-do       |
| PUT    | `/todos/:id`     | Update a to-do by ID     |
| DELETE | `/todos/:id`     | Delete a to-do by ID     |

### Example To-Do Object

```json
{
  "_id": "665d1c2f8b3b2c001f8e4a12",
  "title": "Finish backend challenge",
  "completed": false,
  "createdAt": "2024-06-03T12:00:00Z",
  "updatedAt": "2024-06-03T12:00:00Z"
}
```

---

## 🧪 Example Requests

**Create a To-Do**
```sh
curl -X POST http://localhost:3000/todos \
  -H "Content-Type: application/json" \
  -d '{"title":"Read a book"}'
```

**Get All To-Dos**
```sh
curl http://localhost:3000/todos
```

---

## 📝 Project Structure

```
.
├── index.js
├── index_array.js
├── package.json
├── README.md
└── models/
    └── Todo.js
```

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the ISC License.

---

## 👤 Author

- Idowu Favour  
- GitHub: [@Favouridowu02](https://github.com/Favouridowu02)
- Twitter: [@favour_eng](https://x.com/favour_eng)
- LinkedIn: [favouridowu](https://linkedin.com/in/favouridowu)
