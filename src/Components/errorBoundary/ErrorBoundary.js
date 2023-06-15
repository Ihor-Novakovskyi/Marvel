import ErrorMessage from "../errorMessage/ErrorMesage";
import { Component } from "react";
export default class ErrorBoundary extends Component {
    state = {
        error: false
    }
    componentDidCatch(err, info) {
        console.log(err, info)
        this.setState({error: true})
    }

    render() {
        return this.state.error === false ? this.props.children : <ErrorMessage/>
    }
}