
function SectionTitle({
    eyebrow,
    title,
    description,
    align = "left",
    as : Heading = "h2",
    className = "",
}) {

    const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <span className='text-sm font-semibold uppercase tracking-[0.2em] text-[#173F35]'>
            {eyebrow}
        </span>
      )}

      <Heading className='font-serif text-4xl leading-tight text-[#17201D] sm:text-5xl'>
        {title}
      </Heading>

      {description && (
        <p className='text-base leading-7 text-gray-600 sm:text-lg'>
            {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
