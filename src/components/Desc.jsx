const Desc = ({ desc }) => {
    return (
        <div className='bg-white mx-4 p-5 rounded-lg lg:mx-60'>
            {desc !== undefined ? (
                desc.map((item, i) => (
                    <p key={i} style={{ lineHeight: '1.8' }} className='text-justify text-base text-orange-600 font-bold mb-4'>	&nbsp;	&nbsp;	&nbsp;{item}</p>
                ))
            ) : ""}
        </div>
    )
}

export default Desc