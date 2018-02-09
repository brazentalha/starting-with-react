import React, { Component } from 'react';


class Method extends Component {
    MyFacebookLink(){
        return 'https://www.facebook.com/talha.xhafiq'
    }
    FacebookUser(){
        return 'Talha Shafique'
    }

    render() {
        return (
            <div>
                <p>
                    My Facebook Id is: <a href={this.MyFacebookLink()}><br></br>{this.FacebookUser()}</a>
                </p>
            </div>
        )
    }
}
export default Method;