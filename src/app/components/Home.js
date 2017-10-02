import React from "react";

export class Home extends React.Component {
    render(){
        console.log(this.props);

        return(

            <div className="container">
                <p>This is Content</p>
            </div>
        );
    }

}