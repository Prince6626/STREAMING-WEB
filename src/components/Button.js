const Button = ({name}) => {
    return (
        <div className="m-2 ">
        <button className="cursor-pointer text-[14px] bg-gray-200 border py-1 px-3 font-bold rounded-lg outline-0">
            {name}
        </button>
        </div>
  );
}

export default Button;