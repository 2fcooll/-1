import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadingItems } from '../actions/items';
import Table from '../components/Table';

class App extends Component {
    componentDidMount() {
        this.props.loadingItems('http://localhost:3000/users');
    }

    render() {
        const { isLoading, items } = this.props;

        return (
            <>
                { isLoading ? <span>...Loading</span> : <Table items={ items } /> } 
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.itemsAreLoading,
        hasError: state.itemsLoadingError,
        items: state.itemsLoadedSuccessfully
    };
}

export default connect(mapStateToProps, { loadingItems })(App);