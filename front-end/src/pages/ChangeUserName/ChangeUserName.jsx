import "./ChangeUserName.css"

const ChangeUserName = () => {
    return (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Edit user info</h1>
                <form>
                    <div className="input-wrapper">
                        <label htmlFor="username">User name</label>
                        <input type="text" id="username" />
                    </div>
                    <div className="input-wrapper not-allowed">
                        <label htmlFor="firstname">First name</label>
                        <input type="text" id="firstname" readOnly disabled />
                    </div>
                    <div className="input-wrapper not-allowed">
                        <label htmlFor="lastname">Last name</label>
                        <input type="text" id="lastname" readOnly disabled/>
                    </div>
                    <button className="save-button">Save</button>
                    <button className="cancel-button">Cancel</button>
                </form>
            </section>
        </main>
    )
}

export default ChangeUserName