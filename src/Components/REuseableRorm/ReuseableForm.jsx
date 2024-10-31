import PropTypes from 'prop-types'
const ReuseableForm = ({formTitle, handleSubmit, submitBtnText = 'Submit'}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data={
            name:e.target.name.value,
            email:e.target.email.value,
            passwork: e.target.passwork.value
        }
        handleSubmit(data);
    }
    return (
        <div>

<h2>{formTitle}</h2>

    <form onSubmit = {handleLocalSubmit}>
                <input type="text" name="name"/>
                <br/>
                <input type="email" name="email"/>
                <br/>
                <input type="password" name="password" />
                <br/>
                <input type="submit" value={submitBtnText}/>
            </form>
        </div>
    );
};

ReuseableForm.propTypes={
    formTitle: PropTypes.string,
    submitBtnText: PropTypes.string,
    handleSubmit: PropTypes.func,
}
export default ReuseableForm;