import React from "react";


const footerData = {
    footerLabel: "A note from the editor",
    footerBody: "The Forte Lurex Linen Viscose Jacket in Mother of Pearl features lunar lavishness by night and by day: a blazer in a linen blend shot with lurex for a shimmering surface that shines like a star in the sky."
}


export function AppFooter() {
    return (
        <footer className="relative z-50 bg-white px-8 pt-12 pb-6 text-center" >
            <div className="container mx-auto">
                <div className="text-sm ">{footerData.footerLabel}</div>
                <div className="lg:leading-10 lg:text-xl">{footerData.footerBody} </div>
            </div>
        </footer>
    );
}