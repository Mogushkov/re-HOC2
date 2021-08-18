import Article from './Article';
import Video from './Video';
import WithPopular from './WithPopular';
import PropTypes from 'prop-types';

const WithLightVideo = WithPopular(Video);
const WithLightArticle = WithPopular(Article);

function List(props) {
    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                return (
                    <WithLightVideo key={index} {...item} />
                );

            case 'article':
                return (
                    <WithLightArticle key={index} {...item} />
                );

            default:
                return null
        }
    });
};

List.propTypes = {
    props: PropTypes.array
}

export default List