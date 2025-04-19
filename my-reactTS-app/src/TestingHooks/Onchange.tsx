
import { useState } from "react";

function Name() {
    const [name,setName]=useState<string>("");
    const [quantity,setQuantity]=useState<string>("");
    const [comment, setComment]=useState<String>("");
    const [payment, setPayment]=useState<string>("");

    function handelNameChange(e:React.ChangeEvent<HTMLInputElement>) {
        const target = e.target as HTMLInputElement;
        setName(target.value);
    }
    function handelQuantityChange(e:React.ChangeEvent<HTMLInputElement>) {
        const target =e.target as HTMLInputElement
        setQuantity(target.value)
    }
    function handelCommentChange(e:React.ChangeEvent<HTMLTextAreaElement>) {
        const target = e.target as HTMLTextAreaElement
        setComment(target.value as string)
    }
    function handelPaymentChange(e:React.ChangeEvent<HTMLSelectElement>) {
        const target = e.target as HTMLSelectElement
        setPayment(target.value as string)
    }



    return(
        <div>
            <input type="text" value={name} onChange={handelNameChange}/>
            <p>Name:{name}</p>
            <input type="number" value={quantity} onChange={handelQuantityChange}/>
            <p>Menge: {quantity}</p>
            <textarea value={comment as string} onChange={handelCommentChange}placeholder="Anweisungen zur Lieferung"></textarea>
            <p>Kommentar:{comment}</p>
            <select  onChange={handelPaymentChange}>
                <option value={""}  disabled hidden>wähle eine option</option>
                <option value={"VisaCard"}>Visa Card</option>
                <option value={"MasterCard"}>Mastercard</option>
                <option value={"PayPal"}>PayPal</option>
            </select>
            <p>Bezahl weise: {payment}</p>
        </div>
    )
    
}
export default Name;