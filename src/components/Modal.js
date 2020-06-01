import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal';


export default function TrailerModal(props) {
    const [youtubeId, setYoutubeId] = useState("");
    const styleModal = {
            overlay: {
            zIndex: 2000
            }
                
    }
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
        <ReactModal isOpen={props.modalOpen} className="my-window" style={styleModal}>
             <i className="far fa-times-circle close-button fa-2x"></i>
            <div  className="video-container">
                <iframe className="responsive-iframe" width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <p>{}</p>
            </div>
           
            <button onClick={() => props.closeModal()}>Close</button>
        </ReactModal>

        // <Modal.Dialog isOpen={props.modalOpen}>
        //     <Modal.Header closeButton onClick={() => props.closeModal()}>
        //         <Modal.Title>Modal title</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //     <iframe width="560" height="315" src={`https://www.youtube.com/embed/${youtubeId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        //         <p>Modal body text goes here.</p>
        //     </Modal.Body>

        //     <Modal.Footer>
        //         <Button variant="secondary" onClick={() => props.closeModal()}>Close</Button>
              
        //     </Modal.Footer>
        // </Modal.Dialog>
    )
}
