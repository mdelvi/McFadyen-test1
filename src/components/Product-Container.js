import React from 'react';
import { Carousel } from "@material-tailwind/react";
import { useSelector } from 'react-redux';

import { ProductTabs } from "./product-tabs";
import { ProductOptions } from "./Product-options"

import image1 from "../assets/Frame-1112.png"
import image2 from "../assets/Frame-1116.png"
import image3 from "../assets/Frame-1117.png"
import image4 from "../assets/Frame-1126.png"


/**
 * Image Black for back colr selection white for white color selection 
 * 
 */
const images = {"white": [{src: image1,alt: 'image 1'},{src: image2,alt: 'image 2'},{src: image3,alt: 'image 3'},{src: image4,alt: 'image 3'}],
                "black": [{src: image4,alt: 'image 1'},{src: image1,alt: 'image 2'},{src: image2,alt: 'image 3'},{src: image3,alt: 'image 3'}]}




export function ProductContainer() {

    const selection = useSelector(state => state) // get the selected color and size


    // Image list based on selcted color
    // used same image list in both mobile in descktop view
    const imgList = images[selection.color].map((obj, i) =>
        <img src={obj.src} className='lg:mb-2 mx-auto' alt={obj.alt} key={i} />
    );



    return (
        <div className='px-6'>
            <div className='container mx-auto lg:flex'>
               
               {/* product preview: Carousel for Mobile view only hidding for desktop*/}
                <Carousel
                    className="lg:hidden"
                    loop="true"
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                            {new Array(length).fill("").map((_, i) => (
                                <span
                                    key={i}
                                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-black" : "w-4 bg-gray"
                                        }`}
                                    onClick={() => setActiveIndex(i)}
                                />
                            ))}
                        </div>
                    )}
                >
                    {imgList}
                </Carousel>



                <aside className='hidden lg:block lg:sticky lg:top-14 lg:ml-auto lg:h-screen lg:w-64 lg:pt-6'>
                    <div className='h-screen lg:w-64 pb-40'>
                        <ProductTabs></ProductTabs>
                    </div>
                </aside>

                {/* product preview: for desktop view */}
                <div className='mt-6 w-full lg:w-[60%] lg:px-6 hidden lg:block'>
                    <div className="mx-auto max-w-screen-md pb-12">
                        <div>
                            {imgList}
                        </div>
                    </div>
                </div>


                
                <aside className='lg:sticky lg:top-14 lg:ml-auto lg:h-screen lg:w-64 pt-6'>
                    <div className='h-screen lg:w-64 pb-40'>
                        <ProductOptions></ProductOptions>
                    </div>
                </aside>

            </div>
        </div>








    )
}





