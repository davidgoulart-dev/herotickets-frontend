import { Button } from "./Form/Button"
import { Input } from "./Form/Input"

export const FormWrapper = () => {
    return (
        <div className=" bg-gray-50 shadow rounded-3xl">
            <p className=" bg-blue rounded-3xl text-white text-center rounded-b-none p-3">Ingressos</p>
            <div className=" p-6">
                <div className=" flex justify-between items-center">
                    <div>
<p className=" font-bold text-lg">Pista</p>
                    <p>Entrada e acesso à pista do evento.</p>

                    </div>
                    
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
                {/* outro lado */}
                
                <div className="grid grid-cols-5 gap-3 mt-3">
                    
                    <Input placeholder="Insira aqui um cupom de desconto" title="Cupom" className="col-span-3" />
                    <Input placeholder="R$0,00" title="Subtotal" className="col-span-2" />

                </div>
                <Input placeholder="Insira seu nome" title="Nome"  />
                <Input placeholder="Insira seu email" title="Email"  />
                <Button title="Cadastrar"/>

            </div>
        </div>
    )
}