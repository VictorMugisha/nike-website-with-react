const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2 py-4 text-lg leading-none text-white border rounded-full border-coral-red px-7 font-montserrat bg-coral-red">
        { label }

        <img 
            src={ iconURL } 
            alt="icon" 
            className="w-5 h-5 ml-2 rounded-full"
        />
    </button>
  )
}

export default Button