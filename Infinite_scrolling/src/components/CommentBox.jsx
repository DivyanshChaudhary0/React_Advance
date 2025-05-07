
const CommentBox = ({data}) => {
  return (
    <div className="w-full max-w-3xl mx-auto p-4">
  {data.map((comment, idx) => (
    <div
      className="pl-4 ml-2 border-l border-gray-300 relative"
      key={idx}
    >
      <div className="flex gap-3 items-start mb-4">
        {/* Profile Image */}
        <img
          className="w-8 h-8 rounded-full object-cover mt-1"
          src={comment.image}
          alt=""
        />
        
        {/* Comment Content */}
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-3 rounded-md shadow-sm w-full">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">{comment.username}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">{comment.comment}</p>
        </div>
      </div>

      {/* Recursive Replies */}
      {comment?.replies?.length > 0 && (
        <div className="ml-4">
          <CommentBox data={comment.replies} />
        </div>
      )}
    </div>
  ))}
</div>


  )
}

export default CommentBox
