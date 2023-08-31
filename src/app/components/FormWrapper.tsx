export const FormWrapper = () => {
    return (
        <div>
            <p className=" bg-blue rounded-3xl text-white text-center rounded-b-none p-3">Ingressos</p>
            <div className=" flex justify-between items-center">
                <div>
                    <p className=" font-bold text-lg">Pista</p>
                    <p>Entrada e acesso à pista do evento.</p>
                </div>
                {/* outro lado */}
                <div className=" flex">
                    <div className=" bg-blue rounded text-white font-medium w-8 h-8 flex justify-center items-center">
                        <p>-</p>
                    </div>
                    <div className="mx-2 bg-white rounded border border-neutral-500 text-blue font-medium w-8 h-8 flex justify-center items-center">
                        <p>1</p>
                    </div>
                    <div className=" bg-blue rounded text-white font-medium w-8 h-8 flex justify-center items-center">
                        <p>+</p>
                    </div>
                </div>

            </div>
        </div>
    )
}