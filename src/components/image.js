import '../css/style3.css';


const Image = () => {
    const number = localStorage.getItem('test');
    return(
        <div className='image-page'>
            <img src={require('../images/plans/' + number + '(1).jpg')} />
        </div>
    )
}

export default Image;