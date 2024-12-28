import React from 'react'

const Button=() =>
{
        return (
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full border-2 border-blue-600 hover:bg-blue-700 hover:border-blue-700 transition my-4">
                        <span className="flex items-center justify-center w-6 h-6 bg-white text-blue-600 rounded-full">
                                →
                        </span>
                        <span>View more</span>
                </button>
        )
}

export default Button