import React, { useState, useEffect } from 'react';
import userService from '../services/userService';

const UserComponent: React.FC = () => {
    const [name, setName] = useState('');
    const [names, setNames] = useState<string[]>([]);

    useEffect(() => {
        fetchNames();
    }, []);

    const fetchNames = () => {
        userService.fetchAllNames().then(response => {
            setNames(response.data.map((item: any) => item.name));
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name) {
            userService.insertUser(name).then(() => {
                setName('');
                fetchNames(); // Refresh the list after adding a name
            });
        }
    };

    return (
        <div>
            <h1>Insert Name</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter name"
                />
                <button type="submit">Add Name</button>
            </form>
            <h2>All Names</h2>
            <ul>
                {names.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
