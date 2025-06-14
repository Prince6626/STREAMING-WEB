const commentsData = [
  {
    name: "Riya Sharma",
    text: "Wow, this was actually so well explained!",
    replies: [],
  },
  {
    name: "Amit Patel",
    text: "I didn’t expect to learn something new today, but here we are 😄",
    replies: [
      {
        name: "Sneha Mehta",
        text: "Same here! So glad I didn’t scroll past this.",
        replies: [],
      },
      {
        name: "Kunal Joshi",
        text: "Honestly, I’ve been looking for this kind of clarity for days.",
        replies: [
          {
            name: "Divya Nair",
            text: "Right? It’s rare to find content that’s simple AND informative.",
            replies: [
              {
                name: "Farhan Khan",
                text: "Yup! And the visuals made it even easier to grasp.",
                replies: [
                  {
                    name: "Neha Verma",
                    text: "This deserves way more views and likes!",
                    replies: [
                      {
                        name: "Raj Solanki",
                        text: "Agreed 💯 I’m definitely sharing this with my friends.",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Mehul Bhatt",
                    text: "The comment section is just as helpful as the video 😂",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Pooja Desai",
    text: "Can we get more videos like this? Subscribed instantly!",
    replies: [],
  },
  {
    name: "Tanishq Raval",
    text: "Is there a part 2 coming? I’d love to see a follow-up!",
    replies: [],
  },
  {
    name: "Ishita Rao",
    text: "Pure value 🔥 So glad this popped up on my feed!",
    replies: [],
  },
  {
    name: "Harshil Thakkar",
    text: "Please pin a summary or key points in the comments 🙏",
    replies: [],
  },
];



const Comment = ({data}) => {

    const {name, text, replies} = data;
    return(
        <div className="flex items-start gap-4 shadow-md bg-white p-4 rounded-xl my-4 w-full max-w-2xl transition hover:shadow-lg" ps>
            <img
                className="w-12 h-12 rounded-full border-2 border-gray-300"
                alt="user"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className="px-3">
                <p className="font-semibold text-gray-800">{name}</p>
                <p className="text-gray-600">{text}</p>
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index} >
        <Comment data={comment} />
        <div className="pl-6 ml-4 border-l-2 border-gray-300">
            <CommentsList comments={comment.replies} />
        </div>
    </div>
  ));
};


const CommentContainer = () => {
    return(
        <div className="m-8 p-6 bg-gray-50 rounded-xl shadow-inner">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Comments:</h1>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentContainer;