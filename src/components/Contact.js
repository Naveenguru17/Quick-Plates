


const Contact=()=>{
    return(
        <div>
            <h1 className="p-4 font-medium">This is a contact page</h1>
            <form>
                <input 
                type="text"
                placeholder="name"
                >

                </input>
                <input
                type="text"
                placeholder="message"
                >

                </input>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;