import React from "react";
import { useState } from "react";
import { Images } from "../images";
import "./cards.css"

export const JobsSec = () => {
    const [jobs, setmobiles] = useState([
        {
            img:"https://images.olx.com.pk/thumbnails/493710217-800x600.webp",
            price:"15,999",
            description:"iPhone 11 Board XR XS Max 11 Pro Max 12 Max 13 Pro Max Availables",
            address:"Karachi, Pakitan",
            date:"2 days ago",
        },
        {
            img:"https://images.olx.com.pk/thumbnails/493695059-240x180.webp",
            price:"135,000",
            description:"iPhone 12 Pro Max 512GB FU",
            address:"Commercial Market, Rawalpindi",
            date:"2 weeks ago",
        },
        {
            img:"https://images.olx.com.pk/thumbnails/491075685-240x180.webp",
            price:"289,999",
            description:"iPhone 15 pro max LLA 256 GB",
            address:"Ballo Khaill Road, Mianwali",
            date:"1 month ago",
        },
        {
            img:"https://images.olx.com.pk/thumbnails/495482066-800x600.webp",
            price:"170,000",
            description:"Iphone 12 Pro 256GB PTA",
            address:"Main Boulevard Gulberg, Lahore",
            date:"2 hr ago",
        },
    ])
    return (
        <div className="card-sec">
            <div>
                <h2>
                   Jobs
                </h2>
            </div>
            <div className="cards-items">
                {
                    jobs.map((v, i)=> (
                        <div className="card">
                            <div>
                            <Images src={v.img} alt={v.description}/>
                            </div>
                            <div className="card-price-div"> 
                                <p>{"Rs "+v.price}</p>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                            <div className="card-descrip" >
                                <p>{v.description}</p>
                            </div>
                            <div className="card-address-date">
                                <p>{v.address}</p>
                                <p>{v.date}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}