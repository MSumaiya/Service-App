import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchServiceById } from '../actions'
import Spinner from '../components/Spinner'
//import Modal from '../components/Modal'
import OfferModal from '../components/service/OfferModal'
//import selectedService from '../reducers/selectedService'

const ServiceDetail = props => {

const { serviceId } = useParams()
const { fetchServiceById, isFetching } = props

useEffect(() => {
    fetchServiceById(serviceId)
}, [serviceId, fetchServiceById])


const { service, auth } = props

if (isFetching || serviceId !== service.id) { return <Spinner /> }

return (
    <section className="hero is-fullheight is-default is-bold">
    <div className="hero-body">
        <div className="container has-text-centered">
        <div className="columns is-vcentered">
            <div className="column is-5">
            <figure className="image is-4by3">
                <img src={service.image} alt="Description" />
            </figure>
            </div>
            <div className="column is-6 is-offset-1">
            <h1 className="title is-2">
                {service.title}
            </h1>
            <h2 className="subtitle is-4">
                {service.description}
            </h2>
            <br />
            <div className="has-text-centered">
                <OfferModal 
                auth={auth}
                service={service}/>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
)
}

const mapStateToProps = ({selectedService, auth}) => (
{
    service: selectedService.item,
    isFetching: selectedService.isFetching,
    auth
}
)

export default connect(mapStateToProps, {fetchServiceById})(ServiceDetail)