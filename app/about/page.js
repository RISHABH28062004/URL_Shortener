import React from 'react'
import Link from 'next/link'

const about = () => {
  return (
    <main className="bg-purple-50 min-h-screen py-12 px-6 text-center text-gray-800">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-extrabold text-purple-700">About Us</h1>
        <p className="text-lg">
          Welcome to <strong>ByteLinks</strong> — the most user-friendly URL shortening service built to make your online sharing simpler, faster, and more elegant.
        </p>
        <p>
          Our platform was created with simplicity in mind. Whether you're a developer, content creator, or just someone who wants to clean up long links — ByteLinks lets you generate short, custom URLs in seconds.
        </p>
        <p>
          We don’t believe in clutter. That’s why we offer a straightforward interface and a completely free experience. No logins, no ads, no tracking — just paste, shorten, and go.
        </p>
        <p>
          ByteLinks is an open-source project. Want to contribute or see how it works under the hood? Check out our{" "}
          <Link href="/github" className="text-purple-600 underline hover:text-purple-800">
            GitHub
          </Link>{" "}
          page!
        </p>
        <div className="mt-8">
          <Link href="/shorten">
            <button className="bg-purple-500 shadow-md px-6 py-3 text-white rounded-xl font-bold hover:bg-purple-400 cursor-pointer">
              Try It Now
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default about
