export const ListHeader = () => {
  return (
    <div className="w-full flex text-gray-500 text-xs font-semibold bg-white mb-1">
      <div className="w-1/3 p-2 border border-slate-300">
        <span>Cliente Potencial</span>
      </div>
      <div className="w-1/3 p-2 border border-slate-300">
        <span>Dados Confirmados</span>
      </div>
      <div className="w-1/3 p-2 border border-slate-300">
        <span>Analise do Lead</span>
      </div>
    </div>
  );
};
