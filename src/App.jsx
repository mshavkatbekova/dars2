import { useState } from "react";
import Form from "./components/Form";
import ItemsList from "./components/ItemsList";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Hello",
      completed: false,
    },
    {
      id: 2,
      text: "Nice Too",
      completed: true,
    },
    {
      id: 3,
      text: "I'm programer",
      completed: false,
    },
  ]);

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((item) => item.id !== id)

    })
  };

  const chageCompleted = (id) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed };
        } else {
          return item;
        }
      });
    });
  };

  return (
    <div className="bg-slate-200 h-screen grid place-items-center ">
      <div className="bg-white w-[520px] p-8">
        <h1 className="text-3xl text-center mb-8">Grocery Bud</h1>
        <Form />
        <ItemsList
          items={items}
          deleteItem={deleteItem}
          chageCompleted={chageCompleted}
        />
      </div>
    </div>
  );
}

export default App;
