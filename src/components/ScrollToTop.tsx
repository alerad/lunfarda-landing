import {Component} from "react"
import {withRouter} from "react-router-dom";


type MyProps = {
    children: any | undefined,
    location: any | undefined
}

class ScrollToTop extends Component<MyProps> {

    componentDidUpdate(prevProps: any) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }

    render() {
        return this.props.children
    }
}

// @ts-ignore
export default withRouter(ScrollToTop)