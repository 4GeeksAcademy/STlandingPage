import React from "react"
export const Jumbotron = () => {
    return(
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container py-5">
                    <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                    <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero eveniet adipisci reiciendis atque voluptas necessitatibus doloremque neque sit similique? Officiis assumenda possimus suscipit similique, id alias inventore perspiciatis delectus maiores.</p>
                    <button className="btn btn-primary btn-lg" type="button">Call to action</button>
                </div>
             </div>
    );
}