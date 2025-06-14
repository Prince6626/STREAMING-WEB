

const ChatMessage = ({name, message}) => {
    return(
        <div className="flex items-center shadow-sm p-2">
            <img
                className="h-8 w-8 rounded-full hover:scale-105 transition-transform duration-200"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />

            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    )
}

export default ChatMessage;