import TheList from "@/compound/List";

const davtalt = () => {
  const mockData = [
    {
      ner: "Micheal Jordan",

      ajil: "Not GOAT",
      MobileNumber: 12345678,
      Mail: "JordanJackson@NotGOATMail.com",
      zurag:
        "https://media.newyorker.com/photos/590976b2ebe912338a377c86/master/w_2560%2Cc_limit/Crouch-Crying-Jordan-Meme.jpg",
      OfficeNumber: 99999999,
      SMSNumber: 99999999,
    },
    {
      ner: "LeBron James",
      ajil: "SUNSHINE KING",

      MobileNumber: 12345678,
      Mail: "LeKing@SunshineMail.com",
      zurag:
        "https://i1.sndcdn.com/artworks-a0LySuxVhHzNFIyY-eVaxhw-t500x500.jpg",
      OfficeNumber: 88888888,
      SMSNumber: 88888888,
    },
    {
      ner: "Kobe Bryant",
      ajil: "The GOAT",

      MobileNumber: 12345678,
      OfficeNumber: 77777777,
      Mail: "MambaBryant@GOATMail.com",
      SMSNumber: 77777777,
      zurag:
        "https://static01.nyt.com/images/2020/02/02/sports/02kobe-essay-lede/merlin_93708212_ff16a83c-391b-4b25-a4d5-77eaf0cbbb20-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    },
    {
      ner: "Steph Curry",
      ajil: "GOAT Shooter",

      MobileNumber: 12345678,
      OfficeNumber: 6666666,
      SMSNumber: 6666666,
      Mail: "ChefCurry@AmenMail.com",
      zurag: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png",
    },
    {
      ner: "James Harden",
      ajil: "Cooking with Fouls",

      OfficeNumber: 55555555,
      MobileNumber: 12345678,
      SMSNumber: 55555555,
      Mail: "MerchantHarden@FoulMail.com",
      zurag:
        "https://hips.hearstapps.com/hmg-prod/images/houston-rockets-guard-james-harden-signals-stirring-the-pot-news-photo-1698788222.jpg?resize=980:*",
    },
    {
      ner: "Kawhi Leonard",
      ajil: "Defensive Fun Guy",

      OfficeNumber: 44444444,
      MobileNumber: 12345678,
      SMSNumber: 44444444,
      Mail: "LockdownKawhi@FunGuyMail.com",
      zurag:
        "https://media.gq.com/photos/58adda8c4c4f4503e4a2347b/16:9/w_2560%2Cc_limit/kawhi-leonard-NBA_Portraits_lede.jpg",
    },
  ];
  return (
    <div className="gaduur">
      <div className="home">Home Page</div>

      <div className="outer">
        {mockData.map((data, index) => {
          return (
            <TheList
              SurName={data.ner}
              Job={data.ajil}
              key={index}
              Pic1={data.zurag}
              ONumber={data.OfficeNumber}
              MNumber={data.MobileNumber}
              Message={data.MobileNumber}
              EMail={data.Mail}
            />
          );
        })}
      </div>
    </div>
  );
};

export default davtalt;
