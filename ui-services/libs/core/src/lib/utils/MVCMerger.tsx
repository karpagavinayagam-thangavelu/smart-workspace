import React from "react";


export function withMVC<Model, Props>(
    ViewerComponent: React.FC<Model>, 
    controllerHook: (props: Props) => Model
) {
    
    return (props: Props):JSX.Element => {
        const viewerProps = controllerHook(props);
        return <ViewerComponent key={1} {...viewerProps} />;
    }
}