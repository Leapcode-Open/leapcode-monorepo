import React, { Component } from 'react'
import { API_URL, GET_TOKEN_HEADER } from '../../config/constants'
import Card from '../Card'
import SkeletonLoading from '../SkeletonLoading';
import PickIssueFeed from './FeedContainer/PickIssue';
import NewJoinFeed from './FeedContainer/NewJoinFeed';
import MergePRFeed from './FeedContainer/MergePRFeed';



const FeedController = ({feed}) => {
 
    if(feed.verb == 'pickupIssue')
        return <PickIssueFeed feed={feed} />

    if(feed.verb == 'registered')
        return <NewJoinFeed feed={feed} />

    if(feed.verb == 'mergedPR')
        return <MergePRFeed feed={feed} />


    return (<span></span>)

}

export default class FeedsList extends Component {

    state = {
        loading: true,
        feeds : []
    }

    async componentDidMount() {
        const url = `/feed`;

        let feed = await fetch(API_URL+url, {
            headers: await GET_TOKEN_HEADER()
        });

        if(feed.status != '200') {
            this.setState({
                feeds: [],
                loading: false,
                error: true
            })
        }

        feed = await feed.json();

        if(feed) {
            this.setState({
                feeds: feed,
                loading: false
            })
        }


    }
    render() {
        const { loading, feeds, error } = this.state;

        if(loading)
            return (
                <Card>
                    <SkeletonLoading mini />
                </Card>
            )

        if(error) 
                return <small>Fetching error</small>
        return (
            <div>
                {
                    feeds.filter(a => a.userInfo).map((feed) => {
                        return <FeedController key={feed.id} feed={feed} />
                    })
                }
            </div>
        )
    }
}
