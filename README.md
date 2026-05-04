# To-Do List Frontend

**Frontend application for task management built with React, TypeScript, Vite, and TailwindCSS.**

This project provides the client-side interface for the To-Do List application, allowing users to create, list, update, and delete tasks through a simple and responsive UI connected to a NestJS REST API.

It was built as one of my first fullstack projects to strengthen practical knowledge in frontend architecture, state management, API consumption, and CRUD workflows.

---

## 📌 Description

This project is the frontend layer of the To-Do List application.

It provides:

✔ Task creation through forms

✔ Task listing in real time

✔ Task completion state updates

✔ Task deletion

✔ API integration with the backend

✔ Global state management using Context API

The application communicates with the backend REST API and reflects changes dynamically in the UI.

---

## ✨ Main Features

- 📝 Task creation form
- 📋 Dynamic task listing
- ✅ Task status toggling
- 🗑 Task deletion
- 🔄 Real-time UI updates after CRUD operations
- 🌐 REST API integration
- ⚡ Fast build and development with Vite
- 🎨 Styled with TailwindCSS
- 🧠 Global state management using Context API
- 🔒 Type-safe development with TypeScript

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| React 18 | UI |
| TypeScript | Type safety |
| Vite | Build system |
| TailwindCSS | Styling |
| React Context API | Global state |
| React Icons | UI icons |
| Fetch API | API requests |

---

## 📂 Project Structure

```text
tareas-simple-react-frontend/
├── public/
├── src/
│   ├── api/
│   │   ├── index.ts
│   │   └── tarea.ts
│   ├── assets/
│   ├── components/
│   │   ├── TareaFormulario.tsx
│   │   ├── TareaItem.tsx
│   │   └── TareaLista.tsx
│   ├── context/
│   │   ├── index.ts
│   │   ├── TareaContexto.tsx
│   │   └── useTareas.tsx
│   ├── interfaces/
│   │   ├── index.ts
│   │   └── tarea-interface.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── .env.template
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/emanuelarevalomartinez/tareas-simple-react-frontend.git
cd tareas-simple-react-frontend
```

Install dependencies:

```bash
npm install
```

---

## ⚙ Environment Variables

Create your `.env` file from the template:

```bash
cp .env.template .env
```

Inside `.env`:

```env
VITE_URL_BACKEND=http://localhost:3000/api
```

### Explanation

This variable defines the backend API base URL.

The frontend uses this environment variable to perform CRUD requests.

Make sure the backend server is running before starting the frontend.

---

## ▶ Running the Project

Development mode:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

By default:

```text
http://localhost:5173
```

---

## 🔗 Backend Dependency

This frontend depends on the backend API being available.

Expected backend URL:

```text
http://localhost:3000/api
```

Available endpoints consumed:

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/tareas` | Create task |
| GET | `/tareas` | Get tasks |
| PATCH | `/tareas/:id` | Update task |
| DELETE | `/tareas/:id` | Delete task |

---

## 🧩 Component Architecture

### App

Main application container.

Wraps the app with the global task context.

---

### TareaFormulario

Responsible for:

- Creating new tasks
- Handling form state
- Sending task creation requests

---

### TareaLista

Responsible for:

- Rendering all tasks

---

### TareaItem

Responsible for:

- Displaying task information
- Updating completion state
- Deleting tasks

---

## 🧠 State Management

Global state is handled through React Context API.

Context responsibilities:

- Store task list
- Create tasks
- Delete tasks
- Update tasks
- Fetch initial tasks

Custom hook:

```ts
UseTareas()
```

Used to consume task state and actions.

---

## 📄 Task Model

Task structure used across the application:

```ts
{
  _id: string;
  titulo: string;
  descripcion: string;
  hecha: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
```

---

## 🎨 UI Features

- Dark mode styled UI
- Responsive centered layout
- Interactive hover states
- Task action icons
- Immediate UI synchronization after actions

---

## 🧠 Learning Goals

This project was built to strengthen practical knowledge in:

- React fundamentals
- TypeScript integration
- Context API state management
- API consumption
- CRUD workflows
- Component composition
- Frontend/backend communication
- Environment variable configuration

---

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch  
3. Commit your changes  
4. Open a Pull Request  

Suggestions and improvements are welcome 🚀

---

## 📝 License

Apache License 2.0 — free for personal and commercial use.

---

## 🔗 Repository

[GitHub - Tareas Simple React Frontend](https://github.com/emanuelarevalomartinez/tareas-simple-react-frontend)