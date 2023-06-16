import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'

const Files = () => {

    function Open() {
        const w = window.open('/image','_blank');
    }


    return (
        <section className="section">
            <div className="container">
                <div className="complex-detail__title">
                    Файлы
                </div>
                <div className="docs">
                    <div className='docs-item' onClick={Open}>
                        <FontAwesomeIcon icon={faFileLines} style={{color: "#8c8c8c"}} />
                        <div className='docsText'>Планировка</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Files;






















