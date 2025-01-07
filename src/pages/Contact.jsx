import React from "react";

function Contact() {
    return (
        <div className="bg-[#28282b] text-white p-8">
            <div className="container mx-auto">
                <h2 className="text-3xl text-red-600 font-bold text-center mb-8">Contact Us</h2>

                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1 bg-[#242424] p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-red-600 mb-4">Send Us a Message</h3>
                        <form>
                            <div className="mb-4">
                                <label className="text-sm mb-2" htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 rounded bg-[#282828] text-white focus:outline-none"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm mb-2" htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    className="w-full p-2 rounded bg-[#282828] text-white focus:outline-none"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-sm mb-2" htmlFor="message">Your Message</label>
                                <textarea
                                    className="w-full p-2 rounded bg-[#282828] text-white focus:outline-none"
                                    placeholder="Write your message here"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="flex-1 bg-[#242424] p-6 rounded-lg shadow-md">
                        <h3 className="text-xl text-red-600 mb-4">Find Us Here!</h3>
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed/v1/place?q=2+St.+James's+Market,+London,+SW1Y+4AH,+GB&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            style={{ height: "400px", width: "100%", border: "0" }}
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
