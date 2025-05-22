import Hello from "../components/hello";

export default function Home() {
  console.log("CLitent or Server!!");

  return (
    <>
      <h1 className="text-3xl">Welcome to next</h1>
      <Hello />
    </>
  );
}
