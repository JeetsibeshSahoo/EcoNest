import { Link } from 'react-router-dom';

function Button({
    children,
    to,
    variant = "primary",
    className = "",
    onClick,
    disabled = false,
}) {

    const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#173F35] focus-visible:ring-offset-2";

    const variants = {
        primary:
        "bg-[#173F35] text-white hover:bg-[#0f3028]",
        secondary:
        "bg-[#8FAF9F] text-[#17201D] hover:bg-[#7f9f8f]",
        outline:
        "border border-[#173F35] text-[#173F35] hover:bg-[#173F35] hover:text-white",
        light:
        "bg-white text-[#173F35] hover:bg-[#F7F6F1]",
    }

    const selectedVariant = variants[variant] || variants.primary;

    const styles = `${baseStyles} ${selectedVariant} ${className}`

    if(to) {
        return (
            <Link 
            to={to} 
            className={styles}
            onClick={onClick}
            aria-disabled={disabled}
            >
                {children}
            </Link>
        )
    }

  return (
    <button 
    type='button' 
    className={`${styles} disabled:cursor-not-allowed disabled:opacity-50`}
    onClick={onClick}
    disabled={disabled}
    >
        {children}
    </button>
  )
}

export default Button
