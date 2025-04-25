import logo from "../../assets/logo.png";
import fbLogo from "../../assets/contact/facebook.png";
import lineLogo from "../../assets/contact/line.png";
import telLogo from "../../assets/contact/tel.png";

const listTitle = ["หน้าหลัก","รสชาติไอศกรีม", "สินค้าทั้งหมด", "ติดต่อเรา"];
const listContact = [{
  title: "Facebook",
  icon: fbLogo,
  link: "https://www.facebook.com/profile.php?id=100057478269796",
},
{
  title: "Line",
  icon: lineLogo,
  link: "https://lin.ee/WMiVX2r",
},
{
  title: "Tel",
  icon: telLogo,
  link: "tel:0863836984",
}]

function Nav() {
  return (
    <div>
      <nav className="bg-white/80 shadow-md fixed top-0 z-10 w-full">
          <div className="flex justify-center items-center">
          <a href="">
            <img src={logo} alt="Logo" className="h-20 w-24 mr-10 mb-1" />
            </a>
            <ul className="flex font-bold mt-0 space-x-8 text-lg text-#262626">
              {listTitle.map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:bg-gray-400/50 px-8 py-3 rounded-md"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex space-x-3 ml-10">
            {listContact.map((item, index) => (
              <li key={index}>
              <a href={item.link}>
              <img src={item.icon} alt={item.title} className="h-10 w-10" />
              </a>
              </li>
            ))}
            
            </ul>
          </div>
      </nav>
    </div>
  );
}

export default Nav;
