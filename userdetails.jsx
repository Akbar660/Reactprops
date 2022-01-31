function Userdetails({ name, add, isMarried }) {
  return (
    <div>
      <h1>Name:{name}</h1>
      <h2>Address:{add}</h2>

      <h3> ismarried?: {isMarried ? "yes" : "no"}</h3>
    </div>
  );
}

export { Userdetails };
