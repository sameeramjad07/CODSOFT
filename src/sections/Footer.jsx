import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container' id='about-us'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img
              src={footerLogo}
              alt='logo'
              width={150}
              height={46}
              className='m-0 text-coral-red'
            />
          </a>
          <p className='mt-6 text-coral-red text-base leading-7 font-montserrat text-coral-red-400 sm:max-w-sm'>
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className='flex  text-coral-red items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div
                className='flex text-coral-red justify-center items-center w-12 h-12 bg-coral-red rounded-full'
                key={icon.alt}
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-coral-red'>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className='mt-3 font-montserrat text-base leading-normal text-coral-red-400 hover:text-slate-gray'
                    key={link.name}
                  >
                    <a className="text-coral-red" href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='flex justify-between text-coral-red-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={"https://res.cloudinary.com/ccbp-nxtwave/image/upload/v1697810337/WhatsApp_Image_2023-10-20_at_7.26.53_PM_chnqw0.jpg"}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p className="text-coral-red">Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer text-coral-red'>Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;