export default function ShowData(){
  let data  = ['C' , 'C++' , 'Java' , 'AdvJava' , 'WPT']
    
    return <>
       Known Language : 
        {
            <select>
                {
                    data.map((value)=>{
                        return <option>{value}</option>
                    })
                }
            </select>
        }
        </>
    
}