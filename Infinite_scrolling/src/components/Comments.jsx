
import CommentBox from "./CommentBox"

const Comments = () => {

    const data = [
        {
            username: "Bhola",
            image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
            comment: "Bhut accha hai bhai",
            replies: [
                {
                    username: "Vaibhv",
                    image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                    comment: "Bhut accha hai bhai",
                },
                {
                    username: "Yashraj",
                    image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                    comment: "Bhut accha hai bhai",
                    replies: [
                        {
                            username: "Anish",
                            image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                            comment: "Bhut bekar hai bhai",
                            replies: [
                                {
                                    username: "Anish",
                                    image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                                    comment: "Bhut bekar hai bhai",
                                }
                            ]
                        },
                        {
                            username: "Anish",
                            image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                            comment: "Bhut bekar hai bhai",
                            replies: [
                                {
                                    username: "Anish",
                                    image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                                    comment: "Bhut bekar hai bhai",
                                }
                            ]
                        }
                    ]
                },
                {
                    username: "Aniket",
                    image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                    comment: "Bhut accha hai bhai",
                    replies: [
                        {
                            username: "Anish",
                            image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                            comment: "Bhut bekar hai bhai",
                        }
                    ]
                }
            ]
        },
        {
            username: "Manish",
            image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
            comment: "Bhut accha hai bhai",
            replies: [
                {
                    username: "Vaibhv",
                    image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
                    comment: "Bhut accha hai bhai",
                },
                {
                    username: "Yashraj",
                    image: "https://static.vecteezy.com/system/resources/previews/024/521/082/original/cartoon-lion-transparent-background-png.png",
                    comment: "Bhut accha hai bhai",
                },
                {
                    username: "Aniket",
                    image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
                    comment: "Bhut accha hai bhai",
                    replies: [
                        {
                            username: "Anish",
                            image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
                            comment: "Bhut bekar hai bhai",
                        }
                    ]
                }
            ]
        },
        {
            username: "Chintu",
            image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
            comment: "Bhut accha hai bhai",
            replies: [
                {
                    username: "Vaibhv",
                    image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
                    comment: "Bhut accha hai bhai",
                },
                {
                    username: "Yashraj",
                    image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
                    comment: "Bhut accha hai bhai",
                },
                {
                    username: "Aniket",
                    image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
                    comment: "Bhut accha hai bhai",
                    replies: [
                        {
                            username: "Anish",
                            image: "https://png.pngtree.com/png-clipart/20230524/original/pngtree-lord-ganesha-hindu-god-vector-colorful-illustration-painting-png-image_9169460.png",
                            comment: "Bhut bekar hai bhai",
                        }
                    ]
                }
            ]
        }
    ]

  return (
    <div>
        <CommentBox data={data} />
    </div>
  )
}

export default Comments
