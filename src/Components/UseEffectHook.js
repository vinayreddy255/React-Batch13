import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/users9000";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  useEffect(() => {
    console.log("Component did mount is calling for Counter....");
    fetch(url)
      .then((response) => response)
      .then((data) => console.log(data.json()));
  }, []);

  useEffect(() => {
    console.log("Component did update calling for Age....");
  }, [age]);

  return (
    <div>
      <h2>Use Effect Hook</h2>
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Count Inc</button>
      <div>
        <h2>Age:{age}</h2>
      </div>
      <button onClick={() => setAge(age + 1)}>Age Inc</button>
    </div>
  );
}
export default UseEffectHook;
