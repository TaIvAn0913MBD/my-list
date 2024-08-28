import { useSearchParams } from "next/navigation";

const sigma = () => {
  const searchParams = useSearchParams();
  const EMail = searchParams.get("email");
  const Message = searchParams.get("message");
  const OfficeNumber = searchParams.get("onumber");
  const ThePic3 = searchParams.get("Pic3");
  // return console.log(EMail), console.log(Message), console.log(OfficeNumber);
  return (
    <div className="TheContent">
      <div className="orange">Player Info</div>
      <div className="TheOut">
        <img src={ThePic3} className="pic1 outOf"></img>
        <div className="white outOf">EMail : {EMail}</div>
        <div className="white outOf">Message : {Message}</div>
        <div className="white outOf">OfficeNumber : {OfficeNumber}</div>
        <div className="white outOf">MobileNumber : {Message}</div>
      </div>
    </div>
  );
};
export default sigma;
