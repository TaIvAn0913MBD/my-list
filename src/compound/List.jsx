import Link from "next/link";

const TheList = (props) =>{
    let TheName = props.SurName;
    let TheJob = props.Job;
    let ThePic = props.Pic1;
    let TheEmail=props.EMail;
    let TheMessage=props.Message;
    let OfNumber= props.ONumber;
    let MoNumber=props.MNumbers;
    
    return(<div className="container">
        <img src={ThePic} className="pic"></img>
        <div><h1 className="Imya">{TheName}</h1>
        <h3 className="jobs">{TheJob}</h3></div>
        <Link href={`/info?email=${TheEmail}&message=${TheMessage}&onumber=${OfNumber}&Pic3=${ThePic}`}> <h3 className="jobs">MORE</h3></Link>
       
        </div>
    
    )
}
export default TheList;