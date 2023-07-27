import { useState, useRef } from "react";

export default function Hooks(){

    const [datas, setDatas] = useState([
        {
            nama: "carakka",
            date: 20
        }
    ])
    const inputName = useRef()
    const inputDate = useRef()

    const onSubmit = () => {
        const name = inputName.current.value;
        const tanggal = inputDate.current.value
        const data = {
            nama: name,
            date: tanggal
        }
        setDatas([...datas, {...data}])
    }

    const onHapus = (id) => {
        console.log(id);
        const data = [...datas]
        data.splice([id],1)
        setDatas(data)
    }
    console.log(datas);

    return(
        <div>
            {datas.map((item, id) => {
                return <h1 key={id}>{item.nama} : {item.date} <span><button onClick={()=> {onHapus(id)}}>HAPUS</button></span> </h1>
            })}
            <br />
            <input type="text" ref={inputName} /><br />
            <input type="date" ref={inputDate} /><br />
            <button onClick={onSubmit}>
                SUBMIT
            </button>
        </div>
    )
}