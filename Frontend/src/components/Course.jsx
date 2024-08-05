import React from 'react'
import Cards from "./Cards"
import list from "../../public/list.json"
import { Link } from "react-router-dom";
export default function Course() {
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="mt-28 item-center justify-center text-center">
                    <h1 className="text-2xl md:text-4xl">
                        We're delighted to have{" "}
                        <span className="text-pink-500">Here :)</span>
                    </h1>
                    <p className="mt-8 text-2xl">
                        We have a well-stocked bookstore offering a diverse range of books across various genres and subjects. Our collection includes fiction, non-fiction, academic, self-help, and more to cater to every reader's interest. Visit us to explore and find the perfect book for you.
                    </p>
                    <Link to="/">
                        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                            Back
                        </button>
                    </Link>
                </div>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-4">
                    {
                        list.map((item) => (
                            <Cards key={item.id} item={item} />
                        )
                        )


                    }
                </div>
            </div>
        </>
    )
}
