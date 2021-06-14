import React, { Component } from 'react';
import items from '../data';

const PropertyContext = React.createContext();

export default class PropertyProvider extends Component {
    state ={
        initialData: items,
        sortedData:items,
        minBeds:'',
        maxBeds:'',
        minPrice:'',
        maxPrice:''
    };

    getProperty = slug =>{
        let tempProperty = [...this.state.initialData];
        const Property = tempProperty.find(property => property.id === slug);
        return Property;
    };

    handleChange = props =>{
        this.setState({
            ...props
        },this.filterProperty);
    };
    
    filterProperty =() =>{
        let{
            initialData, minPrice, maxPrice, minBeds, maxBeds
        } = this.state

        let tempProperty = [...initialData];

        if((minPrice !==  "") && (maxPrice !==  ""))
            {
            tempProperty = tempProperty.filter(house => house.price >= minPrice && 
                house.price <= maxPrice )
            }

        if((minPrice !==  "") && (maxPrice ===  ""))
            {
            tempProperty = tempProperty.filter(house =>  house.price >= minPrice )
            }

        if((minPrice ===  "") && (maxPrice !==  ""))
            {
            tempProperty = tempProperty.filter(house =>  house.price <= maxPrice )
            }

        // Price END ------------------------------

        if((minBeds !==  "") && (maxBeds !==  ""))
            {
            tempProperty = tempProperty.filter(house => house.Beds >= minBeds && 
                house.Beds <= maxBeds )
            }

        if((minBeds !==  "") && (maxBeds ===  ""))
            {
            tempProperty = tempProperty.filter(house =>  house.Beds >= minBeds )
            }

        if((minBeds ===  "") && (maxBeds !==  ""))
            {
            tempProperty = tempProperty.filter(house =>  house.Beds <= maxBeds )
            }
            // Beds END ------------------------------

        this.setState({
            sortedData: tempProperty
        })
    }
    render() {
        return (
            <PropertyContext.Provider value = {{...this.state, handleChange: this.handleChange, getProperty: this.getProperty, }} >
                {this.props.children}
            </PropertyContext.Provider>
        )
    }
}

const PropertyConsumer = PropertyContext.Consumer;

export { PropertyProvider, PropertyConsumer, PropertyContext }