import React, { Component } from 'react'

export default class SubscriptionPage extends Component {
    render() {
        return (
            <div className="modal fade" id="getStarted" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="responsive">
                                <iframe width="560" height="315" src="https://mailchi.mp/4000178dd583/415bdhjwzk" frameborder="0" title="SubsciptionLink"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
