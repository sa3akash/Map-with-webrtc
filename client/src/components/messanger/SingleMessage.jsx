
// eslint-disable-next-line react/prop-types
const SingleMessage = ({own,content}) => {
  return (
    <div className="chatbox_message_wrapper" style={own ? {justifyContent:"flex-end"}:{justifyContent:"flex-start"}}>
    {
        own ? (
            <p className="chatbox_message_right">{content}</p>
        ) : (
            <p className="chatbox_message_left">{content}</p>
        )
    }
    </div>
  )
}

export default SingleMessage