import '../css/style3.css';


const Image = () => {
    const number = localStorage.getItem('test');
    return(
        <div className='image-page'>
            <img className='image-page-item' src={require('../images/plans/' + number + '(1).jpg')} />
        </div>
    )
}

export default Image;