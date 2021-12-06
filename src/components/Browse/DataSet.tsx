import '../components.css';
import React from 'react';
import { hitModel } from '../../dataModels/metadata';
import DataSetHeader from './DataSetHeader';
import DataSetDetails from './DataSetDetails';
import RequestAccess from './RequestAccess';

interface dataSetProps {
    dataset: hitModel;
    hasFocus: boolean;
};

const DataSet = (props: dataSetProps) => {

    // whether dataset has focus or not:
    const [hasFocus, setHasFocus] = React.useState<boolean>(false);

    return (
        <div 
            className="w3-panel w3-round-xlarge interactive-item"
        >
            <div onClick={() => setHasFocus(!hasFocus)}>
                <DataSetHeader dataset={props.dataset.content[0]}/>
            </div>
            {hasFocus && (
                <div>
                    <DataSetDetails datasetId={props.dataset.id} />
                    <RequestAccess datasetId={props.dataset.id} />
                </div>
            )}
        </div>
    )
};

export default DataSet;
