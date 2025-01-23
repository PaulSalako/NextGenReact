import profilePic from './assets/PaulPass.jpg'


function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="profile picture" />
            <h2 className='card-title'>Paul Salako</h2>
            <p className='card-desc'>I make website and play CODM</p>
        </div>
    );
}

export default Card