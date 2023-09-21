import React, { useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectionAction } from "../store";

import imgBlack from '../assets/Frame-1120.png'
import imgWhite from '../assets/Frame-1119.png'




const colorVariants = [{name:"white", image:imgWhite}, {name:"black", image:imgBlack}]
const sizeVariants = ["XS", "S", "M", "L", "XXL"]
const productData = {
    title: 'JONATHAN SIMKHA',
    shortDisc: 'Lurex Linen Viscose Jacket in Conchiglia',
    price: '$233'
}


export function ProductOptions() {

    const dispatch = useDispatch() 
    const selection = useSelector(state => state)
    const [searchParams, setSearchParams] = useSearchParams(); 



    useEffect(() => {

        // set color for first time load by taking initialize value from store
        if (searchParams.get("color") === null) {
            searchParams.set("color", selection.color);
            setSearchParams(searchParams);
        }

        // set color for size time load
        if (searchParams.get("size") === null) {
            searchParams.set("size", selection.size);
            setSearchParams(searchParams);
        }

        // dispatch on change of query param
        dispatch(selectionAction.setSelection({
            size: searchParams.get("size"),
            color: searchParams.get("color")
        }))

    }, [searchParams, setSearchParams,dispatch]);




    return (
        <div>
            <h2 className="text-3xl lg:text-5xl"> {productData.title}</h2>
            <div className="text-sm">{productData.shortDisc}</div>
            <strong className="mt-2">{productData.price}</strong>

            <div>
                <div className="mb-2"><strong>Color</strong> <span className="text-sm"> {searchParams.get("color")}</span> </div>
                <div>
                    {colorVariants.map((color, index) => (
                        <Link key={index}
                            to={{
                                search: `?color=${color.name}&size=${searchParams.get("size")}`,
                            }}
                            className={`inline-block border-2 ${searchParams.get("color") === color.name ? "border-black" : "border-white"}`}
                        >
                             <img src={color.image} alt="color slection" />
                        </Link>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex text-sm mb-2 mt-2"> <span className="flex-1">Size</span> <button className="underline "> Size Guide</button></div>
                {sizeVariants.map((size, index) => (
                    <Link 
                    key={index}
                    to={{
                        search: `?color=${searchParams.get("color")}&size=${size}`,
                    }}>
                        <Button size="sm" variant={`${searchParams.get("size") === size ? 'gradient' : 'outlined'}`} className="rounded-full mr-2 mb-2">
                            {size}
                        </Button>
                    </Link>
                ))}
            </div>

            <Button fullWidth className="rounded-full mt-2">Add to Bag </Button>

            <div className="mt-2 text-xs">
            Get 4 interest-free payments of $196.25 with Klarna LEARN MORE
            <span>Speak to a Personal Stylist CHAT NOW</span>
            </div>

        </div>
    );
}