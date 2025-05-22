
const Accordian = ({data}) => {
  return (
    <div className="accordian">
        {
            data.map((val) => {
                return (
                    <div>
                        <button className="acc-btn">{val.title}</button>
                        <p>{val.content}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Accordian