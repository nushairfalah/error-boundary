import React from 'react';

class ErrorBoundary extends React.Component {
    state = { error: null, errorInfo: null };

    // Default error boundary
    componentDidCatch(error, errorInfo) {
        // Catch error in any component below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        // You can also log error message to an error reporting service here
    }


    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong</h2>
                    <details style={{ whitespace: 'pre-wrap', color: this.props.color }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }

}

export default ErrorBoundary;
