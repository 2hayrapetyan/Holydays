import React, { Component } from "react";
import { Button, TextBlock, TextBlockP, TextBlockParent } from "../../Repeat";


export default class WorkText extends Component {
    render() {
        return(
            <TextBlockParent>
            <TextBlock>
                <h2 className="h22">How we work</h2>
                <TextBlockP style={{marginBottom:'35px'}}>We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</TextBlockP>
                <Button>Learn More</Button>
            </TextBlock>
            </TextBlockParent>
        )
    }
} 