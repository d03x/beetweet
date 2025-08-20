import { useEffect, useId, useState } from "react";


let listeners: (() => void)[] = []
let currentID: string | null = null;

let setCurrentId = (id: string | null) => {
    currentID = id;
    console.log(listeners);
    console.log(currentID);
    listeners.forEach(e => e())


}

const TestComponnets = () => {

    const [active, setActive] = useState(false);
    const id = useId()

    console.log(listeners);


    useEffect(() => {
        function setIsActive() {
            setActive(currentID === id);
        }
        listeners.push(setIsActive);
        return () => {
            listeners = listeners.filter((ev) => ev != setIsActive)
        }
    }, [active])

    function trigger() {
        setCurrentId(currentID === id ? null : id);
    }

    return <button onClick={trigger} className="bg-black block p-2 rounded-full mb-3 px-8 cursor-pointer text-red-500">Test Component {active ? "ACTIVE" : "Tidak"}</button>
}
export default TestComponnets;