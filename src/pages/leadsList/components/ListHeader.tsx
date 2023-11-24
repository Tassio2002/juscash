export const ListHeader = () => {
    return ( 
        <div className="w-full flex text-gray-500 text-xs font-semibold bg-white">
            <div className="w-1/3 p-2 border border-gray-400">
                <span>Cliente Potencial</span>
            </div>
            <div className="w-1/3 p-2 border border-gray-400">
                <span>Dados Confirmados</span>
            </div>
            <div className="w-1/3 p-2 border border-gray-400">
                <span>Analise do Lead</span>
            </div>
        </div>
     );
}