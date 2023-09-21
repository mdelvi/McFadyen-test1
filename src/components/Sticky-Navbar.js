import React from "react";
import {
  MobileNav,
  Navbar,
  Typography,
  IconButton
} from "@material-tailwind/react";



 
export function StickyNavbar(props) {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {props.navData.map( (data,index) => (
         <Typography
         key={index}
         as="li"
         variant="small"
         color="blue-gray"
         className="p-1 font-normal"
       >
         <a href={data.link} className="flex items-center">
           {data.label}
         </a>
       </Typography>
      ) )}
    </ul>
  );
 
  return (
    <div className="sticky top-0 z-[999] flex w-full items-center">
       <Navbar className="block px-8 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 text-white w-full max-w-full rounded-none border-b-[1.5px] !border-blue-gray-50 bg-white py-1.5 !pl-2 !pr-3 lg:!px-4 lg:!py-0.5">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <div className="text-black font-medium leading-7 mr-2 xl:mr-6">MY COMPANY.COM</div>
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="#000"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="#000"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
        </MobileNav>
      </Navbar>
    </div>
     
  );
}