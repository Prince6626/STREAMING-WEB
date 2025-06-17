const Button = ({name}) => {
    return (
        <div className="flex-shrink-0">
        <button className="whitespace-nowrap text-sm font-medium bg-gray-100 hover:bg-gray-200 px-4 py-1.5 rounded-full border border-gray-300 transition">
            {name}
        </button>
        </div>
  );
}

export default Button;