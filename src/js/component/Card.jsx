import React from "react"
export const Card = () => {
    return(
            <div className="col-sm-3">
                <div className="card">
                    <img src="https://cdn.pixabay.com/photo/2020/11/16/18/19/crocodile-5749911_640.jpg" className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">A little Crocodile</h5>
                        <p className="card-text">With a icecream, its the best. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error optio, laboriosam quos obcaecati excepturi eveniet in iusto nulla repudiandae assumenda nostrum reprehenderit temporibus culpa! Eos ex non nulla tempore iure.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>  
       
    );
    }