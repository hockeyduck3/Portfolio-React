import React from 'react';

function Container({ fluid, children, min }) {
    return <div className={`container${fluid ? "-fluid" : ""}`} style={min ? {minHeight: '620px'} : {minHeight: '0px'}}>{children}</div>;
}

export default Container;