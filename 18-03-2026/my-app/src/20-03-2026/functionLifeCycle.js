import { useEffect, useState } from "react"

export default function FunctionLifeCycle() {

    // mounting
    let [data, setData] = useState();

    //componentDidMount replace 
    useEffect(() => {
        console.log("Componet is mounted!!");
    }, []);

    // componentWillUpdate and getSnapshotBefore update
    useEffect(() => {
        console.log("Component is updated");
    }, [data]);

    // componentWillUnmount
    useEffect(() => {
        return () => {
           alert( "Component is unmounted!!");
        }
    }, []);


    // updating
    // unmounting

    // in classcomponet
    //constructor 
    //  componentDidMount
    // 
    // getSnapshopBeforeUpdate
    // componentwillUpdate
    // compontwillUnmount
    useEffect(() => {
        console.log("component is mounted!!");
    });

    return <>
        <h1>Hello</h1>
    </>
}