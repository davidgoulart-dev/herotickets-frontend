import { ChangeEvent, ForwardRefRenderFunction, forwardRef} from 'react'

interface IInput {
    placeholder: string,
    type: string,
    title: string,
    className?: string,
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const InputBase: ForwardRefRenderFunction<HTMLInputElement & HTMLTextAreaElement, IInput > = (
    {placeholder, type, className, title, ...rest },
    ref,
) => {
    if(type === 'textarea'){
        return (
            <div>
            <label>
            {title}
         </label> 
         <textarea className={`w-full px-6 py-[5px] bg-white rounded-lg border border-teal-400 text-base`}  
         
         placeholder={placeholder}
         ref={ref}
         rows={5}
         
         />

            </div>
        )
    }
    return (
        <div className={` mb-4 text-blue font-medium ${className}`}>
            <label>
               {title}
            </label> 
            <input className={`w-full px-6 py-[5px] bg-white rounded-lg border border-teal-400 text-base`}  
            type={type}
            placeholder={placeholder}
            ref={ref}
            
            {...rest} 
            />
       
        </div>

    )
}

export const Input = forwardRef(InputBase);