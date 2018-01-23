import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchListRequest } from '../../actions';

class ReviewList extends PureComponent {

    componentWillMount() {
        if (this.props.reviews.length === 0) {
            this.props.fetchListRequest();
        }
    };

    renderRow(review) {
        return (
            <tr key={`reviewlist-row-${review.id}`}>
                <td>{review.firstname}</td>
                <td>{review.lastname}</td>
                <td>{review.description}</td>
                <td>{review.note}</td>
            </tr>
        )
    }

    render() {
        const {
            reviews,
            isLoading,
        } = this.props;

        return (
            <div className="login">

                <Link to='/reviews/create' className='btn btn-primary'>Add review</Link>

                <table className="table table-bordered">
                    <tbody>
                        {reviews.map(this.renderRow)}
                    </tbody>
                </table>

                {isLoading && (
                    <p>Loading...</p>
                )}
            </div>
        );
    }
}

const mapStateToProps = ({ auth, reviews }) => ({
    isLoading: reviews.list.isLoading,
    reviews: reviews.list.reviews,
});

export default connect(mapStateToProps, { fetchListRequest })(ReviewList);
