
export default function Textarea({children, ...props}){
    return(
        <textarea {...props}>{children}</textarea>
    )
}