
function Container({
  children,
  className = ""
}) {

  const containerClasses = [
    "mx-auto",
    "w-full",
    "max-w-7xl",
    "px-5",
    "sm:px-6",
    "lg:px-8",
    className
  ].filter(Boolean).join(" ");

  return (
    <div
    className={containerClasses}
    >
      {children}
    </div>
  )
}

export default Container;