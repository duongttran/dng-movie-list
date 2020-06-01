import React, {useState, useEffect}  from 'react'
import ReactModal from 'react-modal';

export default function Modal(props) {
    const [youtubeId, setYoutubeId] = useState("");

    const getVideo = async () => {
        if (!props.movieId) return;
        const apiKey = process.env.REACT_APP_APIKEY
        let url = `https://api.themoviedb.org/3/movie/${props.movieId}/videos?api_key=${apiKey}&language=en-US`
        let data = await fetch(url);
        let result = await data.json();
        
        setYoutubeId(result.results[0].key)
      }

    useEffect(() => {
        getVideo();
    }, [props.movieId])
    
    return (
        <ReactModal isOpen={props.modalOpen} >
      
        <button onClick={() => props.closeModal()}> Hide Modal </button>
        <div>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>{}</p>
        </div>
      </ReactModal>
    )
}
