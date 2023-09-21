import React, { useState } from "react";

const tabsContent = [
    {
        name: 'DETAILS',
        content: 'The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.'


    },
    {
        name: 'DELIVERY',
        content: 'Tt has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly finished with three jet pockets with a sartorial feel.'
    },
    {
        name: 'FIT',
        content: 'Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky. it has a straight fit with well defined shoulders and a shawl collar culminating in a button and has been flawlessly'
    },
]


export function ProductTabs() {

    const [tabSelection, SetTabSelection] = useState(0) // set default tab as first tab

    // change active tab based on user selection
    const handleChangeTab = (tabIndex) => {
        SetTabSelection(tabIndex)
    }

    return (
        <>
            {tabsContent.map((data, index) => (
                <button className={`mr-2 text-sm ${tabSelection === index ? 'text-black font-bold' : 'text-slate-500'}`} key={index} onClick={() => { handleChangeTab(index) }}>{data.name}</button>
            ))}
            <div className="mt-2">{tabsContent[tabSelection].content}</div>
            <div>
                <div className="mt-4 mb-4">See the <button className="underline">EDITOR’S NOTE</button></div>

                <div className="mt-2">Learn about the DESIGNER</div>
            </div>
        </>
    );

}