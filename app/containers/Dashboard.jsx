import React from 'react';
import { Link } from 'react-router';

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const dashbaordLink = (linkString) => (
    <Link to={linkString}>View More</Link>
)

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to the React Learning Kit</h1>
            <p>Here you can find examples and demonstrations to highlight many features of React and the React ecosystem.</p>

            <p>These include the following:</p>
            <ul>
                <li>React component lifecycle management and how it impacts your component - {dashbaordLink('/component/lifecycle')}</li>
                <li>Managing properties and data in your components - {dashbaordLink('/component/structure')}</li>
                <li>Higher Order Components (HOC's) - {dashbaordLink('/component/hoc')}</li>
                <li>Loading Data into your component from external resources - {dashbaordLink('/component/data-management')}</li>
                {/* 
                <li>Routing for a Single Page Application - {dashbaordLink('/application/routing')}</li>
                <li>Application State Management (Redux) - {dashbaordLink('/application/redux')}</li>
                <li>Isomorphic Applications (Server Side Rendering) - {dashbaordLink('/application/isomorphic')}</li>
                */}
                
            </ul>
        </div>
    );
};

export default Dashboard;
