import React from 'react';

const Dashboard = () => {
    const [stats, setStats] = React.useState(null);
    console.log("Hi")
    React.useEffect(() => {
        fetch("http://localhost:3000")
            .then((res) => res.json())
            .then((data) => setStats(data)
            ).catch(err => {
                console.log(err)
            });
    }, []);

    return (
        <div>
            {
                
            }
        </div>
    )
}

export default Dashboard;