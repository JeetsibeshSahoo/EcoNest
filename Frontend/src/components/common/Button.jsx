import React from 'react'
import { Link } from 'react-router-dom';

function Button({
    children,
    to,
    variant = "primary",
    className = ""
}) {

    const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200";

    const variants = {
        primary:
        "bg-[#173F35] text-white hover:bg-[#0f3028]",
        secondary:
        "bg-[#8FAF9F] text-[#17201D] hover:bg-[#7f9f8f]",
        outline:
        "border border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-white",
    }

    const styles = `${baseStyles} ${variants[variant]} ${className}`

    if(to) {
        return (
            <Link to={to} className={styles}>
                {children}
            </Link>
        )
    }

  return (
    <button type='button' className={styles}>
        {children}
    </button>
  )
}

export default Button
