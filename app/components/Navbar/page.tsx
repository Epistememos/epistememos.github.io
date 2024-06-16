"use client"; 
import { useState, useEffect } from "react";


export default function Navbar() {
	
    return (
    <div>
            <div className="flex-col bg-[url('/assets/img-desert.png')] bg-cover bg-center h-[440px] w-full ">
            <div className="w-full h-full bg-slate-900 bg-opacity-30">
                <div className="flex py-8 mx-16 h-max justify-between text-white text-lg  ">
                    <h1 className="text-4xl ">YOUDAS YESSAD</h1>
                    <div className="flex divide-x text-right ">
                        <div className="p-2 rounded-l-md hover:bg-slate-900 hover:bg-opacity-15">ABOUT</div>
                        <div className="p-2 hover:bg-slate-900 hover:bg-opacity-15">MEDIA</div>
                        <div className="p-2 hover:bg-slate-900 hover:bg-opacity-15">INVOLVEMENT</div>
                        <div className="p-2 hover:bg-slate-900 hover:bg-opacity-15">PROJECTS</div>
                        <div className="p-2 hover:bg-slate-900 hover:bg-opacity-15">ACHIEVEMENTS</div>
                        <div className="p-2 rounded-r-md hover:bg-slate-900 hover:bg-opacity-15">FLYING</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
