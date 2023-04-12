export function Fantium({ title }: { title: string }) {
  return (
      <div className="bg-slate-900">
        <h1>
          <span className="text-white"> Hello there, </span>
              Welcome {title} 👋
          </h1>
      </div>
  );
}

export default Fantium;
