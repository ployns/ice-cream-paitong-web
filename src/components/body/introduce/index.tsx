import intro1 from "../../../assets/intro/intro1.jpg";
import intro2 from "../../../assets/intro/intro2.jpg";    
import intro3 from "../../../assets/intro/intro3.jpg";


const image = [
  {
    src: intro1,
    alt: "Intro 1",
  },
  {
    src: intro2,
    alt: "Intro 2",
  },
  {
    src: intro3,
    alt: "Intro 3",
  },
];

function Intro() {
return (
    <div>
        <div className="flex justify-center items-center">
            {image.map((item, idx) => (
                <span className="mx-8" key={item.alt + idx}>
                    <img
                        src={item.src}
                        alt={item.alt}
                        className="w-[380px] h-[260px] object-cover object-center rounded-xl"
                    />
                </span>
            ))}
        </div>
        <div className="flex justify-center items-center mt-10">
            รับจัดเลี้ยงตามสถานที่ต่างๆ มีหลายรูปแบบให้เลือก ทั้งแบบถัง ถ้วยสำเร็จรูป และแบบกล่อง
        </div>
    </div>
);
}

export default Intro;