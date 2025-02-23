function MainContent() {
  return (
    <main style={{ backgroundColor: "grey" }}>
      <p style={{ padding: "10px", color: "white" }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MainContent;
