import React, { useEffect, useState } from 'react';
import sampleService from '../services/sampleService';

const SampleComponent: React.FC = () => {
    const [samples, setSamples] = useState<any[]>([]);

    useEffect(() => {
        sampleService.getSamples().then((response) => {
            setSamples(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Sample List</h1>
            <ul>
                {samples.map((sample) => (
                    <li key={sample.id}>{sample.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SampleComponent;
