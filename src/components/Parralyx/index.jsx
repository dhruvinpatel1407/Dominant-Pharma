import React from "react";
import { Parallax } from "react-parallax";

const Container = ({ text }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage="../../../public/aboutimg.jpg" // Static image
            bgImageAlt="background image"
            strength={-200}
            className="w-full h-full"
        >
            <div className="relative w-full h-full">
                {/* Left overlay with text */}
                <div
                    className="absolute left-0 top-0 w-1/2 h-full bg-white"
                    style={{
                        opacity: 0.5, // Fixed opacity
                    }}
                >
                    <div className="flex items-center justify-center h-full text-black p-4">
                        {/* Dynamic Text */}
                        <p>{text || "Default text"}</p>
                    </div>
                </div>
                {/* Parallax content area */}
                <div style={{ height: "400px" }} />
            </div>
        </Parallax>
    );
};

export default Container;
