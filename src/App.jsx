import { useEffect, useState } from "react";
export default function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => { setStudents(data); setLoading(false); })
      .catch(() => { setError("Failed to load data"); setLoading(false); });
  }, []);
  return (
    <div className="app">
      <h1>Student List (API)</h1>
      <div className="card">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ul>
          {students.map((s) => (
            <li key={s.id}>
              <span><b>{s.name}</b><br />{s.email}</span>
              <span>{s.address.city}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
