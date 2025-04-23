"use client"
import React from 'react'

const page = () => {
    return (
        <main className="bg-purple-50 min-h-screen py-12 px-6 text-gray-800">
            <div className="max-w-2xl mx-auto space-y-6 text-center">
                <h1 className="text-4xl font-extrabold text-purple-700">Contact Us</h1>
                <p className="text-lg">
                    We'd love to hear from you! Whether you have questions, suggestions, or just want to say hello — feel free to drop us a message.
                </p>

                <form
                    onSubmit={async (e) => {
                        e.preventDefault();
                        const res = await fetch('/api/contact', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                name: e.target.name.value,
                                email: e.target.email.value,
                                message: e.target.message.value,
                            }),
                        });

                        const data = await res.json();
                        alert(data.message);
                        e.target.reset();
                    }}
                    className="space-y-4 text-left bg-white p-8 rounded-xl shadow-md"
                >
                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            type="text"
                            name="name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            type="email"
                            name="email"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            name="message"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-400 cursor-pointer"
                    >
                        Send Message
                    </button>
                </form>

                <p className="text-sm text-gray-600">
                    You can also email us directly at{" "}
                    <a href="mailto:support@bytelinks.io" className="text-purple-600 underline">
                        support@bytelinks.io
                    </a>
                </p>
            </div>
        </main>
    )
}

export default page
