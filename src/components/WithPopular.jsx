import New from './New';
import Popular from './Popular';
import PropTypes from 'prop-types';

function WithPopular(Components) {
    return function WithPopular(props) {
        
        if (props.views < 100) {
            return (
                <New>
                    <Components {...props} />
                </New>
            )
        }

        if (props.views > 1000) {
            return (
                <Popular>
                    <Components {...props} />
                </Popular>
            )   
        }

        return <Components {...props} />
    }
}

WithPopular.propTypes = {
    props: PropTypes.object
}

export default WithPopular