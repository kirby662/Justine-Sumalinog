interface Props { 
text:string 
color:string
}

export function ButtonText({text, color}:Props){ 
    return( 
    <> 
    <button className={`p-1 w-20 rounded-md ${color}`}>{text}</button>
    </>
    )
}