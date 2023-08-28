import { BannerPrimary } from "@/app/components/BannerPrimary";
import { BannerSecondary } from "@/app/components/BannerSecondary";
import { categories } from "@/app/utils/categories";
import { fetchWrapper } from "@/app/utils/fetchWrapper";
import axios from 'axios'
 const getData = async () => {
        const response = await axios.get('http://localhost:3333/events/main')
        return response.data
    }
    export default async function Dashboard() {
   const response = await getData();
   console.log(response)
   
   const secondaryResponse = response.slice(26)
    return (
        <div className="container mx-auto mr-8">
            <BannerPrimary events={response[27]}/>
            <div className=" p-2 text-blue ml-12  ">
                <p className="text-2xl font-medium">Eventos em Destaque</p>
                <p className=" font-light text-base">Se divirta com os principais eventos de Minas Gerais e do Brasil!</p>


            </div>
            <div className=" grid grid-cols-3 gap-3 p-12">
            {secondaryResponse.map((event: any) => (
                <BannerSecondary event={event}/>
            ) )}
          
            </div>
            <div className=" p-2 text-blue ml-12  ">
                <p className="text-2xl font-medium">Navegue por tipo de evento</p>
                <p className=" font-light text-base">Vá ao evento que é a sua cara :D</p>


            </div>
            <div className="grid md:grid-cols-7 grid-cols-2 lg:gap-1 sm:gap-1 w-11/12 ml-9">
              
                {categories.map((categorie => {
                    return (
                        <div className="flex flex-col items-center justify-center cursor-pointer ">
                            <img src={categorie.Icon} alt="" className=" rounded-full" />
                            <p>{categorie.name}</p>
                        </div>

                    )
                }))}
              
               
              

            </div>

        </div>
    )
}